export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  missions: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "medium",
    title: "Senior Android Engineer",
    company: "Medium",
    companyUrl: "https://medium.com",
    location: "Paris (Remote)",
    startDate: "2022",
    endDate: "Present",
    description: "Lead Android development for the Medium editor and content distribution features.",
    missions: [
      "Lead development on the Android editor: added iframe support, migrated to Jetpack Compose, and optimized performance metrics",
      "Collaborated with product teams to enhance UX for direct distribution features",
      "Reduced build times significantly and resolved critical bugs including OutOfMemoryError issues",
      "Implemented AI-powered features for content recommendations"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Coroutines", "Dagger/Hilt", "GraphQL"],
    logo: "/logos/medium.svg"
  },
  {
    id: "yubo",
    title: "Lead Android Engineer",
    company: "Yubo",
    companyUrl: "https://yubo.live",
    location: "Paris, France",
    startDate: "2017",
    endDate: "2022",
    description: "Built social features and live streaming capabilities for Gen-Z social platform.",
    missions: [
      "Developed real-time video streaming features with WebRTC integration",
      "Led migration from Java to Kotlin across the codebase",
      "Implemented A/B testing framework and analytics tracking",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Kotlin", "WebRTC", "RxJava", "Firebase", "MVVM"],
    logo: "/logos/yubo.png"
  },
  {
    id: "blablacar",
    title: "Android Engineer",
    company: "BlaBlaCar",
    companyUrl: "https://blablacar.com",
    location: "Paris, France",
    startDate: "2017",
    endDate: "2020",
    description: "Contributed to the world's leading carpooling platform serving millions of users.",
    missions: [
      "Developed booking and payment features for the Android app",
      "Implemented offline-first architecture for improved user experience",
      "Contributed to design system and reusable component library",
      "Participated in cross-platform initiatives with iOS and web teams"
    ],
    technologies: ["Kotlin", "Java", "RxJava", "Room", "Retrofit"],
    logo: "/logos/blablacar.png"
  }
];

