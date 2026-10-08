import Link from "next/link";
import { navLinks, siteConfig } from "../../data/siteConfig";
import { Container } from "../ui/Container";

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { label: "Instagram", icon: InstagramIcon, hrefKey: "instagram" },
  { label: "LinkedIn", icon: LinkedinIcon, hrefKey: "linkedin" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark text-text">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.75fr_0.6fr]">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-none tracking-[-0.03em] text-text">
              {siteConfig.name}
            </h2>
            <p className="mt-5 max-w-md leading-7 text-text-muted">
              {siteConfig.footerTagline}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-accent">
              Quick Links
            </h3>
            <nav className="mt-5 grid gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-max border-b border-transparent text-sm font-semibold text-text-muted transition hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-accent">
              Social
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                const href = siteConfig.socialLinks?.[item.hrefKey];
                return (
                  <a
                    key={item.label}
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface text-text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs font-semibold tracking-wide text-text-muted">
          © 2026 E-Summit. Organized by Entrepreneurship Development Cell, MECS.
        </div>
      </Container>
    </footer>
  );
}
