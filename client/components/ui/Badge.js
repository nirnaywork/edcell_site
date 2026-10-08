export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-accent-light ${className}`}
    >
      {children}
    </span>
  );
}
