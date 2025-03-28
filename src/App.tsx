import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiOutput from "./testing/Apioutput";
import WsOutput from "./testing/WsOutput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ApiOutput /> */}
        <WsOutput />
      </header>
    </div>
  );
}

export default App;
