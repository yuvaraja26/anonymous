import React, { useState, useEffect } from 'react';
import { Shield, Lock, UserX, Wifi, Bug, Code, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Cybersecurity Analyst',
    'Ethical Hacker',
    'Network Security Expert',
    'Threat Hunter',
    'Penetration Tester'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-line"></span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              YUVARAJA S
            </h1>
            
            <div className="hero-title">
              <span className="title-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate about cybersecurity with a strong interest in network security, 
              ethical hacking, and protecting digital systems from threats. Second-year 
              undergraduate specializing in Cybersecurity.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToNext()}
              >
                <Shield className="btn-icon" />
                Explore My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Certification</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="cyber-grid">
              <div className="grid-lines">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="grid-line" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
            </div>
            
            <div className="floating-icons">
              <div className="icon-container" style={{animationDelay: '0s'}}>
                <Lock className="cyber-icon" />
              </div>
              <div className="icon-container" style={{animationDelay: '0.5s'}}>
                <Shield className="cyber-icon" />
              </div>
              <div className="icon-container" style={{animationDelay: '1s'}}>
                <UserX className="cyber-icon" />
              </div>
              <div className="icon-container" style={{animationDelay: '1.5s'}}>
                <Wifi className="cyber-icon" />
              </div>
              <div className="icon-container" style={{animationDelay: '2s'}}>
                <Bug className="cyber-icon" />
              </div>
              <div className="icon-container" style={{animationDelay: '2.5s'}}>
                <Code className="cyber-icon" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToNext}>
          <ChevronDown className="scroll-arrow" />
          <span>Scroll Down</span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-greeting {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #00ff41;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
        }

        .greeting-line {
          width: 40px;
          height: 2px;
          background: #00ff41;
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .hero-title {
          font-size: 2rem;
          color: #00ff41;
          margin-bottom: 2rem;
          font-family: 'Courier New', monospace;
          min-height: 3rem;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #00d4ff;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #00ff41;
        }

        .stat-label {
          color: #888;
          font-size: 0.9rem;
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cyber-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }

        .grid-lines {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .grid-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff41, transparent);
          animation: pulse 2s ease-in-out infinite;
        }

        .grid-line:nth-child(odd) {
          top: 20%;
          transform: rotate(-15deg);
        }

        .grid-line:nth-child(even) {
          bottom: 20%;
          transform: rotate(15deg);
        }

        .floating-icons {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .icon-container {
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }

        .icon-container:nth-child(1) { top: 10%; left: 20%; }
        .icon-container:nth-child(2) { top: 20%; right: 10%; }
        .icon-container:nth-child(3) { top: 60%; left: 10%; }
        .icon-container:nth-child(4) { bottom: 20%; right: 20%; }
        .icon-container:nth-child(5) { bottom: 10%; left: 30%; }
        .icon-container:nth-child(6) { top: 40%; right: 30%; }

        .cyber-icon {
          width: 40px;
          height: 40px;
          color: #00d4ff;
          filter: drop-shadow(0 0 10px #00d4ff);
          transition: all 0.3s ease;
        }

        .cyber-icon:hover {
          color: #00ff41;
          filter: drop-shadow(0 0 20px #00ff41);
          transform: scale(1.2);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #888;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          color: #00ff41;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          animation: bounce 2s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .hero-title {
            font-size: 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }

          .hero-visual {
            height: 300px;
          }

          .floating-icons {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;