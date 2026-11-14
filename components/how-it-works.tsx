import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            How Luma works
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Less browsing. More learning.
          </h2>
        </div>

        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-line lg:hidden" />
          <div
            aria-hidden="true"
            className="absolute top-5 right-[8%] left-[8%] hidden h-px bg-line lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <li key={step.number} className="relative flex gap-4 lg:block">
                <span
                  className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-2xl ${step.swatch}`}
                >
                  <span className={`size-3 rounded-full ${step.dot}`} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Step {step.number}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
