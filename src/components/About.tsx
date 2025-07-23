import React, { useState, useEffect, useRef } from 'react';
import { User, MapPin, Mail, Phone, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          const stats = [5, 1, 2];
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat / 30;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat) {
                current = stat;
                clearInterval(timer);
              }
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, 50);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-intro glass-card">
              <div className="intro-header">
                <div className="intro-icon">
                  <User />
                </div>
                <h3>Cybersecurity Professional</h3>
              </div>
              
              <p className="about-description">
                I am a passionate cybersecurity analyst with expertise in ethical hacking, 
                network security, and digital threat mitigation. Currently pursuing my 
                B.Tech in Computer Engineering with specialization in Cybersecurity.
              </p>
              
              <p className="about-description">
                My journey began with a fascination for understanding system vulnerabilities 
                and developing robust security solutions. I specialize in penetration testing, 
                malware analysis, and creating innovative security frameworks.
              </p>

              <div className="expertise-areas">
                <div className="expertise-item">
                  <Target className="expertise-icon" />
                  <div>
                    <h4>Penetration Testing</h4>
                    <p>Comprehensive security assessments and vulnerability analysis</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <Zap className="expertise-icon" />
                  <div>
                    <h4>Threat Analysis</h4>
                    <p>Advanced threat detection and mitigation strategies</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <Award className="expertise-icon" />
                  <div>
                    <h4>Security Research</h4>
                    <p>Innovative approaches to cybersecurity challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info glass-card">
              <h3>Get In Touch</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Madurai, Tamil Nadu, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">yuvaraja0026@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 8489193165</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'animate-in' : ''}`}>
            <div className="stats-grid">
              <div className="stat-card glass-card hover-lift">
                <div className="stat-icon">
                  <Target />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{animatedStats[0]}+</div>
                  <div className="stat-label">Security Projects</div>
                  <div className="stat-description">
                    Comprehensive cybersecurity projects including mobile security, 
                    IoT protection, and threat detection systems
                  </div>
                </div>
              </div>
              
              <div className="stat-card glass-card hover-lift">
                <div className="stat-icon">
                  <Award />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{animatedStats[1]}</div>
                  <div className="stat-label">Professional Certification</div>
                  <div className="stat-description">
                    Certified Ethical Hacker (CEH) from ELSIYUM Institute, 
                    demonstrating advanced penetration testing skills
                  </div>
                </div>
              </div>
              
              <div className="stat-card glass-card hover-lift">
                <div className="stat-icon">
                  <Zap />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{animatedStats[2]}</div>
                  <div className="stat-label">Years of Learning</div>
                  <div className="stat-description">
                    Continuous learning and hands-on experience in cybersecurity, 
                    staying updated with latest threats and technologies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 8rem 0;
          background: linear-gradient(135deg, rgba(12, 12, 12, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
          position: relative;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%234facfe" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
          z-index: -1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-intro {
          padding: 3rem;
        }

        .intro-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .intro-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .intro-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .about-description {
          font-size: 1.1rem;
          color: #b8b8b8;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .expertise-areas {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .expertise-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(79, 172, 254, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(79, 172, 254, 0.1);
          transition: all 0.3s ease;
        }

        .expertise-item:hover {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.3);
          transform: translateX(8px);
        }

        .expertise-icon {
          width: 24px;
          height: 24px;
          color: #4facfe;
          margin-top: 2px;
        }

        .expertise-item h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .expertise-item p {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .contact-info {
          padding: 2rem;
        }

        .contact-info h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #4facfe;
        }

        .contact-item div {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.8rem;
          color: #888;
          font-weight: 500;
        }

        .contact-value {
          color: #fff;
          font-weight: 500;
        }

        .about-stats {
          display: flex;
          align-items: center;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .stat-card {
          padding: 2.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #4facfe, #00f2fe);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover::after {
          opacity: 1;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4facfe;
          flex-shrink: 0;
        }

        .stat-content {
          flex: 1;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.2rem;
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .stat-description {
          font-size: 0.95rem;
          color: #888;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about {
            padding: 6rem 0;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-intro,
          .contact-info {
            padding: 2rem;
          }

          .intro-header h3 {
            font-size: 1.5rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .stat-card {
            padding: 2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .expertise-areas {
            gap: 1rem;
          }

          .expertise-item {
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;