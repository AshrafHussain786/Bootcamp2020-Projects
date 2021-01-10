import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransactionList:React.FC = () => {
    const [transaction, setTransactionType] = useState("");
    // const [text, setText] = useState('');
    const [amount, setTransactionAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTransaction = {
            id:  Math.floor(Math.random() * 100000000),
            transaction,
            amount: +amount
        }
        console.log(newTransaction)
        addTransaction(newTransaction)
    }

    const clear = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = ""
    }

    const setAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let number: number | any = e.target.value
        setTransactionAmount(number)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={transaction} onFocus={clear}  onChange={(e) => setTransactionType(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onFocus={clear} onChange={setAmount} placeholder="Enter number..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransactionList;