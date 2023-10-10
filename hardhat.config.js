require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "swisstronik",
  networks: {
    hardhat: {
    },
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      // accounts: [process.env.PRIVATE_KEY]
      accounts: ["1774500d5d6d519bd2490d5798ee45c9eb204659cd5ab862a9a6031628f6c742"]
      // accounts: ["your_private_key"]
    },
    polygon_mumbai: {
      url: "https://polygon-testnet.public.blastapi.io",
      // accounts: [process.env.PRIVATE_KEY]
      accounts: ["1774500d5d6d519bd2490d5798ee45c9eb204659cd5ab862a9a6031628f6c742"]
      // accounts: ["your_private_key"]
    },
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
