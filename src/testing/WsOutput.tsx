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
          <p>
            Health: {info.Health} Food: {info.foodLevel}
          </p>
          <p>
            Additional health: {info.AbsorptionAmount} Air: {info.Air}
          </p>
          <p>XpTotal: {info.XpTotal}</p>
          <p>
            position: x: {Math.round(info.Pos[0])} y: {Math.round(info.Pos[1])}{" "}
            z: {Math.round(info.Pos[2])}{" "}
          </p>
          <p>Dimension: {info.Dimension}</p>
          <br></br>
          <p>isFlyingElytra: {info.FallFlying}</p>
          <p>
            OnGround: {info.OnGround}
            {/* {console.log(info["LastDeathLocation.pos"][0])} */}
            {/* {console.log(info.abilities.mayBuild)} */}
          </p>

          <p>
            playerGameType: {info.playerGameType}
            {/* {console.log(info.LastDeathLocation.pos[0])} */}
            {/* {console.log(info)} */}
          </p>
          <p>
            LastDeathLocation: x: {Math.round(info["LastDeathLocation.pos"][0])}{" "}
            y: {Math.round(info["LastDeathLocation.pos"][1])} z:{" "}
            {Math.round(info["LastDeathLocation.pos"][2])}{" "}
          </p>
          <p>
            LastDeathLocation.dimension: {info["LastDeathLocation.dimension"]}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <pre>
            {/* {JSON.stringify(info, null, 2)} */}
            {/* {console.log(info.Pos)} */}
          </pre>
        </div>
      ))}
    </div>
  );
}
