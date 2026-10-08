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
    <footer className="bg-primary-dark text-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.7fr]">
          <div>
            <h2 className="font-serif text-3xl font-bold">{siteConfig.name}</h2>
            <p className="mt-4 max-w-md leading-7 text-accent-light">
              {siteConfig.footerTagline}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Quick Links
            </h3>
            <nav className="mt-4 grid gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-surface/80 transition hover:text-accent-light focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Social
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-surface/15 bg-surface/10 text-surface"
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
        <div className="mt-10 border-t border-surface/10 pt-6 text-sm text-surface/70">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}
