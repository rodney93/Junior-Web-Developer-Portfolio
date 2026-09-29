import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, ArrowUpRight } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import './Projects.css';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Verified GitHub Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Explore my actual GitHub repositories showcasing web applications, full stack development, and professional portfolios. Click any card to view detailed case study insights.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="project-card-top">
                <div className="project-folder-icon">
                  <FolderGit2 size={24} />
                </div>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub Repository for ${project.title}`}>
                    <Github size={18} />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live Demo for ${project.title}`}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content-body">
                <span className="project-category-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-footer-area">
                <div className="project-tech-list">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <span className="details-prompt">
                  View Details <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
