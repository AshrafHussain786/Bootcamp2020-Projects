import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { transactionType, stateType } from "../Types/type";

export const Transaction = ({transaction} : any) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.transactionText} <span>{sign}${Math.abs(transaction.amount)}</span><button 
            onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
