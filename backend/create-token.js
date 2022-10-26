var CryptumSdk = require('cryptum-sdk')

const apikey = "inaImMrDNlGiGTQsSy0APSB2J0IBqiw7"

const sdk = new CryptumSdk({
    environment:'testnet',
    apiKey: apikey
})

async function deployToken(){
    const wallet = await sdk.wallet.generateWalletFromPrivateKey({
        privateKey: '0x8ca2092ebca2c154ba349173152a4b3f9f954a8331662f4efe284840bbb7cdda',
        protocol: 'POLYGON',
    })
    console.log({wallet})
    const {hash} = await sdk.token.create({
        wallet,
        name:'Test Coin',
        symbol:'TCO',
        decimals:18,
        amount:'1000000',
        protocol:'POLYGON',
    })
    console.log({hash})
    //HASH: 0x082310540920445307f57c20f14c2b16bf60e59d99a2a77192806e00c9261bf4
}
// deployToken()

async function getContractAddress(){
    const { contractAddress } = await sdk.transaction.getTransactionReceiptByHash({
        protocol: 'POLYGON',
        hash: "0x082310540920445307f57c20f14c2b16bf60e59d99a2a77192806e00c9261bf4"
    })
    console.log("Token deployed to: ", contractAddress)
    // ADDRES: 0xa4F1C1DA64A29D1A8D7F72700D48826B181f0441
}
getContractAddress()