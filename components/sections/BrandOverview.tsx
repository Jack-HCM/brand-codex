import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function BrandOverview() {
  return (
    <SectionWrapper
      id="overview"
      label="01 — Brand Overview"
      title="Who we are."
      description={brand.personality.mission}
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Brand Values */}
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">
            Brand Values
          </h3>
          <div className="space-y-6">
            {brand.personality.values.map((value, i) => (
              <div key={value.label} className="flex gap-6 group">
                <span className="text-[10px] text-[#464646] mt-1 w-4 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-heading text-lg font-medium text-white mb-1">{value.label}</p>
                  <p className="text-sm text-[#5d5d5d] leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Tone */}
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">
            Brand Tone of Voice
          </h3>
          <div className="space-y-3">
            {brand.personality.tone.map((tone) => (
              <div
                key={tone}
                className="flex items-center gap-4 py-4 border-b border-white/8 last:border-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#e3f55a] shrink-0" />
                <p className="text-[#a8a8a8] text-sm">{tone}</p>
              </div>
            ))}
          </div>

          {/* Personality spectrum */}
          <div className="mt-12">
            <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
              Personality Spectrum
            </h3>
            {[
              ["Bold", "Refined"],
              ["Modern", "Timeless"],
              ["Minimal", "Expressive"],
            ].map(([left, right]) => (
              <div key={left} className="mb-5">
                <div className="flex justify-between text-xs text-[#5d5d5d] mb-2">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
                <div className="h-px bg-white/8 relative">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e3f55a]"
                    style={{ left: left === "Bold" ? "30%" : left === "Modern" ? "65%" : "35%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
