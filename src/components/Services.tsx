import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { services } from "@/data/profile";

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="glow right-[10%] top-[20%] h-80 w-80 bg-amber/40" />

      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-rose">
          What I offer
        </p>
        <h2 className="mt-3 text-center font-display text-4xl sm:text-5xl">
          Ways we can <span className="gradient-text">work together</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="glass glass-hover group h-full rounded-3xl p-7 transition hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-rose/20 to-violet/20 p-3.5">
                  <Icon name={s.icon} className="text-rose" size={24} />
                </div>
                <span className="rounded-full bg-white/6 px-3 py-1 text-sm text-amber">
                  {s.price}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-foreground/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
