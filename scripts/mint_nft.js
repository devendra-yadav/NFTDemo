require('dotenv/config');

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const {createAlchemyWeb3} = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(API_URL);


const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');

const contractAddress="0x87E0F1b909dF7DD9CbE1B876c0FeB104B8A558ae";

const myNFTContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
    const tx={
        "from": PUBLIC_KEY,
        "to": contractAddress,
        "nonce": nonce,
        "gas": 500000,
        "data": myNFTContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}


mintNFT("https://gateway.pinata.cloud/ipfs/QmX6JvYcEeNPd7SxgyRmw2ABZRzH2M1CV3WHMkyFL62DtT");
