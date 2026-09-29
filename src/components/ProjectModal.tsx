import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Code2 } from 'lucide-react';
import { Project } from '../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="modal-backdrop-wrapper" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
          >
            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-category">{project.category} Project</span>
              <h2 id="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.description}</p>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{project.longDescription}</p>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      <Code2 size={14} /> {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="modal-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <Github size={18} /> View Repository
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
