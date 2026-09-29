import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Compass, Award } from 'lucide-react';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-card primary-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-icon-wrapper">
              <User size={28} />
            </div>
            <h3>Who I Am</h3>
            <p>
              I am Rodney Ducay, a dedicated Junior Web Developer based in Cebu, Philippines. 
              After completing a successful 9-year career as a Tugboat Master at Metro Cebu Harbor Pilots Co., Inc., 
              I made a purposeful career transition into software development, driven by a lifelong passion for technology, 
              problem-solving, and building practical digital solutions.
            </p>
            <p>
              My maritime leadership background instilled in me absolute discipline, crisis management, precise communication, 
              and unwavering attention to detail—qualities that I now bring to writing clean code and collaborating on web engineering projects.
            </p>

            <div className="personal-details">
              <div className="detail-item">
                <MapPin size={18} />
                <span>Cebu, Philippines</span>
              </div>
              <div className="detail-item">
                <Mail size={18} />
                <span>rhoanneyacud@gmail.com</span>
              </div>
              <div className="detail-item">
                <Phone size={18} />
                <span>0965 503 0857</span>
              </div>
            </div>
          </motion.div>

          <div className="about-side-cards">
            <motion.div 
              className="about-card highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-icon-wrapper">
                <Compass size={24} />
              </div>
              <h4>Command to Code</h4>
              <p>
                Navigating complex harbor maneuvers and leading crew operations translates seamlessly to debugging intricate 
                codebases, orchestrating backend logic in Laravel/PHP, and delivering reliable user interfaces.
              </p>
            </motion.div>

            <motion.div 
              className="about-card highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="card-icon-wrapper">
                <Award size={24} />
              </div>
              <h4>Modern AI Workflows</h4>
              <p>
                Proicient in leveraging AI-assisted development tools like ChatGPT and Gemini CLI to accelerate development velocity, 
                conduct deep code analysis, and solve technical roadblocks efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
