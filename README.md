# Project to Mint NFTs

This project contains a smart contract that is used to interact with blockchain to mint NFT.
Also there is are javascript file that is used to call the smart contract with metadata that is used to mint NFT.

make sure to create an ".env" file with following properties
API_URL="<API_url>"
PRIVATE_KEY="<metamask account private key>"
PUBLIC_KEY="<metamask public key>"

To mint NFT, following steps are needed.

```shell
1. Upload your digital asset to IPFS (Pinata) or any other centralized server.
2. create a .json file containing the metadata of that digital asset. (can check existing nft metadata present in the project).
3. upload this metadata .json file also to IPFS (Pinata) or any other centralized server.
4. Get the url of this metadata json file. and update the last line of 'mint_nft.js" with the url of this metadata.

    mintNFT("<url of the metadata json>");

5. run 'node ./scripts/mint_nft.js'. 
```
