export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    playStore?: string;
    article?: string;
  };
  featured: boolean;
  category: "android" | "open-source" | "side-project" | "tool";
  image?: string;
}

export const projects: Project[] = [
  {
    id: "compose-migration",
    title: "Compose Migration Guide",
    description: "A comprehensive guide and sample project for migrating legacy Android apps to Jetpack Compose.",
    longDescription: "Created based on real-world experience migrating Medium's Android app to Compose. Includes patterns for interoperability, state management, and testing.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3"],
    links: {
      github: "https://github.com/pierrickcaen",
      article: "https://medium.com/@pierrickcaen"
    },
    featured: true,
    category: "open-source"
  },
  {
    id: "android-template",
    title: "Android Project Template",
    description: "Production-ready Android project template with modern architecture, CI/CD, and best practices.",
    technologies: ["Kotlin", "Compose", "Hilt", "Coroutines", "GitHub Actions"],
    links: {
      github: "https://github.com/pierrickcaen"
    },
    featured: true,
    category: "tool"
  },
  {
    id: "lightning-talks",
    title: "Lightning Talks Collection",
    description: "A series of short, impactful technical presentations on Android development topics.",
    technologies: ["Android", "Kotlin", "Architecture"],
    links: {
      article: "https://medium.com/@pierrickcaen"
    },
    featured: false,
    category: "side-project"
  },
  {
    id: "ai-android-assistant",
    title: "AI Android Dev Assistant",
    description: "Experimental AI-powered tool to help with Android development tasks and code generation.",
    technologies: ["Python", "OpenAI API", "Kotlin"],
    links: {
      github: "https://github.com/pierrickcaen"
    },
    featured: true,
    category: "side-project"
  },
  {
    id: "performance-toolkit",
    title: "Android Performance Toolkit",
    description: "Collection of tools and scripts for profiling and optimizing Android applications.",
    technologies: ["Kotlin", "ADB", "Shell Scripts", "Python"],
    links: {
      github: "https://github.com/pierrickcaen"
    },
    featured: false,
    category: "tool"
  }
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "android", label: "Android" },
  { id: "open-source", label: "Open Source" },
  { id: "side-project", label: "Side Projects" },
  { id: "tool", label: "Tools" }
] as const;

