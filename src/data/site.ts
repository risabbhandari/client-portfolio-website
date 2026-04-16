export type ProjectCategory = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  year: string;
  category: string;
  visual: {
    base: string;
    glow: string;
    accent: string;
  };
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact", label: "Contact" }
];

export const projectCategories: ProjectCategory[] = [
  {
    title: "Short-Form Content",
    subtitle: "Reels, TikTok, Shorts",
    description:
      "Platform-native edits designed for retention, pace, and polish. Every cut is shaped to feel immediate without sacrificing taste.",
    highlights: ["Hook-led pacing", "Caption styling", "Audience-first rhythm"],
    year: "2026",
    category: "Content Editing",
    visual: {
      base: "linear-gradient(135deg, rgba(3, 56, 90, 0.96) 0%, rgba(84, 131, 179, 0.52) 100%)",
      glow: "rgba(193, 232, 255, 0.22)",
      accent: "#C1E8FF"
    }
  },
  {
    title: "Video Editing",
    subtitle: "Long-form / Narrative Edits",
    description:
      "Longer edits with clean structure, tonal control, and a strong emotional arc. Built for clarity, texture, and sustained attention.",
    highlights: ["Narrative shaping", "Pacing refinement", "Visual continuity"],
    year: "2026",
    category: "Editorial Film",
    visual: {
      base: "linear-gradient(145deg, rgba(2, 16, 36, 0.98) 0%, rgba(5, 38, 89, 0.8) 100%)",
      glow: "rgba(125, 160, 202, 0.18)",
      accent: "#7DA0CA"
    }
  },
  {
    title: "Short Films",
    subtitle: "Cinematic Storytelling",
    description:
      "Short films that lean into atmosphere, restraint, and visual memory. Framing, motion, and sound are treated as one system.",
    highlights: ["Mood-driven cuts", "Cinematic restraint", "Story-led sequencing"],
    year: "2026",
    category: "Narrative Motion",
    visual: {
      base: "linear-gradient(140deg, rgba(84, 131, 179, 0.72) 0%, rgba(1, 22, 43, 0.92) 100%)",
      glow: "rgba(210, 219, 235, 0.18)",
      accent: "#D2DBEB"
    }
  },
  {
    title: "Audio Production",
    subtitle: "Sound Design & Mixing",
    description:
      "Sound beds, transitions, and mixes that deepen the world of the piece. The goal is subtle immersion, not overstated effect.",
    highlights: ["Clean mixes", "Spatial texture", "Intentional transitions"],
    year: "2026",
    category: "Sound World",
    visual: {
      base: "linear-gradient(145deg, rgba(1, 22, 43, 0.95) 0%, rgba(0, 56, 90, 0.92) 55%, rgba(106, 144, 180, 0.54) 100%)",
      glow: "rgba(84, 131, 179, 0.24)",
      accent: "#6A90B4"
    }
  },
  {
    title: "Graphic Design",
    subtitle: "Visual Identity & Assets",
    description:
      "Visual systems and design assets that support motion work with the same calm confidence. Useful, elevated, and consistent across touchpoints.",
    highlights: ["Identity support", "Campaign assets", "Refined layout systems"],
    year: "2026",
    category: "Design Support",
    visual: {
      base: "linear-gradient(135deg, rgba(5, 38, 89, 0.82) 0%, rgba(125, 160, 202, 0.55) 100%)",
      glow: "rgba(193, 232, 255, 0.18)",
      accent: "#5483B3"
    }
  }
];

export const projectPreview = projectCategories;

export const heroHighlights = [
  { value: "05", label: "creative lanes" },
  { value: "01", label: "cohesive voice" },
  { value: "calm", label: "delivery style" }
];

export const heroLines = [
  "a creative partner with focus on",
  "short-form edits",
  "cinematic storytelling"
];

export const heroAsideCards = [
  {
    title: "Available for selected projects",
    detail: "editing, sound, and identity support",
    tone: "soft"
  },
  {
    title: "Deep blue visual system",
    detail: "premium, restrained, and motion-aware",
    tone: "strong"
  },
  {
    title: "Built for a calm collaboration",
    detail: "clear feedback loops and polished delivery",
    tone: "soft"
  }
];

export const principles = [
  {
    title: "Narrative first",
    description:
      "Every visual choice should help the idea land faster, deeper, and more clearly."
  },
  {
    title: "Details without noise",
    description:
      "Motion, sound, and texture stay disciplined so the finish feels premium instead of busy."
  },
  {
    title: "Human collaboration",
    description:
      "Projects move best when the process stays thoughtful, responsive, and easy to trust."
  }
];

export const aboutStory =
  "Amelie is a multidisciplinary creative focused on editing, motion-led storytelling, sound, and visual identity. The practice is shaped by a love of cinematic pacing, clear structure, and work that feels polished without becoming cold.";

export const aboutPhilosophy =
  "The goal is to make every piece feel calm, intentional, and emotionally legible. Whether the format is a short reel or a short film, the process stays grounded in restraint, rhythm, and careful finishing.";

export const aboutFacts = [
  { label: ".discipline", value: "editing, sound, and design" },
  { label: ".mood", value: "calm, premium, slightly artistic" },
  { label: ".availability", value: "open for selected collaborations" }
];

export const strengths = [
  {
    title: "Editorial pacing",
    description:
      "Finding the exact tempo that gives a piece momentum while still letting it breathe."
  },
  {
    title: "Cross-discipline thinking",
    description:
      "Bringing edit, sound, and design choices together so the final output feels unified."
  },
  {
    title: "Tasteful polish",
    description:
      "Elevating the details through subtle motion, soft contrast, and consistent finishing."
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "hello@amelie.studio",
    href: "mailto:hello@amelie.studio"
  },
  {
    label: "Instagram",
    value: "@ameliecreates",
    href: "https://www.instagram.com/ameliecreates"
  },
  {
    label: "Vimeo",
    value: "vimeo.com/ameliecreates",
    href: "https://vimeo.com/ameliecreates"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ameliecreates",
    href: "https://www.linkedin.com/in/ameliecreates/"
  }
];

export const collaborationNotes = [
  "Ideal for branded storytelling, artist visuals, campaign edits, and cinematic short-form work.",
  "Remote-friendly and structured for collaborative feedback without overcomplicating the process.",
  "Typical response window: within two business days for new inquiries."
];
