import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ComingSoon({ title }) {
  return (
    <section className="bg-bg py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Coming Soon
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-dark sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 leading-7 text-text-muted">
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
