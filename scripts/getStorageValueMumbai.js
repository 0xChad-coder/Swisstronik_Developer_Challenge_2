require('dotenv').config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  // Deployed smart contract address on the Mumbai Network
  const contractAddress = "0x822a99f74dA3DC896FbB70B3EAECfd9FE939Be69";

  const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet.public.blastapi.io");

  // const wallet = new ethers.Wallet("private_key", provider); // Replace with your actual private key

  const slot = "0x0"; // Slot #0 for the state variable
  const storageData = await provider.send("eth_getStorageAt", [contractAddress, slot, "latest"]);

  console.log("Value in slot #0:", storageData);

  const stringValue = ethers.utils.toUtf8String(storageData);
  console.log("Decoded Value in slot #0:", stringValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
