import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -120 },
    { id: 2, text: "slack", amount: -350 },
    { id: 3, text: "salary", amount: 1000 },
    { id: 4, text: "tax", amount: -270 },
  ],
};

//Create context

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{
         transactions: state.transactions,
         deleteTransaction
          }}>
      {children}
    </GlobalContext.Provider>
  );
};
