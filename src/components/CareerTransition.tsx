import { motion } from 'framer-motion';
import { Anchor, ArrowRight, Code } from 'lucide-react';
import './CareerTransition.css';

export const CareerTransition = () => {
  return (
    <section className="transition-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Evolution & Drive</span>
          <h2 className="section-title">The Career Transition</h2>
        </div>

        <motion.div 
          className="transition-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="transition-content">
            <div className="transition-step">
              <div className="step-icon">
                <Anchor size={24} />
              </div>
              <h3>Maritime Command</h3>
              <p>
                9 Years as Tugboat Master at Metro Cebu Harbor Pilots Co., Inc. Leading operations, navigating critical harbor conditions, and directing teams with discipline and precision.
              </p>
            </div>

            <div className="transition-arrow">
              <ArrowRight size={28} />
            </div>

            <div className="transition-step">
              <div className="step-icon">
                <Code size={24} />
              </div>
              <h3>Software Engineering</h3>
              <p>
                Transitioning into Junior Web Development, building robust applications with PHP, Laravel, JavaScript, and MySQL. Bringing accountability, problem-solving, and continuous learning to code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
