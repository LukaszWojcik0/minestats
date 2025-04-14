// import { error, log } from "console";

import { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";

type PlayerData = {
  [player: string]: any;
};

export default function WsOutput() {
  // const [player, setPlayer]= useState<PlayerData | null>(null);
  const [data, setData] = useState<PlayerData | null>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);

  // Online
  useEffect(() => {
    let socket: WebSocket;

    const connect = () => {
      console.log("Connecting with WebSocket...");

      socket = new WebSocket("ws://127.0.0.1:6789/");

      socket.onopen = () => {
        console.log("Connected");
      };

      socket.onmessage = (event) => {
        if (!event.data || typeof event.data !== "string") {
          console.warn("Pusta lub nieprawidłowa wiadomość z WS");
          return;
        }
        try {
          const parsed = JSON.parse(event.data);

          if (parsed.error) {
            console.warn("websocket error", parsed.error);
          } else {
            setData(parsed);
          }
        } catch (e) {
          console.error("Error on parsing:", e);
        }
      };

      socket.onerror = (event) => {
        console.error("WebSocket ERROR:");
        console.error("Event object:", event);
        console.error("WebSocket state:", socket.readyState);
      };

      socket.onclose = () => {
        console.warn("Disconnected. Attempting to reconnect in 1 second...");
        setTimeout(() => {
          connect();
        }, 100);
      };
      setWs(socket);
    };

    connect();

    return () => {
      console.log("Cleanup");
      socket?.close();
    };
  }, []);

  // Offline
  // useEffect(() => {
  //   fetch("/mock/websocket.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {data !== null && (
        <div>
          {Object.entries(data).map(([player, info]) => (
            <div key={player}>
              <PlayerInfo player={player} info={info}></PlayerInfo>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
