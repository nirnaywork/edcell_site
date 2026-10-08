export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/30 bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary ${className}`}
    >
      {children}
    </span>
  );
}
