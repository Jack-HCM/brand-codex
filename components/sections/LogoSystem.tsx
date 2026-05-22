import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

function LogoBox({ bg, src, label, border }: { bg: string; src: string; label: string; border?: boolean }) {
  return (
    <div>
      <div
        className={`rounded-lg flex items-center justify-center p-10 mb-3 aspect-video ${border ? "border border-white/8" : ""}`}
        style={{ backgroundColor: bg }}
      >
        <Image src={src} alt="Hive Creative Media" width={180} height={67} />
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
        <LogoBox bg="#111111" src="/logos/hcm-logo-white.svg" label="Primary — Dark background" />
        <LogoBox bg="#e3f55a" src="/logos/hcm-logo-black.svg" label="Yellow background" />
        <LogoBox bg="#ffffff" src="/logos/hcm-logo-black.svg" label="Light background" border />
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
              <div className="border border-dashed border-[#5d5d5d]/40 p-4">
                <Image src="/logos/hcm-logo-white.svg" alt="Hive Creative Media" width={120} height={45} />
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
          <div className="flex items-end gap-8 mb-4 py-4">
            <div>
              <Image src="/logos/hcm-icon-white.svg" alt="HCM icon" width={32} height={28} className="mb-2" />
              <p className="text-[10px] text-[#5d5d5d]">32px digital min</p>
            </div>
            <div>
              <Image src="/logos/hcm-logo-white.svg" alt="HCM logo" width={80} height={30} className="mb-2" />
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
