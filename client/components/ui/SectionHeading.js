export function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
        {label}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-text text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
