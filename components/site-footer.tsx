import { footerColumns } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Practical learning for curious people.
          </p>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              {column.title}
            </h2>
            <ul className="mt-4 grid gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/85 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-5 text-sm text-white/60 sm:px-8">
        <p>© 2026 Luma Learning</p>
      </div>
    </footer>
  );
}
