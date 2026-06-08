import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/data/profile";

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="glow left-[15%] top-[10%] h-72 w-72 bg-rose/40" />

      <Reveal>
        <h2 className="text-center font-display text-4xl sm:text-5xl">
          What brands <span className="gradient-text">say</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="glass glass-hover flex h-full flex-col rounded-3xl p-7 transition">
              <Quote className="text-rose" />
              <blockquote className="mt-4 flex-1 text-foreground/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-foreground/50">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
