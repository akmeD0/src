// IMPORTS
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";

// STYLESE
import "./font/stylesheet.css"
import "./styles/main.css";

// INITIALIZING
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)