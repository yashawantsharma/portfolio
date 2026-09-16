import React, { useState } from 'react';
import { Layout, Server, Database, Cpu, Search, CheckCircle2, Zap, Sparkles, Layers, ShieldCheck, Code2, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const categoryIcons = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu
};

const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories based on selection
  const visibleCategories = selectedCategory === 'all'
    ? skills.categories
    : skills.categories.filter(cat => cat.id === selectedCategory);

  // Filter skills based on search query
  const getFilteredSkills = (categorySkills) => {
    if (!searchQuery.trim()) return categorySkills;
    const query = searchQuery.toLowerCase();
    return categorySkills.filter(s => 
      s.name.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query) ||
      s.level.toLowerCase().includes(query) ||
      s.tag.toLowerCase().includes(query)
    );
  };

  const totalIndexedSkills = skills.categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono">
            <span className="accent-cyan">//</span> 03. TECHNICAL EXPERTISE &amp; SKILLS
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text-cyan">Technology</span> <span className="gradient-text-violet">Ecosystem</span>.
          </h2>
          <p className="section-subtitle">
            A comprehensive, interactive index of programming languages, frameworks, databases, architectures, and development tools.
          </p>
        </div>

        {/* User-Friendly Search & Filter Bar */}
        <div className="skills-toolbar">
          {/* Category Tabs */}
          <div className="skills-category-tabs mono">
            <button
              className={`skills-pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <Layers size={15} />
              <span>All Skills ({totalIndexedSkills})</span>
            </button>

            {skills.categories.map((cat) => {
              const IconComponent = categoryIcons[cat.icon] || Cpu;
              return (
                <button
                  key={cat.id}
                  className={`skills-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <IconComponent size={15} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="skills-search-box">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, MongoDB, Auth, Next)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input mono"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-wrapper">
          {visibleCategories.map((category) => {
            const IconComponent = categoryIcons[category.icon] || Cpu;
            const categorySkills = getFilteredSkills(category.skills);

            if (categorySkills.length === 0 && searchQuery) {
              return null;
            }

            return (
              <div key={category.id} className="skills-category-group glass-card">
                {/* Category Header */}
                <div className="category-group-header">
                  <div className="category-group-left">
                    <div className="category-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="category-group-title">{category.name}</h3>
                      <p className="category-group-desc">{category.description}</p>
                    </div>
                  </div>
                  <span className="category-count-badge mono">
                    {categorySkills.length} Technologies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="skills-cards-grid">
                  {categorySkills.map((skill, idx) => (
                    <div key={idx} className="modern-skill-item-card">
                      <div className="skill-card-top">
                        <div className="skill-title-row">
                          <span className="skill-bullet-dot"></span>
                          <h4 className="skill-item-name">{skill.name}</h4>
                        </div>
                        <span className="skill-level-badge mono">{skill.level}</span>
                      </div>

                      <p className="skill-item-desc">{skill.desc}</p>

                      <div className="skill-card-bottom mono">
                        <span className="skill-tag-pill">{skill.tag}</span>
                        <div className="skill-status-light">
                          <span className="status-glow-dot"></span>
                          <span>Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bento Competency Highlights */}
        {skills.bentoHighlights && (
          <div className="skills-bento-section">
            <div className="bento-ribbon-header mono">
              <Sparkles size={16} className="accent-cyan" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            
            <div className="skills-bento-grid">
              {skills.bentoHighlights.map((highlight, idx) => (
                <div key={idx} className="skills-bento-item glass-card">
                  <div className="bento-item-header mono">
                    <span className="bento-index">0{idx + 1}.</span>
                    <span className="bento-tag">{highlight.tag}</span>
                  </div>
                  <h4 className="bento-title">{highlight.title}</h4>
                  <p className="bento-desc">{highlight.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
