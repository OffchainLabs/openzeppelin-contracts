const fs = require('fs');
const path = require('path');

usePlugin('solidity-coverage');
usePlugin('@nomiclabs/buidler-truffle5');

for (const f of fs.readdirSync(path.join(__dirname, 'buidler'))) {
  require(path.join(__dirname, 'buidler', f));
}

module.exports = {
  networks: {
    buidlerevm: {
      blockGasLimit: 10000000,
    },
    arbitrum: {
      url: "http://localhost:8547",
      gas: 9999999999999,
      gasPrice: 0,
      accounts: {
        mnemonic: "jar deny prosper gasp flush glass core corn alarm treat leg smart",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
    },
  },
  solc: {
    version: '0.6.12',
  },
};
