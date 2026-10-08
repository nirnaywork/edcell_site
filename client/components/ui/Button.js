import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-surface shadow-soft hover:bg-primary-dark focus-visible:ring-primary",
  accent:
    "bg-accent text-dark shadow-soft hover:bg-accent-light focus-visible:ring-accent",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-surface focus-visible:ring-primary",
  outlineDark:
    "border border-surface/35 text-surface hover:border-accent hover:bg-surface/10 focus-visible:ring-accent"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-center text-sm font-bold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
