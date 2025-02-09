import React, { createContext, useContext, useReducer } from "react";

// Create a Context for the Data Layer
export const StateContext = createContext();

// Create a Provider Component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom Hook to access State and Dispatch
export const useStateValue = () => useContext(StateContext);
