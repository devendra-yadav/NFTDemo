const { ethers } = require("hardhat");

async function main(){
    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFTFactory.deploy();

    console.log(`MyNFT deployed at ${myNFT.address}`);
}

main().then(()=>{
    process.exit(1);
}).catch((error)=>{
    console.log(`Issue while deploying mynft. ${error}`);
    process.exit(-1);
});