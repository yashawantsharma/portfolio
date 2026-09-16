import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Sparkles, Mail, Phone, ExternalLink, Download, Code2, Database, Cpu, Layers, Server, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

const Hero = ({ onOpenTerminal, onOpenPalette }) => {
  const { personal } = portfolioData;

  // Typewriter roles cycler
  const roles = [
    "MERN Stack Developer",
    "Full-Stack Engineer",
    "RESTful API Architect",
    "Next.js Specialist",
    "Data Structures & Algorithms"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end before deleting
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Ambient Glow Blobs */}
      <div className="hero-glow-blob hero-glow-1"></div>
      <div className="hero-glow-blob hero-glow-2"></div>

      {/* Floating Animated Tech Badges in Background */}
      <div className="hero-floating-badges" aria-hidden="true">
        <div className="float-badge float-badge-1 glass-card">
          <Code2 size={16} className="accent-cyan" />
          <span className="mono">React &amp; Next.js</span>
        </div>
        <div className="float-badge float-badge-2 glass-card">
          <Server size={16} className="accent-emerald" />
          <span className="mono">Node &amp; Express</span>
        </div>
        <div className="float-badge float-badge-3 glass-card">
          <Database size={16} className="accent-cyan" />
          <span className="mono">MongoDB &amp; MySQL</span>
        </div>
        <div className="float-badge float-badge-4 glass-card">
          <Cpu size={16} className="accent-violet" />
          <span className="mono">C++ DSA (200+)</span>
        </div>
        <div className="float-badge float-badge-5 glass-card">
          <Sparkles size={16} className="accent-cyan" />
          <span className="mono">Gemini AI Fallback</span>
        </div>
        <div className="float-badge float-badge-6 glass-card">
          <Globe size={16} className="accent-emerald" />
          <span className="mono">RESTful APIs &amp; RBAC</span>
        </div>
      </div>

      <div className="content-container">
        <div className="hero-content">
          {/* Status Badge with Radar Pulse */}
          <div className="hero-badge-pill mono" onClick={onOpenPalette}>
            <span className="badge-radar">
              <span className="radar-core"></span>
              <span className="radar-wave"></span>
            </span>
            <span className="badge-text">{personal.status}</span>
            <span className="badge-shortcut">Press Ctrl+K</span>
          </div>

          {/* Main Headline with Animated Typewriter */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text-cyan">{personal.name}</span>
            <br />
            <span className="hero-typewriter-wrap">
              <span className="hero-subtitle-gradient">{currentText}</span>
              <span className="typewriter-cursor"></span>
            </span>
          </h1>

          {/* Bio Description */}
          <p className="hero-description">
            Hands-on engineer building scalable web applications with <strong className="highlight-white">MongoDB, Express.js, React.js, Node.js, and Next.js</strong>. 
            Focused on robust RESTful APIs, responsive interfaces, and clean Data Structures &amp; Algorithms.
          </p>

          {/* Social Links Bar */}
          <div className="hero-social-bar">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="LeetCode Profile"
            >
              <LeetCodeIcon size={20} />
              <span>LeetCode</span>
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personal.socials.email}`}
              className="hero-social-icon-btn"
              title="Send Email"
            >
              <Mail size={18} className="accent-cyan" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${personal.socials.phone}`}
              className="hero-social-icon-btn"
              title="Direct Phone Call"
            >
              <Phone size={18} className="accent-emerald" />
              <span>{personal.socials.phone}</span>
            </a>
          </div>

          {/* Interactive CTAs */}
          <div className="hero-cta-group">
            <button className="btn-glow-primary" onClick={() => scrollTo('projects')}>
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn-cyber-outline" onClick={() => scrollTo('contact')}>
              <Mail size={16} className="accent-cyan" />
              <span>Get In Touch</span>
            </button>

            <button className="btn-ghost" onClick={onOpenTerminal}>
              <Terminal size={16} />
              <span>Launch Terminal HUD</span>
            </button>
          </div>

          {/* Sleek Hero Metric Stats Bar */}
          <div className="hero-metrics-grid glass-card">
            <div className="metric-item">
              <div className="metric-number-row">
                <span className="metric-number gradient-text-cyan">1+</span>
                <span className="metric-unit mono">YR</span>
              </div>
              <div className="metric-title">Full-Stack Dev</div>
              <div className="metric-sub mono">MERN &amp; Next.js</div>
            </div>

            <div className="metric-item">
              <div className="metric-number-row">
                <span className="metric-number gradient-text-cyan">5+</span>
                <span className="metric-unit mono">APPS</span>
              </div>
              <div className="metric-title">Full-Stack Projects</div>
              <div className="metric-sub mono">Production Ready</div>
            </div>

            <div className="metric-item">
              <div className="metric-number-row">
                <span className="metric-number gradient-text-cyan">200+</span>
                <span className="metric-unit mono">DSA</span>
              </div>
              <div className="metric-title">LeetCode Solved</div>
              <div className="metric-sub mono">C++ &amp; Algorithms</div>
            </div>

            <div className="metric-item">
              <div className="metric-number-row">
                <span className="metric-number gradient-text-cyan">BCA</span>
                <span className="metric-unit mono">2025</span>
              </div>
              <div className="metric-title">Computer Science</div>
              <div className="metric-sub mono">MGSU Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
