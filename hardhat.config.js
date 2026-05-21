import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.19",
  networks: {
    // Status Network Hoodi Testnet
    statusHoodi: {
      url: "https://public.hoodi.rpc.status.network",
      chainId: 374,
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
      statusHoodi: "abc",
    },
    customChains: [
      {
        network: "statusHoodi",
        chainId: 374,
        urls: {
          apiURL: "https://hoodiscan.status.network/api",
          browserURL: "https://hoodiscan.status.network",
        },
      },
    ],
  },
};
