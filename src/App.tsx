import React from "react";

import "./App.css";
import ApiOutput from "./testing/Apioutput";
import WsOutput from "./testing/WsOutput";
import "./index.css";

const mode = "dark";

function App() {
  return (
    <div
      className={
        "App bg-[url(" +
        mode +
        "-mode/background-texture.png)] bg-contain bg-repeat text-white h-max min-h-screen overflow-hidden font-[MinecraftRegular]"
      }
      // className={
      //   "App bg-[url(dark-mode/background-texture.png)] bg-contain bg-repeat h-screen pt-3"
      // }
    >
      <header className="App-header">
        <ApiOutput />
        <WsOutput />
      </header>
    </div>
  );
}

export default App;
