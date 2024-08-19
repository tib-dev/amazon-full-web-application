import React from "react";
import Routing from "./Components/Router";
import DataProvider from "./Components/DataProvider/DataProvider";
import AuthHandler from "./Components/AuthHandler";

function App() {
  return (
    <DataProvider>
      <AuthHandler />
      <Routing />
    </DataProvider>
  );
}

export default App;

