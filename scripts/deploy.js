import hre from "hardhat";

async function main() {
  console.log("Deploying StatusNotebook to Status Network Sepolia...");
  
  // Get the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  
  // Check balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", hre.ethers.formatEther(balance), "ETH");
  
  // Deploy the StatusNotebook contract
  const StatusNotebook = await hre.ethers.getContractFactory("StatusNotebook");
  const contract = await StatusNotebook.deploy();
  
  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();
  
  console.log("Contract deployed to:", contractAddress);
  console.log("Transaction hash:", contract.deploymentTransaction().hash);
  
  // Verify the deployment
  const entryCount = await contract.getCount();
  console.log("Initial entry count:", entryCount.toString());
  
  console.log("\n=== Deployment Summary ===");
  console.log("Network:", hre.network.name);
  console.log("Chain ID:", hre.network.config.chainId);
  console.log("Contract Address:", contractAddress);
  console.log("Deployer Address:", deployer.address);
  console.log("Deployment Tx:", contract.deploymentTransaction().hash);
  console.log("\nSave this contract address to .env:");
  console.log(`CONTRACT_ADDRESS=${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
