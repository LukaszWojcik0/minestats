type PlayerInfoProps = {
  player: string;
  info: any;
};

export default function PlayerInfo({ player, info }: PlayerInfoProps) {
  return (
    <div className="mx-auto flex max-w-xl bg-[url(light-mode/side-texture.png)] bg-contain mb-3 p-3 rounded-xl">
      <div>
        <h3 className="text-center">{player}</h3>

        <img
          src={"https://mc-heads.net/avatar/" + player}
          alt={player + "'s head"}
          className="max-w-24 max-h-24 mx-auto"
        />
        <p>
          Health: {info.Health} Food: {info.foodLevel}
        </p>
        <p>
          Additional health: {info.AbsorptionAmount} Air: {info.Air}
        </p>
        <p>XpTotal: {info.XpTotal}</p>
      </div>
      <div>
        {/* <p>
        position: x: {Math.round(info.Pos[0])} y: {Math.round(info.Pos[1])} z:{" "}
        {Math.round(info.Pos[2])}{" "}
        </p> */}
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
        {/* <p>
        LastDeathLocation: x: {Math.round(info["LastDeathLocation.pos"][0])} y:{" "}
        {Math.round(info["LastDeathLocation.pos"][1])} z:{" "}
        {Math.round(info["LastDeathLocation.pos"][2])}{" "}
        </p> */}
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
    </div>
  );
}
