type ServerPingData = {
  ping: number;
};

export default function ServerPing({ ping }: ServerPingData) {
  let path = "ping/";

  if (!ping) {
    path += "blank.png";
  } else if (ping < 30) {
    path += "great.png";
  } else if (ping < 65) {
    path += "good.png";
  } else if (ping < 80) {
    path += "medium.png";
  } else {
    path += "low.png";
  }

  return (
    <>
      <img src={path} alt="" className="w-[32px]" />
    </>
  );
}
