import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="AppBeta">
      <header className="AppBeta-header">
        <img src={logo} className="AppBeta-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="AppBeta-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          This is app-beta
        </a>
      </header>
    </div>
  );
}

export default App;
