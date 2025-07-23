import React, { useState, useEffect } from 'react';
import { Shield, Lock, UserX, Wifi, Bug, Code, ChevronDown, Sparkles, Zap } from 'lucide-react';

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
        setTimeout(() => setIsDeleting(true), 2000);
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
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>Available for Opportunities</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-line">YUVARAJA</span>
              <span className="name-line accent-line">SRINIVASAN</span>
            </h1>
            
            <div className="hero-title">
              <span className="title-prefix">I'm a </span>
              <span className="title-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate cybersecurity professional specializing in ethical hacking, 
              network security, and digital threat mitigation. Dedicated to protecting 
              digital infrastructure through innovative security solutions.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToNext()}
              >
                <Zap className="btn-icon" />
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
                <div className="stat-label">Security Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">CEH Certification</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="central-hub">
                <div className="hub-core">
                  <Shield className="core-icon" />
                </div>
                <div className="hub-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              
              <div className="floating-icons">
                <div className="icon-node node-1">
                  <Lock className="node-icon" />
                </div>
                <div className="icon-node node-2">
                  <UserX className="node-icon" />
                </div>
                <div className="icon-node node-3">
                  <Wifi className="node-icon" />
                </div>
                <div className="icon-node node-4">
                  <Bug className="node-icon" />
                </div>
                <div className="icon-node node-5">
                  <Code className="node-icon" />
                </div>
                <div className="icon-node node-6">
                  <Zap className="node-icon" />
                </div>
              </div>
              
              <div className="connection-lines">
                <svg className="connections" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4facfe" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <path d="M200,200 L100,100" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                  <path d="M200,200 L300,100" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                  <path d="M200,200 L350,200" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                  <path d="M200,200 L300,300" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                  <path d="M200,200 L100,300" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                  <path d="M200,200 L50,200" stroke="url(#lineGradient)" strokeWidth="2" className="connection-line"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="scroll-line"></div>
          <ChevronDown className="scroll-arrow" />
          <span className="scroll-text">Discover More</span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 60%;
          right: 20%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: 20%;
          left: 60%;
          animation-delay: -6s;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(79, 172, 254, 0.1);
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          color: #4facfe;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          width: 16px;
          height: 16px;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .name-line {
          display: block;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .accent-line {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          margin-bottom: 2rem;
          font-weight: 600;
          min-height: 4rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .title-prefix {
          color: #b8b8b8;
          margin-right: 0.5rem;
        }

        .title-text {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #4facfe;
          font-weight: 300;
          margin-left: 2px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #b8b8b8;
          margin-bottom: 3rem;
          line-height: 1.7;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          color: #888;
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .hero-visual {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .central-hub {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .hub-core {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(79, 172, 254, 0.5);
          animation: pulse 3s ease-in-out infinite;
        }

        .core-icon {
          width: 40px;
          height: 40px;
          color: white;
        }

        .hub-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(79, 172, 254, 0.3);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-1 {
          width: 120px;
          height: 120px;
          animation: rotate 20s linear infinite;
        }

        .ring-2 {
          width: 160px;
          height: 160px;
          animation: rotate 30s linear infinite reverse;
          border-color: rgba(102, 126, 234, 0.2);
        }

        .ring-3 {
          width: 200px;
          height: 200px;
          animation: rotate 40s linear infinite;
          border-color: rgba(79, 172, 254, 0.1);
        }

        .floating-icons {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .icon-node {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .icon-node:hover {
          background: rgba(79, 172, 254, 0.2);
          border-color: rgba(79, 172, 254, 0.5);
          transform: scale(1.1);
        }

        .node-icon {
          width: 24px;
          height: 24px;
          color: #4facfe;
        }

        .node-1 { top: 25px; left: 75px; animation-delay: 0s; }
        .node-2 { top: 25px; right: 75px; animation-delay: -1s; }
        .node-3 { top: 50%; right: 25px; animation-delay: -2s; }
        .node-4 { bottom: 25px; right: 75px; animation-delay: -3s; }
        .node-5 { bottom: 25px; left: 75px; animation-delay: -4s; }
        .node-6 { top: 50%; left: 25px; animation-delay: -5s; }

        .connection-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .connections {
          width: 100%;
          height: 100%;
        }

        .connection-line {
          stroke-dasharray: 5, 5;
          animation: dash 3s linear infinite;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: #888;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          color: #4facfe;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(180deg, transparent, #4facfe);
          border-radius: 1px;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          animation: bounce 2s infinite;
        }

        .scroll-text {
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 80px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
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
            height: 400px;
          }

          .visual-container {
            width: 300px;
            height: 300px;
          }

          .hub-core {
            width: 60px;
            height: 60px;
          }

          .core-icon {
            width: 30px;
            height: 30px;
          }

          .icon-node {
            width: 40px;
            height: 40px;
          }

          .node-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;