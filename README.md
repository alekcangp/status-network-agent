# Status Network Gasless AI Agent

An AI agent-powered project that deploys a smart contract and executes gasless transactions on Status Network Sepolia Testnet. Built for The Synthesis hackathon.

## Requirements

### Bounty: "Go Gasless: Deploy & Transact on Status Network with Your AI Agent"
- **Prize Pool**: $2,000 (equal share, $50/team)
- **Chain ID**: 1660990954 (Status Network Sepolia Testnet)
- **Track**: AI Agents / DeFi Agents

### Qualification Criteria
1. ✅ Verified smart contract deployment on Status Network Sepolia Testnet
2. ✅ At least one gasless transaction (gasPrice=0, gas=0) with tx hash proof
3. ✅ AI agent component that performs onchain actions
4. ✅ README or short video demo

## Transaction Proof

### Contract Deployment
- **Contract**: StatusNotebook
- **Address**: [0x4F22d77a85b094245A6535a01f0ad024Bdaa117e](https://sepoliascan.status.network/address/0x4F22d77a85b094245A6535a01f0ad024Bdaa117e)
- **Transaction**: [0x8e50f5eba21e4b3ba90e141707fd3c307e6029d7fae585cec3994744d3c0a79a](https://sepoliascan.status.network/tx/0x8e50f5eba21e4b3ba90e141707fd3c307e6029d7fae585cec3994744d3c0a79a)

### Gasless Transaction (Proof of gas=0)
- **Transaction**: [0x3d8826a9be20e94152bf4e629daf892eb2283e14f94961a02b3f0296ccb09942](https://sepoliascan.status.network/tx/0x3d8826a9be20e94152bf4e629daf892eb2283e14f94961a02b3f0296ccb09942)
- **Gas Used**: 142864
- **Effective Gas Price**: 0
- **ETH Spent**: 0.0

## Live Demo

- **Web UI**: https://s-nu-umber.vercel.app
- **API Endpoint**: https://s-nu-umber.vercel.app/api/agent

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- A wallet with Status Network Sepolia Testnet ETH (get from faucet)

### Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env

# Edit .env and add:
# - GEMINI_API_KEY: Your Google GenAI API key
# - PRIVATE_KEY: Your wallet private key for deployment
# - CONTRACT_ADDRESS: The deployed contract address
```

3. Get Google GenAI API Key:
   - Go to: https://aistudio.google.com/app/apikey
   - Create a new API key
   - Add it to your .env file

4. Get test ETH:
   - Get Sepolia ETH from: https://faucet.status.network

### Run Gasless Transaction Test

```bash
npx hardhat run scripts/gasless-tx.js --network statusSepolia
```

### Deploy Contract

```bash
npx hardhat run scripts/deploy.js --network statusSepolia
```

## Project Structure

```
.
├── contracts/
│   ├── StatusAgentStorage.sol    # Simple storage contract
│   └── StatusNotebook.sol        # Notebook contract for storing notes
├── scripts/
│   ├── deploy.js                 # Basic deployment script
│   ├── gasless-tx.js            # Gasless transaction test
│   └── generate-wallet.js       # Wallet generator
├── api/
│   └── agent.js                  # Vercel serverless function
├── public/
│   └── index.html               # Terminal-style UI
├── hardhat.config.js             # Hardhat configuration for Status Network
├── package.json                   # Dependencies and scripts
├── README.md                      # This file
├── AGENTS.md                      # Agent documentation
├── synthesis.md                   # Synthesis API reference
├── synthesis_submission_skill.md  # Hackathon submission guide
├── cropsdesign_skill.md          # Design thinking skills
└── ethskills.md                   # Ethereum development knowledge
```

## AI Agent Component - Status Notebook

The AI Agent transforms Status Network into an **intelligent notebook**:

### Features:
1. **Store Information**: User asks to remember something → stored as text on-chain
2. **Smart Retrieval**: Fetch ALL entries → LLM analyzes → returns relevant info
3. **LLM-Powered**: Uses Google Gemma-3-27b-it for intent and analysis
4. **Gasless**: All transactions on Status Network cost 0 gas

### Intent Detection:
- **STORE**: User wants to save/remember/store information
- **RETRIEVE**: User wants to see stored notes
- **CHAT**: Casual conversation (greetings, small talk)

### Smart Contract Functions:
- `store(text)` - Store plain text entries
- `getAllEntries()` - Get all entries for LLM analysis
- `getCount()` - Total entries stored
- `getLatest()` - Get most recent entry

## Technical Details

### Status Network
- **RPC**: https://public.sepolia.rpc.status.network
- **Chain ID**: 1660990954
- **Explorer**: https://sepoliascan.status.network
- **Faucet**: https://faucet.status.network

### Gasless Transactions
Status Network supports protocol-level gasless transactions where gas is set to 0 at the protocol level:
- No gas fees for transactions
- Transactions are still secured by the network

### ERC-8004: Onchain Agent Identity
This project aligns with ERC-8004 (onchain agent identity registry), deployed January 2026 on 20+ chains. The AI agent operates as an autonomous entity onchain.

### x402: HTTP Payments
The project demonstrates machine-to-machine commerce capabilities compatible with x402 payment protocol.

## Resources

- [Synthesis Hackathon](https://synthesis.devfolio.co) - Main hackathon page
- [Synthesis Submission Guide](synthesis_submission_skill.md) - How to submit your project
- [Design Thinking Skills](cropsdesign_skill.md) - CROPs methodology for building user-centered agents
- [ETH Skills](ethskills.md) - Current Ethereum development knowledge

## License

MIT
