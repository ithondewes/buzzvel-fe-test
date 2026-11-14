import Image from "next/image";
import { courseFacts } from "@/lib/content";
import { ButtonLink } from "@/components/button-link";
import { publicPath } from "@/lib/public-path";

export function FeaturedCourse() {
  return (
    <section id="featured" className="scroll-mt-24 bg-blue text-white" aria-labelledby="featured-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="relative">
          <p className="absolute left-4 top-4 z-10 rounded-lg bg-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
            Featured course
          </p>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-blue-dark">
            <Image
              src={publicPath("/images/featured.jpg")}
              alt="A designer arranging material samples, sketches and models on a cutting mat."
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            Most popular this month
          </p>
          <h2
            id="featured-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Designing products people understand.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
            Learn how to turn complex workflows into simple, intentional product experiences
            through research, structure and thoughtful interaction design.
          </p>
          <p className="mt-5 text-sm text-white/90">
            with <span className="font-semibold text-white">Maya Chen</span> · Senior Product
            Designer
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {courseFacts.map((fact) => (
              <li
                key={fact}
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="#contact" variant="yellow" className="w-full sm:w-auto">
              View course
            </ButtonLink>
            <a href="#courses" className="text-sm font-semibold text-white hover:underline">
              Browse all courses <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
