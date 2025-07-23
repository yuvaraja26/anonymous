import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Get In <span className="accent">Touch</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate-in' : ''}`}>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 8489193165</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>yuvaraja0026@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Madurai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="#" className="social-link"><Linkedin /></a>
                <a href="#" className="social-link"><Github /></a>
                <a href="#" className="social-link"><Twitter /></a>
              </div>
            </div>
          </div>

          <div className={`contact-form ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                <Send className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-line {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #00ff41, #00d4ff);
          margin: 1rem auto;
          border-radius: 2px;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
          border-color: rgba(0, 255, 65, 0.3);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(0, 255, 65, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ff41;
          flex-shrink: 0;
        }

        .contact-details h3 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .contact-details p {
          color: #ccc;
          margin: 0;
        }

        .social-links {
          margin-top: 2rem;
        }

        .social-links h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #00d4ff;
          color: #0a0a0a;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: #fff;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.75rem;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00ff41;
          box-shadow: 0 0 0 2px rgba(0, 255, 65, 0.2);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-item {
            padding: 1rem;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;