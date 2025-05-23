import React, { useState } from "react";
import ApiOutput from "./Apioutput";
// import WsOutput from "./WsOutput";

// import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner";

export default function WelcomePage() {
  const [ip, setIp] = useState("");
  const [password, setPassword] = useState("");
  const [connected, setConnected] = useState(false);

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ip || !password) {
      alert("Uzupełnij IP i hasło!");
      return;
    }
    // REST API connect

    fetch("http://localhost:5000/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Dane z serwera:", data))
      .catch((err) => console.error("Błąd:", err));

    // MCRCON connect
    const ws = new WebSocket("ws://localhost:6789/");
    ws.onopen = () => {
      ws.send(JSON.stringify({ host: ip, password: password }));
    };

    ws.onmessage = () => {
      setConnected(true);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      // toast("Whoops", {
      //   description: "There was something wrong with your request.",
      //   action: {
      //     label: "Close",
      //     onClick: () => Pause,
      //   },
      // });
      // logic for the error pop-up
    };
  };

  if (connected) {
    return (
      <>
        <ApiOutput ip={ip} password={password} />
      </>
    );
  }

  return (
    <div className="w-full ">
      {/* <div className="hidden"> */}
      <p className="text-center mt-10 text-3xl">Welcome to</p>
      <img
        src="logo/MineStats_logo.png"
        alt="MineStats_logo"
        className="w-1/3 mx-auto"
      />
      <p className="text-center my-4">
        type in your credentials to see your server's details:
      </p>
      <div className=" ">
        <form onSubmit={handeSubmit} className=" mx-auto w-max">
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Server's ip:"
            className="bg-gray-400 p-0.5"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="MCRCON password:"
            className="bg-gray-400 m-3 p-0.5"
          />
          <button type="submit" className="bg-gray-600 p-0.5 px-1.5">
            Send
          </button>
        </form>
        <>{/* pop-up informing that it's not working */}</>
      </div>
    </div>
  );
}
