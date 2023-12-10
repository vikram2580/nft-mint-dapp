// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

require("dotenv").config({path:__dirname + '/.env'});
require("@nomiclabs/hardhat-waffle");
const { ALCHEMY_API_KEY, METAMASK_PRIVATE_KEY } = process.env;
console.log(METAMASK_PRIVATE_KEY)

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[METAMASK_PRIVATE_KEY],
    },
  },
  solidity: "0.8.3",
  paths: {
    artifacts: './frontend/src',
  },
};
