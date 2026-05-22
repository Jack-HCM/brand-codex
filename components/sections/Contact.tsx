import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="08 — Contact & Legal"
      title="Questions?"
      description="For questions about brand usage or to request assets, contact the creative team."
      className="border-b-0"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact */}
        <div>
          <div className="bg-[#111111] rounded-xl p-8 mb-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Creative Team</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e3f55a] flex items-center justify-center text-sm font-bold text-black">
                J
              </div>
              <div>
                <p className="text-sm text-white font-medium">{brand.name}</p>
                <p className="text-xs text-[#5d5d5d]">Brand & Creative Direction</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#e3f55a] text-xs">@</span>
                <a href={`mailto:${brand.email}`} className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#e3f55a] text-xs">↗</span>
                <a href={`https://${brand.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
                  {brand.url}
                </a>
              </div>
            </div>
          </div>

          {/* Asset download placeholder */}
          <div className="border border-dashed border-white/12 rounded-xl p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#e3f55a] text-sm">↓</span>
            </div>
            <p className="font-heading text-sm text-white mb-2">Brand Asset Pack</p>
            <p className="text-xs text-[#5d5d5d] mb-4">Logos, colours, and fonts — all approved files</p>
            <button className="px-5 py-2.5 rounded-full border border-[#e3f55a]/40 text-[#e3f55a] text-xs hover:bg-[#e3f55a]/10 transition-colors">
              Request assets →
            </button>
          </div>
        </div>

        {/* Legal & version */}
        <div>
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Usage Rights</h3>
          <div className="space-y-4 mb-12">
            {[
              "This brand system is the property of " + brand.name + ". All rights reserved.",
              "Approved partners and clients may use brand assets only as specified in their engagement agreement.",
              "Unapproved use, modification, or reproduction of brand assets is strictly prohibited.",
              "For licensing enquiries, contact the creative team directly.",
            ].map((text) => (
              <p key={text} className="text-sm text-[#5d5d5d] leading-relaxed">{text}</p>
            ))}
          </div>

          {/* Version history */}
          <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#5d5d5d] mb-6">Version History</h3>
          <div className="space-y-4">
            {[
              { version: "1.0", date: brand.year, note: "Initial release — core brand system" },
            ].map((v) => (
              <div key={v.version} className="flex items-start gap-4 py-4 border-b border-white/8 last:border-0">
                <span className="text-[10px] text-[#e3f55a] font-mono mt-0.5">v{v.version}</span>
                <div>
                  <p className="text-sm text-white mb-0.5">{v.note}</p>
                  <p className="text-xs text-[#5d5d5d]">{v.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm bg-[#e3f55a] flex items-center justify-center text-[8px] font-bold text-black">HC</div>
          <span className="font-heading text-sm text-[#5d5d5d]">{brand.name}</span>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-[#464646]">Brand Codex v{brand.version}</p>
          <p className="text-[11px] text-[#464646]">© {brand.year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
