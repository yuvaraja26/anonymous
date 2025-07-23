import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Zap, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Let's <span className="accent">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to collaborate on cybersecurity projects or discuss opportunities? 
            Let's start a conversation.
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate-in' : ''}`}>
            <div className="info-header">
              <h3>Get In Touch</h3>
              <p>I'm always open to discussing cybersecurity challenges, collaboration opportunities, or just having a tech conversation.</p>
            </div>

            <div className="contact-methods">
              <div className="contact-item glass-card hover-lift">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 8489193165</p>
                  <span className="contact-note">Available 9 AM - 6 PM IST</span>
                </div>
              </div>

              <div className="contact-item glass-card hover-lift">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>yuvaraja0026@gmail.com</p>
                  <span className="contact-note">Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-item glass-card hover-lift">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Madurai, Tamil Nadu</p>
                  <span className="contact-note">India (UTC +5:30)</span>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Connect on Social Media</h4>
              <div className="social-links">
                <a href="#" className="social-link linkedin">
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link github">
                  <Github />
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link twitter">
                  <Twitter />
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link website">
                  <Globe />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>

          <div className={`contact-form-container ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="form-header">
              <MessageCircle className="form-icon" />
              <h3>Send a Message</h3>
              <p>Have a project in mind or want to discuss cybersecurity? Drop me a message!</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="consultation">Security Consultation</option>
                  <option value="opportunity">Job Opportunity</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, question, or how I can help you..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 8rem 0;
          background: linear-gradient(135deg, rgba(12, 12, 12, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
          position: relative;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #b8b8b8;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .info-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .info-header p {
          color: #b8b8b8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
        }

        .contact-icon svg {
          width: 24px;
          height: 24px;
        }

        .contact-details h4 {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-details p {
          color: #4facfe;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .contact-note {
          color: #888;
          font-size: 0.9rem;
        }

        .social-section h4 {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #b8b8b8;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(79, 172, 254, 0.2);
        }

        .social-link.linkedin:hover {
          background: rgba(0, 119, 181, 0.2);
          border-color: rgba(0, 119, 181, 0.5);
          color: #0077b5;
        }

        .social-link.github:hover {
          background: rgba(51, 51, 51, 0.2);
          border-color: rgba(51, 51, 51, 0.5);
          color: #333;
        }

        .social-link.twitter:hover {
          background: rgba(29, 161, 242, 0.2);
          border-color: rgba(29, 161, 242, 0.5);
          color: #1da1f2;
        }

        .social-link.website:hover {
          background: rgba(79, 172, 254, 0.2);
          border-color: rgba(79, 172, 254, 0.5);
          color: #4facfe;
        }

        .social-link svg {
          width: 20px;
          height: 20px;
        }

        .contact-form-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-header {
          text-align: center;
        }

        .form-icon {
          width: 48px;
          height: 48px;
          color: #4facfe;
          margin: 0 auto 1rem;
        }

        .form-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .form-header p {
          color: #b8b8b8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .contact-form {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4facfe;
          box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #888;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .submit-btn {
          align-self: flex-start;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .contact {
            padding: 6rem 0;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-item {
            padding: 1.5rem;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
          }

          .contact-icon svg {
            width: 20px;
            height: 20px;
          }

          .social-links {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .info-header h3 {
            font-size: 1.75rem;
          }

          .form-header h3 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;