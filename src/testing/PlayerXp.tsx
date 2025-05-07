import { useMemo } from "react";
type PlayerXpData = {
  level: number;
  progressPercent: number;
  xpToNext: number;
};

type PlayerXpProps = {
  xpData: PlayerXpData;
};

function calculatePercent(percent: number) {
  return (percent * 100).toFixed(0);
}

export default function PlayerXp({ xpData }: PlayerXpProps) {
  // console.log(xpData);

  const progressPercent = useMemo(
    () => calculatePercent(xpData.progressPercent),
    [xpData.progressPercent]
  );
  // console.log(progressPercent);
  return (
    <>
      {progressPercent !== null && (
        <div className="w-full">
          <p className="text-center text-green-400">{xpData.level}</p>
          <div className="h-3 rounded-lg bg-green-900 border-2 border-green-950">
            <div
              className={
                "h-2 rounded-md bg-green-600  w-[" + progressPercent + "%]"
              }
              // className="h-2 rounded-md bg-green-600 mr-auto w-[0.1]"
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
