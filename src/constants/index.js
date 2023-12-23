import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dreambig,
  bbi,
  cpp,
  unreal,
  unity,
  opengl,
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
];

const services = [
  {
    title: "C++ Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Game Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "OpenGL",
    icon: opengl,
  },
  {
    name: "HTML 5",
    icon: html,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Co-op Software developer",
    company_name: "Dream big Semiconductor",
    icon: dreambig,
    iconBg: "#383E56",
    date: "Jan 2024 - Sep 2024",
    points: [
      "Developing computer architecture simulator using C++ for testing the bottleneck of chipsets",
    ],
  },
  {
    title: "Co-op Game Developer",
    company_name: "Blackbird Interactive",
    icon: bbi,
    iconBg: "#383E56",
    date: "Sep 2022 - Apr 2023",
    points: [
      "Participated in the development of Minecraft PE",
      "Developed a multi-touch solution for two new touch control schemes and resolved mobile touch control bugs for the Minecraft Mobile Access Team.",
      "Worked with Minecraft Realms Client and Services Team to resolve Realms-related UI/Network bugs and implement new realms stories features using React and C++.",
      "Participated in the development of Minecraft PE. - Developed a multi-touch solution for two new touch control schemes and resolved mobile touch control bugs for the Minecraft Mobile Access Team.",
      "Worked with Minecraft Realms Client and Services Team to resolve Realms-related UI/Network bugs and implement new realms stories features using React and C++.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "Toy Renderer",
    description:
      "A 3D renderer with Gui",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "OpenGL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blaster",
    description:
      "A 3D Online Multiplayer shooter game",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal 5",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "One Memory Helper",
    description:
      "A web application that remind users to review Onenote pages regularly",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
