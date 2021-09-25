require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift return pave comfort install clog front skin'; 
let testAccounts = [
"0x7c412f2d8c5f0a4083acb158c38dadcfd2f26ba11f3fac6b59a3427e94f8a736",
"0x22fad877254158979172f7851786a0cf816aa5839eff546c1372da4fb3de7723",
"0x8a0e674e95f718155dfaa744b6e2acaf6c3ca9167f7ea1a1dfaccde39925b9c0",
"0xf0fbef535e8e19b077e0d8b72ad66bdcdc5b8c6ff9c9bf77caad79af16b8afd4",
"0xd8c63f56b740c2aad2bbcf855fe358c9444346003d98980e757ca2b52aa296e4",
"0x455fce7ceeb6f847cd97acb40c3e0b6b5378af827d75f877526898be56776376",
"0x4f0c81548dcc3572508893183d9e637fccd6475d994ee91619d151efb9a1f0d9",
"0xb11366909d83f987e778a65195fdcbc1c0c0aca39bac63e6373e1d0e15999ba5",
"0x82dd7e9592e23825ff3fafe08d950547f4f8c87fb5fdada0165cc43222c4241e",
"0xd4f65653bfbb2577895241ef6e1c1036d73d148efe9385db1da73bb42829a431"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

