"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { navLinks, siteConfig } from "../../data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
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

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-border bg-bg/90 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-bg/65 backdrop-blur"
      }`}
    >
      <Container className="flex h-[4.75rem] items-center justify-between py-3">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="ED-Cell MECS home"
        >
          <span className="flex h-11 w-11 items-center justify-center border border-primary-light bg-primary font-display text-xl font-bold uppercase leading-none text-text shadow-soft transition group-hover:bg-primary-light">
            ED
          </span>
          <span className="font-display text-xl font-bold uppercase leading-none tracking-tight text-text">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs font-black uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                pathname === link.href ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 hover:scale-x-100" />
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
          className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface text-text shadow-soft transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            id="mobile-navigation"
            className="fixed inset-0 top-[4.75rem] z-50 border-t border-border bg-bg p-5 shadow-lift lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex h-full flex-col justify-between" aria-label="Mobile primary">
              <div className="grid gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: index * 0.045 }}
                  >
                    <Link
                      href={link.href}
                      className={`block border-b border-border py-5 font-display text-[clamp(2.4rem,12vw,4.8rem)] font-bold uppercase leading-none tracking-[-0.02em] transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        pathname === link.href ? "text-accent" : "text-text"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Button href={siteConfig.registrationUrl} variant="accent" className="mt-8 w-full">
                Register
              </Button>
            </nav>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
