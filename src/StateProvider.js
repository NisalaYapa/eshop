import React, { createContext, useContext, useReducer } from "react";

// Create a Context for the data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside components
export const useStateValue = () => useContext(StateContext);
