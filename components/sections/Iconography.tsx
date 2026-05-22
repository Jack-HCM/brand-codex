import SectionWrapper from "@/components/ui/SectionWrapper";

const sampleIcons = [
  "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  "M22 12h-4l-3 9L9 3l-3 9H2",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
  "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.59 6.59l1.06-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  "M12 22V12M12 12L7 17M12 12l5 5M12 2v4",
];

export default function Iconography() {
  return (
    <SectionWrapper
      id="iconography"
      label="05 — Iconography"
      title="Iconography."
      description="Icons use a consistent outlined stroke style at 1.5px weight. Always align to pixel grid and use at approved sizes."
    >
      {/* Icon grid preview */}
      <div className="bg-[#111111] rounded-xl p-8 mb-16">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Icon Library Preview</p>
        <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-6">
          {sampleIcons.map((path, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center rounded-md bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e3f55a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={path} />
              </svg>
            </div>
          ))}
          {/* Empty placeholder slots */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="aspect-square rounded-md bg-white/[0.02] border border-dashed border-white/8"
            />
          ))}
        </div>
      </div>

      {/* Icon guidelines */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Stroke weight", value: "1.5px", note: "Always outlined, never filled" },
          { label: "Sizes", value: "16 / 20 / 24px", note: "Grid-aligned; never scale arbitrarily" },
          { label: "Colour", value: "#E3F55A", note: "Use brand yellow for actionable icons" },
          { label: "Corner radius", value: "Round", note: "Rounded linecap and linejoin" },
        ].map((g) => (
          <div key={g.label} className="border border-white/8 rounded-lg p-5">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#5d5d5d] mb-2">{g.label}</p>
            <p className="font-heading text-lg text-white mb-1">{g.value}</p>
            <p className="text-[11px] text-[#464646] leading-relaxed">{g.note}</p>
          </div>
        ))}
      </div>

      {/* Icon usage */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6 flex items-center gap-3">
            <span className="text-[#e3f55a]">✓</span> Do
          </h3>
          <ul className="space-y-3">
            {["Use icons to reinforce meaning, not replace text", "Maintain consistent stroke weight throughout", "Pair icons with labels in UI contexts", "Use yellow tint for interactive icon states"].map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
                <span className="text-[#e3f55a] text-xs mt-0.5">—</span>{d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6 flex items-center gap-3">
            <span className="text-red-400">✕</span> Don&apos;t
          </h3>
          <ul className="space-y-3">
            {["Mix icon styles (filled + outlined)", "Scale below 16px where detail is lost", "Use multiple colours within a single icon", "Apply drop shadows or decorative effects"].map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
                <span className="text-red-500/60 text-xs mt-0.5">—</span>{d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
