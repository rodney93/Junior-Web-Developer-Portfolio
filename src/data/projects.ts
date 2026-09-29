export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 'junior-web-developer-portfolio',
    title: 'Junior Web Developer Portfolio',
    description: 'A modern, responsive personal portfolio built with React, TypeScript, and Vite showcasing career transition from maritime command to web development.',
    longDescription: 'A fully responsive, production-ready personal portfolio website built with React, TypeScript, and Vite. Designed with a professional dark/light theme, interactive modal case studies, and optimized for performance and mobile responsiveness across all viewports.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS3', 'Framer Motion', 'Lucide Icons'],
    features: [
      'Responsive design across mobile, tablet, and desktop viewports',
      'Interactive project modal popups with case-study details',
      'Clean typography and accessible navigation with keyboard support',
      'Optimized production build with zero errors'
    ],
    githubUrl: 'https://github.com/rodney93/Junior-Web-Developer-Portfolio',
    liveUrl: 'https://rodney93.github.io',
    category: 'Frontend'
  },
  {
    id: 'genealogy-laravel',
    title: 'Genealogy Laravel Application',
    description: 'Full genealogy and family tree building application built with PHP, Laravel, MySQL, Filament, and Livewire.',
    longDescription: 'A sophisticated full-stack family tree and genealogy management platform powered by PHP and Laravel. Features advanced database architecture with MySQL, dynamic admin panels with Filament, and reactive user interfaces using Livewire.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Filament', 'Livewire', 'Blade'],
    features: [
      'Relational database architecture for family tree structures',
      'Admin dashboard built with Filament PHP',
      'Reactive component rendering using Livewire',
      'Robust authentication and role management'
    ],
    githubUrl: 'https://github.com/rodney93/genealogy-laravel',
    liveUrl: 'https://www.liberusoftware.com',
    category: 'Full Stack'
  },
  {
    id: 'scheduling-dispatch-portfolio',
    title: 'Scheduling & Dispatch Portfolio',
    description: 'Professional portfolio and resume site highlighting operations support, scheduling, and digital dispatching skills.',
    longDescription: 'A dedicated professional portfolio site structured to showcase operational expertise, dispatch management, remote support coordination, and digital workflow competencies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Clean semantic HTML layout',
      'Mobile-friendly responsive CSS styling',
      'Professional presentation of operational experience',
      'Optimized for fast static hosting'
    ],
    githubUrl: 'https://github.com/rodney93/Scheduling-Dispatch-Portfolio',
    category: 'Frontend'
  }
];
