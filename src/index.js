import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot()
const root = ReactDOM.createRoot(rootElement);

// Render the app inside createRoot()
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
