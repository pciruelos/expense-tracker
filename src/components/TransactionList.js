import React,{useContext} from 'react'
import Transaction from './Transaction'
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {

const {transactions} = useContext(GlobalContext)

  return (
    <div className='py-3 divide-y'>
      <h3 className='font-bold'>History</h3>
      <ul className='py-3'>
        {transactions.map(t => ( <Transaction transaction={t}  key={t.id} />
         
        ))}
        
      </ul>
    </div>
  )
}

export default TransactionList