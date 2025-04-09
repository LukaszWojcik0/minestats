type PlayerAddHealthProps = {
  addHealth: number;
  full_h: number;
  half_h: number;
};

export default function PlayerAddHealth({ addHealth }: PlayerAddHealthProps) {
  const full_h = Math.floor(addHealth / 2);
  const half_h = addHealth % 2;

  return (
    <div className="flex w-auto">
      {Array.from({ length: full_h }, (_, i) => (
        <img
          src="player/health/g_full_h.png"
          key={"g_full_h-" + i}
          className="w-5 h-5"
        />
      ))}
      {Array.from({ length: half_h }, (_, i) => (
        <img
          src="player/health/g_half_h.png"
          key={"g_half_h-" + i}
          className="w-5 h-5"
        />
      ))}
      <img src="player/health/g_full_h.png" className="w-5 h-5 opacity-0" />
    </div>
  );
}
