"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { navLinks, siteConfig } from "../../data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/92 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="ED-Cell MECS home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-serif text-xl font-bold text-surface shadow-soft">
            ED
          </span>
          <span className="font-serif text-xl font-bold text-dark">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition hover:text-primary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                pathname === link.href ? "text-primary" : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.registrationUrl} variant="accent">
            Register
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-dark shadow-soft transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={`fixed inset-0 top-[4.5rem] z-40 bg-dark/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />
      <aside
        id="mobile-navigation"
        className={`fixed right-0 top-[4.5rem] z-50 h-[calc(100svh-4.5rem)] w-full max-w-sm border-l border-border bg-surface p-6 shadow-lift transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                pathname === link.href ? "bg-tint text-primary" : "text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href={siteConfig.registrationUrl} variant="accent" className="mt-6 w-full">
          Register
        </Button>
      </aside>
    </header>
  );
}
