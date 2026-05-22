import { brand } from "@/config/brand";

export default function Cover() {
  return (
    <section
      id="cover"
      className="section-anchor min-h-screen flex flex-col justify-between border-b border-white/8 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow accent blob */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ backgroundColor: "#e3f55a" }}
      />

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 pt-10 lg:pl-[calc(14rem+2rem)]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#e3f55a]" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#5d5d5d]">
            Brand Codex · v{brand.version}
          </span>
        </div>
        <span className="text-[11px] text-[#5d5d5d]">{brand.year}</span>
      </div>

      {/* Centre content */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:pl-[calc(14rem+2rem)] pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#5d5d5d] mb-8">
          {brand.url}
        </p>

        {/* Logo placeholder */}
        <div className="mb-12">
          {/* Replace this with <Image> once logo files are added to /public/logos/ */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#e3f55a] flex items-center justify-center">
              <span className="font-heading font-bold text-black text-lg">HC</span>
            </div>
            <div>
              <p className="font-heading text-white text-2xl font-medium leading-tight">Hive Creative</p>
              <p className="font-heading text-[#a8a8a8] text-2xl font-light leading-tight">Media</p>
            </div>
          </div>
        </div>

        <h1 className="font-heading text-5xl lg:text-7xl font-light text-white leading-[1.05] max-w-2xl mb-6">
          Brand Guidelines &amp; Design System
        </h1>
        <p className="text-[#5d5d5d] text-base max-w-md leading-relaxed">
          The complete reference for how our brand looks, speaks, and behaves across all touchpoints.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative flex items-end justify-between px-8 pb-10 lg:pl-[calc(14rem+2rem)]">
        <div>
          <p className="text-[11px] text-[#464646]">Prepared by {brand.name}</p>
          <p className="text-[11px] text-[#464646]">© {brand.year} {brand.name}. All rights reserved.</p>
        </div>
        <div className="hidden lg:block">
          <p className="text-[11px] text-[#464646] text-right">{brand.tagline}</p>
        </div>
      </div>
    </section>
  );
}
