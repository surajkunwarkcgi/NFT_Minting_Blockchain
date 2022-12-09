const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const base_uri =
    "https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/";
  const Contract = await ethers.getContractFactory("Adulam");
  const contract = await Contract.deploy("Genesis NFT", "GNS", base_uri);

  await contract.deployed();

  const address = JSON.stringify({ address: contract.address }, null, 4);
  fs.writeFile("./src/abis/contractAddress.json", address, "utf-8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Deployed contract address is", contract.address);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
