import { motion } from 'framer-motion';
import { ArrowRight, Github, MapPin, Compass, Code2, FileText, Download } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="hero-badges-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <span className="hero-badge">
              <MapPin size={14} /> Cebu, Philippines
            </span>
            <span className="hero-badge">
              <Compass size={14} /> 9 Years Maritime Command
            </span>
            <span className="hero-badge accent-badge">
              <Code2 size={14} /> Junior Web Developer
            </span>
          </motion.div>

          <motion.span 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional Portfolio
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Building practical web applications with <span>PHP, Laravel, JavaScript, and MySQL.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A motivated developer transitioning from a 9-year career as a <strong>Tugboat Master</strong> at Metro Cebu Harbor Pilots Co., Inc. 
            Applying leadership, precision, crisis management, and problem-solving discipline to modern software development.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Rodney-Ducay-CV.pdf" download="Rodney-Ducay-CV.pdf" className="btn btn-outline" aria-label="Download CV PDF">
              <Download size={18} /> Download CV
            </a>
            <a href="/Rodney-Ducay-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="View CV PDF in new tab">
              <FileText size={18} /> View CV
            </a>
            <a href="https://github.com/rodney93" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="GitHub Profile">
              <Github size={18} /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-background-elements">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="grid-overlay"></div>
        </div>
      </div>
    </section>
  );
};
