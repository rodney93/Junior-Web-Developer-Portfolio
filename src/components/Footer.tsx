import { Github, Mail } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            RD<span>.</span>
          </a>
          <p>Rodney Ducay — Junior Web Developer based in Cebu, Philippines.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/rodney93" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="mailto:rhoanneyacud@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Rodney Ducay. Built with React, TypeScript & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};
