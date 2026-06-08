import { Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
          <div className="glow left-1/4 top-0 h-72 w-72 bg-rose/50" />
          <div className="glow right-1/4 bottom-0 h-72 w-72 bg-violet/50" />

          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Let&apos;s create
          </p>
          <h2 className="relative mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Have a destination <br />
            <span className="gradient-text">in mind?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-foreground/65">
            Available for brand trips, campaigns and ambassadorships worldwide.
            Tell me about your project and let&apos;s make something people remember.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-violet px-8 py-3.5 font-semibold text-[#0b0710] transition hover:scale-105"
          >
            <Mail size={18} /> {profile.email}
          </a>

          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition hover:-translate-y-0.5"
              >
                <Icon name={s.icon} size={16} className="text-rose" />
                {s.name}
                <ArrowUpRight size={14} className="text-foreground/40" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
