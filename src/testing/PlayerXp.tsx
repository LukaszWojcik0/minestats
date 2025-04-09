type PlayerXpProps = {
  xpTotal: number;
};

// Łączna ilość XP potrzebna do osiągnięcia danego poziomu
function getTotalXPFromLevel(level: number): number {
  if (level <= 16) return level * level + 6 * level;
  if (level <= 31) return 2.5 * level * level - 40.5 * level + 360;
  return 4.5 * level * level - 162.5 * level + 2220;
}

// XP wymagany tylko do następnego poziomu (od aktualnego)
function getXPToNextLevel(level: number): number {
  if (level <= 15) return 2 * level + 7;
  if (level <= 30) return 5 * level - 38;
  return 9 * level - 158;
}

function calculateXp(xpTotal: number) {
  let level = 0;

  while (getTotalXPFromLevel(level + 1) <= xpTotal) {
    level++;
  }

  const xpAtCurrentLevel = getTotalXPFromLevel(level);
  const xpToNext = getXPToNextLevel(level);
  const currentProgress = xpTotal - xpAtCurrentLevel;
  const progressPercent = xpToNext === 0 ? 1 : currentProgress / xpToNext;

  return {
    level,
    xpTotal,
    xpAtCurrentLevel,
    xpToNext,
    currentProgress,
    progressPercent: Math.min(progressPercent, 1), // na wypadek jakby wyszło > 100%
  };
}

export default function PlayerXp({ xpTotal }: PlayerXpProps) {
  const result = calculateXp(xpTotal);

  return (
    <div>
      <p>Level: {result.level}</p>
      <p>XP do kolejnego poziomu: {result.xpToNext}</p>
      <p>Progress: {(result.progressPercent * 100).toFixed(1)}%</p>
    </div>
  );
}
