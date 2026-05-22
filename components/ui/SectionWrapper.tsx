interface Props {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, label, title, description, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`section-anchor min-h-screen border-b border-white/8 px-8 py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#5d5d5d] mb-4">{label}</p>
        <h2 className="font-heading text-4xl lg:text-5xl font-light text-white mb-4">{title}</h2>
        {description && (
          <p className="text-[#a8a8a8] text-base max-w-xl mb-16 leading-relaxed">{description}</p>
        )}
        {!description && <div className="mb-16" />}
        {children}
      </div>
    </section>
  );
}
