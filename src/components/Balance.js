import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


const Balance = () => {

    const { transactions } = useContext(GlobalContext);   // use destructuring here

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   
    return (
        <>
           <h2>Balance</h2> 
           <h3> ${total}</h3>
        </>
    )
}

export default Balance
