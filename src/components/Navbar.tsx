import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key or window resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          RD<span>.</span>
        </a>

        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-hover-link">{link.name}</a>
              </li>
            ))}
            <li>
              <a href="/Junior-Web-Developer-Portfolio/Rodney-Ducay-CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-cv-link">
                <FileText size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> CV
              </a>
            </li>
          </ul>
          <div className="nav-socials">
            <a href="https://github.com/rodney93" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://ph.linkedin.com/in/caydu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rhoanneyacud@gmail.com" aria-label="Email Rodney">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <div className={`nav-mobile-backdrop ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="https://ph.linkedin.com/in/caydu" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Linkedin size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="/Junior-Web-Developer-Portfolio/Rodney-Ducay-CV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <FileText size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> View CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
