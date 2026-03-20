const { ethers } = require("ethers");

// Generate random wallet
const wallet = ethers.Wallet.createRandom();

console.log("Generated Wallet:");
console.log("=================");
console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
console.log("");
console.log("Save these safely!");
console.log("Add to .env file:");
console.log(`PRIVATE_KEY=${wallet.privateKey}`);
