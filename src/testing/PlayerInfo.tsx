import PlayerDimension from "./PlayerDimension";
import PlayerHealth from "./PlayerHealth";
import PlayerAddHealth from "./PlayerAddHealth";
import PlayerXp from "./PlayerXp";

type PlayerInfoProps = {
  player: string;
  info: any;
};

const mode = "dark";

export default function PlayerInfo({ player, info }: PlayerInfoProps) {
  return (
    <div
      // className={
      //   "mx-auto flex max-w-xl bg-[url(" +
      //   mode +
      //   "-mode/side-texture.png)] bg-contain mb-3 p-3 rounded-xl border-4 border-[#643B19]"
      // }
      className={
        "mx-auto flex max-w-xl bg-[url(dark-mode/side-texture3.png)] bg-contain mb-3  rounded-xl border-4 border-[#20150d]"
      }
    >
      <div className="w-2/5 p-3">
        <h3 className="text-center font-[MinecraftRegular]">{player}</h3>

        <img
          src={"https://mc-heads.net/avatar/" + player}
          alt={player + "'s head"}
          className="max-w-24 max-h-24 mx-auto py-2"
        />
        {/* <p>Additional health: {info.AbsorptionAmount}</p> */}
        <PlayerAddHealth addHealth={info.AbsorptionAmount} />
        <PlayerHealth health={info.Health} />
        {console.log("re-render")}
        <p>Food: {info.foodLevel}</p>
        {/* <PlayerXp xpTotal={info.XpTotal} /> */}
        <p>XpTotal: {info.XpTotal}</p>
      </div>
      <div className="w-3/5">
        {info.Dimension !== null && (
          <div className="w-full h-2/5 m-auto ">
            <PlayerDimension dimension={info.Dimension} position={info.Pos} />
          </div>
        )}

        <br></br>
        <p>isFlyingElytra: {info.FallFlying}</p>
        <p>OnGround: {info.OnGround}</p>

        <p>
          playerGameType: {info.playerGameType}
          {/* {console.log(info.LastDeathLocation.pos[0])} */}
          {/* {console.log(info)} */}
        </p>
        {info["LastDeathLocation.dimension"] !== null && (
          <>
            <p>
              LastDeathLocation.dimension: {info["LastDeathLocation.dimension"]}
            </p>
            <p>
              LastDeathLocation: x: {info["LastDeathLocation.pos"][0]} y:{" "}
              {info["LastDeathLocation.pos"][1]} z:{" "}
              {info["LastDeathLocation.pos"][2]}{" "}
            </p>
            <p> Air: {info.Air}</p>
          </>
        )}

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
