export interface Project {
  id: string;
  title: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
    playStore?: string;
    article?: string;
    website?: string;
  };
  featured: boolean;
  category: "android-app" | "website" | "open-source" | "tool";
  screenshot?: string;
  icon?: string;
  iconBackgroundColor?: string;
  downloads?: string; // e.g., "10M+", "100K+"
  rating?: number; // e.g., 4.5
}

export const projects: Project[] = [
  // Android Apps
  {
    id: "medium-app",
    title: "Medium",
    description: "The official Medium Android app - where good ideas find you.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.medium.reader"
    },
    featured: true,
    category: "android-app",
    screenshot: "/screenshots/medium_android.jpeg",
    icon: "/logos/medium.svg",
    downloads: "10M+",
    rating: 4.6
  },
  {
    id: "parking-velo-app",
    title: "Parking à vélo",
    description: "Find bike parking spots in French cities.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=fr.prcaen.bicycleparking"
    },
    featured: false,
    category: "android-app",
    screenshot: "/screenshots/parking_velo_android.jpeg",
    icon: "/logos/parking_a_velo.png",
    iconBackgroundColor: "#3B86CB",
    downloads: "500+"
  },
  {
    id: "yubo-app",
    title: "Yubo",
    description: "Social platform for Gen-Z to make new friends through live streaming.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=co.yellw.yellowapp"
    },
    featured: true,
    category: "android-app",
    screenshot: "/screenshots/yubo_android.jpeg",
    icon: "/logos/yubo.png",
    iconBackgroundColor: "#FBE64C",
    downloads: "10M+",
    rating: 4.4
  },
  {
    id: "blablacar-app",
    title: "BlaBlaCar",
    description: "The world's leading carpooling platform connecting millions of travelers.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.comuto"
    },
    featured: true,
    category: "android-app",
    screenshot: "/screenshots/blablacar_android.jpeg",
    icon: "/logos/blablacar.png",
    iconBackgroundColor: "#75BAF4",
    downloads: "100M+",
    rating: 4.6
  },
  {
    id: "getaround-app",
    title: "Getaround",
    description: "Car sharing marketplace to rent cars from people nearby.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.c4mprod.voiturelib"
    },
    featured: true,
    category: "android-app",
    screenshot: "/screenshots/getaround_android.jpeg",
    icon: "/logos/getaround.png",
    iconBackgroundColor: "#AC23C5",
    downloads: "1M+",
    rating: 4.5
  },
  {
    id: "prix-carburants-app",
    title: "Prix des carburants",
    description: "Compare fuel prices at gas stations near you in France.",
    links: {},
    featured: false,
    category: "android-app",
    screenshot: "/screenshots/fuel_prices_android.png",
    icon: "/logos/fuel_prices.png",
    iconBackgroundColor: "#C23F38",
  },
  {
    id: "my-warner-app",
    title: "My Warner",
    description: "Official Warner Bros. app for movie fans and collectors.",
    links: {},
    featured: false,
    category: "android-app",
    screenshot: "/screenshots/my_warner_android.png",
    icon: "/logos/my_warner.png",
    iconBackgroundColor: "#2962BE",
  },

  // Websites
  {
    id: "long-avocat-website",
    title: "Long-avocat.com",
    description: "Professional website for a French law firm.",
    links: {
      website: "https://long-avocat.com"
    },
    featured: true,
    category: "website",
    screenshot: "/screenshots/long_avocat_website.png"
  },
  {
    id: "warner-bros-france-website",
    title: "Warner Bros France",
    description: "Official Warner Bros. France website.",
    links: {},
    featured: true,
    category: "website",
    screenshot: "/screenshots/warnerbros_france_website.png"
  },
  {
    id: "wdmtg-website",
    title: "Where Does My Tweet Go",
    description: "Visualize how your tweets spread across Twitter.",
    links: {},
    featured: false,
    category: "website",
    screenshot: "/screenshots/wdmtg_corporate_website.png"
  },
  {
    id: "getaround-website",
    title: "Getaround",
    description: "Car sharing marketplace website.",
    links: {
      website: "https://www.getaround.com"
    },
    featured: false,
    category: "website",
    screenshot: "/screenshots/getaround_website.png"
  },

  // Open Source & Tools
  {
    id: "external-resources",
    title: "External Resources",
    description: "Android library to use resources over the air. Update your app's resources without releasing a new version.",
    links: {
      github: "https://github.com/prcaen/external-resources"
    },
    featured: true,
    category: "open-source"
  },
  {
    id: "always-finish-activities",
    title: "Always Finish Activities",
    description: "Quick Settings tile to toggle Android's 'Don't Keep Activities' developer option.",
    links: {
      github: "https://github.com/prcaen/AlwaysFinishActivities"
    },
    featured: false,
    category: "tool"
  }
];

export const categories = [
  { id: "all", label: "All" },
  { id: "android-app", label: "Android Apps" },
  { id: "website", label: "Websites" },
  { id: "open-source", label: "Open Source" },
  { id: "tool", label: "Tools" }
] as const;
