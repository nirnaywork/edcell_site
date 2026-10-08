export function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-dark sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-8 text-text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
