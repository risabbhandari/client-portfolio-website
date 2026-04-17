export type ProjectCategory = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  works: {
    client: string;
    deliverables: string[];
    format: string;
    note: string;
    title: string;
    year: string;
    youtubeId: string;
  }[];
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
    works: [
      {
        client: "Aster Studio",
        deliverables: ["Launch reel", "Cutdowns", "Caption pack"],
        format: "Vertical campaign edits",
        note:
          "A social-first rollout built around sharp hooks, visual pacing, and quick product clarity.",
        title: "Summer Launch Series",
        year: "2026",
        youtubeId: "dQw4w9WgXcQ"
      },
      {
        client: "Marlow Beauty",
        deliverables: ["UGC edit", "Paid social cut", "Retention pass"],
        format: "Performance-led short video",
        note:
          "Short edits shaped for paid distribution with a cleaner luxury feel than typical direct-response content.",
        title: "Paid Social Retention Cuts",
        year: "2025",
        youtubeId: "dQw4w9WgXcQ"
      },
      {
        client: "Northline Fitness",
        deliverables: ["Creator edit", "Story set", "Alt openings"],
        format: "Creator-led promo assets",
        note:
          "A modular edit system for testing multiple intros while keeping the brand tone cohesive.",
        title: "Creator Promo System",
        year: "2025",
        youtubeId: "dQw4w9WgXcQ"
      }
    ],
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
    works: [
      {
        client: "Field Notes",
        deliverables: ["Hero film edit", "Trailer", "YouTube version"],
        format: "Long-form brand storytelling",
        note:
          "A structure-first edit balancing interviews, texture shots, and measured pacing for a premium final film.",
        title: "Founder Story Film",
        year: "2026",
        youtubeId: "jNQXAC9IVRw"
      },
      {
        client: "Arc Vessel",
        deliverables: ["Episode edit", "Teaser cut", "Social trims"],
        format: "Narrative documentary edit",
        note:
          "Built for sustained attention with stronger rhythm changes and cleaner transitions between story beats.",
        title: "Mini Documentary Episode",
        year: "2025",
        youtubeId: "jNQXAC9IVRw"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "Longer-form editing with emphasis on clarity, emotional build, and polished delivery across platforms.",
        title: "Case Study Feature",
        year: "2025",
        youtubeId: "jNQXAC9IVRw"
      }
    ],
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
    works: [
      {
        client: "Independent",
        deliverables: ["Festival cut", "Trailer", "Sound pass"],
        format: "Narrative short film",
        note:
          "A restrained short film edit shaped around atmosphere, visual memory, and carefully paced reveals.",
        title: "Silent Tides",
        year: "2026",
        youtubeId: "9bZkp7q19f0"
      },
      {
        client: "Artist Commission",
        deliverables: ["Performance film", "Title sequence", "Master export"],
        format: "Poetic visual short",
        note:
          "A cinematic short pairing performance footage with layered sound design and a sparse editorial rhythm.",
        title: "Glass Room",
        year: "2025",
        youtubeId: "9bZkp7q19f0"
      },
      {
        client: "Personal Work",
        deliverables: ["Director's cut", "Still pull set", "Screening version"],
        format: "Experimental short",
        note:
          "An image-led piece focused on tone, composition, and tension rather than overt exposition.",
        title: "Blue Hour",
        year: "2025",
        youtubeId: "9bZkp7q19f0"
      }
    ],
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
    works: [
      {
        client: "Twelve North",
        deliverables: ["Sound design", "Mix", "Broadcast master"],
        format: "Brand soundscape package",
        note:
          "A subtle sound pass that gave the film more scale and emotional texture without becoming overdesigned.",
        title: "Launch Sound World",
        year: "2026",
        youtubeId: "3JZ_D3ELwOQ"
      },
      {
        client: "Luna Harbor",
        deliverables: ["Podcast mix", "Trailer audio", "Cleanup pass"],
        format: "Voice-led audio production",
        note:
          "A cleaner vocal mix and more controlled transitions designed for clarity across headphones and speakers.",
        title: "Narrative Audio Mix",
        year: "2025",
        youtubeId: "3JZ_D3ELwOQ"
      },
      {
        client: "Motion Campaign",
        deliverables: ["Transition effects", "Low-end treatment", "Final stems"],
        format: "Sound design support",
        note:
          "A tailored effects and mix layer built to support a premium edit rather than overpower it.",
        title: "Campaign Sound Finish",
        year: "2025",
        youtubeId: "3JZ_D3ELwOQ"
      }
    ],
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
    works: [
      {
        client: "Helio Studio",
        deliverables: ["Title cards", "Social assets", "Campaign layouts"],
        format: "Motion support design",
        note:
          "A supporting design system created to make campaigns feel unified across video, stills, and rollout assets.",
        title: "Campaign Asset System",
        year: "2026",
        youtubeId: "kJQP7kiw5Fk"
      },
      {
        client: "Mira House",
        deliverables: ["Identity refinements", "Pitch deck visuals", "Story frames"],
        format: "Visual identity support",
        note:
          "Refined layouts and brand elements designed to sit naturally alongside motion and editorial work.",
        title: "Identity Extension Kit",
        year: "2025",
        youtubeId: "kJQP7kiw5Fk"
      },
      {
        client: "North Coast",
        deliverables: ["Lookbook layouts", "Motion frames", "Digital assets"],
        format: "Brand presentation design",
        note:
          "A disciplined set of visual assets that carried the same tone across multiple launch touchpoints.",
        title: "Lookbook and Launch Assets",
        year: "2025",
        youtubeId: "kJQP7kiw5Fk"
      }
    ],
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
  "editing, motion, and sound for",
  "brands, campaigns, and",
  "story-led visuals"
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
