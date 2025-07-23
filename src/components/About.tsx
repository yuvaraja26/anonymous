import React, { useState, useEffect, useRef } from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';

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
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-intro">
              <User className="intro-icon" />
              <h3>Cybersecurity Enthusiast</h3>
            </div>
            
            <p className="about-description">
              I am a second-year undergraduate student with a strong interest in cybersecurity 
              and ethical hacking, eager to expand my knowledge and gain hands-on experience 
              in protecting digital systems and understanding cyber threats.
            </p>
            
            <p className="about-description">
              My journey in cybersecurity began with a fascination for understanding how 
              systems work and how they can be secured. I specialize in network security, 
              ethical hacking, and developing solutions to protect digital infrastructure.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>yuvaraja0026@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 8489193165</span>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'animate-in' : ''}`}>
            <div className="stat-card">
              <div className="stat-number">{animatedStats[0]}+</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-description">Cybersecurity projects including mobile hacking and IoT security</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">{animatedStats[1]}</div>
              <div className="stat-label">Certification</div>
              <div className="stat-description">Certified Ethical Hacker (CEH) from ELSIYUM Institute</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">{animatedStats[2]}</div>
              <div className="stat-label">Languages</div>
              <div className="stat-description">English and Tamil - fluent in both languages</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
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

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-intro {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .intro-icon {
          width: 32px;
          height: 32px;
          color: #00ff41;
        }

        .about-intro h3 {
          font-size: 1.5rem;
          color: #fff;
          margin: 0;
        }

        .about-description {
          font-size: 1.1rem;
          color: #ccc;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .contact-info {
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #ccc;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #00d4ff;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #00ff41, #00d4ff);
        }

        .stat-card:hover {
          transform: translateX(8px);
          border-color: rgba(0, 255, 65, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #00ff41;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .stat-description {
          font-size: 0.9rem;
          color: #888;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-intro h3 {
            font-size: 1.25rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;