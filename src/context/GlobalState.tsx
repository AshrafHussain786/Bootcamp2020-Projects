import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { transactionType, stateType } from "../Types/type";


// initial state
const intialState : stateType = {
    transactions: []
}

// Create context
export const GlobalContext: React.Context<any> = createContext(intialState)

// Provider component
export const GlobalProvider: React.FC = ( { children } : any ) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);
    
// Actions
function addTransaction(transaction: transactionType){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

function deleteTransaction(id: number){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}


return (
    <GlobalContext.Provider 
    value={{
            transactions: state.transactions, 
            addTransaction,
            deleteTransaction    
        }}
    >
            { children }
    </GlobalContext.Provider>
    )
}