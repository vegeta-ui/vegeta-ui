import React from "react";
import { Button, Theme } from "@vegeta-ui/core";
import logo from "./logo.svg";
import "./App.css";

const theme = {
  primary: "red"
};

function App() {
  return (
    <Theme theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>Xora</Button>
        </header>
      </div>
    </Theme>
  );
}

export default App;
