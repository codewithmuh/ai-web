import { brands } from "@/data/profile";

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-white/8 py-10">
      <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-foreground/40">
        Trusted by brands around the world
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl text-foreground/45 transition hover:text-foreground sm:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
