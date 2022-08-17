import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {

  const {transactions} = useContext(GlobalContext)

  //get total from object transactions
  const amounts = transactions.map(t => t.amount)
  const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)

  return (
    <div className='py-2'>
      <h4 className=''>Your Balance</h4>
      <h1 className='font-bold text-xl'>${total}</h1>
    </div>
  )
}

export default Balance