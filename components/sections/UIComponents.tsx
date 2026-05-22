import SectionWrapper from "@/components/ui/SectionWrapper";

export default function UIComponents() {
  return (
    <SectionWrapper
      id="components"
      label="06 — UI Components"
      title="UI components."
      description="Core interactive components that form the building blocks of all digital touchpoints."
    >
      {/* Buttons */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Buttons</h3>
        <div className="bg-[#111111] rounded-xl p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#5d5d5d] mb-5">Primary</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-full bg-[#e3f55a] text-black text-sm font-medium transition-opacity hover:opacity-90">
                  Speak to us
                </button>
                <button className="w-full px-5 py-2.5 rounded-full bg-[#e3f55a] text-black text-sm font-medium opacity-50 cursor-not-allowed">
                  Disabled
                </button>
                <button className="w-full px-5 py-2.5 rounded-full bg-[#e3f55a] text-black text-sm font-medium flex items-center justify-center gap-2">
                  Speak to us
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>

            {/* Secondary White */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#5d5d5d] mb-5">Secondary / White</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-full border border-white text-white text-sm transition-bg hover:bg-white hover:text-black">
                  Speak to us
                </button>
                <button className="w-full px-5 py-2.5 rounded-full border border-white/20 text-white/30 text-sm cursor-not-allowed">
                  Disabled
                </button>
                <button className="w-full px-5 py-2.5 rounded-full border border-white text-white text-sm flex items-center justify-center gap-2">
                  Speak to us
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>

            {/* Secondary Black */}
            <div className="bg-white rounded-lg p-4 -m-4">
              <p className="text-[10px] uppercase tracking-widest text-[#a8a8a8] mb-5">Secondary / Black</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-full border border-black text-black text-sm">
                  Speak to us
                </button>
                <button className="w-full px-5 py-2.5 rounded-full border border-black/20 text-black/30 text-sm cursor-not-allowed">
                  Disabled
                </button>
                <button className="w-full px-5 py-2.5 rounded-full border border-black text-black text-sm flex items-center justify-center gap-2">
                  Speak to us
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>

            {/* Text Link */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#5d5d5d] mb-5">Text Link</p>
              <div className="space-y-4">
                <button className="text-sm text-white underline underline-offset-4">Speak to us</button>
                <br />
                <button className="text-sm text-[#e3f55a] underline underline-offset-4 flex items-center gap-1.5">
                  Speak to us <span className="text-xs">→</span>
                </button>
                <br />
                <button className="text-sm text-[#5d5d5d] underline underline-offset-4 cursor-not-allowed">Disabled</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills & Tags */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Pills & Tags</h3>
        <div className="bg-[#111111] rounded-xl p-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full border border-[#e3f55a] text-[#e3f55a] text-xs">Scope Label</span>
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-[#a8a8a8] text-xs">Retainer basis</span>
            <span className="px-4 py-1.5 rounded-full bg-[#e3f55a]/10 border border-[#e3f55a]/30 text-[#e3f55a] text-xs">Small tag pill on dark</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] text-[#a8a8a8] text-xs">Visual Identity Design</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] text-[#a8a8a8] text-xs">Brand Strategy</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] text-[#a8a8a8] text-xs">Motion Design</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Cards</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Dark card */}
          <div className="bg-[#111111] rounded-xl overflow-hidden border border-white/8">
            <div className="bg-[#1a1a1a] h-32 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#e3f55a]/10 border border-[#e3f55a]/20" />
            </div>
            <div className="p-6">
              <span className="px-3 py-1 rounded-full border border-[#e3f55a]/30 text-[#e3f55a] text-[10px] mb-4 inline-block">Retainer basis</span>
              <h4 className="font-heading text-lg text-white font-medium mb-2">Always on creative support</h4>
              <p className="text-[#5d5d5d] text-sm leading-relaxed">
                We integrate into your way of working to ensure seamless briefing and delivery of design assets.
              </p>
            </div>
          </div>

          {/* Light card */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="bg-[#f5f5f5] h-32 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-black/5 border border-black/10" />
            </div>
            <div className="p-6">
              <span className="px-3 py-1 rounded-full border border-black/20 text-[#5d5d5d] text-[10px] mb-4 inline-block">Retainer basis</span>
              <h4 className="font-heading text-lg text-black font-medium mb-2">Always on creative support</h4>
              <p className="text-[#747474] text-sm leading-relaxed">
                We integrate into your way of working to ensure seamless briefing and delivery of design assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing scale */}
      <div>
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">Spacing Scale</h3>
        <div className="space-y-3">
          {[
            { label: "xs / Scale 100", px: 4 },
            { label: "sm / Scale 200", px: 8 },
            { label: "md / Scale 400", px: 16 },
            { label: "lg / Scale 600", px: 24 },
            { label: "xl / Scale 700", px: 28 },
            { label: "2xl / Scale 1300", px: 52 },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-6">
              <p className="text-xs text-[#5d5d5d] w-36 shrink-0">{s.label}</p>
              <div className="h-px bg-[#e3f55a]/60" style={{ width: s.px * 2 }} />
              <p className="text-xs text-[#464646]">{s.px}px</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
