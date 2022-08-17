import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext)

  //just 'amounts' from transactions
  const amounts = transactions.map(t => t.amount)
  //income
  const income = amounts.filter(i=>i>0).reduce((acc,item) => (acc += item),0).toFixed(2)
  //expense
  const expense = (amounts.filter(i=>i<0).reduce((acc,item) => (acc += item),0) * -1).toFixed(2)

  return (
    <div className="inline-flex p-2 bg-white shadow-lg rounded divide-x">
      <div className="px-3 py-2 text-center">
        <h4>INCOME</h4>
        <p className="font-bold text-green-500">${income}</p>
      </div>
      <div className="px-3 py-2 text-center">
        <h4>EXPENSE</h4>
        <p className="font-bold  text-red-500">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
