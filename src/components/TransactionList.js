import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
//import Transaction from './Transaction'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);   // use destructuring here
  const {deleteTransaction} = useContext(GlobalContext);
  
  const sign = transactions.amount < 0 ? '-' : '+';
   

/* 
         {transactions.map(transactions => ( <Transaction/> ))}
         
*/

  // now we will use mapping to map those transactions and transaction is passed as a prop
    return (
        <>
        <h3>History</h3>
        <ul id="list" className="list">
         

        {transactions.map(transaction => (  <li className={transaction.amount <0 ? 'minus': 'plus'}> {transaction.desc} <span>{sign}{Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button></li> ))} 
        
  

         
        </ul>  
        </>
    )
}

export default TransactionList
