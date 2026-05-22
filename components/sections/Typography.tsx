import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function Typography() {
  const { heading, body, scale } = brand.typography;

  return (
    <SectionWrapper
      id="typography"
      label="04 — Typography"
      title="Typography."
      description="Two typefaces form the HCM system. Scale VF for display and headings; Satoshi Variable for all body and UI text."
    >
      {/* Typeface showcases */}
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        {/* Heading */}
        <div className="bg-[#111111] rounded-xl p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Heading Typeface</p>
          <p className="font-heading text-6xl font-light text-white leading-none mb-6">Ag</p>
          <p className="font-heading text-3xl font-light text-white mb-2">{heading.family}</p>
          <p className="text-xs text-[#5d5d5d] mb-6">{heading.usage}</p>
          <div className="flex flex-wrap gap-2">
            {heading.weights.map((w) => (
              <span
                key={w.value}
                className="text-xs px-3 py-1.5 rounded-full border border-white/8 text-[#a8a8a8]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: w.value }}
              >
                {w.label}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="bg-[#111111] rounded-xl p-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Body Typeface</p>
          <p className="text-6xl font-light text-white leading-none mb-6">Ag</p>
          <p className="text-3xl font-light text-white mb-2">{body.family}</p>
          <p className="text-xs text-[#5d5d5d] mb-6">{body.usage}</p>
          <div className="flex flex-wrap gap-2">
            {body.weights.map((w) => (
              <span
                key={w.value}
                className="text-xs px-3 py-1.5 rounded-full border border-white/8 text-[#a8a8a8]"
                style={{ fontWeight: w.value }}
              >
                {w.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div>
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-8">
          Type Scale
        </h3>
        <div className="space-y-0">
          {scale.map((item, i) => (
            <div
              key={item.label}
              className="flex items-baseline gap-6 py-6 border-b border-white/8 last:border-0 group"
            >
              <div className="w-20 shrink-0">
                <p className="text-[10px] text-[#464646]">{item.label}</p>
                <p className="text-[10px] text-[#464646]">{item.size}</p>
                <p className="text-[10px] text-[#464646]">/ {item.lineHeight}</p>
              </div>
              <p
                className="text-white flex-1 overflow-hidden whitespace-nowrap text-ellipsis"
                style={{
                  fontFamily: item.family === "Scale VF" ? "var(--font-heading)" : "var(--font-body)",
                  fontSize: `clamp(16px, ${parseInt(item.size) * 0.5}px, ${item.size})`,
                  fontWeight: item.weight,
                  lineHeight: item.lineHeight,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage guidelines */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { rule: "Hierarchy", desc: "Never skip heading levels. H1 → H2 → H3 in order." },
          { rule: "Weight", desc: "Light/Regular for most headings. Bold only for emphasis." },
          { rule: "Spacing", desc: "Paragraph spacing: 20px. Line height always ≥ 1.4× size." },
        ].map((g) => (
          <div key={g.rule} className="border border-white/8 rounded-lg p-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e3f55a] mb-4" />
            <p className="font-heading text-sm text-white mb-2">{g.rule}</p>
            <p className="text-xs text-[#5d5d5d] leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
