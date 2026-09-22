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
  { id: 'about' },
  { id: 'projects' },
  { id: 'experience' },
  { id: 'contact' },
];

const services = [
  { key: 'research', icon: database },
  { key: 'agents', icon: frontend },
  { key: 'automation', icon: backend },
  { key: 'cloud', icon: user },
];

const stats = ['years', 'projects', 'industries'];

// Year I started working professionally; years of experience are derived from it
const CAREER_START_YEAR = 2022;
const yearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

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
    key: 'rezus',
    company_name: 'Rezus Agency',
    iconBg: '#333333',
    initials: 'RA',
    url: 'https://www.rezus-agency.com/',
  },
  {
    key: 'kopilot',
    company_name: 'Kopilot Conseil',
    iconBg: '#333333',
    initials: 'KC',
    url: 'https://www.kopilot-conseil.fr/',
  },
  {
    key: 'edevice',
    company_name: 'eDevice',
    iconBg: '#333333',
    initials: 'eD',
    url: 'https://edevice.com/',
  },
  {
    key: 'jhmh',
    company_name: 'Groupe JHMH',
    iconBg: '#333333',
    initials: 'GJ',
    url: 'https://jhmh.com/',
  },
  {
    key: 'ghostFactory',
    company_name: 'Ghost Factory',
    iconBg: '#333333',
    initials: 'GF',
    url: '',
  },
  {
    key: 'artParis',
    company_name: 'Art Paris',
    iconBg: '#333333',
    initials: 'AP',
    url: 'https://www.artparis.com/',
  },
  {
    key: 'smartbricks',
    company_name: 'Smartbricks',
    iconBg: '#333333',
    initials: 'SB',
    url: 'https://www.smartbricks.io/',
  },
  {
    key: 'robinAndCo',
    company_name: 'Robin & Co',
    iconBg: '#333333',
    initials: 'RC',
    url: 'https://www.robinandco.com/',
  },
  {
    key: 'schoolab',
    company_name: 'Schoolab',
    iconBg: '#333333',
    initials: 'SL',
    url: 'https://www.theschoolab.com/',
  },
  {
    key: 'neuralspark',
    company_name: 'NeuralSpark Inc',
    iconBg: '#333333',
    initials: 'NS',
    url: 'https://neuralspark.ca/',
  },
  {
    key: 'acceor',
    company_name: 'ACCEOR',
    iconBg: '#333333',
    initials: 'AC',
    url: 'https://www.acceor.com/',
  },
  {
    key: 'upv',
    company_name: 'Universite Paul Valery Montpellier 3',
    iconBg: '#333333',
    initials: 'UPV',
    url: 'https://www.univ-montp3.fr/',
  },
  {
    key: 'maxtrack',
    company_name: 'Maxtrack',
    iconBg: '#333333',
    initials: 'MT',
    url: '',
  },
  {
    key: 'bealy',
    company_name: 'Bealy Medical',
    iconBg: '#333333',
    initials: 'BM',
    url: 'https://bealymedical.com/',
  },
  {
    key: 'cldc',
    company_name: 'CLDC Agency',
    iconBg: '#333333',
    initials: 'CLDC',
    url: 'https://www.instagram.com/agencecdlc/',
  },
  {
    key: 'school42',
    company_name: '42',
    icon: s42,
    iconBg: '#333333',
    url: 'https://42.fr/',
  },
  {
    key: 'maconneriePro',
    company_name: 'Maconnerie Pro',
    iconBg: '#333333',
    initials: 'MP',
    url: 'https://www.maconneriepro.com/',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pushy',
    key: 'pushy',
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
    key: 'fouloide',
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
    key: 'projeckt',
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
    key: 'prospect',
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

const contactLinks = [
  {
    label: 'Email',
    value: 'contact@renemarceau.com',
    href: 'mailto:contact@renemarceau.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/renemarceau',
    href: 'https://www.linkedin.com/in/renemarceau/',
  },
  {
    label: 'GitHub',
    value: 'github.com/ReneMarceau',
    href: 'https://github.com/ReneMarceau',
  },
];

export { services, stats, yearsOfExperience, contactLinks, technologies, experiences, projects };
