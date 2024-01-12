import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import backendanimation from '../assets/animation/backend.json'
import webanimation from '../assets/animation/web.json'
import appanimation from '../assets/animation/appdevelopment.json'
import uixanimation from '../assets/animation/uix.json'
import {
  web,
  backend,
  mobile,
  uix,
  starbucks,
  meta,
  jobit,
  tripguide,
  tesla,
  shopify,
  carrent,
  tathastu,
  urbanstore,
} from "../assets";
import { variables, glory, almondtech,uber } from "../assets";
import {
  springboot,
  css,
  docker,
  figma,
  git_hub,
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  redux,
  tailwind,
  threejs,
  typescript,
  android,
  asp,
  cpp,
  express,
  firebase,
  flutter,
  java,
  mysql,
  postgre,
  postman,
  python,
  native,
  php,
  next,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "featured",
    title: "Featured",
  },
];

export const contacts = [
  {
    id: "linkdin",
    title: "linkdin",
    url: "linkdin/harshkhavale",
    icon: <LinkedInIcon />,
  },
  {
    id: "linkdin",
    title: "linkdin",
    url: "linkdin/harshkhavale",
    icon: <GitHubIcon />,
  },
  {
    id: "linkdin",
    title: "linkdin",
    url: "linkdin/harshkhavale",
    icon: <EmailIcon />,
  },
  {
    id: "linkdin",
    title: "linkdin",
    url: "linkdin/harshkhavale",
    icon: <TwitterIcon />,
  },
];
export const services = [
  {
    title: "Web Developer",
    icon: web,
    animation:webanimation
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    animation:appanimation
  },
  {
    title: "Backend Developer",
    icon: backend,
    animation:backendanimation
  },
  {
    title: "UI/UX Designer",
    icon: uix,
    animation:uixanimation
  },
];
const frontend = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three.Js",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const frameworks = [
  {
    name: "ReactJs",
    icon: react,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Express js",
    icon: express,
  },
  {
    name: "Spring boot",
    icon: springboot,
  },
  {
    name: "ASP.NET",
    icon: asp,
  },
];
const webtools = [
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git /GitHub",
    icon: git_hub,
  },
  {
    name: "postman",
    icon: postman,
  },
];
const mobiletech = [
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React Native",
    icon: react,
  },
];
const backendtech = [
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
];
const database = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgre",
    icon: postgre,
  },
];

export { frontend, database, frameworks, backendtech, webtools, mobiletech };

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "variables.com",
    subtitle: "E-commerce digital electonics store ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "RazorPay",
        color: "pink-text-gradient",
      },
    ],
    image: variables,
    source_code_link:
      "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    live_demo: "",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "glory",
    subtitle: "online makeup store design ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: glory,
    source_code_link:
      "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    live_demo: "",
  },
  {
    name: "almond-tech",
    subtitle: "replication of almond-tech Technology website ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: almondtech,
    source_code_link:
      "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    live_demo: "",
  },


  {
    name: "variables.com",
    subtitle: "E-commerce digital electonics store ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "RazorPay",
        color: "pink-text-gradient",
      },
    ],
    image: variables,
    source_code_link:
      "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    live_demo: "",
  },
  {
    name: "urban_store.in",
    subtitle: "E-commerce digital electonics store ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      
    ],
    image: urbanstore,
    source_code_link:
      "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    live_demo: "",
  },


  {
    name: "UBER.com",
    subtitle: "E-commerce digital electonics store ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "canva",
        color: "green-text-gradient",
      },
     
    ],
    image: uber,
    
  },
  {
    name: "तथास्तु.com",
    subtitle: "E-commerce digital electonics store ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "canva",
        color: "green-text-gradient",
      },
     
    ],
    image: tathastu,
    
  },
  
] 
