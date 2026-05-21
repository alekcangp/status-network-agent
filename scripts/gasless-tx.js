import hre from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("=== Demonstrating Gasless Transaction Concept ===\n");
   
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
   
  // Show what a gasless transaction would look like (Status Network specific)
  console.log("=== Gasless Transaction Concept ===");
  console.log("On Status Network (based on Linea), gasless transactions work via:");
  console.log("- Setting maxFeePerGas = 0");
  console.log("- Setting maxPriorityFeePerGas = 0"); 
  console.log("- Requires sufficient Karma balance for fee sponsorship");
  console.log("- Transactions execute with 0 gas fees for eligible users\n");
   
  // Prepare the transaction data to show what would be sent
  const txData = await contract.store.populateTransaction("Demonstrating gasless concept!", {
    maxFeePerGas: 0,
    maxPriorityFeePerGas: 0
  });
   
  console.log("Transaction that would be sent on Status Network:");
  console.log("- To:", txData.to);
  console.log("- Value: 0 ETH");
  console.log("- Max fee per gas: 0 wei (gasless!)");
  console.log("- Max priority fee per gas: 0 wei (gasless!)");
  console.log("- Data length:", txData.data.length, "bytes\n");
   
  // For demonstration, let's also show a regular transaction
  console.log("=== Regular Transaction (for comparison) ===");
  const regularTx = await contract.store.populateTransaction("Regular transaction example", {
    maxFeePerGas: hre.ethers.parseUnits("1", "gwei"),
    maxPriorityFeePerGas: hre.ethers.parseUnits("1", "gwei")
  });
   
  console.log("Regular transaction parameters:");
  console.log("- Max fee per gas: 1 gwei");
  console.log("- Max priority fee per gas: 1 gwei\n");
   
  // Actually execute a regular transaction to show it works
  console.log("Executing regular transaction on Linea Sepolia...");
  const tx = await contract.store("Actual transaction on Linea Sepolia", {
    maxFeePerGas: hre.ethers.parseUnits("1", "gwei"),
    maxPriorityFeePerGas: hre.ethers.parseUnits("1", "gwei")
  });
   
  console.log("Transaction sent:", tx.hash);
   
  const receipt = await tx.wait();
  console.log("Transaction confirmed!");
  console.log("Gas used:", receipt.gasUsed?.toString());
  console.log("Status:", receipt.status === 1 ? "SUCCESS" : "FAILED");
   
  // Get balance after
  const balanceAfter = await hre.ethers.provider.getBalance(wallet.address);
  console.log("\nBalance after:", hre.ethers.formatEther(balanceAfter), "ETH");
  console.log("ETH spent:", hre.ethers.formatEther(balanceBefore - balanceAfter));
   
  // Get entry count
  const count = await contract.getCount();
  console.log("\nEntry count:", count.toString());
   
  // Get latest entries
  if (count >= 2) {
    const latest = await contract.getLatest();
    console.log("Latest entry:", latest.text);
    
    // Get the first entry (our concept demonstration)
    const firstEntry = await contract.getEntry(0);
    console.log("First entry (gasless concept):", firstEntry.text);
  }
   
  console.log("\n=== Summary ===");
  console.log("✅ Contract deployed to Linea Sepolia (Status Network equivalent)");
  console.log("✅ Transaction executed successfully");
  console.log("✅ Gasless transaction concept demonstrated");
  console.log("✅ On actual Status Network, users with sufficient Karma can execute");
  console.log("   transactions with maxFeePerGas=0 and maxPriorityFeePerGas=0");
  console.log("🔗 Explorer:", `https://sepolia.lineascan.build/tx/${tx.hash}`);
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });