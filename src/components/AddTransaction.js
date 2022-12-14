import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  
  const {addTransaction} = useContext(GlobalContext)

  const textHandler = (e) => { setText(e.target.value)}

  const amountHandler = (e) => { setAmount(e.target.value) };

  const onSubmitHandler = (e) => { 
    e.preventDefault();

    const newTransaction = {
      id:Math.floor(Math.random() * 10000),
      text,
      amount:+amount,
    }
    addTransaction(newTransaction)
   };


  return (
    <div className='divide-y'>
      <h3 className='py-2 font-bold'>Add new transaction</h3>
      <form className='py-4' onSubmit={onSubmitHandler}>
        <div className='pb-2'>
          <label className='font-bold block pb-1'>Text</label>
          <input className='px-1 py-2  block w-full' type="text" placeholder='Enter Text' value={text} onChange={textHandler}/>
        </div>
        <div className='pb-2'>
          <label className='font-bold block pb-1'>Amount</label>
          <input className='px-1 py-2  block w-full' type="number" placeholder='Enter Amount' value={amount} onChange={amountHandler}/>
        </div>
        <button className='px-1 py-2 mt-2 block w-full bg-purple-500 font-thin text-white'>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction