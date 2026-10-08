export function Card({ children, className = "" }) {
  return (
    <article
      className={`border border-border bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-light ${className}`}
    >
      {children}
    </article>
  );
}
