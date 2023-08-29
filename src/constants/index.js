import {
  mobile,
  backend,
  creator,
  web,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  python,
  postgres,
  nodejs,
  git,
  github,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  Amgen,
  SAP,
  bioLytical,
  taskmanager,
  gamesetmatch,
  KnowlEdge,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Game Development",
    icon: mobile,
  },
  {
    title: "Android App Development",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Agile Developer Intern",
    company_name: "SAP",
    icon: SAP,
    iconBg: "white",
    date: "September 2022 - April 2023",
    points: [
      "Enhancing the SAP Analytic Cloud platform using Javascript, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Trouble shooting regressions and inlining customer fixes",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Development Associate",
    company_name: "bioLytical Laboratories",
    icon: bioLytical,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Mar 2020",
    points: [
      "Researched and provided input into design requirements for new rapid diagnostic test products",
      "Translated design requirements into documented design verification and validation test plans",
      "Analyzed and summarized experimental data into reports.",
      "Troubleshooted test results and design challenges.",
    ],
  },
  {
    title: "Associate Level 3",
    company_name: "Amgen",
    icon: Amgen,
    iconBg: "white",
    date: "July 2018 - Jan 2019",
    points: [
      "Screened antibody panels for therapeutic candidates",
      "Developed biochemical and cellular assays to determine binding to targets of interest for drug development",
      "Interpret, analyze and summarize data collected",
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
    name: "Task Manager",
    description:
      "Web based application that allows users to schedule, complete and track the progress of tasks",
    tags: [
      {
        name: "Angular-Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres",
        color: "green-text-gradient",
      },
      {
        name: "Django-Python",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/abigailMoraes/task-manager-app",
    app_link: "https://github.com/abigailMoraes/task-manager-app",
  },
  {
    name: "GameSetMatch",
    description:
      "Web application that enables users to organize and attend tournaments based on their skill level and availability",
    tags: [
      {
        name: "Java Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: gamesetmatch,
    source_code_link: "https://github.com/abigailMoraes",
    app_link: "https://github.com/abigailMoraes",
  },
  {
    name: "KnowlEdge",
    description:
      "KnowlEdge is an online course management system built using the MERN stack, KnowlEdge allows users to create accounts, enroll in courses, access course information, create tasks/events on a calendar, create flashcards for practicing terminology, edit profiles, and view course information.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: KnowlEdge,
    source_code_link: "https://github.com/KKaiyuan/KnowlEdge",
    app_link: "https://knowledge-client.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
