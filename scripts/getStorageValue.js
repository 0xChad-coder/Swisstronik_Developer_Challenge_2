require('dotenv').config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x822a99f74dA3DC896FbB70B3EAECfd9FE939Be69"; // Replace with the actual contract address

  const providerSwisstronik = new ethers.providers.JsonRpcProvider("https://json-rpc.testnet.swisstronik.com/");
  const providerMumbai = new ethers.providers.JsonRpcProvider("https://polygon-testnet.public.blastapi.io");

  const valueSwisstronik = await providerSwisstronik.send("eth_getStorageAt", [
    contractAddress,
    "0x0", // Slot #0 for the state variable
    "latest",
  ]);

  const valueMumbai = await providerMumbai.send("eth_getStorageAt", [
    contractAddress,
    "0x0", // Slot #0 for the state variable
    "latest",
  ]);

  console.log("Value in slot #0 on Swisstronik Network:", valueSwisstronik);
  console.log("Value in slot #0 on Mumbai Network:", valueMumbai);

  // const stringValueSwisstronik = ethers.utils.toUtf8String(valueSwisstronik);
  const stringValueMumbai = ethers.utils.toUtf8String(valueMumbai);

  // console.log("String Value on Swisstronik Network:", stringValueSwisstronik);
  console.log("String Value on Mumbai Network:", stringValueMumbai);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
