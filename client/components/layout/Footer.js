import { BriefcaseBusiness, Camera, X } from "lucide-react";
import Link from "next/link";
import { navLinks, siteConfig } from "../../data/siteConfig";
import { Container } from "../ui/Container";

const socials = [
  { label: "Instagram", icon: Camera },
  { label: "LinkedIn", icon: BriefcaseBusiness },
  { label: "X", icon: X }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark text-text">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.75fr_0.6fr]">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-none tracking-[-0.03em] text-text">
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
                return (
                  <span
                    key={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface text-text-muted transition hover:border-accent hover:text-accent"
                    aria-label={item.label}
                    role="img"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}
