import React, { createContext, useReducer, useContext } from "react";

// DATA LAYER
export const StateContext = createContext();

// context
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// get info in components
export const useStateValue = () => useContext(StateContext);
