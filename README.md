# Status Network Gasless AI Agent

An AI agent-powered project that deploys a smart contract and executes gasless transactions on Status Network Hoodi Testnet. Built for The Synthesis hackathon.

## ⚠️ Network Migration

**Status Network Sepolia Testnet has been deprecated.** This project has been migrated to the new **Hoodi Testnet** (chain ID: 374).

- **Old Network**: Sepolia (chain ID: 1660990954) - DEPRECATED by end of April 2026
- **New Network**: Hoodi (chain ID: 374) - ACTIVE

See [migration guide](https://status-im.notion.site/status-network-sepolia-testnet-deprecation-notice) for details.

## Requirements

### Qualification Criteria
1. ✅ Verified smart contract deployment on Status Network Hoodi Testnet
2. ✅ At least one gasless transaction (maxFeePerGas=0, maxPriorityFeePerGas=0) with tx hash proof
3. ✅ AI agent component that performs onchain actions
4. ✅ README or short video demo

## Transaction Proof

*Deploy to Hoodi testnet to generate new transaction proofs.*

## Live Demo

- **Web UI**: https://s-nu-umber.vercel.app
- **API Endpoint**: https://s-nu-umber.vercel.app/api/agent

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- A wallet with Status Network Hoodi Testnet ETH
  - **Faucet**: https://eth.faucet.status.network
  - **Bridge**: https://bridge.status.network/

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

### Run Gasless Transaction Test

```bash
npx hardhat run scripts/gasless-tx.js --network statusHoodi
```

### Deploy Contract

```bash
npx hardhat run scripts/deploy.js --network statusHoodi
```

## Project Structure

```
.
├── contracts/
│   └── StatusNotebook.sol        # Notebook contract for storing notes
├── scripts/
│   ├── deploy.js                 # Contract deployment script
│   ├── gasless-tx.js            # Gasless transaction test
│   └── generate-wallet.js       # Wallet generator
├── api/
│   └── agent.js                  # Vercel serverless AI agent API
├── public/
│   └── index.html               # Terminal-style web UI
├── hardhat.config.js             # Hardhat configuration for Status Network
├── package.json                   # Dependencies and scripts
├── vercel.json                    # Vercel deployment config
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore patterns
├── README.md                      # This file
├── AGENTS.md                      # Agent documentation
├── synthesis.md                   # Synthesis API reference
├── synthesis_submission_skill.md  # Hackathon submission guide
├── cropsdesign_skill.md          # Design thinking skills
├── ethskills.md                   # Ethereum development knowledge
├── conversationLog.txt            # Project conversation history
└── submission.json                # Hackathon project submission
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
- `getEntry(index)` - Get specific entry
- `getInfo()` - Get contract info

## Technical Details

### Status Network Hoodi Testnet
- **RPC**: https://public.hoodi.rpc.status.network
- **Chain ID**: 374
- **Explorer**: https://hoodiscan.status.network

### Gasless Transactions
Status Network supports protocol-level gasless transactions where gas is set to 0 at the protocol level:
- No gas fees for transactions
- Transactions are still secured by the network

### ERC-8004: Onchain Agent Identity
This project aligns with ERC-8004 (onchain agent identity registry), deployed January 2026 on 20+ chains. The AI agent operates as an autonomous entity onchain.

## Resources

- [Synthesis Hackathon](https://synthesis.devfolio.co/)
- [Synthesis Builder Guide](https://devfolio.notion.site/Synthesis-Builder-Guide-32156997768d810bbb8ef8967439efa0)
- [Status Network Quick Start](https://docs.status.network/overview/introduction/quick-start)
- [Crops Design Skills](https://www.cropsdesign.com/SKILL.md)
- [Ethereum Skills](https://ethskills.com/SKILL.md)
- [Submission Guide](https://synthesis.devfolio.co/submission/skill.md)

## License

MIT
