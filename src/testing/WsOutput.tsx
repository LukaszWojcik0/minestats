// import { error, log } from "console";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";

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

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {Object.entries(data).map(([player, info]) => (
        <div key={player}>
          <PlayerInfo player={player} info={info}></PlayerInfo>
        </div>
      ))}
    </div>
  );
}
