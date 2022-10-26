import Layout from '@/components/layout'
import { useState } from 'react'

export default function IndexPage() {
  const [wallet, setWallet] = useState()
  const [amount, setAmount] = useState()
  const [log, setLog] = useState("Waiting for Transaction...")
  const [loading, setLoading] = useState(false)
  

  const handleChangeWallet = (event) => {
    const value = event.target.value;
    console.log({value})
    setWallet(value);
  };
  const handleChangeAmount = (event) => {
    const value = event.target.value;
    console.log({weiValue})
    setAmount(value);
  };

  async function sendApiRequest () {
    setLoading(true)
    const response = await fetch(`http://localhost:3000/api/reedem?to=${wallet}&amount=${amount}`);
    console.log("response", response)
    console.log("response status", response.status)
    if (response.status === 200) {
      const body = await response.json()
      setLog(body.name)
    }
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main>
        <div className='space-y-2 flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className="text-2xl pb-7">Reedem Tokens 💰</h1>
          Address
          <input className="bg-[#f1f1f1] p-2 rounded-lg" placeholder='Type Your Wallet' onChange={handleChangeWallet} value={wallet}></input>
          <br></br>
          Token Amount
          <input className=" bg-[#f1f1f1] p-2 rounded-lg" placeholder='Type Amount' onChange={handleChangeAmount} value={amount}></input>
          <br></br>
          <button onClick={()=>{sendApiRequest()}} className='bg-blue-100 p-3 rounded-lg shadow-md'> Reedem</button>
          <br></br>
          <br></br>

          { loading ? log : ""}
        </div>
      </main>
    </Layout>
  )
}
