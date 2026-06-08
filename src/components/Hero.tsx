"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Sparkles } from "lucide-react";
import { Icon } from "./Icon";
import { profile, stats, platforms } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Instagram-colored ambient glows */}
      <div className="glow left-[-8%] top-[8%] h-80 w-80 bg-[#d62976]" />
      <div className="glow left-[20%] top-[45%] h-72 w-72 bg-[#962fbf]" />
      <div className="glow right-[-5%] top-[25%] h-96 w-96 bg-[#fa7e1e]/80" />
      <div className="glow bottom-[5%] left-[35%] h-72 w-72 bg-[#4f5bd5]/70" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 text-left md:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT — content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ig-gradient inline-flex items-center gap-2 rounded-full px-[2px] py-[2px] text-sm"
          >
            <span className="flex items-center gap-2 rounded-full bg-[#0b0710] px-4 py-1.5 font-medium">
              <Sparkles size={14} className="text-[#feda75]" />
              Available for brand collaborations
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/70"
          >
            <MapPin size={14} className="text-[#d62976]" />
            {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-6xl leading-[1.02] sm:text-7xl lg:text-8xl"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="ig-text">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl text-foreground/75"
          >
            <span>{profile.role}</span>
            <a
              href={platforms[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-gradient inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-base font-semibold text-white"
            >
              <Icon name="instagram" size={15} className="text-white" />
              {profile.handle}
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-5 max-w-lg text-foreground/60"
          >
            {profile.tagline}. {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="ig-gradient rounded-full px-7 py-3 font-semibold text-white shadow-lg shadow-[#d62976]/30 transition hover:scale-105"
            >
              Collaborate with me
            </a>
            <a
              href="#gallery"
              className="glass glass-hover rounded-full px-7 py-3 font-semibold transition"
            >
              View my work
            </a>
          </motion.div>

          {/* Platform follower chips to fill the space */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl">{s.value}</div>
                <div className="text-xs text-foreground/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar with Instagram ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float ig-ring rounded-[2.3rem] p-[4px] shadow-2xl shadow-[#962fbf]/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-[#0b0710]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0710]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Instagram follower card */}
          <div className="glass absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl px-5 py-3">
            <div className="ig-gradient flex h-10 w-10 items-center justify-center rounded-xl">
              <Icon name="instagram" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-display text-2xl ig-text">
                {platforms[0].followers}
              </div>
              <div className="text-xs text-foreground/60">followers & growing</div>
            </div>
          </div>

          {/* Floating engagement card */}
          <div className="glass absolute -right-4 top-8 rounded-2xl px-4 py-2.5">
            <div className="font-display text-xl">{stats[2].value}</div>
            <div className="text-[11px] text-foreground/55">engagement</div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
