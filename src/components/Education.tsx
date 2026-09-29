import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './Education.css';

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Background & Credentials</span>
          <h2 className="section-title">Education & Training</h2>
        </div>

        <div className="education-grid">
          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="edu-icon">
              <GraduationCap size={24} />
            </div>
            <h3>Maritime Education & Certification</h3>
            <p className="edu-org">Professional Marine Deck Officer Training</p>
            <p className="edu-desc">
              Comprehensive professional training and licensure culminating in 9 successful years as a Tugboat Master, mastering navigation, safety protocols, and operational leadership.
            </p>
          </motion.div>

          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="edu-icon">
              <BookOpen size={24} />
            </div>
            <h3>Web Development & Programming</h3>
            <p className="edu-org">Self-Directed & AI-Accelerated Learning</p>
            <p className="edu-desc">
              Rigorous practical study in modern web development covering HTML, CSS, JavaScript, PHP, Laravel, and MySQL, reinforced by hands-on project building and AI engineering workflows.
            </p>
          </motion.div>

          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="edu-icon">
              <Award size={24} />
            </div>
            <h3>Professional Certifications</h3>
            <p className="edu-org">Maritime & Technical Standards</p>
            <p className="edu-desc">
              Holder of all mandatory maritime safety, navigation, and command certifications, alongside proficiency in modern developer tools (Git, GitHub, VS Code, Composer, npm).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
