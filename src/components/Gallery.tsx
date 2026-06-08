import Image from "next/image";
import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { gallery, profile } from "@/data/profile";

export function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            The feed
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Latest <span className="gradient-text">captures</span>
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-foreground/60 transition hover:text-rose"
          >
            <Icon name="instagram" size={18} /> {profile.handle}
          </a>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} delay={(i % 4) * 0.06}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/8">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0b0710]/55 opacity-0 transition group-hover:opacity-100">
                <span className="flex items-center gap-2 font-semibold">
                  <Heart size={18} className="fill-rose text-rose" /> {g.likes}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
