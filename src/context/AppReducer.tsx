import { transactionType, stateType } from "../Types/type";

// eslint-disable-next-line
const AppReducer = (state : stateType, action : any) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter((transaction:transactionType) => transaction.id !== action.payload)
        }        
        default: 
            return state;
    }
}

export default AppReducer;