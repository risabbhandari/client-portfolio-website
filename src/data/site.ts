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
    videoSource: string;
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
          "A short promo edit highlighting the FTVP program through quick, student-focused moments.",
        title: "School of Communications - FTVP Short",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1GXi2gRJ6I1-O1uRNbQV4A0jP7GP7xEDC/view"
      },
      {
        client: "Marlow Beauty",
        deliverables: ["UGC edit", "Paid social cut", "Retention pass"],
        format: "Performance-led short video",
        note:
          "A fast-cut Twitch highlight shaped for quick engagement and clean short-form pacing.",
        title: "Twitch Stream - Short",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1mRXDQ5-RC_p755QdzSNYDYBEW4-4Me-z/view"
      },
      {
        client: "Twitch Stream 2",
        deliverables: ["Creator edit", "Story set", "Alt openings"],
        format: "Twitch Stream 2",
        note:
          "A second Twitch short focused on tighter beats, clearer reactions, and snappier pacing.",
        title: "Twitch Stream - Short 2",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1INcI2X_-NNVGbqJBCr7fPBrfTzMFZQYY/view"
      }
    ],
    year: "2026",
    category: "Content Editing",
    visual: {
      base: "linear-gradient(135deg, rgba(1, 22, 43, 0.96) 0%, rgba(106, 144, 180, 0.58) 100%)",
      glow: "rgba(210, 219, 235, 0.22)",
      accent: "#D2DBEB"
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
          "A comedy-focused edit built around timing, reaction beats, and clean transitions.",
        title: "Comedy - Edit",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1inoaIkX13yrJUDT3zxOU2zxiUMMUmUX2/view"
      },
      {
        client: "Arc Vessel",
        deliverables: ["Episode edit", "Teaser cut", "Social trims"],
        format: "Narrative documentary edit",
        note:
          "A dialogue-driven scene edit centered on pacing, performance rhythm, and conversational clarity.",
        title: "Dialouge - Edit",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1G3KO9UhAruYCxRAOtw75A25niPVgKr_t/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A documentary-style edit shaped with clear structure, natural pacing, and story continuity.",
        title: "Documentary Edit",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1sXcD_HtBTqt6mlvCTzeyT8q2Rrjv89E4/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A comedic Doritos ad edit with punchy timing, product emphasis, and a clear branded payoff.",
        title: "Doritos - Comedy Ad",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1kjsMTFN56BcHYsDuoJW_9e-xoOnZYYWq/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A polished FTVP program video featuring student work, campus moments, and academic storytelling.",
        title: "School of Communications - FTVP Video",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1dsyUNvjsm_G3RO9zELkb6w1ECIZISoha/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A dramatic scene edit designed to build tension, support performance, and keep the story clear.",
        title: "The Bully - Edit",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1HAUq_Gb5-aDn7q5mSn9L13GZjyzKq-3D/view?usp=drive_link"
      },
    ],
    year: "2026",
    category: "Editorial Film",
    visual: {
      base: "linear-gradient(145deg, rgba(1, 22, 43, 0.98) 0%, rgba(0, 56, 90, 0.84) 100%)",
      glow: "rgba(148, 162, 191, 0.2)",
      accent: "#94A2BF"
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
          "A narrative short centered on character energy, scene flow, and a polished cinematic finish.",
        title: "Booksmart",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1vqEkRXQR8SLPAn9aB_akrBUrODWHz1Mj/view?usp=drive_link"
      },
      {
        client: "Artist Commission",
        deliverables: ["Performance film", "Title sequence", "Master export"],
        format: "Poetic visual short",
        note:
          "An in-class short exploring contrast in pace and mood through controlled editing and rhythm.",
        title: "Rush or Relaxed ? - In-class project",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1IqUjq4DEfkY9Sm-02qN17HJLQUFBe5Fp/view?usp=drive_link"
      },
      {
        client: "Personal Work",
        deliverables: ["Director's cut", "Still pull set", "Screening version"],
        format: "Experimental short",
        note:
          "A concept-driven short built around voice, atmosphere, and restrained visual storytelling.",
        title: "The Voice",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1orzjhh_9hm3wsjOHmzGgstJscFpYeJ9i/view?usp=drive_link"
      }
    ],
    year: "2026",
    category: "Narrative Motion",
    visual: {
      base: "linear-gradient(140deg, rgba(106, 144, 180, 0.76) 0%, rgba(1, 22, 43, 0.94) 100%)",
      glow: "rgba(210, 219, 235, 0.2)",
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
          "A sound design piece built around layered raindrop effects, ambience, and natural spatial detail.",
        title: "Raindrop - SFX",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1W6q9WRdskHGCjmCtAtqJvrN_NInudtar/view?usp=drive_link"
      },
      {
        client: "Luna Harbor",
        deliverables: ["Podcast mix", "Trailer audio", "Cleanup pass"],
        format: "Voice-led audio production",
        note:
          "A cinematic SFX exercise focused on impact, machinery, and tension-building audio detail.",
        title: "Terminator - SFX",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1Xx3M70RE9yScDyq7p0WQxd1REpX_vaV9/view?usp=drive_link"
      },
      
    ],
    year: "2026",
    category: "Sound World",
    visual: {
      base: "linear-gradient(145deg, rgba(1, 22, 43, 0.96) 0%, rgba(0, 56, 90, 0.9) 52%, rgba(148, 162, 191, 0.48) 100%)",
      glow: "rgba(106, 144, 180, 0.24)",
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
          "A motion tracking piece that locks title graphics into a New York City scene with clean integration.",
        title: "Title NYC - Motion Tracking",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1iVY1QS5zKD5ZXIDv7sFWZlfXztc-5BwZ/view?usp=drive_link"
      },
      
      
    ],
    year: "2026",
    category: "Design Support",
    visual: {
      base: "linear-gradient(135deg, rgba(0, 56, 90, 0.82) 0%, rgba(148, 162, 191, 0.6) 100%)",
      glow: "rgba(210, 219, 235, 0.18)",
      accent: "#94A2BF"
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
    value: "amelievillena@webster.edu",
    href: "mailto:amelievillena@webster.edu"
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
    value: "https://www.linkedin.com/in/amelie-villena/",
    href: "https://www.linkedin.com/in/amelie-villena/"
  }
];

export const collaborationNotes = [
  "Ideal for branded storytelling, artist visuals, campaign edits, and cinematic short-form work.",
  "Remote-friendly and structured for collaborative feedback without overcomplicating the process.",
  "Typical response window: within two business days for new inquiries."
];
