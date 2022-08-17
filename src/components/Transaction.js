import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Transaction = ({ transaction }) => {

  const {deleteTransaction} = useContext(GlobalContext)

  //get sign
  const sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li className={sign === '+' ? "bg-green-400 px-1 py-2 m-1 flex justify-between shadow-md rounded-sm text-white" : "bg-red-400 px-1 py-2 m-1 flex justify-between shadow-md rounded-sm text-white"}>

        <button onClick={()=> deleteTransaction(transaction.id)} className="hover:scale-100 hover:font-bold hover:text-red-700">x</button>
      {transaction.text}
      <span className=''>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
