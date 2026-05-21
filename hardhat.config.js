import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.19",
  networks: {
    // Linea Sepolia Testnet (Status Network migrated to Linea)
    lineaSepolia: {
      url: "https://rpc.sepolia.linea.build",
      chainId: 59141, // 0xe705
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    // Local node for testing
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  etherscan: {
    apiKey: {
      // Linea Sepolia uses Blockscout explorer
      lineaSepolia: "abc",
    },
    customChains: [
      {
        network: "lineaSepolia",
        chainId: 59141,
        urls: {
          apiURL: "https://sepolia.lineascan.build/api",
          browserURL: "https://sepolia.lineascan.build",
        },
      },
    ],
  },
};
