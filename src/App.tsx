import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiOutput from "./testing/Apioutput";
import WsOutput from "./testing/WsOutput";
import "./index.css";

function App() {
  return (
    <div className="App bg-[url(light-mode/background-texture.png)] bg-contain bg-repeat h-screen pt-3">
      <header className="App-header">
        {/* <ApiOutput /> */}
        <WsOutput />
      </header>
    </div>
  );
}

export default App;
