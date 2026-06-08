/**
 * ============================================================
 *  EDIT EVERYTHING ABOUT YOUR PORTFOLIO HERE
 * ============================================================
 *  This is the single source of truth for the whole site.
 *  Change your name, handle, stats, services, links and images
 *  below — the pages update automatically. Replace the picsum
 *  placeholder images with your real photos when ready.
 */

export const profile = {
  name: "Muhammad Rashid",
  handle: "@mayaonthemove",
  role: "Travel & Lifestyle Creator",
  location: "Currently in Bali 🌴",
  tagline: "Chasing sunsets, sharing stories",
  bio: "I'm a full-time travel & lifestyle content creator helping brands tell stories that feel like a postcard you actually want to read. From hidden beaches to boutique stays, I turn destinations into moments my community can't scroll past.",
  email: "solotravel.rashid@gmail.com",
  // Hero portrait — swap with your own photo
  avatar: "/me.jpg",
};

// Big headline numbers shown in the stats band
export const stats = [
  { label: "Instagram Followers", value: "248K", icon: "instagram" },
  { label: "Avg. Reel Reach", value: "1.2M", icon: "play" },
  { label: "Engagement Rate", value: "6.8%", icon: "heart" },
  { label: "Brands Partnered", value: "120+", icon: "handshake" },
];

// Audience / platform breakdown cards
export const platforms = [
  {
    name: "Instagram",
    handle: "@mayaonthemove",
    followers: "248K",
    detail: "Daily stories, reels & travel guides",
    href: "https://instagram.com",
    icon: "instagram",
    gradient: "from-pink-500 via-rose-500 to-amber-400",
  },
  {
    name: "TikTok",
    handle: "@mayaonthemove",
    followers: "182K",
    detail: "Short-form travel hacks & vlogs",
    href: "https://tiktok.com",
    icon: "music",
    gradient: "from-cyan-400 via-sky-500 to-fuchsia-500",
  },
  {
    name: "YouTube",
    handle: "Maya Sloane",
    followers: "64K",
    detail: "Cinematic destination films",
    href: "https://youtube.com",
    icon: "youtube",
    gradient: "from-red-500 via-rose-500 to-orange-400",
  },
  {
    name: "Pinterest",
    handle: "Maya Sloane",
    followers: "31K",
    detail: "Travel mood boards & itineraries",
    href: "https://pinterest.com",
    icon: "image",
    gradient: "from-rose-500 via-red-400 to-amber-300",
  },
];

// Quick audience insight bars (Instagram analytics vibe)
export const audience = {
  topCountries: [
    { name: "United States", pct: 34 },
    { name: "United Kingdom", pct: 18 },
    { name: "Australia", pct: 12 },
    { name: "UAE", pct: 9 },
    { name: "Germany", pct: 7 },
  ],
  gender: { female: 64, male: 36 },
  ageRange: "25–34 (52%)",
};

// What you offer to brands
export const services = [
  {
    title: "Instagram Reels & Stories",
    desc: "Scroll-stopping short-form content shot, edited and posted to my engaged community.",
    icon: "play",
    price: "from $850",
  },
  {
    title: "Brand Trip Collaborations",
    desc: "Multi-day destination coverage — hotels, tourism boards and experiences in cinematic detail.",
    icon: "plane",
    price: "from $3,500",
  },
  {
    title: "UGC & Product Photography",
    desc: "Authentic, license-ready photo & video content for your own channels and ads.",
    icon: "camera",
    price: "from $600",
  },
  {
    title: "Long-Term Ambassadorships",
    desc: "Ongoing storytelling partnerships that build real trust between your brand and my audience.",
    icon: "sparkles",
    price: "Let's talk",
  },
];

// Instagram-style gallery grid (replace seeds with your photos)
export const gallery = [
  { src: "https://picsum.photos/seed/travel-santorini/700/900", alt: "Santorini", likes: "12.4K" },
  { src: "https://picsum.photos/seed/travel-beach/700/900", alt: "Beach day", likes: "9.1K" },
  { src: "https://picsum.photos/seed/travel-mountains/700/900", alt: "Mountains", likes: "15.2K" },
  { src: "https://picsum.photos/seed/travel-cafe/700/900", alt: "Cafe morning", likes: "7.8K" },
  { src: "https://picsum.photos/seed/travel-desert/700/900", alt: "Desert", likes: "11.0K" },
  { src: "https://picsum.photos/seed/travel-city/700/900", alt: "City lights", likes: "8.6K" },
  { src: "https://picsum.photos/seed/travel-jungle/700/900", alt: "Jungle", likes: "13.7K" },
  { src: "https://picsum.photos/seed/travel-boat/700/900", alt: "Boat life", likes: "10.3K" },
];

// Brands you've worked with (text marquee)
export const brands = [
  "Airbnb",
  "GoPro",
  "Emirates",
  "Lululemon",
  "Away",
  "Booking.com",
  "Sephora",
  "Canon",
  "Marriott",
  "Daniel Wellington",
];

// Social proof
export const testimonials = [
  {
    quote:
      "Maya's content drove a 3x lift in bookings during our launch week. Her storytelling makes our resort feel like a dream you have to live.",
    name: "Elena Voss",
    title: "CMO, Azure Beach Resorts",
    avatar: "https://picsum.photos/seed/person-elena/100/100",
  },
  {
    quote:
      "Easily the most professional creator we've partnered with. Deliverables early, on-brand, and the engagement spoke for itself.",
    name: "Marco Reyes",
    title: "Brand Lead, Wander Co.",
    avatar: "https://picsum.photos/seed/person-marco/100/100",
  },
  {
    quote:
      "Her audience genuinely trusts her. We sold out our travel capsule in 48 hours after her reel went live.",
    name: "Priya Nair",
    title: "Founder, Roam Apparel",
    avatar: "https://picsum.photos/seed/person-priya/100/100",
  },
];

// Footer / contact social links
export const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "TikTok", href: "https://tiktok.com", icon: "music" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { name: "Pinterest", href: "https://pinterest.com", icon: "image" },
  { name: "Email", href: "mailto:solotravel.rashid@gmail.com", icon: "mail" },
];
