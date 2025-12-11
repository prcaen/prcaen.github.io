export const CAREER_START_YEAR = 2012;

export const getYearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

export const personalInfo = {
  name: "Pierrick Caen",
  title: "Senior Android & Product Engineer",
  tagline: "Building delightful mobile experiences",
  email: "pierrick.caen@gmail.com",
  location: "Paris, France",
  careerStartYear: CAREER_START_YEAR,
  
  about: {
    short: `Senior Android Engineer with ${getYearsOfExperience()}+ years of experience building products used by millions. Passionate about clean architecture, great UX, and helping teams ship faster.`,
    long: [
      `I'm a Senior Android Engineer who loves building products that people actually enjoy using. Over the past ${getYearsOfExperience()}+ years, I've had the privilege of working with amazing teams at Medium, Yubo, and BlaBlaCar.`,
      "My expertise spans the entire Android development lifecycle—from architecture design and Jetpack Compose migrations to performance optimization and A/B testing. I believe great products come from the intersection of technical excellence and user empathy.",
      "When I'm not coding, you'll find me exploring new technologies, writing about Android development, or contributing to open-source projects."
    ]
  },
  
  social: {
    github: "https://github.com/prcaen",
    linkedin: "https://www.linkedin.com/in/prcaen",
    medium: "https://medium.com/@prcaen"
  },
  
  resume: "/resume.pdf",
  
  availability: {
    status: "unavailable",
    message: "Currently not looking for new opportunities"
  }
};

export const articles = [
  {
    id: "compose-migration",
    title: "Migrating a Large Android App to Jetpack Compose",
    description: "Lessons learned from migrating Medium's Android editor to Compose, including interoperability patterns and performance optimizations.",
    date: "2024-09-15",
    readTime: "8 min read",
    url: "https://medium.com/@pierrickcaen",
    tags: ["Android", "Compose", "Architecture"]
  },
  {
    id: "ai-android-dev",
    title: "AI in Android Development: A Practical Guide",
    description: "How to leverage AI tools to boost your productivity as an Android developer without losing your edge.",
    date: "2024-07-22",
    readTime: "6 min read",
    url: "https://medium.com/@pierrickcaen",
    tags: ["AI", "Android", "Productivity"]
  },
  {
    id: "lightning-talks",
    title: "The Art of Lightning Talks",
    description: "Why every developer should give lightning talks, and how to make yours memorable.",
    date: "2024-05-10",
    readTime: "4 min read",
    url: "https://medium.com/@pierrickcaen",
    tags: ["Career", "Speaking", "Soft Skills"]
  }
];

