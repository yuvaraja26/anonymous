import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Network, Code, Settings, Zap, Target, Lock } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  description: string;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    {
      name: 'Kali Linux & Penetration Testing',
      percentage: 85,
      icon: <Terminal />,
      description: 'Advanced proficiency in Kali Linux tools for comprehensive security testing',
      category: 'systems'
    },
    {
      name: 'Network Security Analysis',
      percentage: 80,
      icon: <Network />,
      description: 'Deep understanding of network protocols and security vulnerabilities',
      category: 'network'
    },
    {
      name: 'Python Security Automation',
      percentage: 84,
      icon: <Code />,
      description: 'Developing custom security tools and automation scripts',
      category: 'programming'
    },
    {
      name: 'Ethical Hacking & OSINT',
      percentage: 87,
      icon: <Target />,
      description: 'Certified ethical hacking techniques and open source intelligence',
      category: 'security'
    },
    {
      name: 'Malware Analysis',
      percentage: 78,
      icon: <Lock />,
      description: 'Static and dynamic analysis of malicious software and threats',
      category: 'security'
    },
    {
      name: 'Security Project Management',
      percentage: 92,
      icon: <Settings />,
      description: 'Leading cybersecurity projects from conception to deployment',
      category: 'management'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Zap /> },
    { id: 'security', name: 'Security', icon: <Shield /> },
    { id: 'systems', name: 'Systems', icon: <Terminal /> },
    { id: 'network', name: 'Network', icon: <Network /> },
    { id: 'programming', name: 'Programming', icon: <Code /> },
    { id: 'management', name: 'Management', icon: <Settings /> }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skill percentages
          skills.forEach((skill, index) => {
            let current = 0;
            const increment = skill.percentage / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.percentage) {
                current = skill.percentage;
                clearInterval(timer);
              }
              setAnimatedPercentages(prev => {
                const newPercentages = [...prev];
                newPercentages[index] = Math.floor(current);
                return newPercentages;
              });
            }, 30);
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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Technical <span className="accent">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive cybersecurity skills developed through hands-on experience and continuous learning
          </p>
        </div>

        <div className={`category-filters ${isVisible ? 'animate-in' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const skillIndex = skills.findIndex(s => s.name === skill.name);
            return (
              <div 
                key={skill.name}
                className={`skill-card glass-card hover-lift ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${animatedPercentages[skillIndex] || 0}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{animatedPercentages[skillIndex] || 0}%</span>
                  </div>
                  
                  <div className="skill-level">
                    <span className={`level-badge ${
                      (animatedPercentages[skillIndex] || 0) >= 85 ? 'expert' :
                      (animatedPercentages[skillIndex] || 0) >= 70 ? 'advanced' : 'intermediate'
                    }`}>
                      {(animatedPercentages[skillIndex] || 0) >= 85 ? 'Expert' :
                       (animatedPercentages[skillIndex] || 0) >= 70 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 8rem 0;
          position: relative;
        }

        .skills::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .category-filters {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .skill-icon {
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

        .skill-icon svg {
          width: 28px;
          height: 28px;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .skill-description {
          color: #b8b8b8;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .skill-progress {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          border-radius: 4px;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }

        .skill-percentage {
          font-weight: 700;
          color: #4facfe;
          font-size: 1.1rem;
          min-width: 50px;
          text-align: right;
        }

        .skill-level {
          display: flex;
          justify-content: flex-end;
        }

        .level-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .level-badge.expert {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .level-badge.advanced {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .level-badge.intermediate {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 6rem 0;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 2rem;
          }

          .skill-header {
            gap: 1rem;
          }

          .skill-icon {
            width: 50px;
            height: 50px;
          }

          .skill-icon svg {
            width: 24px;
            height: 24px;
          }

          .skill-name {
            font-size: 1.1rem;
          }

          .category-filters {
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

export default Skills;