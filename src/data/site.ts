export type ProjectCategory = {
  cardImage: string;
  sectionId: string;
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
    cardImage: "/images/shortformcontent.png",
    sectionId: "short-form-content",
    title: "Short-Form Content",
    subtitle: "Reels, TikTok, Shorts",
    description:
      "Short-form edits designed for social media, shaped for pace, attention, and visual flow to draw and hold attention, while maintaining clarity and intention.",
    highlights: ["Hook-led pacing", "Caption styling", "Audience-first rhythm"],
    works: [
      {
        client: "Aster Studio",
        deliverables: ["Launch reel", "Cutdowns", "Caption pack"],
        format: "Vertical campaign edits",
        note:
          "A short promo edit shaped around an interview, highlighting the FTVP program through quick moments.",
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
          "A second Twitch short shaped around a conversation, balancing dialogue for clean pacing.",
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
    cardImage: "/images/videoediting.jpg",
    sectionId: "video-editing",
    title: "Video Editing",
    subtitle: "Long-form / Narrative Edits",
    description:
      "Long-form video edits focused on narrative and structure, shaped through pacing, sound, and visual flow to support story with clarity and direction.",
    highlights: ["Narrative shaping", "Pacing refinement", "Visual continuity"],
    works: [
      {
        client: "Field Notes",
        deliverables: ["Hero film edit", "Trailer", "YouTube version"],
        format: "Long-form brand storytelling",
        note:
          "A comedy edit driven by rhythm and timing to keep the flow quick and engaging.",
        title: "Comedy - Edit",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1inoaIkX13yrJUDT3zxOU2zxiUMMUmUX2/view"
      },
      {
        client: "Arc Vessel",
        deliverables: ["Episode edit", "Teaser cut", "Social trims"],
        format: "Narrative documentary edit",
        note:
          "A dialogue-focused edit built from selected footage, refined for continuity and smooth pacing.",
        title: "Dialogue - Edit",
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
          "A comedy-style Doritos ad shaped by tight pacing and punchy timing.",
        title: "Doritos - Comedy Ad",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1kjsMTFN56BcHYsDuoJW_9e-xoOnZYYWq/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A reformatted edit from the same footage as the short promo, highlighting FTVP through student work and storytelling.",
        title: "School of Communications - FTVP Video",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1dsyUNvjsm_G3RO9zELkb6w1ECIZISoha/view?usp=drive_link"
      },
      {
        client: "Studio Haven",
        deliverables: ["Case study film", "Interview cleanup", "Motion titles"],
        format: "Case study editorial",
        note:
          "A comedic edit on bullying shaped through timing, pacing, and layered SFX and music for stronger impact.",
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
    cardImage: "/images/shortfilm.jpg",
    sectionId: "short-films",
    title: "Short Films",
    subtitle: "Cinematic Storytelling",
    description:
      "Short films focused on storytelling and visual composition, shaped through pacing, sound, and image to convey mood, tone, and narrative with intention.",
    highlights: ["Mood-driven cuts", "Cinematic restraint", "Story-led sequencing"],
    works: [
      {
        client: "Independent",
        deliverables: ["Festival cut", "Trailer", "Sound pass"],
        format: "Narrative short film",
        note:
          "A co-directed and edited collaboration with Conservatory students, recreating a scene from Booksmart (2019) with a focus on performance and timing.",
        title: "Booksmart",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1vqEkRXQR8SLPAn9aB_akrBUrODWHz1Mj/view?usp=drive_link"
      },
      {
        client: "Artist Commission",
        deliverables: ["Performance film", "Title sequence", "Master export"],
        format: "Poetic visual short",
        note:
          "A dual-perspective edit exploring time, contrasting urgency and calm, as assistant director of photography and editor.",
        title: "Rush or relaxed?",
        year: "2025",
        videoSource: "https://drive.google.com/file/d/1IqUjq4DEfkY9Sm-02qN17HJLQUFBe5Fp/view?usp=drive_link"
      },
      {
        client: "Personal Work",
        deliverables: ["Director's cut", "Still pull set", "Screening version"],
        format: "Experimental short",
        note:
          "A short film co-directed, shot, and edited, shaping both its creative direction and final cut.",
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
    cardImage: "/images/audioproduction.jpeg",
    sectionId: "audio-production",
    title: "Audio Production",
    subtitle: "Sound Design & Mixing",
    description:
      "Audio production focused on sound design and clarity, shaped through layering, balance, and detail to support and enhance the visual narrative.",
    highlights: ["Clean mixes", "Spatial texture", "Intentional transitions"],
    works: [
      {
        client: "Twelve North",
        deliverables: ["Sound design", "Mix", "Broadcast master"],
        format: "Brand soundscape package",
        note:
          "A sound design edit layering SFX and ambient audio to create an immersive, realistic atmosphere.",
        title: "Raindrop - SFX",
        year: "2026",
        videoSource: "https://drive.google.com/file/d/1W6q9WRdskHGCjmCtAtqJvrN_NInudtar/view?usp=drive_link"
      },
      {
        client: "Luna Harbor",
        deliverables: ["Podcast mix", "Trailer audio", "Cleanup pass"],
        format: "Voice-led audio production",
        note:
          "A trailer recreation built with full SFX and music to enhance impact and intensity.",
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
    cardImage: "/images/graphicdesign.jpeg",
    sectionId: "graphic-design",
    title: "Graphic Design",
    subtitle: "Visual Identity & Assets",
    description:
      "Graphic design focused on visual composition and clarity, shaped through layout, motion, and detail to communicate ideas and integrate naturally with video.",
    highlights: ["Identity support", "Campaign assets", "Refined layout systems"],
    works: [
      {
        client: "Helio Studio",
        deliverables: ["Title cards", "Social assets", "Campaign layouts"],
        format: "Motion support design",
        note:
          "A motion-tracked text edit built in Adobe After Effects, tracking text cleanly into NYC footage.",
        title: "NYC – Motion Tracking",
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
  "Where footage becomes",
  "story."
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
  "Amélie is a multidisciplinary creative focused on editing, motion-led storytelling, sound, and visual identity. The practice is shaped by a love of cinematic pacing, clear structure, and work that feels polished without becoming cold.";

export const aboutPhilosophy =
  "Creating work that brings ideas to life through editing, motion, and sound, with a focus on clarity, rhythm, and building something shared, while always refining and pushing it further.";

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
