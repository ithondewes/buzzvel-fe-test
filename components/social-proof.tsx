import Image from "next/image";
import { stats } from "@/lib/content";

export function SocialProof() {
  return (
    <section className="bg-white" aria-labelledby="proof-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
        <figure>
          <blockquote>
            <p
              id="proof-heading"
              className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
            >
              <span aria-hidden="true" className="mb-3 block text-4xl leading-none text-blue">
                “
              </span>
              The lessons are short enough to fit into my week, but detailed enough that I
              actually leave with something I can use.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <Image
              src="/images/alex.jpg"
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full object-cover"
            />
            <span>
              <span className="block text-sm font-semibold">Alex Morgan</span>
              <span className="block text-sm text-muted">Product Manager</span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-7 lg:border-l lg:border-line lg:pl-10">
          {stats.map((stat) => (
            <div key={stat.value}>
              <dt className="font-display text-3xl font-extrabold tracking-tight text-blue sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
