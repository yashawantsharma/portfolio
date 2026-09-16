import React, { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X, ChevronRight, FileText, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Navbar = ({ onOpenPalette, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo with Full Stack Developer Title */}
        <a href="#hero" className="navbar-brand" onClick={() => handleNavClick('#hero')}>
          <div className="brand-badge-box">
            <span className="brand-glow-circle"></span>
            <span className="mono brand-prefix">&lt;YS/&gt;</span>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">
              Yashawant<span className="accent-cyan"> Sharma</span>
            </span>
            <span className="brand-role-subtitle mono">
              <span className="role-dot"></span>
              FULL STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Status Pill (Desktop) */}
        <div className="navbar-status-pill mono">
          <span className="status-dot"></span>
          <span className="status-text">{portfolioData.personal.status}</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          <button
            className="btn-cmd-palette"
            onClick={onOpenPalette}
            title="Open Quick Search (Ctrl+K)"
          >
            <Command size={14} />
            <span className="cmd-text mono">Ctrl+K</span>
          </button>

          <button
            className="btn-hire-me mono"
            onClick={() => handleNavClick('#contact')}
          >
            <Send size={13} />
            <span>Hire Me</span>
          </button>

          <button
            className="btn-terminal-toggle"
            onClick={onOpenTerminal}
            title="Launch Terminal HUD"
          >
            <Terminal size={17} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer glass-card">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="mobile-drawer-actions">
            <button className="mobile-action-btn" onClick={() => { setMobileMenuOpen(false); onOpenPalette(); }}>
              <Command size={16} />
              <span>Quick Search (Ctrl+K)</span>
            </button>
            <button className="mobile-action-btn" onClick={() => { setMobileMenuOpen(false); onOpenTerminal(); }}>
              <Terminal size={16} />
              <span>Interactive Terminal</span>
            </button>
            <button className="btn-glow-primary mobile-hire-btn" onClick={() => { setMobileMenuOpen(false); handleNavClick('#contact'); }}>
              <Send size={15} />
              <span>Contact / Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
