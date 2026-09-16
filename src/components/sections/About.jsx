import React from 'react';
import { Cpu, Shield, Zap, Sparkles, Layers, Terminal, Activity, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="section-padding about-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono">
            <span className="accent-cyan">//</span> 01. PROFILE &amp; PHILOSOPHY
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text-cyan">robust MERN apps</span> with clean <span className="gradient-text-violet">architecture</span>.
          </h2>
          <p className="section-subtitle">
            {about.heading}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-container">
          {/* Main Story Bento Card */}
          <div className="bento-card bento-span-2 glass-card">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Cpu size={22} className="accent-cyan" />
              </div>
              <span className="mono bento-badge">FULLSTACK_DEV.LOG</span>
            </div>
            <h3 className="bento-title">MERN Stack Engineering &amp; Problem Solving</h3>
            <div className="bento-body">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="bento-paragraph">{p}</p>
              ))}
            </div>
            <div className="bento-footer-tags mono">
              <span className="tech-chip">#MERNStack</span>
              <span className="tech-chip">#NextJS</span>
              <span className="tech-chip">#RESTAPIs</span>
              <span className="tech-chip">#DataStructures</span>
              <span className="tech-chip">#MongoDB</span>
              <span className="tech-chip">#TailwindCSS</span>
            </div>
          </div>

          {/* Quick Metrics Bento Card */}
          <div className="bento-card glass-card bento-stats-card">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Activity size={22} className="accent-violet" />
              </div>
              <span className="mono bento-badge">KEY_HIGHLIGHTS</span>
            </div>
            <div className="bento-stats-list">
              {about.bentoStats.map((stat, idx) => (
                <div key={idx} className="bento-stat-item">
                  <div className="bento-stat-val mono gradient-text-cyan">{stat.value}</div>
                  <div className="bento-stat-label">{stat.label}</div>
                  <div className="bento-stat-detail mono">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Principles Bento Card */}
          <div className="bento-card bento-span-3 glass-card principles-card">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Layers size={22} className="accent-emerald" />
              </div>
              <span className="mono bento-badge">CORE_PILLARS</span>
            </div>
            <h3 className="bento-title">Core Development Principles</h3>
            <div className="principles-grid">
              {about.corePrinciples.map((item, idx) => (
                <div key={idx} className="principle-item">
                  <div className="principle-num mono">0{idx + 1}</div>
                  <h4 className="principle-title">{item.title}</h4>
                  <p className="principle-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
