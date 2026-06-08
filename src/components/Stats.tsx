import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { stats, platforms } from "@/data/profile";

export function Stats() {
  return (
    <section id="stats" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="glow left-[20%] top-0 h-72 w-72 bg-violet/60" />

      {/* Headline numbers */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass glass-hover rounded-2xl p-6 text-center transition">
              <Icon name={s.icon} className="mx-auto mb-3 text-rose" size={26} />
              <div className="font-display text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-foreground/55">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Platform breakdown */}
      <Reveal>
        <h2 className="mt-20 text-center font-display text-4xl sm:text-5xl">
          Find me <span className="gradient-text">everywhere</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-foreground/60">
          A connected community across every platform that matters to your brand.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group block h-full rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <div
                className={`inline-flex rounded-xl bg-gradient-to-br ${p.gradient} p-3`}
              >
                <Icon name={p.icon} className="text-white" size={22} />
              </div>
              <div className="mt-4 font-display text-2xl">{p.followers}</div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-foreground/50">{p.handle}</div>
              <p className="mt-2 text-sm text-foreground/55">{p.detail}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
