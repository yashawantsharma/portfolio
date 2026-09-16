import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, X, CheckCircle2, ShieldCheck, Zap, BookOpen, Database, Server, Layout, Lock, Cpu, AlertCircle, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'AI & Full-Stack', 'Full-Stack Enterprise', 'Full-Stack & Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono">
            <span className="accent-cyan">//</span> 02. FEATURED PORTFOLIO PROJECTS
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text-cyan">Systems</span> &amp; Web <span className="gradient-text-violet">Applications</span>.
          </h2>
          <p className="section-subtitle">
            Engineered full-stack solutions with production-grade architectures, database caching, role-based workflows, and modern UI/UX design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filter-tabs mono">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card"
              style={{ '--card-accent': project.color }}
            >
              {/* Image Preview Banner with Overlay Badges */}
              <div 
                className="project-card-image-wrap" 
                onClick={() => setActiveModalProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`View full details for ${project.title}`}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview Mockup`} 
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-card-image-overlay">
                  <div className="overlay-content mono">
                    <BookOpen size={16} />
                    <span>View Project Details</span>
                  </div>
                </div>

                <div className="image-badge-row">
                  <span className="project-category-badge mono">{project.category}</span>
                  <div className="project-live-indicator mono">
                    <span className="live-dot"></span>
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-content">
                <div className="project-card-top">
                  <div className="project-metrics-pill mono">
                    <Sparkles size={12} className="accent-cyan" />
                    <span>{project.metrics}</span>
                  </div>
                  <h3 className="project-title" onClick={() => setActiveModalProject(project)}>
                    {project.title}
                  </h3>
                  <h4 className="project-subtitle mono">{project.subtitle}</h4>
                </div>

                <p className="project-desc">{project.summary || project.description}</p>

                {/* Highlights List */}
                <div className="project-highlights">
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="highlight-row">
                      <span className="highlight-bullet mono">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tech-tag mono">{tech}</span>
                  ))}
                </div>

                {/* Card Action Bar */}
                <div className="project-actions">
                  <button
                    className="btn-project-readmore mono"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <BookOpen size={14} />
                    <span>Read More &amp; Specs</span>
                  </button>

                  <div className="project-links">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary-link"
                      title="Launch Live Demo"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern, Spacious, User-Friendly Project Detail Modal */}
      {activeModalProject && (
        <div className="project-modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div 
            className="project-modal-container glass-card" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Modal Top Navigation Bar */}
            <div className="project-modal-topbar">
              <div className="modal-topbar-meta">
                <span className="project-category-badge mono">{activeModalProject.category}</span>
                <span className="modal-status-badge mono">
                  <span className="live-dot"></span>
                  {activeModalProject.status}
                </span>
              </div>
              <button 
                className="modal-close-round-btn" 
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Content Flow */}
            <div className="project-modal-scrollable">
              {/* Title & Subtitle Header */}
              <div className="modal-title-section">
                <h2 id="modal-project-title" className="modal-main-title">{activeModalProject.title}</h2>
                <p className="modal-main-subtitle mono">{activeModalProject.subtitle}</p>
              </div>

              {/* Full Uncropped Showcase Image */}
              <div className="modal-showcase-photo-box">
                <img 
                  src={activeModalProject.image} 
                  alt={`${activeModalProject.title} Web Interface`} 
                  className="modal-showcase-img"
                />
                <div className="modal-showcase-strip mono">
                  <div className="strip-item">
                    <Sparkles size={14} className="accent-cyan" />
                    <span><strong>Key Architecture:</strong> {activeModalProject.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="modal-story-section">
                <p className="modal-lead-desc">{activeModalProject.description}</p>
              </div>

              {/* Problem vs Solution Split Cards */}
              <div className="modal-problem-solution-grid">
                <div className="ps-card problem-card">
                  <div className="ps-card-header mono">
                    <span className="ps-indicator-dot red"></span>
                    <AlertCircle size={15} />
                    <span>THE PROBLEM</span>
                  </div>
                  <p className="ps-card-body">{activeModalProject.problem}</p>
                </div>

                <div className="ps-card solution-card">
                  <div className="ps-card-header mono">
                    <span className="ps-indicator-dot green"></span>
                    <Zap size={15} />
                    <span>THE ENGINEERED SOLUTION</span>
                  </div>
                  <p className="ps-card-body">{activeModalProject.solution}</p>
                </div>
              </div>

              {/* Key Features & System Modules */}
              <div className="modal-section-block">
                <h4 className="modal-section-label mono">
                  <Cpu size={15} className="accent-cyan" />
                  <span>CORE SYSTEM MODULES &amp; FUNCTIONALITIES</span>
                </h4>

                <div className="modal-modules-grid">
                  {activeModalProject.modules && activeModalProject.modules.map((mod, idx) => (
                    <div key={idx} className="modern-module-card">
                      <div className="module-card-top mono">
                        <span className="module-counter">0{idx + 1}</span>
                        <h5 className="module-name">{mod.title}</h5>
                      </div>
                      <p className="module-text">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Architecture Breakdown */}
              <div className="modal-section-block">
                <h4 className="modal-section-label mono">
                  <Server size={15} className="accent-cyan" />
                  <span>TECHNICAL ARCHITECTURE &amp; STACK BREAKDOWN</span>
                </h4>

                {activeModalProject.stackArchitecture && (
                  <div className="modern-stack-grid">
                    <div className="modern-stack-card">
                      <div className="stack-card-heading mono">
                        <Layout size={14} className="accent-cyan" />
                        <span>Frontend &amp; UI</span>
                      </div>
                      <div className="stack-card-val">{activeModalProject.stackArchitecture.frontend}</div>
                    </div>

                    <div className="modern-stack-card">
                      <div className="stack-card-heading mono">
                        <Server size={14} className="accent-cyan" />
                        <span>Backend &amp; APIs</span>
                      </div>
                      <div className="stack-card-val">{activeModalProject.stackArchitecture.backend}</div>
                    </div>

                    <div className="modern-stack-card">
                      <div className="stack-card-heading mono">
                        <Database size={14} className="accent-cyan" />
                        <span>Database &amp; Storage</span>
                      </div>
                      <div className="stack-card-val">{activeModalProject.stackArchitecture.database}</div>
                    </div>

                    <div className="modern-stack-card">
                      <div className="stack-card-heading mono">
                        <Lock size={14} className="accent-cyan" />
                        <span>Security &amp; Auth</span>
                      </div>
                      <div className="stack-card-val">{activeModalProject.stackArchitecture.security}</div>
                    </div>

                    <div className="modern-stack-card full-span">
                      <div className="stack-card-heading mono">
                        <Cpu size={14} className="accent-cyan" />
                        <span>Cloud, APIs &amp; Integrations</span>
                      </div>
                      <div className="stack-card-val">{activeModalProject.stackArchitecture.aiCloud}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Challenges & Solutions */}
              {activeModalProject.challenges && (
                <div className="modal-section-block">
                  <h4 className="modal-section-label mono">
                    <ShieldCheck size={15} className="accent-cyan" />
                    <span>KEY CHALLENGES &amp; ENGINEERING SOLUTIONS</span>
                  </h4>

                  <div className="modal-challenges-container">
                    {activeModalProject.challenges.map((ch, idx) => (
                      <div key={idx} className="challenge-row-card">
                        <div className="challenge-issue">
                          <span className="challenge-pill issue mono">CHALLENGE {idx + 1}</span>
                          <p>{ch.issue}</p>
                        </div>
                        <div className="challenge-solution">
                          <span className="challenge-pill solution mono">SOLUTION</span>
                          <p>{ch.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Highlights Bullets */}
              <div className="modal-section-block">
                <h4 className="modal-section-label mono">
                  <CheckCircle2 size={15} className="accent-cyan" />
                  <span>KEY HIGHLIGHTS SUMMARY</span>
                </h4>
                <div className="modal-bullet-list">
                  {activeModalProject.highlights.map((h, idx) => (
                    <div key={idx} className="modal-bullet-item">
                      <span className="bullet-icon mono">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Sticky Action Bar */}
            <div className="project-modal-bottom-bar">
              <button
                className="btn-modal-action-secondary mono"
                onClick={() => handleCopyLink(activeModalProject.demoUrl || activeModalProject.repoUrl)}
              >
                {copied ? <Check size={14} className="accent-emerald" /> : <Copy size={14} />}
                <span>{copied ? 'Link Copied!' : 'Share Project'}</span>
              </button>

              <div className="modal-primary-actions">
                <a
                  href={activeModalProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-github mono"
                >
                  <GithubIcon size={16} />
                  <span>Source Code</span>
                </a>
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-live mono"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
