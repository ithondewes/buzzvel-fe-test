import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section className="bg-paper" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            Learn at your own pace
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Practical courses taught by people who do the work every day. Learn design,
            technology, business and more — one focused lesson at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#courses" className="w-full sm:w-auto">
              Explore courses
            </ButtonLink>
            <ButtonLink href="#about" variant="secondary" className="w-full sm:w-auto">
              See how it works
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-3 text-sm text-muted">
            <span className="flex -space-x-2" aria-hidden="true">
              <Image
                src="/images/alex.jpg"
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full border-2 border-paper object-cover"
              />
              <span className="size-8 rounded-full border-2 border-paper bg-[#F8C7B4]" />
              <span className="size-8 rounded-full border-2 border-paper bg-[#C9D4FF]" />
            </span>
            Trusted by 24,000+ learners
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-6 bottom-8 size-24 rounded-full bg-[#D9D6F5]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-3 top-8 hidden h-4/5 w-4 rounded-full bg-[#F3C7A8] sm:block"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#d7d3cb] shadow-sm">
            <Image
              src="/images/hero.jpg"
              alt="A learner in a denim jacket working at a laptop, with notes on the wall behind them."
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-[center_20%]"
            />
            <p className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
              Expert-led courses
            </p>
            <p className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold shadow-md">
              <span aria-hidden="true" className="tracking-tight text-[#E2B100]">
                ★★★★★
              </span>
              <span>4.9 avg rating</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
