type wsData = {
  player: string;
  ws: string;
};

export default function WsOutput() {
  const player = "eldablju";
  const ws = new WebSocket("ws://localhost:6789/" + player);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Live:", data);
  };
  return <span>es</span>;
}
