export function SectionNumber({ number, className = "" }) {
  return (
    <span
      className={`font-display text-[clamp(4rem,13vw,11rem)] font-bold leading-none tracking-tight text-primary/20 ${className}`}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
