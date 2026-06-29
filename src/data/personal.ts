export const CAREER_START_YEAR = 2012;

export const getYearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

export const personalInfo = {
  name: "Pierrick Caen",
  title: "Senior Android / Product Engineer",
  tagline: "Building delightful mobile experiences",
  email: "mail@pierrickcaen.fr",
  location: "Paris, France",
  careerStartYear: CAREER_START_YEAR,
  
  about: {
    short: `I've spent the last ${getYearsOfExperience()} years crafting Android apps from startups to products reaching over 100 million users. I care deeply about the product and the user experience`
  },
  
  social: {
    github: "https://github.com/prcaen",
    linkedin: "https://www.linkedin.com/in/prcaen",
    medium: "https://medium.com/@prcaen"
  },
  
  availability: {
    status: "unavailable",
    message: "Currently not looking for new opportunities"
  }
};

export const articles = [
  {
    id: "my-journey-into-3d-printing-from-zero-to-making-stuff-i-actually-use",
    title: "My Journey into 3D Printing: From Zero to Making Stuff I Actually Use",
    description: "I'm an engineer, and DIY has always been part of how I spend my time outside of work. This is the story of how I got started with a Bambu Lab A1, what I've learned, and what I've already printed that's genuinely useful in my day-to-day life.",
    date: "2026-03-23",
    readTime: "8 min read",
    url: "https://medium.pierrickcaen.fr/my-journey-into-3d-printing-from-zero-to-making-stuff-i-actually-use-8a9a9fd49344",
    tags: ["3D Printing", "DIY", "Makers", "Tools"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/1*6thuldttrFrk8_pGqBgf0A.jpeg"
  },
  {
    id: "making-ai-write-android-code-our-way-a-practical-guide-to-agent-skills",
    title: "Making AI Write Android Code Our Way: A Practical Guide to Agent Skills",
    description: "Turning knowledge into reusable AI agent instructions for a small, fast-moving team. How we encoded our Android team's playbook with AGENTS.md and Cursor skills so the AI follows our conventions every time.",
    date: "2026-03-17",
    readTime: "8 min read",
    url: "https://medium.pierrickcaen.fr/making-ai-write-android-code-our-way-a-practical-guide-to-agent-skills-4e7b085d8e50",
    tags: ["Android", "AI", "Cursor", "Agent Skills"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/1*n5sxsldnVThq58wvtSSInA.png"
  },
  {
    id: "how-i-built-a-custom-solid-oak-bathroom-light-fixture",
    title: "How I Built a Custom Solid Oak Bathroom Light Fixture",
    description: "A DIY woodworking and electrical project from design to installation. Replacing harsh fluorescent tubes with a custom solid oak fixture, swappable spotlights, and a warm 3000K glow.",
    date: "2026-02-12",
    readTime: "5 min read",
    url: "https://medium.pierrickcaen.fr/how-i-built-a-custom-solid-oak-bathroom-light-fixture-558b021d9e77",
    tags: ["DIY", "Woodworking", "Home Improvement"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/0*AIHj9Qkd6_wmk7rh.jpeg"
  },
  {
    id: "medium-android-app-migrating-from-apollo-kotlin-3-to-4-lessons-learned",
    title: "Medium Android App — Migrating from Apollo Kotlin 3 to 4: Lessons Learned",
    description: "Sharing my experience migrating the Medium Android app from Apollo Kotlin version 3 to version 4, including the challenges I encountered and how I solved them to improve our GraphQL implementation.",
    date: "2025-12-06",
    readTime: "6 min read",
    url: "https://medium.engineering/medium-android-app-migrating-from-apollo-kotlin-3-to-4-lessons-learned-ff8d0d861cdb",
    tags: ["Android", "Apollo Client", "Kotlin", "GraphQL"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/0*DVZBoA0hHs4SHvqF"
  }
];

