// IMPORTS
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";

// STYLESE
import "./styles/main.css";
import "./font/stylesheet.css"

// INITIALIZING
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)