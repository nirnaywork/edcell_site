import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ComingSoon({ title }) {
  return (
    <section className="relative overflow-hidden bg-bg py-24 sm:py-32">
      <div className="absolute inset-0 line-field opacity-35" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl border border-border bg-surface p-8 shadow-lift sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
            Coming Soon
          </p>
          <h1 className="mt-4 font-display text-[clamp(4rem,14vw,8rem)] font-bold uppercase leading-none tracking-[-0.03em] text-text">
            {title}
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-text-muted">
            This section is ready for the next build phase.
          </p>
          <Button href="/" variant="outline" className="mt-8">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
