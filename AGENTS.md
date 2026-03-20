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

**Smart Contract:**
- Address: 0x4F22d77a85b094245A6535a01f0ad024Bdaa117e
- Functions: `store(text)`, `getAllEntries()`, `getCount()`, `getLatest()`

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

## Standards Compliance

### ERC-8004: Onchain Agent Identity
This agent aligns with ERC-8004 (onchain agent identity registry), which was deployed in January 2026 across 20+ chains. The agent operates as an autonomous onchain entity with permanent identity.

### x402: HTTP Payments
The system demonstrates machine-to-machine commerce capabilities compatible with x402 payment protocol for future payment integration.

### EIP-7702: Account Abstraction
While not currently implemented, the architecture supports EIP-7702 which gives EOAs smart contract superpowers without migration.

## Files

- `contracts/StatusNotebook.sol` - Smart contract
- `api/agent.js` - Vercel serverless API
- `public/index.html` - Terminal-style UI
- `scripts/gasless-tx.js` - Gasless transaction demo
- `README.md` - Project documentation
- `synthesis_submission_skill.md` - Hackathon submission guide
- `ethskills.md` - Ethereum development knowledge

## Skills Used

This agent was built with the following skills loaded:

- **ethskills/standards** - ERC standards knowledge (ERC-8004, x402)
- **ethskills/gas** - Understanding gas costs and L2 economics
- **ethskills/wallets** - Wallet creation and key safety
- **synthesis.md** - Hackathon API and registration
- **cropsdesign_skill.md** - User-centered design thinking

## Tools Used

- Hardhat - Smart contract development
- Vercel - Deployment and serverless functions
- Google GenAI (Gemma-3-27b-it) - LLM for intent detection
- viem - Ethereum RPC interactions
- Status Network - Gasless blockchain transactions
