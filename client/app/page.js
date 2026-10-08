import {
  Award,
  Lightbulb,
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

const expectLayouts = [
  "sm:col-span-2 lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-3"
];

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
        <Container className="grid min-h-[calc(100svh-4.75rem)] gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_0.08fr_0.72fr] lg:items-center lg:py-20">
          <div className="min-w-0 lg:col-span-2">
            <Reveal>
              <p className="mb-5 border-l border-accent pl-4 text-xs font-black uppercase tracking-[0.28em] text-accent">
                {homeContent.hero.badge}
              </p>
              <h1 className="font-display text-[clamp(3.1rem,14vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em] text-text text-balance lg:text-[clamp(7rem,12vw,12.5rem)] xl:text-[clamp(8rem,11vw,13rem)]">
                {homeContent.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 grid gap-7 border-t border-border pt-7 md:grid-cols-[0.7fr_1fr]">
              <p className="max-w-xl text-xl font-semibold leading-8 text-accent-light sm:text-2xl">
                {homeContent.hero.tagline}
              </p>
              <div className="grid gap-6">
                <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-black uppercase leading-6 tracking-[0.18em] text-text-muted">
                  {heroEventParts.map((part, index) => (
                    <span key={part}>
                      {index > 0 ? "| " : ""}
                      {part}
                    </span>
                  ))}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.registrationUrl} variant="accent">
                    {homeContent.hero.primaryCta}
                  </Button>
                  <Button href="#event-flow" variant="outlineDark">
                    {homeContent.hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="min-w-0 lg:col-start-3">
            <Countdown targetDate={siteConfig.eventDate} />
          </Reveal>
        </Container>
        <Marquee />
      </section>

      <section className="relative overflow-hidden bg-bg py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_0.18fr_0.68fr] lg:items-start">
            <Reveal className="lg:col-span-2">
              <SectionNumber number="01" />
              <SectionHeading
                label={homeContent.about.label}
                title={homeContent.about.title}
                subtitle={homeContent.about.description}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <PhotoSlot label="Event photos coming soon" />
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.about.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.04}
                className="bg-surface p-6 sm:p-8"
              >
                <p className="font-display text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-none tracking-[-0.04em] text-text">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-text-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-dark py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
            <Reveal>
              <SectionNumber number="02" />
              <SectionHeading
                label={homeContent.expect.label}
                title={homeContent.expect.title}
                subtitle={homeContent.expect.description}
              />
            </Reveal>

            <div className="grid auto-rows-[minmax(13rem,auto)] gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {homeContent.expect.cards.map((item, index) => {
                const Icon = icons[item.icon] || Lightbulb;
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.045}
                    className={`group relative overflow-hidden bg-surface p-6 transition duration-300 hover:bg-surface-2 ${expectLayouts[index]}`}
                  >
                    <span className="font-display text-6xl font-bold leading-none text-primary/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="absolute right-5 top-5 h-10 w-10 text-border transition duration-300 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    <div className="mt-10 max-w-md">
                      <h3 className="font-display text-3xl font-semibold uppercase leading-none text-text">
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

      <section id="event-flow" className="scroll-mt-24 bg-bg py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
              <SectionNumber number="03" />
              <SectionHeading
                label={homeContent.flow.label}
                title={homeContent.flow.title}
                subtitle={homeContent.flow.description}
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <EventFlow />
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-primary-dark py-20 text-text sm:py-28">
        <div className="absolute inset-0 line-field opacity-25" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                {homeContent.finalCta.label}
              </p>
              <h2 className="mt-5 max-w-5xl font-display text-[clamp(4.2rem,14vw,13rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em] text-text">
                {homeContent.finalCta.title}
              </h2>
            </div>
            <div className="border-l border-border pl-6">
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
