/**
 * Vercel Serverless Function - Status Network Notebook Agent
 */

import { GoogleGenAI } from "@google/genai";
import { ethers } from "ethers";

// Status Network Sepolia configuration
const STATUS_NETWORK = {
    chainId: 1660990954,
    rpc: "https://public.sepolia.rpc.status.network",
    contractAddress: process.env.CONTRACT_ADDRESS
};

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message required' });
    }

    try {
        // Use LLM to decide intent
        const decisionPrompt = `User: "${message}"

Analyze the user's intent and respond with one word:
- STORE: if the user wants to save/remember/store any information (numbers, text, facts, preferences, etc.) - this includes "remember X", "save X", "note X", or just sharing any data they want kept
- RETRIEVE: if the user wants to see what was stored before - "what did I save", "show notes", "get all", "list notes", "find info"
- CHAT: ONLY if the message is pure casual conversation NOT related to storing or retrieving (greetings, small talk)

Reply with exactly one word: STORE, RETRIEVE, or CHAT`;

        const decision = await ai.models.generateContent({
            model: "gemma-3-27b-it",
            contents: decisionPrompt
        });

        const intent = decision.text.trim().toUpperCase();
        console.log("Detected intent:", intent, "for message:", message);

        // Connect to Status Network
        const provider = new ethers.JsonRpcProvider(STATUS_NETWORK.rpc);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        
        const contractABI = [
            "function store(string memory _text) external",
            "function getAllEntries() external view returns (tuple(string text, address author, uint256 timestamp)[])",
            "function getCount() external view returns (uint256)"
        ];
        
        const contract = new ethers.Contract(STATUS_NETWORK.contractAddress, contractABI, wallet);

        if (intent.includes("STORE")) {
            // Store to contract (gasless)
            console.log("💾 Storing...");
            
            const tx = await contract.store(message, {
                maxFeePerGas: 0,
                maxPriorityFeePerGas: 0
            });
            await tx.wait();
            
            // Get count
            const count = await contract.getCount();
            
            // LLM response
            const explorerUrl = `https://sepoliascan.status.network/tx/${tx.hash}`;
            const responsePrompt = `User said: "${message}"

You stored this on Status Network blockchain (gasless!).
Link: ${explorerUrl}
Total notes: ${count}

Give a natural, brief response.`;

            const response = await ai.models.generateContent({
                model: "gemma-3-27b-it",
                contents: responsePrompt
            });

            return res.json({
                response: response.text,
                txHash: tx.hash,
                type: "store"
            });
            
        } else if (intent.includes("RETRIEVE")) {
            // Fetch from contract
            console.log("🔍 Retrieving...");
            
            const entries = await contract.getAllEntries();
            
            let context = entries.length === 0 ? "No notes stored." : 
                entries.map((e, i) => `${i + 1}. ${e.text}`).join('\n');
            
            const retrievePrompt = `User asked: "${message}"

Stored notes:
${context}

Provide a helpful answer about the stored notes.`;

            const response = await ai.models.generateContent({
                model: "gemma-3-27b-it",
                contents: retrievePrompt
            });

            return res.json({
                response: response.text,
                type: "retrieve",
                notesCount: entries.length,
                notes: entries.map(e => e.text)
            });
            
        } else {
            // CHAT - just respond
            const chatPrompt = `User: "${message}"

Respond naturally as a helpful AI notebook assistant.`;

            const response = await ai.models.generateContent({
                model: "gemma-3-27b-it",
                contents: chatPrompt
            });

            return res.json({
                response: response.text,
                type: "chat"
            });
        }

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
}

export default handler;
