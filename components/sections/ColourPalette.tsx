import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r} ${g} ${b}`;
}

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function SwatchRow({ swatches }: { swatches: readonly { label: string; hex: string }[] }) {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
      {swatches.map((s) => (
        <div key={s.hex}>
          <div
            className="aspect-square rounded-md mb-2"
            style={{ backgroundColor: s.hex }}
          />
          <p className="text-[9px] text-[#5d5d5d] leading-tight">{s.hex}</p>
          <p className="text-[9px] text-[#464646] leading-tight">{s.label.split(" / ")[1] ?? s.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function ColourPalette() {
  const { primary, yellowScale, offBlackScale, semantic } = brand.colours;

  return (
    <SectionWrapper
      id="colours"
      label="03 — Colour Palette"
      title="Colour palette."
      description="Our palette is built on a warm off-black and an energetic primary yellow. All colour usage must meet WCAG AA contrast requirements."
    >
      {/* Primary colour hero */}
      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {[primary, brand.colours.neutralDark, brand.colours.white].map((c) => (
          <div key={c.hex}>
            <div
              className="rounded-xl h-40 mb-4 flex items-end p-5"
              style={{ backgroundColor: c.hex, border: c.hex === "#FFFFFF" ? "1px solid rgba(255,255,255,0.08)" : "none" }}
            >
              <span
                className="font-heading text-2xl font-light"
                style={{ color: isLight(c.hex) ? "#0a0a0a" : "#ffffff" }}
              >
                {c.hex}
              </span>
            </div>
            <p className="font-heading text-sm text-white font-medium mb-1">{c.label}</p>
            <p className="text-xs text-[#5d5d5d] mb-3">RGB {hexToRgb(c.hex)}</p>
            <p className="text-xs text-[#464646] leading-relaxed">{c.usage}</p>
          </div>
        ))}
      </div>

      {/* Yellow scale */}
      <div className="mb-12">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
          Yellow Scale
        </h3>
        <SwatchRow swatches={yellowScale} />
      </div>

      {/* Off-Black scale */}
      <div className="mb-16">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
          Off-Black Scale
        </h3>
        <SwatchRow swatches={offBlackScale} />
      </div>

      {/* Semantic colours */}
      <div>
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
          Semantic Colour Roles
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {semantic.map((s) => (
            <div key={s.label} className="bg-[#111111] rounded-lg p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-md shrink-0"
                style={{ backgroundColor: s.hex }}
              />
              <div>
                <p className="text-sm text-white font-medium mb-0.5">{s.label}</p>
                <p className="text-[11px] text-[#5d5d5d]">{s.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrast guide */}
      <div className="mt-12 p-6 rounded-lg border border-white/8">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
          Contrast Pairings
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { bg: "#e3f55a", fg: "#0a0a0a", label: "Yellow on Black" },
            { bg: "#0a0a0a", fg: "#ffffff", label: "White on Black" },
            { bg: "#111111", fg: "#e3f55a", label: "Yellow on Surface" },
          ].map(({ bg, fg, label }) => (
            <div
              key={label}
              className="rounded-lg p-5 flex flex-col justify-between h-24"
              style={{ backgroundColor: bg }}
            >
              <p className="text-xs font-heading" style={{ color: fg }}>{label}</p>
              <p className="text-xs" style={{ color: isLight(bg) ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)" }}>
                WCAG AA ✓
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
