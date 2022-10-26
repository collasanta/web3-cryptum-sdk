import { NextApiRequest, NextApiResponse } from 'next';
var CryptumSdk = require('cryptum-sdk')

const apikey = "inaImMrDNlGiGTQsSy0APSB2J0IBqiw7"

const sdk = new CryptumSdk({
    environment:'testnet',
    apiKey: apikey
})

export default async function hello(_req: NextApiRequest, res: NextApiResponse) {
  const {amount,to, cookies} = _req.query
  const wallet = await sdk.wallet.generateWalletFromPrivateKey({
    privateKey: '0x8ca2092ebca2c154ba349173152a4b3f9f954a8331662f4efe284840bbb7cdda',
    protocol: 'POLYGON',
  })  
  const { hash } = await sdk.token.mint({
    wallet,
    token: '0xa4F1C1DA64A29D1A8D7F72700D48826B181f0441',  // token address
    destination: to,  // destination address
    amount: amount, // in wei
    protocol: 'POLYGON'
})
  res.status(200).json({ name: `${amount} Tokens Minted to ${to} HASH: ${hash}` });
}