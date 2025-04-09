type PlayerHealthProps = {
  health: number;
  full_h: number;
  half_h: number;
  empty_h: number;
};

export default function PlayerHealth({ health }: PlayerHealthProps) {
  const full_h = Math.floor(health / 2);
  let half_h = 0;
  if (health % 2 !== 0) {
    half_h = 1;
  }
  const empty_h = 10 - (full_h + half_h);

  return (
    <div className="flex w-auto mx-auto">
      {Array.from({ length: full_h }, (_, i) => (
        <img
          src="player/health/full_h.png"
          key={"full_h-" + i}
          className="w-5 h-5"
        />
      ))}
      {Array.from({ length: half_h }, (_, i) => (
        <img
          src="player/health/half_h.png"
          key={"half_h-" + i}
          className="w-5 h-5"
        />
      ))}
      {Array.from({ length: empty_h }, (_, i) => (
        <img
          src="player/health/empty_h.png"
          key={"empty_h-" + i}
          className="w-5 h-5"
        />
      ))}
    </div>
  );
}
