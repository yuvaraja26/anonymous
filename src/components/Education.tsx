import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Education & <span className="accent">Certifications</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="timeline-marker">
              <GraduationCap className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2023 - Present</div>
              <h3>B.Tech Computer Engineering</h3>
              <h4>Specialization in Cybersecurity</h4>
              <div className="institution">
                <MapPin className="location-icon" />
                <div>
                  <div className="institution-name">Karunya Institute of Technology and Sciences</div>
                  <div className="institution-location">Karunya Nagar, Coimbatore - 641 114</div>
                </div>
              </div>
              <p className="timeline-description">
                Currently pursuing undergraduate degree with specialization in cybersecurity, 
                gaining comprehensive knowledge in network security, ethical hacking, and 
                digital forensics.
              </p>
            </div>
          </div>

          <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="timeline-marker">
              <Award className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">June 2024</div>
              <h3>Certified Ethical Hacker (CEH)</h3>
              <div className="institution">
                <Award className="location-icon" />
                <div>
                  <div className="institution-name">ELSIYUM INSTITUTE</div>
                  <div className="certification-details">Industry-recognized certification</div>
                </div>
              </div>
              <p className="timeline-description">
                Achieved certification in ethical hacking methodologies, penetration testing 
                techniques, and vulnerability assessment practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education {
          padding: 6rem 0;
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

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #00ff41, #00d4ff);
          top: 0;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: rgba(0, 255, 65, 0.1);
          border: 3px solid #00ff41;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .timeline-icon {
          width: 24px;
          height: 24px;
          color: #00ff41;
        }

        .timeline-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 255, 65, 0.3);
          box-shadow: 0 12px 30px rgba(0, 255, 65, 0.1);
        }

        .timeline-date {
          background: linear-gradient(135deg, #00ff41, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .timeline-content h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-content h4 {
          color: #00d4ff;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .institution {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .location-icon {
          width: 16px;
          height: 16px;
          color: #00d4ff;
          margin-top: 2px;
        }

        .institution-name {
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .institution-location,
        .certification-details {
          color: #888;
          font-size: 0.9rem;
        }

        .timeline-description {
          color: #ccc;
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item {
            flex-direction: row !important;
            padding-left: 4rem;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
          }

          .timeline-marker {
            left: 30px;
            width: 50px;
            height: 50px;
          }

          .timeline-icon {
            width: 20px;
            height: 20px;
          }

          .timeline-content {
            padding: 1.5rem;
          }

          .timeline-content h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;