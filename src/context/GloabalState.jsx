import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const InitialState = {
    transactions: []
    // [
    //     { id: 1, text: 'Sandals', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Spectacles', amount: -10 },
    //     { id: 4, text: 'Laptop', amount: 150 }
    // ]
}

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}