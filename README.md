 # NFT Minting DApp
Name - Vikram Singh
Student Id -101501507

**Building NFT Minting DApp from Scratch**

**1. Update .env file in the root directory** 

      API\_URL = "https://eth-goerli.g.alchemy.com/v2/your-api-key"

      PRIVATE\_KEY = "your-metamask-private-key"


**2. To start the deploy contract open terminal in nft-mint-dapp folder** 

      1-run - npx hardhat compile
      2-run - npx hardhat run scripts/deploy.js --network sepolia

      now after deployment copy contract address from terminal and paste it into app.js file in frontend folder

 

**3. To start the project, move to nft_mint_frontend folder** 

      cd nft_mint_frontend
 
 
 **4. This folder contains the frontend side of the Dapp, Now install the node modules** 
 
      npm install
 
 
 **5. Start the development server** 
 
      npm start
 
 
 The development server will be running now...