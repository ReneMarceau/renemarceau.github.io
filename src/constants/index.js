import { data } from 'autoprefixer';
import {
  frontend,
  database,
  backend,
  ux,
  user,
  prototyping,
  javascript,
  python,
  svelte,
  mysql,
  mango,
  firebase,
  express,
  django,
  aws,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  s42,
  codeur,
  upwork,
  videosblade,
  maconnerie,
  projecktai,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Database Design & Management',
    icon: database,
  },
  {
    title: 'Client Consultations',
    icon: user,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Svelte',
    icon: svelte,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'FreeLancer',
    company_name: 'codeur.com',
    icon: codeur,
    iconBg: '#333333',
    date: 'Mar 2021 - Sep 2022',
  },
  {
    title: 'Student - Software Engineering',
    company_name: '42 School',
    icon: s42,
    iconBg: '#333333',
    date: 'Sep 2022 - SEP 2024',
  },
  {
    title: 'Lead Web Developer',
    company_name: 'Creme de la Creme',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - Mar 2024',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Upwork',
    icon: upwork,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
  },
];

const projects = [
  // {
  //   id: 'project-1',
  //   name: 'Transcendence',
  //   description: 'My last 42 School project, a website to play pong against an AI.',
  //   tags: [
  //     {
  //       name: 'django',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'postgresql',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'docker',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/ReneMarceau/ft_transcendence',
  //   demo: '#',
  // },
  {
    id: 'project-2',
    name: 'Projeckt AI',
    description: 'AI-driven platform to evaluate, refine, and guide entrepreneurs through their business journey.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: projecktai,
    repo: 'https://github.com/ReneMarceau/projeckt-dashboard',
    demo: 'https://www.projecktai.com/',
  },
  {
    id: 'project-3',
    name: 'Videos Blade',
    description:
      'A Youtube video analytics platform to get a detailed analysis of any video on Youtube.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: videosblade,
    repo: 'https://github.com/ReneMarceau/Videos_Blade',
    demo: 'https://videosblade.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Maconnerie Pro',
    description: 'A single-page application for a masonry company.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'green-text-gradient',
      },
    ],
    image: maconnerie,
    repo: 'https://github.com/ReneMarceau/maconneriepro',
    demo: 'https://www.maconneriepro.com/',
  },
];

export { services, technologies, experiences, projects };
