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

## Script Details
********************************************************************************************************

- **Script Name**: `deploy.js`
- **Purpose**: This script automates the deployment of the `PrivateStateVariable` smart contract to the selected networks Mumbai and Swisstronik.
- **Initial String Value**: The script deploys the contract with an initial string value of "Completed," which can be customized to any other string during deployment.

#### Usage

1. Ensure you have configured your Hardhat environment, as mentioned in the README.
2. Open your terminal and navigate to the project directory.
3. Run the following commands to deploy the smart contract:

   ```shell
   npx hardhat run scripts/deploy.js --network mumbai
   npx hardhat run scripts/deploy.js --network swisstronik

********************************************************************************************************

- **Script Name**: `getStorageValueSwisstronik.js`
- **Purpose**: This script connects to the Swisstronik network via a JSON-RPC provider and retrieves the value stored in slot #0 of the specified smart contract.

#### Usage

1. Ensure you have configured your Hardhat environment, as mentioned in the README.
2. Open your terminal and navigate to the project directory.
3. Replace the `contractAddress` variable with the actual contract address on the Swisstronik network.
   const contractAddress = "0xYourContractAddress"; // Replace with the actual contract address on the Swisstronik network
4. Run the following commands to execute the script:
   ```shell
   npx hardhat run scripts/getStorageValueSwisstronik.js --network swisstronik
5. The script will retrieve and display the value stored in slot #0 of the specified smart contract on the Swisstronik network.

********************************************************************************************************

- **Script Name**: `getStorageValueMumbai.js`
- **Purpose**: This script connects to the Mumbai network via a JSON-RPC provider and retrieves the value stored in slot #0 of the specified smart contract.

#### Usage

1. Ensure you have configured your Hardhat environment, as mentioned in the README.
2. Open your terminal and navigate to the project directory.
3. Replace the `contractAddress` variable with the actual contract address on the Mumbai network.
   const contractAddress = "0xYourContractAddress"; // Replace with the actual contract address on the Mumbai network
4. Run the following commands to execute the script:
   ```shell
   npx hardhat run scripts/getStorageValueMumbai.js --network polygon_mumbai
5. The script will retrieve and display the value stored in slot #0 of the specified smart contract on the Mumbai network.

********************************************************************************************************

- **Script Name**: `getStorageValue.js`
- **Purpose**: This script connects to two networks Swisstronik and Mumbai and retrieves the value stored in slot #0 of the specified smart contract.

### Usage

1. Ensure you have configured your Hardhat environment for both networks, as mentioned in the README.

2. Open your terminal and navigate to the project directory.

3. Replace the `contractAddress` variable with the actual contract address.
   const contractAddress = "0xYourContractAddress"; // Replace with the actual contract address

4. Define the slot variable as "0x0" to specify slot #0 for the state variable.
    const slot = "0x0"; // Slot #0 for the state variable

5. Run the following command to execute the script:
   ```shell
   npx hardhat run scripts/getStorageValue.js

6. The script will retrieve and display the value stored in slot #0 of the specified smart contract on both the Swisstronik and Mumbai networks.

## Instructions

1. Clone this repository to your local machine.
2. Configure your Hardhat environment by updating the `hardhat.config.js` file with the network configurations and private keys for Mumbai and Swisstronik.
3. Deploy the smart contract to both Mumbai and Swisstronik testnets using the following commands:

   ```shell
   npx hardhat run scripts/deploy.js --network mumbai
   npx hardhat run scripts/deploy.js --network swisstronik

4. Record the contract addresses for both deployments.

5. Use the following script to retrieve the value of the state variable from slot #0 using eth_getStorageAt() for both the networks Swisstronik and Mumbai:
    ```shell
    npx hardhat run scripts/getStorageValue.js

6. Use the following script to retrieve the value of the state variable from slot #0 using eth_getStorageAt() for specific network:
    ```shell
    npx hardhat run scripts/getStorageValue.js --network swisstronik  // for Swisstronik Network
    npx hardhat run scripts/getStorageValue.js --network mumbai  // for Mumbai Network

7. The above scripts will print the value to the console.

## Requirements
Node.js
Hardhat (https://hardhat.org/)




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