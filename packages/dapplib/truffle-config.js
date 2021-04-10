require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hover enrich sun foot elder rate noble history injury light army gauge'; 
let testAccounts = [
"0x9a1d76ed5f165ffae9f1b0f060e2a6a58dc020ef0a878f52b4ffc683b6a9cea0",
"0x8df5ab7d91990b6738d751519892c02ea6bcc4526553d34aa5e5199ede12692c",
"0x8a8d177f2739707d57439e3350197e0cc6810c149083b1e79ed1e7d36edc4b5b",
"0xc9bd34b8a2ddb733011fc5ef1fc590d86a5d72768185001ab9c43244108f039a",
"0xc72ac51cfdf81cdad4ef0a77407999e812aecd9aa33e9394124343ec6aa79c10",
"0xe1af85a1924d0fcd0c42f96fb70e20529d38d0e427644acbc778017c83da25cb",
"0x0e46f613adfeb88598b6d1fe27d9f8dd3fd96a50d8320039166f8125ef115a0e",
"0xb49d7d5832bd8f384d9ad29b6e4808d03823dbbe4475aa091e6b90d1bc42e8ca",
"0x88cc7e99b8bd479ef56a37610382cf67972be97c7f195a06fb91c3daef9440fe",
"0x1055ec53b76e4ec30338b22660893e78a5f46c163f4ab12df66b3f5c4447df74"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


