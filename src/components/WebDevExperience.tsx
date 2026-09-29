import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, CheckCircle2 } from 'lucide-react';
import './WebDevExperience.css';

export const WebDevExperience = () => {
  const highlights = [
    {
      icon: <Terminal size={22} />,
      title: 'Full-Stack Development with PHP & Laravel',
      description: 'Building robust backend architectures, RESTful APIs, and MVC web applications using PHP and Laravel, coupled with clean HTML/CSS and JavaScript frontends.',
    },
    {
      icon: <Database size={22} />,
      title: 'Database Design & Management',
      description: 'Structuring relational databases in MySQL, writing efficient queries, managing migrations, and utilizing Eloquent ORM for seamless data operations.',
    },
    {
      icon: <Cpu size={22} />,
      title: 'AI-Assisted Engineering Workflows',
      description: 'Leveraging AI tools (ChatGPT, Gemini CLI) as powerful accelerators for debugging, code refactoring, system analysis, and continuous technical learning.',
    },
  ];

  return (
    <section className="webdev-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Journey</span>
          <h2 className="section-title">Web Development Focus</h2>
        </div>

        <div className="webdev-grid">
          {highlights.map((item, index) => (
            <motion.div 
              key={item.title}
              className="webdev-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="webdev-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="learning-philosophy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="philosophy-header">
            <CheckCircle2 size={24} />
            <h4>Continuous Learning & Adaptability</h4>
          </div>
          <p>
            Transitioning industries requires tenacity and discipline. By combining rigorous self-directed study in modern web technologies with AI-powered development workflows, I rapidly bridge theoretical concepts into production-ready software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
