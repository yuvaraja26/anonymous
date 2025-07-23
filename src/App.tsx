import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="cyber-loader">
            <div className="cyber-loader-inner"></div>
          </div>
          <div className="loading-text">
            {['I', 'N', 'I', 'T', 'I', 'A', 'L', 'I', 'Z', 'I', 'N', 'G', '.', '.', '.'].map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Yuvaraja S. All rights reserved. | Cybersecurity Analyst Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;