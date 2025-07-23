import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Network, Code, Settings } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  description: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    {
      name: 'Operating System (Kali Linux)',
      percentage: 80,
      icon: <Terminal />,
      description: 'Proficient in Kali Linux for penetration testing and security analysis'
    },
    {
      name: 'Linux Tools',
      percentage: 87,
      icon: <Terminal />,
      description: 'Advanced knowledge of command-line tools and system administration'
    },
    {
      name: 'Networking & Security',
      percentage: 80,
      icon: <Network />,
      description: 'Network protocols, security analysis, and vulnerability assessment'
    },
    {
      name: 'Programming (Python)',
      percentage: 84,
      icon: <Code />,
      description: 'Python programming for security automation and tool development'
    },
    {
      name: 'Project Management',
      percentage: 100,
      icon: <Settings />,
      description: 'Managing cybersecurity projects including mobile hacking and IoT'
    }
  ];

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
            Technical <span className="accent">Skills</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`skill-card ${isVisible ? 'animate-in' : ''}`}
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
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${animatedPercentages[index]}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{animatedPercentages[index]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
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

        .skill-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 255, 65, 0.3);
          box-shadow: 0 16px 40px rgba(0, 255, 65, 0.1);
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        .skill-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 65, 0.1);
          border-radius: 12px;
          color: #00ff41;
          flex-shrink: 0;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .skill-description {
          color: #ccc;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .skill-progress {
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
          background: linear-gradient(90deg, #00ff41, #00d4ff);
          border-radius: 4px;
          transition: width 1s ease;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        .skill-percentage {
          font-weight: 600;
          color: #00ff41;
          font-size: 1.1rem;
          min-width: 45px;
          text-align: right;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .skill-header {
            gap: 1rem;
          }

          .skill-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;