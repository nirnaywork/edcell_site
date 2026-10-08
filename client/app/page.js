import {
  Award,
  BadgeCheck,
  Handshake,
  Lightbulb,
  Mic2,
  Network,
  Rocket,
  Trophy
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Countdown } from "../components/home/Countdown";
import { EventFlow } from "../components/home/EventFlow";
import { SectionHeading } from "../components/ui/SectionHeading";
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
      <section className="relative isolate overflow-hidden bg-hero-wine text-surface">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full border border-accent/25" />
          <div className="absolute bottom-12 right-8 h-40 w-40 rounded-full border border-surface/10" />
          <div className="absolute left-8 top-1/3 h-28 w-28 rounded-full bg-primary-light/25 blur-3xl" />
        </div>
        <Container className="grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-20 lg:grid-cols-[1.06fr_0.94fr] lg:py-24">
          <div className="min-w-0 max-w-3xl animate-on-view">
            <Badge className="mb-6 border-accent/40 bg-accent-light/10 text-accent-light">
              {homeContent.hero.badge}
            </Badge>
            <h1 className="font-serif text-4xl font-bold leading-[1.02] tracking-normal text-surface sm:text-6xl lg:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-accent-light sm:text-xl">
              {homeContent.hero.tagline}
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-surface/75 sm:items-center sm:tracking-[0.16em]">
              <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="flex min-w-0 flex-wrap gap-x-2">
                {heroEventParts.map((part, index) => (
                  <span key={part} className="shrink-0">
                    {index > 0 ? "| " : ""}
                    {part}
                  </span>
                ))}
              </span>
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.registrationUrl} variant="accent">
                {homeContent.hero.primaryCta}
              </Button>
              <Button href="#event-flow" variant="outlineDark">
                {homeContent.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="min-w-0 animate-on-view delay-200">
            <Countdown targetDate={siteConfig.eventDate} />
          </div>
        </Container>
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              label={homeContent.about.label}
              title={homeContent.about.title}
              subtitle={homeContent.about.description}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {homeContent.about.stats.map((stat) => (
                <Card key={stat.label} className="animate-on-view">
                  <p className="font-serif text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-text-muted">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tint py-20 sm:py-24">
        <Container>
          <SectionHeading
            centered
            label={homeContent.expect.label}
            title={homeContent.expect.title}
            subtitle={homeContent.expect.description}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.expect.cards.map((item) => {
              const Icon = icons[item.icon] || Lightbulb;
              return (
                <Card key={item.title} className="group animate-on-view">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-surface transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-text-muted">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="event-flow" className="scroll-mt-24 bg-bg py-20 sm:py-24">
        <Container>
          <SectionHeading
            centered
            label={homeContent.flow.label}
            title={homeContent.flow.title}
            subtitle={homeContent.flow.description}
          />
          <EventFlow />
        </Container>
      </section>

      <section className="bg-primary py-16 text-surface sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-light">
              {homeContent.finalCta.label}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              {homeContent.finalCta.title}
            </h2>
            <p className="mt-4 text-lg text-accent-light">
              {homeContent.finalCta.description}
            </p>
          </div>
          <Button href={siteConfig.registrationUrl} variant="accent">
            {homeContent.finalCta.cta}
          </Button>
        </Container>
      </section>
    </>
  );
}
