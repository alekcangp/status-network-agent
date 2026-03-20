import hre from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("=== Testing Gasless Transaction on Status Network ===\n");
  
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const privateKey = process.env.PRIVATE_KEY;
  
  if (!contractAddress || !privateKey) {
    console.error("Missing CONTRACT_ADDRESS or PRIVATE_KEY in .env");
    process.exit(1);
  }
  
  // Get the contract
  const StatusNotebook = await hre.ethers.getContractFactory("StatusNotebook");
  const contract = StatusNotebook.attach(contractAddress);
  
  // Create a signer
  const wallet = new hre.ethers.Wallet(privateKey, hre.ethers.provider);
  
  console.log("Wallet:", wallet.address);
  console.log("Contract:", contractAddress);
  
  // Get balance before
  const balanceBefore = await hre.ethers.provider.getBalance(wallet.address);
  console.log("Balance before:", hre.ethers.formatEther(balanceBefore), "ETH\n");
  
  // Store a test entry with gasless transaction (EIP-1559 with 0 fees)
  console.log("Sending gasless transaction (maxFeePerGas=0, maxPriorityFeePerGas=0)...");
  const tx = await contract.store("Testing gasless transaction on Status Network!", {
    maxFeePerGas: 0,
    maxPriorityFeePerGas: 0
  });
  
  console.log("Transaction sent:", tx.hash);
  
  const receipt = await tx.wait();
  console.log("Transaction confirmed!");
  console.log("Gas used:", receipt.gasUsed?.toString());
  console.log("Status:", receipt.status === 1 ? "SUCCESS" : "FAILED");
  console.log("Effective gas price:", receipt.gasPrice?.toString());
  
  // Get balance after
  const balanceAfter = await hre.ethers.provider.getBalance(wallet.address);
  console.log("\nBalance after:", hre.ethers.formatEther(balanceAfter), "ETH");
  console.log("ETH spent:", hre.ethers.formatEther(balanceBefore - balanceAfter));
  
  // Get entry count
  const count = await contract.getCount();
  console.log("\nEntry count:", count.toString());
  
  // Get latest entry
  const latest = await contract.getLatest();
  console.log("Latest entry:", latest.text);
  
  console.log("\n=== Gasless Transaction Test Complete! ===");
  console.log("Explorer:", `https://sepoliascan.status.network/tx/${tx.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
