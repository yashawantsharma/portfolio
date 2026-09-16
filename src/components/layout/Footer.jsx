import React, { useState } from 'react';
import { ArrowUp, Mail, Check, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-wrapper">
      <div className="content-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">
              Yashawant<span className="accent-cyan">.sharma</span>
            </div>
            <p className="footer-tagline">
              {portfolioData.personal.tagline}
            </p>
            <div className="footer-status mono">
              <span className="pulse-dot"></span>
              <span>Available for Full-Time Roles &amp; Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading mono">// NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#about">About &amp; Principles</a></li>
              <li><a href="#projects">Key Projects (DevPath / ERPs)</a></li>
              <li><a href="#skills">Technical Skills (MERN &amp; DSA)</a></li>
              <li><a href="#experience">Internship Experience</a></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="footer-col">
            <h4 className="footer-heading mono">// COMM CHANNELS</h4>
            <div className="footer-social-icons">
              <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn Profile">
                <LinkedinIcon size={18} />
              </a>
              <a href={portfolioData.personal.socials.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LeetCode Profile">
                <LeetCodeIcon size={18} />
              </a>
              <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub Profile">
                <GithubIcon size={18} />
              </a>
            </div>

            <button className="footer-copy-email mono" onClick={copyEmail}>
              {copied ? <Check size={14} className="accent-emerald" /> : <Mail size={14} />}
              <span>{copied ? 'Copied to Clipboard!' : portfolioData.personal.socials.email}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright mono">
            © {new Date().getFullYear()} {portfolioData.personal.name}. MERN Stack Developer | React.js, Node.js, Express, MongoDB, Next.js.
          </div>

          <button className="btn-back-to-top mono" onClick={scrollToTop}>
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
