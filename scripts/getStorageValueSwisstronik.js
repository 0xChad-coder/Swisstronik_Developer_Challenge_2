require('dotenv').config();
const hre = require("hardhat");
const { ethers } = hre;
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

async function main() {
  // Deployed smart contract address on the Swisstronik Network
  const contractAddress = "0x822a99f74dA3DC896FbB70B3EAECfd9FE939Be69";

  const provider = new ethers.providers.JsonRpcProvider("https://json-rpc.testnet.swisstronik.com/");

  // const wallet = new ethers.Wallet("private_key", provider); // Replace with your actual private key

  const slot = "0x0"; // Slot #0 for the state variable
  const storageData = await provider.send("eth_getStorageAt", [contractAddress, slot, "latest"]);

  console.log("Value in slot #0:", storageData);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
