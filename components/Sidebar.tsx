"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { brand } from "@/config/brand";

const navItems = [
  { id: "cover",        label: "Cover" },
  { id: "overview",     label: "Brand Overview" },
  { id: "logo",         label: "Logo System" },
  { id: "colours",      label: "Colour Palette" },
  { id: "typography",   label: "Typography" },
  { id: "iconography",  label: "Iconography" },
  { id: "components",   label: "UI Components" },
  { id: "applications", label: "Applications" },
  { id: "contact",      label: "Contact & Legal" },
];

export default function Sidebar() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-white/8">
        <span className="font-heading text-sm tracking-widest uppercase text-[#a8a8a8]">
          {brand.shortName} — Brand Codex
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden fixed top-[57px] left-0 right-0 z-40 bg-[#111111] border-b border-white/8 py-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full text-left px-6 py-2.5 text-sm transition-colors ${
                active === id ? "text-[#e3f55a]" : "text-[#a8a8a8] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-56 bg-[#0a0a0a] border-r border-white/8 z-40">
        {/* Brand mark */}
        <div className="px-6 pt-8 pb-6 border-b border-white/8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#5d5d5d] mb-3">Brand Codex</p>
          <Image
            src="/logos/hcm-logo-white.svg"
            alt="Hive Creative Media"
            width={120}
            height={44}
            className="mb-2"
          />
          <p className="text-[11px] text-[#5d5d5d]">v{brand.version} · {brand.year}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-6 py-2.5 text-xs transition-all duration-150 flex items-center gap-3 group ${
                active === id
                  ? "text-[#e3f55a]"
                  : "text-[#5d5d5d] hover:text-[#a8a8a8]"
              }`}
            >
              <span
                className={`block h-px flex-1 max-w-[16px] transition-all duration-150 ${
                  active === id ? "bg-[#e3f55a]" : "bg-transparent"
                }`}
              />
              <span className="tracking-wide">{label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-white/8">
          <p className="text-[10px] text-[#464646]">{brand.url}</p>
        </div>
      </aside>
    </>
  );
}
