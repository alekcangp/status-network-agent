# Status Network Gasless AI Agent

An AI agent-powered project that deploys a smart contract and executes gasless transactions on Status Network (via Linea Sepolia testnet). Built for The Synthesis hackathon.

## ⚠️ Network Migration Update

**Status Network has migrated to the Linea stack.** This project uses Linea Sepolia testnet as the current equivalent for development and testing.

- **Current Testnet**: Linea Sepolia (chain ID: 59141) - ACTIVE for development
- **Status Network Mainnet**: Migrated to Linea Mainnet (chain ID: 59144)
- **Previous Testnet**: Status Network Hoodi (chain ID: 374) - DEPRECATED

See [Status Network migration announcement](https://status.network/blog/status-network-merges-with-linea-scaling-gasless-privacy-upstream) for details.

## 📋 Deployment Information

### Wallet Address
`0x80044C7fd7Def21e02aaDb2DE0504c6D4D8D6109`

### Contract Address (Linea Sepolia)
`0xF0A68346750c50F98fD2C46Eb3852Ff21E4129C9`

### Transaction Explorer
View all transactions on: https://sepolia.lineascan.build

### Environment Variables (.env)
```
PRIVATE_KEY=replace-with-your-private-key
CONTRACT_ADDRESS=0xF0A68346750c50F98fD2C46Eb3852Ff21E4129C9
GEMINI_API_KEY=your-google-genai-api-key-here
```

## Transaction Proof

*Deploy to Linea Sepolia testnet to generate transaction proofs.*

## Live Demo

- **Web UI**: https://s-nu-umber.vercel.app
- **API Endpoint**: https://s-nu-umber.vercel.app/api/agent

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- A wallet with Linea Sepolia ETH (for gas fees)
  - **Faucet**: https://www.hackquest.io/faucets/59141

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

### Run Transaction Test
```bash
npx hardhat run scripts/gasless-tx.js --network lineaSepolia
```

### Deploy Contract
```bash
npx hardhat run scripts/deploy.js --network lineaSepolia
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
├── hardhat.config.js             # Hardhat configuration for Linea Sepolia
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
4. **Gasless Concept**: Demonstrates how gasless transactions work on Status Network (requires sufficient Karma balance)

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

### Linea Sepolia Testnet (Status Network Equivalent)
- **RPC**: https://rpc.sepolia.linea.build
- **Chain ID**: 59141 (0xe705)
- **Explorer**: https://sepolia.lineascan.build

### Gasless Transactions on Status Network
Status Network supports protocol-level gasless transactions where gas is set to 0 at the protocol level:
- No gas fees for transactions with sufficient Karma balance
- Transactions are still secured by the network
- Requires users to earn Karma through network participation (staking, bridging, etc.)

### ERC-8004: Onchain Agent Identity
This project aligns with ERC-8004 (onchain agent identity registry), deployed January 2026 on 20+ chains. The AI agent operates as an autonomous entity onchain.

## Resources

- [Synthesis Hackathon](https://synthesis.devfolio.co/)
- [Synthesis Builder Guide](https://devfolio.notion.site/Synthesis-Builder-Guide-32156997768d810bbb8ef8967439efa0)
- [Linea Documentation](https://docs.linea.build/)
- [Crops Design Skills](https://www.cropsdesign.com/SKILL.md)
- [Ethereum Skills](https://ethskills.com/SKILL.md)
- [Submission Guide](https://synthesis.devfolio.co/submission/skill.md)

## License

MIT
