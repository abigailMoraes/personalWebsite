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
  recollection,
  Yelp
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
    title: "Software Engineer",
    company_name: "Yelp",
    icon: Yelp,
    iconBg: "white",
    date: "May 2024 - Present",
    points: [
      "Trained and deployed ML models to improve automated bot traffic detection and mitigation, thereby safeguarding Yelp\'s data, preserving service availability, and optimizing ad spend.",
      "Maintained and enhanced a variety of internal dashboards and services to investigate traffic anomalies, identify novel bot behavioral signals and generate labeled datasets for continued improvement.",
      "Harnessed AI and ML workflows to streamline traffic spike investigations and metric reconciliation.",
    ],
  },
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
   {
    name: "Recollection",
    description:
      "2D platformer with wave survival with a simple game engine built entirely in OpenGL. Key features implemented include parallax scrolling backgrounds, sprite animation, mesh collision, particle effects and basic gamge physics. Also implemented a simple fragment shader for visual effects.",
      tags:[
      {
        name: "OpenGL",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Game Development",
        color: "pink-text-gradient",
      },
    ],
    image: recollection,
    source_code_link: "https://github.com/abigailMoraes/recollection",
    app_link: "https://github.com/abigailMoraes/recollection",
  },
];

export { services, technologies, experiences, projects };
