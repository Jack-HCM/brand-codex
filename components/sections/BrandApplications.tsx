import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function BrandApplications() {
  return (
    <SectionWrapper
      id="applications"
      label="07 — Brand Applications"
      title="In the wild."
      description="How the brand comes to life across digital, print, and social touchpoints."
    >
      {/* Web application mockup */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Digital — Web</h3>
        <div className="bg-[#111111] rounded-xl overflow-hidden border border-white/8">
          {/* Browser chrome */}
          <div className="px-4 py-3 border-b border-white/8 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#5d5d5d]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#5d5d5d]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#5d5d5d]" />
            </div>
            <div className="flex-1 mx-4 bg-white/[0.04] rounded px-3 py-1 text-[10px] text-[#5d5d5d]">
              {brand.url}
            </div>
          </div>
          {/* Page content mockup */}
          <div className="p-8 bg-[#0a0a0a]">
            <nav className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-sm bg-[#e3f55a] flex items-center justify-center text-[10px] font-bold text-black">HC</div>
                <span className="font-heading text-sm text-white">Hive Creative Media</span>
              </div>
              <div className="hidden sm:flex items-center gap-6 text-xs text-[#5d5d5d]">
                <span>Work</span><span>Services</span><span>About</span>
                <button className="px-4 py-2 rounded-full bg-[#e3f55a] text-black text-xs font-medium">Speak to us</button>
              </div>
            </nav>
            <div className="max-w-2xl">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#e3f55a] mb-4">Creative Agency</p>
              <h2 className="font-heading text-4xl text-white font-light leading-tight mb-6">
                We build brands that people remember.
              </h2>
              <p className="text-[#5d5d5d] text-sm leading-relaxed mb-8">
                Strategy, identity, and digital — delivered with craft.
              </p>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 rounded-full bg-[#e3f55a] text-black text-sm font-medium">See our work →</button>
                <button className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social media */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Social — Post Templates</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Square post - dark */}
          <div className="aspect-square bg-[#0a0a0a] border border-white/8 rounded-xl p-5 flex flex-col justify-between">
            <div className="w-6 h-6 rounded-sm bg-[#e3f55a] flex items-center justify-center text-[8px] font-bold text-black">HC</div>
            <div>
              <p className="font-heading text-sm text-white font-light leading-tight mb-1">Always on creative support.</p>
              <p className="text-[9px] text-[#5d5d5d]">{brand.url}</p>
            </div>
          </div>
          {/* Square post - yellow */}
          <div className="aspect-square bg-[#e3f55a] rounded-xl p-5 flex flex-col justify-between">
            <div className="w-6 h-6 rounded-sm bg-black flex items-center justify-center text-[8px] font-bold text-[#e3f55a]">HC</div>
            <div>
              <p className="font-heading text-sm text-black font-medium leading-tight mb-1">Creative by nature.</p>
              <p className="text-[9px] text-black/50">{brand.url}</p>
            </div>
          </div>
          {/* Square post - off-black */}
          <div className="aspect-square bg-[#1a1a1a] border border-white/8 rounded-xl p-5 flex flex-col justify-between">
            <div className="w-4 h-4 rounded-sm bg-[#e3f55a]" />
            <div>
              <p className="font-heading text-xs text-[#a8a8a8] font-light leading-tight mb-1">Brand Identity · 2026</p>
              <p className="font-heading text-sm text-white leading-tight">New project drop.</p>
            </div>
          </div>
          {/* Square post - minimal */}
          <div className="aspect-square bg-white rounded-xl p-5 flex flex-col justify-between border border-black/8">
            <div className="w-6 h-6 rounded-sm bg-[#0a0a0a] flex items-center justify-center text-[8px] font-bold text-[#e3f55a]">HC</div>
            <div>
              <p className="font-heading text-sm text-black font-light leading-tight mb-1">Quality over quantity. Always.</p>
              <p className="text-[9px] text-[#a8a8a8]">{brand.url}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email signature */}
      <div>
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Email Signature</h3>
        <div className="bg-[#111111] rounded-xl p-8 border border-white/8 max-w-lg">
          <div className="border-l-2 border-[#e3f55a] pl-4">
            <p className="font-heading text-base text-white font-medium">Jack [Surname]</p>
            <p className="text-sm text-[#a8a8a8] mb-3">Creative Director · {brand.name}</p>
            <p className="text-xs text-[#5d5d5d]">{brand.email}</p>
            <p className="text-xs text-[#5d5d5d]">{brand.url}</p>
          </div>
        </div>
        <p className="text-xs text-[#464646] mt-3">Add your name, role, and phone. Keep the yellow border and typeface consistent.</p>
      </div>
    </SectionWrapper>
  );
}
