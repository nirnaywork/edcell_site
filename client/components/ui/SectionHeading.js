export function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="inline-block bg-accent px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-dark">
        {label}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[1.0] tracking-[-0.02em] text-text text-balance">
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
