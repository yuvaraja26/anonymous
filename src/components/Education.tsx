import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin, Star, Trophy, BookOpen } from 'lucide-react';

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
            Education & <span className="accent">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Academic excellence and professional certifications in cybersecurity
          </p>
        </div>

        <div className="education-content">
          <div className="timeline">
            <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="timeline-marker">
                <GraduationCap className="timeline-icon" />
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div className="timeline-date">
                    <Calendar className="date-icon" />
                    <span>2023 - Present</span>
                  </div>
                  <div className="timeline-status">
                    <span className="status-badge current">Current</span>
                  </div>
                </div>
                
                <h3>Bachelor of Technology - Computer Engineering</h3>
                <h4>Specialization in Cybersecurity</h4>
                
                <div className="institution">
                  <MapPin className="location-icon" />
                  <div>
                    <div className="institution-name">Karunya Institute of Technology and Sciences</div>
                    <div className="institution-location">Karunya Nagar, Coimbatore - 641 114</div>
                  </div>
                </div>
                
                <p className="timeline-description">
                  Pursuing comprehensive education in computer engineering with specialized focus on 
                  cybersecurity, network security, ethical hacking, and digital forensics. 
                  Engaging in hands-on projects and research in emerging security technologies.
                </p>
                
                <div className="achievements">
                  <h5>Key Focus Areas:</h5>
                  <div className="achievement-tags">
                    <span className="achievement-tag">Network Security</span>
                    <span className="achievement-tag">Ethical Hacking</span>
                    <span className="achievement-tag">Digital Forensics</span>
                    <span className="achievement-tag">Cryptography</span>
                    <span className="achievement-tag">Malware Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="timeline-marker">
                <Award className="timeline-icon" />
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div className="timeline-date">
                    <Calendar className="date-icon" />
                    <span>June 2024</span>
                  </div>
                  <div className="timeline-status">
                    <span className="status-badge completed">Certified</span>
                  </div>
                </div>
                
                <h3>Certified Ethical Hacker (CEH)</h3>
                <h4>Professional Cybersecurity Certification</h4>
                
                <div className="institution">
                  <Trophy className="location-icon" />
                  <div>
                    <div className="institution-name">ELSIYUM INSTITUTE</div>
                    <div className="certification-details">Industry-recognized certification program</div>
                  </div>
                </div>
                
                <p className="timeline-description">
                  Successfully completed comprehensive ethical hacking certification covering 
                  advanced penetration testing methodologies, vulnerability assessment practices, 
                  and security analysis techniques. Demonstrated proficiency in identifying and 
                  mitigating cybersecurity threats.
                </p>
                
                <div className="achievements">
                  <h5>Certification Highlights:</h5>
                  <div className="achievement-list">
                    <div className="achievement-item">
                      <Star className="achievement-icon" />
                      <span>Advanced penetration testing techniques</span>
                    </div>
                    <div className="achievement-item">
                      <Star className="achievement-icon" />
                      <span>Vulnerability assessment and analysis</span>
                    </div>
                    <div className="achievement-item">
                      <Star className="achievement-icon" />
                      <span>Security tools and methodologies</span>
                    </div>
                    <div className="achievement-item">
                      <Star className="achievement-icon" />
                      <span>Ethical hacking best practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="timeline-marker">
                <BookOpen className="timeline-icon" />
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div className="timeline-date">
                    <Calendar className="date-icon" />
                    <span>Ongoing</span>
                  </div>
                  <div className="timeline-status">
                    <span className="status-badge learning">Learning</span>
                  </div>
                </div>
                
                <h3>Continuous Professional Development</h3>
                <h4>Advanced Cybersecurity Training</h4>
                
                <p className="timeline-description">
                  Actively pursuing additional certifications and training in emerging cybersecurity 
                  domains including cloud security, AI-powered threat detection, and advanced 
                  malware analysis techniques.
                </p>
                
                <div className="achievements">
                  <h5>Current Learning Path:</h5>
                  <div className="achievement-tags">
                    <span className="achievement-tag">Cloud Security</span>
                    <span className="achievement-tag">AI in Cybersecurity</span>
                    <span className="achievement-tag">Advanced Malware Analysis</span>
                    <span className="achievement-tag">Incident Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education {
          padding: 8rem 0;
          position: relative;
        }

        .education::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
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
        }

        .education-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #4facfe, #00f2fe);
          top: 0;
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          align-items: flex-start;
          gap: 3rem;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          text-align: left;
        }

        .timeline-item:nth-child(even) .timeline-content {
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border: 4px solid rgba(12, 12, 12, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 0 30px rgba(79, 172, 254, 0.5);
        }

        .timeline-icon {
          width: 28px;
          height: 28px;
          color: white;
        }

        .timeline-content {
          flex: 1;
          padding: 2.5rem;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          max-width: 400px;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .timeline-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4facfe;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .date-icon {
          width: 16px;
          height: 16px;
        }

        .timeline-status {
          display: flex;
          align-items: center;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.current {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: white;
        }

        .status-badge.completed {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
        }

        .status-badge.learning {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
        }

        .timeline-content h3 {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .timeline-content h4 {
          color: #4facfe;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .institution {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(79, 172, 254, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(79, 172, 254, 0.1);
        }

        .location-icon {
          width: 18px;
          height: 18px;
          color: #4facfe;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .institution-name {
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .institution-location,
        .certification-details {
          color: #b8b8b8;
          font-size: 0.9rem;
        }

        .timeline-description {
          color: #b8b8b8;
          line-height: 1.7;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .achievements {
          margin-top: 1.5rem;
        }

        .achievements h5 {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .achievement-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .achievement-tag {
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          color: #4facfe;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(79, 172, 254, 0.3);
        }

        .achievement-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #b8b8b8;
          font-size: 0.95rem;
        }

        .achievement-icon {
          width: 16px;
          height: 16px;
          color: #4facfe;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .education {
            padding: 6rem 0;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-item {
            flex-direction: row !important;
            padding-left: 5rem;
            gap: 0;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
            max-width: none;
          }

          .timeline-marker {
            left: 30px;
            width: 60px;
            height: 60px;
          }

          .timeline-icon {
            width: 24px;
            height: 24px;
          }

          .timeline-content {
            padding: 2rem;
          }

          .timeline-content h3 {
            font-size: 1.4rem;
          }

          .timeline-content h4 {
            font-size: 1.1rem;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;