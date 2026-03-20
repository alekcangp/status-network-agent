# Status Network Gasless AI Agent

## Agent Overview

This is an AI agent system that enables gasless transactions on Status Network Sepolia Testnet. The agent can store and retrieve text notes on-chain using LLM-powered natural language understanding.

Built for The Synthesis hackathon with ERC-8004 onchain agent identity compatibility.

## Capabilities

### Core Features
1. **Smart Contract Deployment**: Deploys StatusNotebook contract to Status Network
2. **Gasless Transactions**: Executes transactions with zero gas fees using maxFeePerGas=0
3. **Natural Language Interface**: Understands user intent via LLM (Google Gemma-3-27b-it)
4. **On-chain Storage**: Stores text entries permanently on blockchain
5. **LLM Intent Detection**: Automatically decides between STORE, RETRIEVE, or CHAT

### Commands / Skills

**Store Note:**
- "Remember [text]", "Save [text]", "Note [text]", "store [text]"
- Agent stores the text on-chain using gasless transaction

**Retrieve Notes:**
- "Show all notes", "What did I save?", "Get all notes", "List notes"
- Agent fetches all entries and uses LLM to find relevant information

**Chat:**
- Casual conversation (greetings, small talk)
- When message is not about storing or retrieving

### Technical Details

**Network:**
- Status Network Sepolia Testnet
- Chain ID: 1660990954
- RPC: https://public.sepolia.rpc.status.network
- Explorer: https://sepoliascan.status.network
- Faucet: https://faucet.status.network
- Bridge: https://bridge.status.network/

**Smart Contract:**
- Address: 0x4F22d77a85b094245A6535a01f0ad024Bdaa117e
- Explorer: https://sepoliascan.status.network/address/0x4F22d77a85b094245A6535a01f0ad024Bdaa117e
- Functions: `store(text)`, `getAllEntries()`, `getCount()`, `getLatest()`, `getEntry(index)`, `getInfo()`

**AI Model:**
- Google Gemma-3-27b-it
- Used for intent detection (STORE/RETRIEVE/CHAT) and intelligent retrieval

## Live Demo

- **Web UI**: https://s-nu-umber.vercel.app
- **API Endpoint**: https://s-nu-umber.vercel.app/api/agent

## Transaction Proofs

- **Contract Deployment**: 0x8e50f5eba21e4b3ba90e141707fd3c307e6029d7fae585cec3994744d3c0a79a
- **Gasless TX**: 0x3d8826a9be20e94152bf4e629daf892eb2283e14f94961a02b3f0296ccb09942
  - Gas Used: 142864
  - Effective Gas Price: 0
  - ETH Spent: 0.0

## Hackathon Registration

### The Synthesis Hackathon
- **Project URL**: https://synthesis.devfolio.co/projects/f767d23dad1b443e9dae51adacd43529
- **Track**: Go Gasless: Deploy & Transact on Status Network with Your AI Agent
- **Status**: Published

### ERC-8004 Identity
- **Participant ID**: ee5bf9a65ce84f5eb0677c9f3c007418
- **Team ID**: 7c84f7d3a5e84cd68a1d58e0ae49ad60
- **Registration TX**: https://basescan.org/tx/0x0c0d93d8d8bc52cc6f94657049e9dc212716e3a9bfece869c549d46655e568bc

### Self-Custody
- **Wallet Address**: 0x80044C7fd7Def21e02aaDb2DE0504c6D4D8D6109
- **Transfer TX**: https://basescan.org/tx/0xcf829e301e76587664968b93c794172866814b8a4200719a2400254eea2180ac

## Standards Compliance

### ERC-8004: Onchain Agent Identity
This agent aligns with ERC-8004 (onchain agent identity registry), which was deployed in January 2026 across 20+ chains. The agent operates as an autonomous onchain entity with permanent identity.

## Files

- `contracts/StatusNotebook.sol` - Smart contract
- `api/agent.js` - Vercel serverless API
- `public/index.html` - Terminal-style UI
- `scripts/gasless-tx.js` - Gasless transaction demo
- `scripts/deploy.js` - Deployment script for smartcontract
- `scripts/generate-wallet.js` - Wallet generator
- `AGENTS.md` - Agent documentation
- `synthesis.md` - Hackathon API reference
- `synthesis_submission_skill.md` - Project submission guide
- `ethskills.md` - Ethereum development knowledge
- `cropsdesign_skill.md` - Design thinking skills
- `conversationLog.txt` - Project conversation history ai agent & operator

## Skills Used

This agent was built with the following skills loaded:

- https://synthesis.md/skill.md - Hackathon API and registration
- https://www.cropsdesign.com/SKILL.md - User-centered design thinking
- https://ethskills.com/SKILL.md - Ethereum development knowledge
- https://synthesis.devfolio.co/submission/skill.md - Project submission guide

## Tools Used

- Hardhat - Smart contract development
- Vercel - Deployment and serverless functions
- Google GenAI (Gemma-3-27b-it) - LLM for intent detection
- viem - Ethereum RPC interactions
- Status Network - Gasless blockchain transactions
