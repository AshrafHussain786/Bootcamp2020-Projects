import React, { useContext } from 'react';
// import { textChangeRangeIsUnchanged } from 'typescript';
import { GlobalContext } from '../context/GlobalState';
import { stateType } from "../Types/type";
// import { Transaction } from './Transaction';

export const TransactionList:React.FC = () => {
    const { transactions } : stateType = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    // const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                
            {transactions.map(transaction => (

            <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
                {transaction.transaction} 
                <span>{transaction.amount <0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>        
            ))}            
            </ul>
        </>
    )
}
