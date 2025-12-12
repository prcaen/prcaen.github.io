export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  missions: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "medium",
    title: "Senior Android Engineer / Product Engineer",
    company: "Medium",
    companyUrl: "https://medium.com",
    location: "Paris (Remote)",
    startDate: "2022",
    endDate: "Present",
    missions: [
      "Product engineer for the Growth team",
      "Senior Android contributor for multiple teams",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Coroutines", "Dagger/Hilt", "GraphQL", "Coil"],
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
    description: "Built the Android application with 10M downloads and 4.4 stars rating from scratch",
    missions: [
      "Developed real-time video streaming features with WebRTC integration",
      "Led a team of 6 engineers",
    ],
    technologies: ["Kotlin", "WebRTC", "RxJava", "Firebase", "MVVM", "Live streaming"],
    logo: "/logos/yubo.png"
  },
  {
    id: "blablacar",
    title: "Lead Software Engineer",
    company: "BlaBlaCar",
    companyUrl: "https://blablacar.com",
    location: "Paris, France",
    startDate: "2017",
    endDate: "2020",
    description: "Contributed to the world's leading carpooling platform serving millions of users.",
    missions: [
      "Created the Trust Tribe",
      "Lead Software Engineer in a team of 5 software engineers",
      "Built the Lead Engineer role @BlaBlaCar"
    ],
    technologies: ["Kotlin", "Java", "RxJava", "MVP", "Retrofit"],
    logo: "/logos/blablacar.png"
  },
  {
    id: "mfg",
    title: "Software Engineer",
    company: "MFG Labs",
    companyUrl: "https://mfglabs.com",
    location: "Paris, France",
    startDate: "2013",
    endDate: "2015",
    missions: [
      "Build an Android application for Warner Bros",
      "Contributed to the development of Warner Bros France website",
    ],
    technologies: ["Java", "Scala", "Play Framework", "PostgreSQL"],
    logo: "/logos/mfg.svg"
  },
  {
    id: "getaround",
    title: "Software Engineer",
    company: "Getaround",
    companyUrl: "https://getaround.com",
    location: "Paris, France",
    startDate: "2012",
    endDate: "2013",
    missions: [
      "Be the first Android engineer at Getaround",
      "Contributed to the scale the company as an early employee",
    ],
    technologies: ["Android", "Java", "Ruby on Rails", "Git", "CI/CD"],
    logo: "/logos/getaround.png"
  }
];

