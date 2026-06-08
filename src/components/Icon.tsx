import {
  Mail,
  Play,
  Heart,
  Handshake,
  Plane,
  Camera,
  Sparkles,
  type LucideProps,
} from "lucide-react";

/* Brand icons (Instagram/YouTube/TikTok/Pinterest) are no longer shipped by
   lucide for trademark reasons, so we render them as inline SVGs here. They
   accept the same `size`/`className` props as the lucide icons. */

type BrandProps = { size?: number; className?: string };

function InstagramIcon({ size = 24, className }: BrandProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 24, className }: BrandProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 8.6a3 3 0 0 0-2.1-2.1C18 6 12 6 12 6s-6 0-7.9.5A3 3 0 0 0 2 8.6 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.4a3 3 0 0 0 2.1 2.1C6 18 12 18 12 18s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .3-3.4 31 31 0 0 0-.3-3.4Z" />
      <path d="m10 15 5-3-5-3Z" fill="currentColor" />
    </svg>
  );
}

function TiktokIcon({ size = 24, className }: BrandProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 3c.3 2.2 1.6 3.9 3.8 4.2v2.5c-1.3.1-2.5-.2-3.8-.9v5.6c0 3.5-2.6 5.6-5.5 5.6a5.4 5.4 0 0 1-5.4-5.4c0-3.3 2.9-5.7 6.2-5.2v2.6c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7 1.2-2.7 2.8 0 1.7 1.5 2.9 3 2.7 1.4-.2 2.3-1.4 2.3-2.9V3H16Z" />
    </svg>
  );
}

function PinterestIcon({ size = 24, className }: BrandProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.3 2C6.9 2 4 5.6 4 9.3c0 1.7 1 3.9 2.5 4.6.3.1.4 0 .4-.2l.2-.9c0-.1 0-.2-.1-.4-.5-.6-.9-1.7-.9-2.7 0-2.6 2-5.2 5.3-5.2 2.9 0 4.9 2 4.9 4.7 0 3.1-1.6 5.3-3.6 5.3-1.1 0-2-.9-1.7-2.1.3-1.4 1-2.8 1-3.8 0-.9-.5-1.6-1.5-1.6-1.1 0-2.1 1.2-2.1 2.8 0 1 .4 1.7.4 1.7l-1.4 5.8c-.4 1.7-.1 3.9 0 4.1 0 .1.2.2.3.1.1-.1 1.7-2.1 2.2-4l.8-3.1c.4.8 1.6 1.4 2.8 1.4 3.7 0 6.3-3.4 6.3-7.9C20 5.2 16.8 2 12.3 2Z" />
    </svg>
  );
}

const lucideMap = {
  mail: Mail,
  play: Play,
  heart: Heart,
  handshake: Handshake,
  plane: Plane,
  camera: Camera,
  sparkles: Sparkles,
} as const;

const brandMap = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  music: TiktokIcon,
  image: PinterestIcon,
} as const;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Brand = brandMap[name as keyof typeof brandMap];
  if (Brand) {
    return <Brand size={props.size as number} className={props.className} />;
  }
  const Lucide = lucideMap[name as keyof typeof lucideMap] ?? Sparkles;
  return <Lucide {...props} />;
}
