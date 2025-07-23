import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Shield, Bug, Search, Cpu, ExternalLink, Github, Zap, Target, Lock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  highlights: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Advanced Mobile Security Framework',
      description: 'Comprehensive mobile device vulnerability assessment platform with automated testing capabilities and real-time threat detection.',
      icon: <Smartphone />,
      technologies: ['Mobile Security', 'Penetration Testing', 'Automated Analysis', 'Threat Detection'],
      highlights: [
        'Automated vulnerability scanning for iOS and Android',
        'Real-time threat intelligence integration',
        'Custom exploit development framework',
        'Comprehensive security reporting dashboard'
      ],
      category: 'security',
      status: 'completed'
    },
    {
      title: 'AI-Powered Malicious URL Detection',
      description: 'Machine learning-based system for identifying and blocking suspicious websites using advanced pattern recognition and behavioral analysis.',
      icon: <Shield />,
      technologies: ['Machine Learning', 'Python', 'Neural Networks', 'Web Security'],
      highlights: [
        'Deep learning models with 97% accuracy',
        'Real-time URL analysis and blocking',
        'Behavioral pattern recognition',
        'Integration with major browsers and security tools'
      ],
      category: 'ai',
      status: 'completed'
    },
    {
      title: 'Cyber Threat Simulation Platform',
      description: 'Advanced simulation environment for testing organizational security posture against sophisticated cyber attacks and social engineering.',
      icon: <Bug />,
      technologies: ['Simulation', 'Social Engineering', 'Red Team', 'Security Assessment'],
      highlights: [
        'Multi-vector attack simulation',
        'Social media vulnerability analysis',
        'Phishing campaign automation',
        'Comprehensive security metrics and reporting'
      ],
      category: 'simulation',
      status: 'completed'
    },
    {
      title: 'Enterprise Threat Intelligence Hub',
      description: 'Centralized threat intelligence platform aggregating data from multiple sources to provide actionable security insights.',
      icon: <Search />,
      technologies: ['Threat Intelligence', 'Data Analytics', 'API Integration', 'Visualization'],
      highlights: [
        'Multi-source threat data aggregation',
        'Advanced analytics and correlation',
        'Automated threat hunting capabilities',
        'Interactive threat landscape visualization'
      ],
      category: 'intelligence',
      status: 'in-progress'
    },
    {
      title: 'Smart IoT Security Ecosystem',
      description: 'Next-generation IoT security platform with ML-based anomaly detection and automated incident response capabilities.',
      icon: <Cpu />,
      technologies: ['IoT Security', 'Machine Learning', 'Edge Computing', 'Blockchain'],
      highlights: [
        'Edge-based security processing',
        'Blockchain-secured device authentication',
        'ML-powered anomaly detection',
        'Automated threat response system'
      ],
      category: 'iot',
      status: 'in-progress'
    },
    {
      title: 'Zero-Trust Network Architecture',
      description: 'Implementation of comprehensive zero-trust security model with micro-segmentation and continuous verification.',
      icon: <Lock />,
      technologies: ['Zero Trust', 'Network Security', 'Identity Management', 'Micro-segmentation'],
      highlights: [
        'Dynamic policy enforcement',
        'Continuous identity verification',
        'Micro-segmentation implementation',
        'Advanced access control mechanisms'
      ],
      category: 'network',
      status: 'planned'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: <Target /> },
    { id: 'security', name: 'Security', icon: <Shield /> },
    { id: 'ai', name: 'AI/ML', icon: <Zap /> },
    { id: 'simulation', name: 'Simulation', icon: <Bug /> },
    { id: 'intelligence', name: 'Intelligence', icon: <Search /> },
    { id: 'iot', name: 'IoT', icon: <Cpu /> },
    { id: 'network', name: 'Network', icon: <Lock /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4ade80';
      case 'in-progress': return '#f59e0b';
      case 'planned': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return 'Unknown';
    }
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Innovative cybersecurity solutions and research projects demonstrating advanced technical expertise
          </p>
        </div>

        <div className={`project-filters ${isVisible ? 'animate-in' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card glass-card hover-lift ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-status">
                <span 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                ></span>
                <span className="status-text">{getStatusText(project.status)}</span>
              </div>

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
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-actions">
                <button className="btn btn-outline">
                  <Github className="btn-icon" />
                  Source Code
                </button>
                <button className="btn btn-primary">
                  <ExternalLink className="btn-icon" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 8rem 0;
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(12, 12, 12, 0.9) 100%);
          position: relative;
        }

        .projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #b8b8b8;
          margin-top: 1rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .project-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #b8b8b8;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.3);
          color: #4facfe;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
        }

        .filter-btn svg {
          width: 18px;
          height: 18px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          padding: 2.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: #b8b8b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 16px;
          color: #4facfe;
          flex-shrink: 0;
        }

        .project-icon svg {
          width: 28px;
          height: 28px;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.3;
        }

        .project-description {
          color: #b8b8b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          color: #4facfe;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(79, 172, 254, 0.3);
          backdrop-filter: blur(10px);
        }

        .project-highlights {
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-highlights h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .project-highlights ul {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          color: #b8b8b8;
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          position: relative;
          padding-left: 1.5rem;
          line-height: 1.5;
        }

        .project-highlights li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #4facfe;
          font-size: 0.7rem;
          top: 2px;
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 6rem 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 2rem;
          }

          .project-header {
            gap: 1rem;
          }

          .project-icon {
            width: 50px;
            height: 50px;
          }

          .project-icon svg {
            width: 24px;
            height: 24px;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .project-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .filter-btn svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;