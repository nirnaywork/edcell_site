import Link from "next/link";

const variants = {
  primary:
    "border-primary bg-primary text-text after:bg-primary-light hover:border-primary-light",
  accent:
    "border-accent bg-accent text-dark after:bg-accent-light hover:border-accent-light",
  outline:
    "border-border bg-transparent text-text after:bg-surface-2 hover:border-accent hover:text-accent-light",
  outlineDark:
    "border-border bg-transparent text-text after:bg-surface-2 hover:border-accent hover:text-accent-light"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-none border px-6 py-3 text-center text-sm font-black uppercase tracking-[0.12em] shadow-soft transition duration-300 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variants[variant]} ${className}`;
  const content = (
    <span className="relative z-10 inline-flex items-center gap-3">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        -&gt;
      </span>
    </span>
  );

  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
