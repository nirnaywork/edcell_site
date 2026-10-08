export function Card({ children, className = "" }) {
  return (
    <article
      className={`rounded-xl border border-border bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      {children}
    </article>
  );
}
