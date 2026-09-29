import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './ProfessionalExperience.css';

export const ProfessionalExperience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Background</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline-container">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot">
              <Briefcase size={20} />
            </div>
            
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Tugboat Master</h3>
                  <h4>Metro Cebu Harbor Pilots Co., Inc.</h4>
                </div>
                <div className="timeline-meta">
                  <span className="meta-badge">
                    <Calendar size={14} /> 9 Years
                  </span>
                  <span className="meta-badge">
                    <MapPin size={14} /> Cebu, Philippines
                  </span>
                </div>
              </div>

              <p className="timeline-description">
                Served for 9 years as a Tugboat Master, commanding vessel operations, ensuring maritime safety, and directing crew responses during high-pressure harbor maneuvers in Metro Cebu waters.
              </p>

              <div className="transferable-skills-box">
                <h5>Transferable Soft Skills to Software Engineering:</h5>
                <ul className="transferable-list">
                  <li>
                    <CheckCircle2 size={16} />
                    <span><strong>Leadership & Command:</strong> Managing crew execution, maintaining high standards, and taking full accountability for outcomes.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span><strong>Crisis Management & Troubleshooting:</strong> Rapidly diagnosing operational issues under pressure and implementing effective solutions.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span><strong>Precision & Attention to Detail:</strong> Strict adherence to protocols and safety margins where errors carry high impact.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span><strong>Communication & Teamwork:</strong> Clear coordination across teams and stakeholders in fast-paced environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
