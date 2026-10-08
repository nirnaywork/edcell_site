import Image from "next/image";
import {
  Award,
  Lightbulb,
  MapPin,
  Mic2,
  Network,
  Rocket,
  Trophy
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Countdown } from "../components/home/Countdown";
import { EventFlow } from "../components/home/EventFlow";
import { Marquee } from "../components/ui/Marquee";
import { PhotoSlot } from "../components/ui/PhotoSlot";
import { Reveal } from "../components/motion/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SectionNumber } from "../components/ui/SectionNumber";
import { homeContent, siteConfig } from "../data/siteConfig";

const icons = {
  mic: Mic2,
  network: Network,
  rocket: Rocket,
  trophy: Trophy,
  lightbulb: Lightbulb,
  award: Award
};



export default function Home() {
  const heroEventParts = homeContent.hero.eventLine.split("|").map((part) => part.trim());

  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-wine text-text">
        <div className="absolute inset-0 -z-10 line-field opacity-45" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-20 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full border border-border/60 opacity-35"
          aria-hidden="true"
        />
        <Container className="grid min-h-[calc(100svh-4.75rem)] gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="min-w-0 lg:col-span-6">
            <Reveal>
              <p className="mb-5 border-l border-accent pl-4 text-xs font-black uppercase tracking-[0.28em] text-accent">
                {homeContent.hero.badge}
              </p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[1.0] tracking-[-0.02em] text-text text-balance">
                {homeContent.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.08} className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
              <p className="max-w-xl text-lg font-semibold leading-7 text-accent-light sm:text-xl">
                {homeContent.hero.tagline}
              </p>
              <div className="flex flex-col gap-3">
                <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-black uppercase tracking-[0.18em] text-text-muted">
                  {heroEventParts.map((part, index) => (
                    <span key={part}>
                      {index > 0 ? "| " : ""}
                      {part}
                    </span>
                  ))}
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.registrationUrl} variant="accent" target="_blank" rel="noopener noreferrer">
                    {homeContent.hero.primaryCta}
                  </Button>
                  <Button href="#event-flow" variant="outlineDark">
                    {homeContent.hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="min-w-0 lg:col-start-7 lg:col-span-6 xl:col-start-8 xl:col-span-5">
            <Countdown targetDate={siteConfig.eventDate} />
          </Reveal>
        </Container>
        <Marquee />
      </section>

      <section className="relative overflow-hidden bg-bg py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-12">
              <SectionHeading
                label={homeContent.about.label}
                title={homeContent.about.title}
                subtitle={homeContent.about.description}
              />
            </Reveal>

          </div>

          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.about.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.04}
                className="bg-surface p-6 text-left sm:p-8"
              >
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-none tracking-[-0.02em] text-text">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-text-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-12 group relative overflow-hidden border border-border bg-surface">
            <div className="block relative isolate aspect-video md:aspect-[21/8] overflow-hidden">
              <Image 
                src="/assets/mecs.jpg"
                alt="Matrusri Engineering College Campus"
                fill
                className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent opacity-90" />
              <div className="absolute inset-0 line-field opacity-30" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                  Venue
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase text-text">
                  Matrusri Engineering College
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <a 
                    href="https://www.google.com/maps/search/Matrusri+Engineering+College,+Saidabad,+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:text-accent focus-visible:outline-none focus-visible:text-accent"
                  >
                    <MapPin className="h-4 w-4" />
                    Google Maps
                  </a>
                  <a 
                    href="https://maps.apple.com/?q=Matrusri+Engineering+College,+Saidabad,+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:text-accent focus-visible:outline-none focus-visible:text-accent"
                  >
                    <MapPin className="h-4 w-4" />
                    Apple Maps
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-dark py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-4 lg:order-last">
              <SectionHeading
                label={homeContent.expect.label}
                title={homeContent.expect.title}
                subtitle={homeContent.expect.description}
              />
            </Reveal>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 lg:order-first">
              {homeContent.expect.cards.map((item, index) => {
                const Icon = icons[item.icon] || Lightbulb;
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.045}
                    className="group relative flex h-full flex-col overflow-hidden bg-surface p-6 transition duration-300 hover:bg-surface-2"
                  >
                    <span className="font-display text-4xl font-bold leading-none text-primary/35 transition duration-300 group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="absolute right-5 top-5 h-10 w-10 text-border transition duration-300 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    <div className="mt-10 max-w-md">
                      <h3 className="font-display text-2xl font-semibold uppercase leading-[1.1] text-text">
                        {item.title}
                      </h3>
                      <p className="mt-4 leading-7 text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="event-flow" className="scroll-mt-24 bg-bg py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-12">
                <SectionHeading
                  label={homeContent.flow.label}
                  title={homeContent.flow.title}
                  subtitle={homeContent.flow.description}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <EventFlow />
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-primary-dark py-16 text-text md:py-24">
        <div className="absolute inset-0 line-field opacity-25" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                {homeContent.finalCta.label}
              </p>
              <h2 className="mt-5 max-w-5xl font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[1.0] tracking-[-0.02em] text-text text-balance">
                {homeContent.finalCta.title}
              </h2>
            </div>
            <div className="border-l border-border pl-6 lg:col-span-5">
              <p className="mb-8 text-xl leading-8 text-accent-light">
                {homeContent.finalCta.description}
              </p>
              <Button href={siteConfig.registrationUrl} variant="accent">
                {homeContent.finalCta.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
