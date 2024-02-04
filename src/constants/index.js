import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

// #animations
import backendanimation from "../assets/animation/backend.json";
import webanimation from "../assets/animation/web.json";
import appanimation from "../assets/animation/appdevelopment.json";
import uixanimation from "../assets/animation/uix.json";
import {
  variables,
  variablesbanner,
  variableslogo,
  spotifybanner,
  socialbanner,
  airbnbbanner,
  javascriptCertificate,
  problemSolvingCertificate,
  dsacertificate,
  javacertificate,
  linuxcertificate,
  angular,
} from "../assets";
import XIcon from '@mui/icons-material/X';
import {
  
  css,
  figma,
  github,
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
  php,
  next,
} from "../assets";
import { socialanime, spotifyanime, spotifydashboard, spotifydashboardmobile, spotifylogo, spotifymain, spotifymainmobile, urbananalysis, urbancartmobile, urbandetail, urbandetailmobile, urbanmain, urbanmainmobile, urbanshowcase, urbansigninmobile, urbanstorebanner, urbanstorelogo } from "../assets/projects";
import { X } from "@mui/icons-material";
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
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/harshkhavale11/",
    icon: <LinkedInIcon />,
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/harshkhavale",
    icon: <GitHubIcon />,
  },
  {
    id: "email",
    title: "Gmail",
    url: "harshkhavale1102@gmailcom",
    icon: <EmailIcon />,
  },
  {
    id: "X",
    title: "X",
    url: "https://twitter.com/HarshKhavale",
    icon: <XIcon/>,
  },
];
export const services = [
  {
    title: "Web Developer",
    animation: webanimation,
    text: "Web Developer",
  },
  {
    title: "Mobile Developer",
    animation: appanimation,
  },
  {
    title: "Backend Developer",
    animation: backendanimation,
  },
  {
    title: "UI/UX Designer",
    animation: uixanimation,
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
    name: "Angular",
    icon: angular,
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
    icon: github,
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

export const certificates = [
  {
    title: "Javascript",
    link: "https://www.hackerrank.com/certificates/c3536b132243",
    img: javascriptCertificate,
  },
  {
    title: "Linux ",
    link: "",
    img: linuxcertificate,
  },
  {
    title: "Problem Solving",
    link: "https://www.hackerrank.com/certificates/0644fd90b3c2",
    img: problemSolvingCertificate,
  },
  {
    title: "DSA",
    link: "",
    img: dsacertificate,
  },
  {
    title: "Java",
    link: "",
    img: javacertificate,
  },
];

export const projects = [
  {
    title: "VARIABLES",
    bannerImg: variablesbanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#ECF0F1",
    theme2: "#41566e",
    theme2: "#232426",
    color: "#17202A",
    logo: variableslogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: variables,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "URBAN_STORE",
    bannerImg: urbanstorebanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#E74C3C",
    theme2: "#41566e",
    theme2: "#232426",
    color: "#FDFEFE",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: "https://urban-store-in-apk.vercel.app/",
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: urbandetail,
      },
      {
        name: "Home",
        image: urbanshowcase,
      },
      {
        name: "Home",
        image: urbananalysis,
      },
    ],
    pages: [
      {
        title: "Home",
        image: urbanmain,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanmainmobile,
      },
      {
        image: urbancartmobile,
      },
      {
        image:urbandetailmobile,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
 
  {
    title: "SPOTIFY",
    bannerImg:spotifybanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#2ECC71",
    theme2: "#00ff1a",
    theme2: "#232426",
    color: "#FDFEF",
    logo: spotifylogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: spotifymain,
      },
      {
        name: "Home",
        image: spotifydashboard,
      },
      
    ],
    pages: [
      {
        title: "Home",
        image: spotifymain,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: spotifymainmobile,
      },
      {
        image: spotifydashboardmobile,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "SOCIAL",
    bannerImg: socialanime,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#D6EAF8",
    theme2: "#41566e",
    theme2: "#232426",
    color: "black",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanstorelogo,
      },
      {
        image: urbanstorelogo,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "airbnb",
    bannerImg: airbnbbanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#F8BBD0",
    theme2: "#41566e",
    theme2: "#232426",
    color: "black",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanstorelogo,
      },
      {
        image: urbanstorelogo,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
];
