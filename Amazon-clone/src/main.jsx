import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "../src/assets/css/bootstrap.min.css";
import "./index.css";
import DataProvider from "./Components/DataProvider/DataProvider.jsx";
import { reducer, initialState } from "./Utility/reducer.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
