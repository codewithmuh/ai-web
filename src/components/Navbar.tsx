"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-xl tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="gradient-text">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/70 transition hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-rose to-violet px-5 py-2 text-sm font-semibold text-[#0b0710] transition hover:opacity-90 md:inline-block"
        >
          Work with me
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-foreground/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gradient-to-r from-rose to-violet px-4 py-2 text-center font-semibold text-[#0b0710]"
              >
                Work with me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
