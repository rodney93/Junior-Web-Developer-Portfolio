import { motion } from 'framer-motion';
import { Code, Server, Database, GitBranch, Cpu, Sparkles } from 'lucide-react';
import './Skills.css';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'React / TypeScript'],
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['PHP', 'Laravel Framework', 'RESTful APIs', 'MVC Architecture', 'Composer'],
    },
    {
      title: 'Database Management',
      icon: <Database size={24} />,
      skills: ['MySQL', 'Database Design', 'Queries & Joins', 'Migrations', 'Eloquent ORM'],
    },
    {
      title: 'Version Control & Tools',
      icon: <GitBranch size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'PowerShell / Terminal'],
    },
    {
      title: 'AI-Assisted Workflows',
      icon: <Sparkles size={24} />,
      skills: ['ChatGPT', 'Gemini CLI', 'AI-Driven Debugging', 'Prompt Engineering', 'Code Optimization'],
    },
    {
      title: 'Core Competencies',
      icon: <Cpu size={24} />,
      skills: ['Problem Solving', 'Leadership', 'Crisis Management', 'Team Collaboration', 'Attention to Detail'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise & Tools</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
