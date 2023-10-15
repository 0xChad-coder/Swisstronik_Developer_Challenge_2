# Smart Contract Deployment and Storage Retrieval

This repository demonstrates the deployment of a Solidity smart contract with a private state variable to two different networks Mumbai and Swisstronik using the Hardhat framework. It also includes a script to access the value of the state variable using the `eth_getStorageAt()` RPC method.

## 💪 Deployed Contract Addresses (Swisstronik Testnet)
PriavteStateVariable Contract: [0x822a99f74dA3DC896FbB70B3EAECfd9FE939Be69](https://explorer-evm.testnet.swisstronik.com/address/0x822a99f74dA3DC896FbB70B3EAECfd9FE939Be69)

## 💪 Deployed Contract Addresses (Polygon Mumbai Testnet)
PriavteStateVariable Contract: [0x5BEdcDE6B1047B46b6f815c63faa696466c46efa](https://mumbai.polygonscan.com/address/0x5BEdcDE6B1047B46b6f815c63faa696466c46efa)

## Contract Details

- **Smart Contract**: `PriavteStateVariable.sol`
  - This smart contract has a single private state variable, `privateVariable`, which can be modified with a new string value.
  - It includes a public function to retrieve the current value of the state variable.

## Instructions

1. Clone this repository to your local machine.
2. Configure your Hardhat environment by updating the `hardhat.config.js` file with the network configurations and private keys for Mumbai and Swisstronik.
3. Deploy the smart contract to both Mumbai and Swisstronik testnets using the following commands:

   ```shell
   npx hardhat run scripts/deploy.js --network mumbai
   npx hardhat run scripts/deploy.js --network swisstronik



# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```