import {
  frontend,
  database,
  backend,
  user,
  python,
  typescript,
  nextjs,
  langchain,
  langgraph,
  openai,
  anthropic,
  huggingface,
  pinecone,
  postgresql,
  n8n,
  docker,
  aws,
  gcp,
  s42,
  projecktai,
  komikult,
  leaderboard,
  bwmap,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'A propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Recherche & Analyse Intelligente',
    icon: database,
  },
  {
    title: 'Agents IA & Assistants Autonomes',
    icon: frontend,
  },
  {
    title: 'Automatisation de Processus',
    icon: backend,
  },
  {
    title: 'Deploiement & Infrastructure Cloud',
    icon: user,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'LangChain',
    icon: langchain,
  },
  {
    name: 'LangGraph',
    icon: langgraph,
  },
  {
    name: 'OpenAI',
    icon: openai,
  },
  {
    name: 'Anthropic',
    icon: anthropic,
  },
  {
    name: 'Hugging Face',
    icon: huggingface,
  },
  {
    name: 'Pinecone',
    icon: pinecone,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'n8n',
    icon: n8n,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'GCP',
    icon: gcp,
  },
];

const experiences = [
  {
    title: 'Fondateur & Ingenieur IA Generative',
    company_name: 'Rezus Agency',
    iconBg: '#333333',
    initials: 'RA',
    date: 'Mai 2025 — Aujourd\'hui',
    url: '',
  },
  {
    title: 'Ingenieur IA — Assistant Vocal & Calendrier Intelligent',
    company_name: 'Kopilot Conseil',
    iconBg: '#333333',
    initials: 'KC',
    date: 'Mars 2025 — Mai 2025',
    url: 'https://www.kopilot-conseil.fr/',
  },
  {
    title: 'Developpeur Full Stack IA — CRM & Assistant Conversationnel',
    company_name: 'eDevice',
    iconBg: '#333333',
    initials: 'eD',
    date: 'Janvier 2025 — Avril 2025',
    url: 'https://edevice.com/',
  },
  {
    title: 'Ingenieur Full Stack & IA — Cloud Microservices',
    company_name: 'Groupe JHMH',
    iconBg: '#333333',
    initials: 'GJ',
    date: 'Septembre 2024 — Fevrier 2025',
    url: 'https://jhmh.com/',
  },
  {
    title: 'Fondateur & Developpeur IA — SaaS Automation',
    company_name: 'Ghost Factory',
    iconBg: '#333333',
    initials: 'GF',
    date: 'Octobre 2024 — Janvier 2025',
    url: '',
  },
  {
    title: 'Ingenieur Data IA',
    company_name: 'Art Paris',
    iconBg: '#333333',
    initials: 'AP',
    date: 'Juillet 2024 — Septembre 2024',
    url: 'https://www.artparis.com/',
  },
  {
    title: 'Developpeur Full Stack IA — Plateforme VetTech',
    company_name: 'Smartbricks',
    iconBg: '#333333',
    initials: 'SB',
    date: 'Juin 2024 — Septembre 2024',
    url: 'https://www.smartbricks.io/',
  },
  {
    title: 'Developpeur IA / R&D',
    company_name: 'Robin & Co',
    iconBg: '#333333',
    initials: 'RC',
    date: 'Avril 2024 — Juin 2024',
    url: 'https://www.robinandco.com/',
  },
  {
    title: 'Ingenieur IA — Plateforme Market Intelligence',
    company_name: 'Schoolab',
    iconBg: '#333333',
    initials: 'SL',
    date: 'Mars 2024 — Mai 2024',
    url: 'https://www.theschoolab.com/',
  },
  {
    title: 'Fondateur & CPO',
    company_name: 'NeuralSpark Inc',
    iconBg: '#333333',
    initials: 'NS',
    date: 'Aout 2023 — Mai 2024',
    url: 'https://neuralspark.ca/',
  },
  {
    title: 'Ingenieur IA — Systeme CRM & Email Intelligent',
    company_name: 'ACCEOR',
    iconBg: '#333333',
    initials: 'AC',
    date: 'Octobre 2023 — Avril 2024',
    url: 'https://www.acceor.com/',
  },
  {
    title: 'Developpeur Full Stack — Programme de Recherche Europeen',
    company_name: 'Universite Paul Valery Montpellier 3',
    iconBg: '#333333',
    initials: 'UPV',
    date: 'Aout 2023 — Decembre 2023',
    url: 'https://www.univ-montp3.fr/',
  },
  {
    title: 'Developpeur Full Stack — Plateforme de Generation Musicale IA',
    company_name: 'Maxtrack',
    iconBg: '#333333',
    initials: 'MT',
    date: 'Mars 2023 — Juillet 2023',
    url: '',
  },
  {
    title: 'Developpeur Full Stack — Plateforme MedTech',
    company_name: 'Bealy Medical',
    iconBg: '#333333',
    initials: 'BM',
    date: 'Novembre 2022 — Fevrier 2023',
    url: 'https://bealymedical.com/',
  },
  {
    title: 'Developpeur Web — Agence Growth Marketing',
    company_name: 'CLDC Agency',
    iconBg: '#333333',
    initials: 'CLDC',
    date: 'Mai 2022 — Octobre 2022',
    url: 'https://www.instagram.com/agencecdlc/',
  },
  {
    title: 'Etudiant en Ingenierie Logicielle',
    company_name: '42',
    icon: s42,
    iconBg: '#333333',
    date: 'Aout 2022 — Juillet 2024',
    url: 'https://42.fr/',
  },
  {
    title: 'Developpeur Web Freelance',
    company_name: 'Maconnerie Pro',
    iconBg: '#333333',
    initials: 'MP',
    date: 'Janvier 2022 — Avril 2022',
    url: 'https://www.maconneriepro.com/',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pushy',
    description:
      'Plusieurs agents IA qui collaborent sur des taches complexes — orchestration centralisee, execution isolee et monitoring en temps reel.',
    tags: [
      { name: 'multi-agents', color: 'blue-text-gradient' },
      { name: 'MCP', color: 'green-text-gradient' },
      { name: 'docker', color: 'pink-text-gradient' },
    ],
    image: leaderboard,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'Fouloide',
    description:
      'Un agent IA autonome qui genere du code, cree ses propres outils et s\'auto-ameliore — avec memoire persistante et contraintes de securite integrees.',
    tags: [
      { name: 'agentic AI', color: 'blue-text-gradient' },
      { name: 'MCP', color: 'green-text-gradient' },
      { name: 'python', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'Projeckt AI',
    description:
      'Une idee de business ? La plateforme genere automatiquement analyse SWOT, etude de marche, personas et projections financieres pour valider votre projet.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'django', color: 'green-text-gradient' },
      { name: 'openai', color: 'pink-text-gradient' },
    ],
    image: projecktai,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Prospect Auto',
    description:
      'De la decouverte du lead au closing, entierement automatise — CRM intelligent, scoring des leads, sequences d\'emails et integration Gmail native.',
    tags: [
      { name: 'SaaS', color: 'blue-text-gradient' },
      { name: 'next.js', color: 'green-text-gradient' },
      { name: 'automation', color: 'pink-text-gradient' },
    ],
    image: bwmap,
    repo: '#',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
