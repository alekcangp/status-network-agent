import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.19",
  networks: {
    // Status Network Sepolia Testnet
    statusSepolia: {
      url: "https://public.sepolia.rpc.status.network",
      chainId: 1660990954,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    // Local node for testing
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  etherscan: {
    apiKey: {
      // Status Network uses Blockscout - no API key needed
      statusSepolia: "abc",
    },
    customChains: [
      {
        network: "statusSepolia",
        chainId: 1660990954,
        urls: {
          apiURL: "https://sepoliascan.status.network/api",
          browserURL: "https://sepoliascan.status.network",
        },
      },
    ],
  },
};
