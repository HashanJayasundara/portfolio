export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const PROFILE = {
  name: 'Hashan Jayasundara',
  role: 'Full Stack Software Developer',
  location: 'Kandy, Sri Lanka',
  summary:
    'I engineer high-performance web applications and scalable enterprise architectures. Specializing in modern ecosystems like React, Vue, and Laravel to build fast, robust, and beautiful digital experiences.',
  email: 'hashanjayasundara94@gmail.com',
  phone: '(+94) 74 29 88 720',
  github: 'https://github.com/hashanjayasundara',
  linkedin: 'https://linkedin.com/in/hashanjayasundara',
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Soft-Master Technologies (Pvt.) Ltd.',
    role: 'Full Stack Software Developer',
    period: 'July 2024 — Present',
    achievements: [
      'Architected core modules for enterprise-scale ERP and Distribution Management platforms.',
      'Engineered reusable front-end architectures with React and Vue, cutting UI render latency by 30%.',
      'Developed secure, high-throughput RESTful APIs using Laravel and CodeIgniter.',
      'Designed optimized MySQL relational structures and complex views, accelerating query speeds by 40%.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Video Watermark Remover',
    description:
      'Intelligent platform for automated object extraction. Uses advanced AI models to deliver seamless watermark removal without perceptible frame delays.',
    tech: ['React', 'TypeScript', 'AI Models', 'Canvas API'],
    url: 'https://video-watermark-remover-hj.vercel.app/',
  },
  {
    title: 'Excel-to-SQL Dynamic Migrator',
    description:
      'Enterprise utility that parses complex, multi-sheet Excel workbooks into normalized SQL scripts using non-blocking Web Workers.',
    tech: ['React', 'TypeScript', 'Web Workers', 'SQL'],
    url: 'https://exceltosql.vercel.app/',
  },
  {
    title: 'Leeds Salon Corporate Platform',
    description:
      'High-performance business platform optimized for Core Web Vitals, delivering perfect Lighthouse scores and a seamless user experience.',
    tech: ['React', 'JavaScript', 'Vercel', 'SEO'],
    url: 'https://leeds-salon.vercel.app',
  },
  {
    title: 'Prompt Translator AI',
    description:
      'AI-powered translation engine that intelligently converts and adapts context-aware prompts across multiple languages with extreme precision.',
    tech: ['Vue.js', 'TypeScript', 'AI', 'Vercel'],
    url: 'https://prompt-translator-ai.vercel.app/',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['PHP', 'TypeScript', 'JavaScript', 'Dart', 'Java', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    skills: ['React', 'Next.js', 'Vue.js', 'Flutter', 'Laravel', 'CodeIgniter', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'Database & Cloud',
    icon: 'database',
    skills: ['MySQL', 'Firebase', 'Query Optimization', 'Stored Procedures'],
  },
  {
    title: 'Developer Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'FileZilla', 'Android Studio'],
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
