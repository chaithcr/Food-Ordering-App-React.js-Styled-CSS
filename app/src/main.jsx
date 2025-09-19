import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
const GlobalStlye=createGlobalStyle`
  

  *{
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  .roboto {
  font-family: "Roboto", sans-serif;
  }
  }
  body{
    background-color: #1e1d1d;
    color: white;
    min-width: 100vh;
  }
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStlye/>
    <App />
  </React.StrictMode>
);
