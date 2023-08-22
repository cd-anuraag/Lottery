const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'forest discover addict zoo recall sustain swamp enough vessel chuckle oxygen wrestle',
    'https://sepolia.infura.io/v3/cc52cc7226bc4070a6eced5a1cefd99a'
)

const web3 = new Web3(provider);

;(async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to', lottery.options.address)
    provider.engine.stop();
})();