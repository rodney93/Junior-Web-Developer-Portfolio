import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Download, FileText } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let's Connect</h3>
            <p>
              Whether you have an opportunity for a Junior Web Developer, want to collaborate on a project, or simply want to connect, my inbox is always open.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:rhoanneyacud@gmail.com">rhoanneyacud@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:09655030857">0965 503 0857</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Cebu, Philippines</span>
                </div>
              </div>
            </div>

            <div className="contact-cv-actions">
              <a href={`${import.meta.env.BASE_URL}Rodney-Ducay-CV.pdf`} download={`${import.meta.env.BASE_URL}Rodney-Ducay-CV.pdf`} className="btn btn-outline" style={{ marginTop: '2rem', display: 'inline-flex', width: '100%' }}>
                <Download size={18} /> Download CV PDF
              </a>
              <a href="/Rodney-Ducay-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '0.75rem', display: 'inline-flex', width: '100%' }}>
                <FileText size={18} /> View CV in New Tab
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="success-message">
                <CheckCircle size={48} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Rodney will get back to you shortly.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Rodney, I'd like to discuss an opportunity..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
