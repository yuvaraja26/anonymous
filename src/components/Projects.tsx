import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Shield, Bug, Search, Cpu, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  highlights: string[];
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Mobile Device Vulnerability Testing',
      description: 'Conducted comprehensive mobile device vulnerability testing and demonstrated ethical mobile hacking techniques for educational purposes.',
      icon: <Smartphone />,
      technologies: ['Mobile Security', 'Penetration Testing', 'Ethical Hacking'],
      highlights: [
        'Identified critical vulnerabilities in mobile applications',
        'Developed testing methodologies for mobile platforms',
        'Created educational materials for ethical hacking'
      ]
    },
    {
      title: 'Malicious URL Detection Tool',
      description: 'Developed an intelligent tool to identify and block suspicious websites using advanced filtering algorithms and threat recognition methods.',
      icon: <Shield />,
      technologies: ['Python', 'Machine Learning', 'Web Security'],
      highlights: [
        'Implemented ML algorithms for URL classification',
        'Achieved 95% accuracy in threat detection',
        'Real-time blocking of malicious websites'
      ]
    },
    {
      title: 'Cyberattack Simulation',
      description: 'Studied and simulated various cyberattacks including malware and phishing techniques, focusing on social media platform vulnerabilities.',
      icon: <Bug />,
      technologies: ['Malware Analysis', 'Phishing', 'Social Engineering'],
      highlights: [
        'Simulated real-world attack scenarios',
        'Analyzed social media vulnerabilities',
        'Developed countermeasures and defenses'
      ]
    },
    {
      title: 'Threat Analysis & Mitigation',
      description: 'Gained hands-on experience in identifying, analyzing, and mitigating common cybersecurity threats through self-led research and practice environments.',
      icon: <Search />,
      technologies: ['Threat Intelligence', 'Risk Assessment', 'Security Analysis'],
      highlights: [
        'Comprehensive threat landscape analysis',
        'Risk assessment methodologies',
        'Mitigation strategy development'
      ]
    },
    {
      title: 'IoT Theft Detection System',
      description: 'Developed an IoT-based theft detection system using sensors and microcontrollers to detect unauthorized access and send real-time alerts.',
      icon: <Cpu />,
      technologies: ['IoT', 'Embedded Systems', 'Real-time Monitoring'],
      highlights: [
        'Arduino-based sensor integration',
        'Real-time alert notification system',
        'Mobile app for remote monitoring'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-actions">
                <button className="btn btn-outline">
                  <Github className="btn-icon" />
                  View Code
                </button>
                <button className="btn btn-primary">
                  <ExternalLink className="btn-icon" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff41, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 255, 65, 0.3);
          box-shadow: 0 16px 40px rgba(0, 255, 65, 0.1);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 12px;
          color: #00d4ff;
          flex-shrink: 0;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .project-description {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(0, 255, 65, 0.1);
          color: #00ff41;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 255, 65, 0.3);
        }

        .project-highlights {
          margin-bottom: 2rem;
        }

        .project-highlights h4 {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }

        .project-highlights ul {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          color: #ccc;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .project-highlights li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00ff41;
          font-size: 0.7rem;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;