import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./context/ContextWrapper";
import 'tailwindcss/tailwind.css';
import MainTopNav from "./context/MainTopNav";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <ContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextWrapper>,
  document.getElementById("root")
);

reportWebVitals();