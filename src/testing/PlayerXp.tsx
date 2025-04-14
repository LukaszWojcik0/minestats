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
  const progressPercent = useMemo(
    () => calculatePercent(xpData.progressPercent),
    [xpData.progressPercent]
  );
  // console.log(progressPercent);
  return (
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
      {/* <p>XP do kolejnego poziomu: {xpData.xpToNext}</p>
      <p>Progress: {progressPercent}%</p> */}
      {/* <div className="h-2 rounded-md bg-green-600 mr-auto w-[1%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[2%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[3%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[4%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[5%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[6%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[7%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[8%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[9%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[10%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[11%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[12%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[13%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[14%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[15%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[16%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[17%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[18%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[19%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[20%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[21%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[22%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[23%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[24%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[25%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[26%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[27%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[28%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[29%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[30%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[31%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[32%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[33%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[34%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[35%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[36%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[37%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[38%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[39%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[40%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[51%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[52%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[53%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[54%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[55%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[56%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[57%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[58%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[59%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[60%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[61%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[62%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[63%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[64%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[65%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[66%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[67%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[68%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[69%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[70%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[71%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[72%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[73%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[74%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[75%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[76%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[77%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[78%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[79%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[80%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[81%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[82%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[83%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[84%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[85%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[86%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[87%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[88%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[89%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[90%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[91%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[92%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[93%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[94%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[95%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[96%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[97%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[98%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[99%]"> </div>
      <div className="h-2 rounded-md bg-green-600 mr-auto w-[100%]"> </div> */}
    </div>
  );
}
