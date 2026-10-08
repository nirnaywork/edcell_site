export function SectionNumber({ number, className = "" }) {
  return (
    <span
      className={`font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tight text-primary/20 ${className}`}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
