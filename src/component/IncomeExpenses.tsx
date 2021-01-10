import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { transactionType, stateType } from "../Types/type";

export const IncomeExpenses = () => {
    const { transactions }:stateType = useContext(GlobalContext);
    const amounts = transactions.map((transaction:transactionType ) => transaction.amount);


    const income = amounts
        .filter((item : number) => item > 0)
        .reduce((acc: number , item: number) => (acc += item ), 0)
        .toFixed(2);

    const expense = (
        amounts.filter((item: number) => item < 0)
        .reduce((acc:number, item:number) => (acc += item), 0) * -1)
        .toFixed(2);
        
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
