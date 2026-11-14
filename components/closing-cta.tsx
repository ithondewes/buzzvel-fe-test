import { ButtonLink } from "@/components/button-link";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#F8E7B0]" aria-labelledby="cta-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -left-6 top-10 size-24 rounded-full bg-[#F3C7A8]/80" />
        <span className="absolute left-16 top-6 size-10 rotate-12 rounded-lg border-2 border-[#E7B48A]/70" />
        <span className="absolute right-10 top-8 size-16 rotate-6 rounded-2xl bg-[#F6C98A]/70" />
        <span className="absolute bottom-8 right-24 size-8 rounded-full bg-[#F6C98A]" />
        <span className="absolute bottom-10 left-1/3 size-6 rounded-md bg-white/50" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <p className="mx-auto flex w-fit -space-x-2" aria-hidden="true">
          <span className="size-9 rounded-full border-2 border-[#F8E7B0] bg-[#F3C7A8]" />
          <span className="size-9 rounded-full border-2 border-[#F8E7B0] bg-[#C9D4FF]" />
          <span className="size-9 rounded-full border-2 border-[#F8E7B0] bg-[#F6E7A8]" />
          <span className="size-9 rounded-full border-2 border-[#F8E7B0] bg-white" />
        </p>
        <h2
          id="cta-heading"
          className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          What will you learn next?
        </h2>
        <p className="mt-3 text-base text-ink/80">Start with one course. Build from there.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#courses">Explore all courses</ButtonLink>
          <ButtonLink href="#contact" variant="inverse">
            Join Luma
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
