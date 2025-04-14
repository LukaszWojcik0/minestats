type PlayerDimensionProps = {
  dimension: string;
  position: number[];
};

export default function PlayerDimension({
  dimension,
  position,
}: PlayerDimensionProps) {
  let path = "dimension/";
  switch (dimension) {
    case '"minecrat:overworl"':
      path += "overworld2.png";
      break;
    case '"minecrat:the_en"':
      path += "the_end2.png";
      break;
    case '"minecrat:the_nether"':
      path += "the_nether2.png";
      break;

    default:
      break;
  }
  // return <img src={path} alt={dimension + " image"} className="w-15" />;
  return (
    <div
      className={
        "bg-[url(" +
        path +
        ")] w-full h-full max-h-24 bg-contain bg-repeat rounded-tr-lg text-center content-center"
      }
    >
      {/* to refresh images */}
      {/* <div className={"bg-[url(dimension/the_end2.png)] w-full"}></div>
      <div className={"bg-[url(dimension/overworld2.png)] w-full"}></div>
      <div className={"bg-[url(dimension/the_nether2.png)] w-full"}></div> */}
      <p className="font-[MinecraftRegular] text-xl">
        x: {position[0]} y: {position[1]} z: {position[2]}{" "}
      </p>
      {/* <p className="font-[MinecraftRegular] text-xl">
        x: {Math.round(position[0])} y: {Math.round(position[1])} z:{" "}
        {Math.round(position[2])}{" "}
      </p> */}
    </div>
  );
}
