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
    short: `Passionate about building products that people actually enjoy using.`
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
    id: "medium-android-app-migrating-from-apollo-kotlin-3-to-4-lessons-learned",
    title: "Medium Android App — Migrating from Apollo Kotlin 3 to 4: Lessons Learned",
    description: "Sharing my experience migrating the Medium Android app from Apollo Kotlin version 3 to version 4, including the challenges I encountered and how I solved them to improve our GraphQL implementation.",
    date: "2025-12-06",
    readTime: "6 min read",
    url: "https://medium.engineering/medium-android-app-migrating-from-apollo-kotlin-3-to-4-lessons-learned-ff8d0d861cdb",
    tags: ["Android", "Apollo Client", "Kotlin", "GraphQL"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/0*DVZBoA0hHs4SHvqF"
  },
  {
    id: "cowboy-cruiser-st-une-deception-a-2689",
    title: "Cowboy Cruiser ST : une déception à 2689€",
    description: "En mars 2022 j’ai décidé d’investir dans un vélo électrique et mon choix s’est porté sur le Cowboy 4 ST, aujourd’hui connu sous le nom de Cowboy Cruiser ST. Après trois ans d’utilisation, je me sens obligé de partager mon expérience, qui malheureusement, n’a pas été à la hauteur de mes attentes.",
    date: "2025-04-24",
    readTime: "7 min read",
    url: "https://medium.pierrickcaen.fr/cowboy-cruiser-st-une-d%C3%A9ception-%C3%A0-2689-328735276c9f",
    tags: ["Cycling", "Electric Bike", "Bikes"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/1*Vslrw_xg2_uwfsUIOz0JPQ.png"
  },
  {
    id: "from-xml-to-compose",
    title: "From XML to Compose",
    description: "In past years, I was working on a project that was using XML for the UI. I had to migrate the project to Compose. In this article, I will share my experience and the lessons learned.",
    date: "2022-12-14",
    readTime: "4 min read",
    url: "https://medium.com/android-digest/from-xml-to-compose-84f262d8193c",
    tags: ["Android", "Compose", "Android App development"],
    imageLink: "https://miro.medium.com/v2/resize:fit:360/format:webp/1*9MGhD5Tbh7Tor0RG9r6P9w.png"
  }
];

