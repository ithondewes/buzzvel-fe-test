import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

export function People() {
  return (
    <section id="people" className="scroll-mt-24 bg-paper" aria-labelledby="people-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">The people</p>
          <h2
            id="people-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Meet international students &amp; teachers
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
            velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
            Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <ButtonLink href="#contact" variant="secondary" className="mt-8">
            Explore teachers and students
          </ButtonLink>
        </div>
        <div className="relative">
          <Image
            src="/images/community.jpg"
            alt="Collage of students and teachers studying, graduating, meeting online and working in studios."
            width={496}
            height={483}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
