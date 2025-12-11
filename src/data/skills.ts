export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: "development" | "product" | "tools";
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "development",
    title: "Development",
    icon: "💻",
    skills: [
      { name: "Kotlin", level: 5, category: "development" },
      { name: "Jetpack Compose", level: 5, category: "development" },
      { name: "Android SDK", level: 5, category: "development" },
      { name: "Coroutines & Flow", level: 5, category: "development" },
      { name: "Java", level: 4, category: "development" },
      { name: "Git", level: 5, category: "development" },
      { name: "CI/CD", level: 4, category: "development" },
      { name: "GraphQL", level: 4, category: "development" },
      { name: "REST APIs", level: 5, category: "development" },
      { name: "SQL / Room", level: 4, category: "development" }
    ]
  },
  {
    id: "product",
    title: "Product Engineering",
    icon: "🎯",
    skills: [
      { name: "A/B Testing", level: 5, category: "product" },
      { name: "Analytics & Metrics", level: 5, category: "product" },
      { name: "User Research", level: 4, category: "product" },
      { name: "Cross-team Collaboration", level: 5, category: "product" },
      { name: "Technical Writing", level: 4, category: "product" },
      { name: "Code Reviews", level: 5, category: "product" },
      { name: "Mentoring", level: 4, category: "product" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: "🛠️",
    skills: [
      { name: "Android Studio", level: 5, category: "tools" },
      { name: "Figma", level: 4, category: "tools" },
      { name: "Sketch", level: 3, category: "tools" },
      { name: "Firebase", level: 4, category: "tools" },
      { name: "Jira / Linear", level: 5, category: "tools" },
      { name: "Notion", level: 4, category: "tools" }
    ]
  }
];

