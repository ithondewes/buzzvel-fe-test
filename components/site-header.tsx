"use client";

import { useEffect, useId, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="rounded-md" aria-label="Luma, home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-lg px-3 py-2 text-sm font-semibold text-ink">
            Log in
          </a>
          <a
            href="#courses"
            className="inline-flex h-10 items-center rounded-xl bg-blue px-4 text-sm font-semibold text-white hover:bg-blue-dark"
          >
            Start learning
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-line bg-white text-sm font-semibold"
            >
              Log in
            </a>
            <a
              href="#courses"
              onClick={closeMenu}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue text-sm font-semibold text-white"
            >
              Start learning
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {open ? (
        <path
          d="M4 4l10 10M14 4L4 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 5h12M3 9h12M3 13h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
