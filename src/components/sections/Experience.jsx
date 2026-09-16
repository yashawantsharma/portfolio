import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono">
            <span className="accent-cyan">//</span> 04. EXPERIENCE &amp; EDUCATION
          </div>
          <h2 className="section-title">
            Career <span className="gradient-text-cyan">Experience</span> &amp; Academic <span className="gradient-text-violet">Foundation</span>.
          </h2>
          <p className="section-subtitle">
            Hands-on MERN stack development at REGex Software Services and computer science foundation at MGSU.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* Internship Experience Items */}
          {experience.map((item, idx) => (
            <div key={`exp-${idx}`} className="timeline-item">
              {/* Node Indicator */}
              <div className="timeline-node">
                <div className="node-outer">
                  <div className="node-inner"></div>
                </div>
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div className="timeline-role-info">
                    <div className="timeline-badge-row mono">
                      <span className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                      <span className="timeline-status-badge">{item.badge}</span>
                    </div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company gradient-text-cyan">{item.company}</span>
                      <span className="timeline-location mono">
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="timeline-description">{item.description}</p>

                <div className="timeline-achievements">
                  {item.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="achievement-item">
                      <CheckCircle size={15} className="accent-emerald ach-icon" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-tech-stack">
                  {item.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-chip mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Item */}
          {education.map((edu, idx) => (
            <div key={`edu-${idx}`} className="timeline-item">
              <div className="timeline-node">
                <div className="node-outer" style={{ borderColor: 'var(--accent-violet)', boxShadow: '0 0 15px rgba(157, 78, 221, 0.5)' }}>
                  <div className="node-inner" style={{ background: 'var(--accent-violet)' }}></div>
                </div>
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div className="timeline-role-info">
                    <div className="timeline-badge-row mono">
                      <span className="timeline-period-badge" style={{ color: 'var(--accent-violet)' }}>
                        <GraduationCap size={14} />
                        <span>{edu.period}</span>
                      </span>
                      <span className="timeline-status-badge" style={{ color: 'var(--accent-emerald)', borderColor: 'rgba(0, 245, 212, 0.3)' }}>{edu.badge}</span>
                    </div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company gradient-text-violet">{edu.institution}</span>
                      <span className="timeline-location mono">
                        <MapPin size={13} />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="timeline-achievements">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="achievement-item">
                      <CheckCircle size={15} className="accent-emerald ach-icon" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
