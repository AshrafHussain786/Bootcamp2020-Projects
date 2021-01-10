export interface stateType {
    transactions: {
        id: number,
        transaction: string,
        amount: number
    }[]
}

export interface transactionType {
    id: number,
    transaction: string,
    amount: number
}