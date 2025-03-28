// import { error, log } from "console";
import { useEffect, useState } from "react";

type PlayerData = {
  [player: string]: any;
};

export default function WsOutput() {
  const [data, setData] = useState<PlayerData | null>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    let socket: WebSocket;

    const connect = () => {
      console.log("Connecting with WebSocket...");
      socket = new WebSocket("ws://localhost:6789/");

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
            // console.log(parsed);
            // console.log("abilities.mayfly:", info.abilities.mayfly);
            // console.log("info.Dimension:", info.Dimension.mayfly);
          }
        } catch (e) {
          console.error("Error on parsing:", e);
        }
      };

      socket.onerror = (err) => {
        console.error("Websocket error", err);
        socket.close();
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

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {Object.entries(data).map(([player, info]) => (
        <div key={player}>
          <h3>{player}</h3>
          <pre>{JSON.stringify(info, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
