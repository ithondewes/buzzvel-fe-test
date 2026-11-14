import { skillTracks } from "@/lib/content";

export function SkillTracks() {
  return (
    <section id="courses" className="scroll-mt-24 bg-white" aria-labelledby="courses-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          Find your next skill
        </p>
        <h2
          id="courses-heading"
          className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Learn something worth knowing.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          Short, practical courses designed around skills you can put to work immediately.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillTracks.map((track) => (
            <li key={track.number}>
              <a
                href="#featured"
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-blue/40 hover:bg-paper"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-muted">
                  {track.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{track.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{track.description}</p>
                <span className="mt-6 text-sm font-semibold text-ink">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
