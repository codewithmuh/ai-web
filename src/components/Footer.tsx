import { Icon } from "./Icon";
import { profile, socials } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-xl">
            {profile.name}
            <span className="gradient-text">.</span>
          </div>
          <p className="text-sm text-foreground/50">
            {profile.role} · {profile.handle}
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="glass glass-hover inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-0.5"
            >
              <Icon name={s.icon} size={16} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-foreground/35">
        © {new Date().getFullYear()} {profile.name}. Made with ♥ for the road.
      </p>
    </footer>
  );
}
