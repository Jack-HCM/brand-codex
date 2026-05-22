import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

function LogoBox({ bg, textColor, label }: { bg: string; textColor: string; label: string }) {
  return (
    <div>
      <div
        className="rounded-lg flex items-center justify-center p-10 mb-3 aspect-video"
        style={{ backgroundColor: bg }}
      >
        {/* Replace inner content with <Image src={...} /> once logo files are in /public/logos/ */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-sm flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: textColor === "#ffffff" ? "#e3f55a" : "#0a0a0a", color: textColor === "#ffffff" ? "#0a0a0a" : "#ffffff" }}
          >
            HC
          </div>
          <div>
            <p className="font-heading font-medium text-base leading-tight" style={{ color: textColor }}>Hive Creative</p>
            <p className="font-heading font-light text-base leading-tight" style={{ color: textColor === "#ffffff" ? "#a8a8a8" : "#5d5d5d" }}>Media</p>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-[#5d5d5d]">{label}</p>
    </div>
  );
}

export default function LogoSystem() {
  return (
    <SectionWrapper
      id="logo"
      label="02 — Logo System"
      title="Logo system."
      description="The HCM logo is the primary identifier of our brand. Always use approved files and follow the guidelines below."
    >
      {/* Logo variants */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <LogoBox bg="#111111" textColor="#ffffff" label="Primary — Dark background" />
        <LogoBox bg="#e3f55a" textColor="#0a0a0a" label="Yellow background" />
        <LogoBox bg="#ffffff" textColor="#0a0a0a" label="Light background" />
      </div>

      {/* Clear space + minimum size */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-[#111111] rounded-lg p-8">
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
            Clear Space
          </h3>
          {/* Visual clear space diagram */}
          <div className="flex items-center justify-center py-8 mb-4">
            <div className="relative border border-dashed border-[#e3f55a]/30 p-8">
              <div className="border border-dashed border-[#5d5d5d]/40 p-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-sm bg-[#e3f55a] flex items-center justify-center text-xs font-bold text-black">HC</div>
                <div>
                  <p className="font-heading text-sm text-white leading-tight">Hive Creative</p>
                  <p className="font-heading text-sm text-[#5d5d5d] font-light leading-tight">Media</p>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] text-[#e3f55a]/60">X</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[9px] text-[#e3f55a]/60">X</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[9px] text-[#e3f55a]/60">X</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[9px] text-[#e3f55a]/60">X</div>
            </div>
          </div>
          <p className="text-[#5d5d5d] text-xs leading-relaxed">{brand.logo.clearSpace}</p>
        </div>

        <div className="bg-[#111111] rounded-lg p-8">
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">
            Minimum Size
          </h3>
          <div className="flex items-end gap-6 mb-4 py-4">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-5 h-5 rounded-sm bg-[#e3f55a] flex items-center justify-center text-[8px] font-bold text-black">HC</div>
              </div>
              <p className="text-[10px] text-[#5d5d5d]">32px digital min</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[#e3f55a] flex items-center justify-center text-[10px] font-bold text-black">HC</div>
              </div>
              <p className="text-[10px] text-[#5d5d5d]">15mm print min</p>
            </div>
          </div>
          <p className="text-[#5d5d5d] text-xs leading-relaxed">{brand.logo.minSize}</p>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#e3f55a]/20 border border-[#e3f55a] flex items-center justify-center text-[#e3f55a] text-[8px]">✓</span>
            Do
          </h3>
          <ul className="space-y-3">
            {brand.logo.doList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
                <span className="text-[#e3f55a] mt-0.5 text-xs">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center text-red-400 text-[8px]">✕</span>
            Don&apos;t
          </h3>
          <ul className="space-y-3">
            {brand.logo.dontList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
                <span className="text-red-500/60 mt-0.5 text-xs">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
