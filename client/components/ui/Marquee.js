const words = ["Founders", "Hackathon", "Ideathon", "Pitch", "Network"];

export function Marquee() {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className="overflow-hidden border-y border-border bg-surface-2/70 py-3 text-text">
      <div className="ticker-track flex w-max items-center gap-5 whitespace-nowrap">
        {repeated.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="flex items-center gap-5 font-display text-2xl font-semibold uppercase tracking-[0.12em] text-text/80 sm:text-3xl"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
