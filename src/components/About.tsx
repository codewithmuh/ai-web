import Image from "next/image";
import { Reveal } from "./Reveal";
import { profile, audience } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="https://picsum.photos/seed/maya-about/800/800"
              alt="On location"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            About me
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Stories worth <span className="gradient-text">stopping</span> for
          </h2>
          <p className="mt-5 text-foreground/65">{profile.bio}</p>
          <p className="mt-4 text-foreground/65">
            Over the last five years I&apos;ve turned a passion for the road
            into a community of hundreds of thousands who trust where I take
            them — and the brands I bring along for the ride.
          </p>

          {/* Audience insight bars */}
          <div className="mt-8 space-y-4">
            <p className="text-sm font-semibold text-foreground/80">
              Where my audience is
            </p>
            {audience.topCountries.map((c) => (
              <div key={c.name}>
                <div className="mb-1 flex justify-between text-sm text-foreground/60">
                  <span>{c.name}</span>
                  <span>{c.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose to-violet"
                    style={{ width: `${c.pct * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <div className="font-display text-2xl">{audience.gender.female}%</div>
              <div className="text-xs text-foreground/50">Female audience</div>
            </div>
            <div>
              <div className="font-display text-2xl">{audience.ageRange}</div>
              <div className="text-xs text-foreground/50">Core age group</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
