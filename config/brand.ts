export const brand = {
  name: "Hive Creative Media",
  shortName: "HCM",
  tagline: "Creative by nature.",
  url: "hivecreativemedia.co.uk",
  email: "hello@hivecreativemedia.co.uk",
  version: "1.0",
  year: "2026",

  // ─── Colours ───────────────────────────────────────────────────────────────
  colours: {
    primary: {
      label: "Primary Yellow",
      hex: "#E3F55A",
      rgb: "227, 245, 90",
      cmyk: "7, 0, 63, 4",
      pantone: "—",
      usage: "Primary action colour. Used for CTAs, highlights, and key brand accents.",
    },
    neutralDark: {
      label: "Off-Black",
      hex: "#747474",
      rgb: "116, 116, 116",
      usage: "Base neutral. Used for backgrounds, text, and dark UI surfaces.",
    },
    white: {
      label: "White",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      usage: "Used for text on dark backgrounds and light surface areas.",
    },
    yellowScale: [
      { label: "Yellow / 900", hex: "#5B6224" },
      { label: "Yellow / 800", hex: "#889336" },
      { label: "Yellow / 700", hex: "#B6C448" },
      { label: "Yellow / 500", hex: "#E3F55A" },
      { label: "Yellow / 400", hex: "#E7F579" },
      { label: "Yellow / 300", hex: "#EAF598" },
      { label: "Yellow / 200", hex: "#EEF5B7" },
      { label: "Yellow / 100", hex: "#F1F5D6" },
      { label: "Yellow / 50",  hex: "#F3F5E5" },
    ],
    offBlackScale: [
      { label: "Off-Black / 900", hex: "#2E2E2E" },
      { label: "Off-Black / 800", hex: "#464646" },
      { label: "Off-Black / 700", hex: "#5D5D5D" },
      { label: "Off-Black / 600", hex: "#747474" },
      { label: "Off-Black / 500", hex: "#8E8E8E" },
      { label: "Off-Black / 400", hex: "#A8A8A8" },
      { label: "Off-Black / 300", hex: "#C1C1C1" },
      { label: "Off-Black / 200", hex: "#DBDBDB" },
      { label: "Off-Black / 100", hex: "#E8E8E8" },
      { label: "White",           hex: "#FFFFFF" },
    ],
    semantic: [
      { label: "Surface / Action",  hex: "#E3F55A", usage: "Interactive elements, CTAs" },
      { label: "Text / Headings",   hex: "#2E2E2E", usage: "Primary heading text (light mode)" },
      { label: "Icons / Action",    hex: "#E3F55A", usage: "Actionable icon tint" },
    ],
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  typography: {
    heading: {
      family: "Scale VF",
      weights: [
        { label: "ExtraLight", value: "200" },
        { label: "Light",      value: "300" },
        { label: "Regular",    value: "400" },
        { label: "Medium",     value: "500" },
        { label: "Bold",       value: "700" },
        { label: "Black",      value: "900" },
      ],
      usage: "All headings (H1–H6), display text, and large typographic elements.",
    },
    body: {
      family: "Satoshi Variable",
      weights: [
        { label: "Light",   value: "300" },
        { label: "Regular", value: "400" },
        { label: "Medium",  value: "500" },
      ],
      usage: "Body copy, UI labels, captions, and all running text.",
    },
    scale: [
      { label: "H1 Display", size: "72px", lineHeight: "80px", weight: "400", family: "Scale VF" },
      { label: "H2",         size: "48px", lineHeight: "56px", weight: "400", family: "Scale VF" },
      { label: "H3",         size: "40px", lineHeight: "48px", weight: "400", family: "Scale VF" },
      { label: "H4",         size: "32px", lineHeight: "40px", weight: "400", family: "Scale VF" },
      { label: "H5",         size: "24px", lineHeight: "28px", weight: "400", family: "Scale VF" },
      { label: "H6",         size: "20px", lineHeight: "24px", weight: "300", family: "Scale VF" },
      { label: "Body LG",    size: "20px", lineHeight: "24px", weight: "400", family: "Satoshi Variable" },
      { label: "Body MD",    size: "16px", lineHeight: "20px", weight: "400", family: "Satoshi Variable" },
      { label: "Body SM",    size: "14px", lineHeight: "16px", weight: "400", family: "Satoshi Variable" },
    ],
  },

  // ─── Spacing ───────────────────────────────────────────────────────────────
  spacing: [
    { label: "xs",   value: "4px",  token: "Scale/100" },
    { label: "sm",   value: "8px",  token: "Scale/200" },
    { label: "md",   value: "16px", token: "Scale/400" },
    { label: "lg",   value: "24px", token: "Scale/600" },
    { label: "xl",   value: "28px", token: "Scale/700" },
    { label: "2xl",  value: "52px", token: "Scale/1300" },
  ],

  // ─── Logo ──────────────────────────────────────────────────────────────────
  logo: {
    primary: "/logos/hcm-logo-primary.svg",
    white: "/logos/hcm-logo-white.svg",
    black: "/logos/hcm-logo-black.svg",
    icon: "/logos/hcm-icon.svg",
    clearSpace: "Use a minimum clear space equal to the height of the 'H' in the wordmark on all sides.",
    minSize: "32px height for digital. 15mm height for print.",
    doList: [
      "Use on approved brand backgrounds only",
      "Maintain clear space at all times",
      "Scale proportionally",
      "Use the white version on dark backgrounds",
    ],
    dontList: [
      "Distort or stretch the logo",
      "Recolour the logo outside approved palette",
      "Add drop shadows or effects",
      "Place on visually busy backgrounds without sufficient contrast",
    ],
  },

  // ─── Brand Personality ─────────────────────────────────────────────────────
  personality: {
    mission: "To empower brands with creative direction and digital execution that drives real results.",
    values: [
      { label: "Creative", description: "We lead with originality and craft in every project." },
      { label: "Strategic", description: "Design decisions are always tied to business outcomes." },
      { label: "Collaborative", description: "We work with clients, not just for them." },
      { label: "Quality-first", description: "We don't ship average. Every detail matters." },
    ],
    tone: [
      "Confident without arrogance",
      "Direct and clear",
      "Warm but professional",
      "Intelligent, never academic",
    ],
  },
} as const;

export type Brand = typeof brand;
