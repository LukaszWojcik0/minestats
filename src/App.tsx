import React from "react";

import "./App.css";
import "./index.css";
import WelcomePage from "./testing/WelcomePage";

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
        <WelcomePage />
      </header>
    </div>
  );
}

export default App;
