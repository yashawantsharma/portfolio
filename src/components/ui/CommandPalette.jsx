import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, ArrowRight, Terminal, User, Briefcase, Cpu, Mail, Sparkles, X, FileText, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const CommandPalette = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false, true); // toggle open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAction = (callback) => {
    callback();
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.socials.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 900);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allItems = [
    {
      id: 'sec-about',
      title: 'Navigate to About & Philosophy',
      category: 'Navigation',
      icon: User,
      action: () => scrollTo('about')
    },
    {
      id: 'sec-projects',
      title: 'Explore Featured Projects & Case Studies',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollTo('projects')
    },
    {
      id: 'sec-skills',
      title: 'Inspect Tech Stack & Skills Matrix',
      category: 'Navigation',
      icon: Cpu,
      action: () => scrollTo('skills')
    },
    {
      id: 'sec-experience',
      title: 'View Career Milestones & Experience',
      category: 'Navigation',
      icon: Sparkles,
      action: () => scrollTo('experience')
    },
    {
      id: 'sec-contact',
      title: 'Transmit Message / Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollTo('contact')
    },
    {
      id: 'cmd-terminal',
      title: 'Launch Interactive Terminal HUD',
      category: 'Developer Tools',
      icon: Terminal,
      action: () => onOpenTerminal()
    },
    {
      id: 'cmd-copy-email',
      title: copied ? 'Copied to Clipboard!' : `Copy Email (${portfolioData.personal.socials.email})`,
      category: 'Actions',
      icon: copied ? Check : Mail,
      action: () => copyEmail()
    }
  ];

  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="palette-header">
          <Search size={18} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="palette-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="palette-body">
          {filteredItems.length === 0 ? (
            <div className="palette-empty">No commands matching "{query}"</div>
          ) : (
            <div className="palette-list">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="palette-item"
                    onClick={() => handleAction(item.action)}
                  >
                    <div className="palette-item-left">
                      <div className="palette-item-icon-box">
                        <Icon size={16} />
                      </div>
                      <span className="palette-item-title">{item.title}</span>
                    </div>
                    <span className="palette-item-category mono">{item.category}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="palette-footer mono">
          <span><kbd className="cmd-kbd">ESC</kbd> to exit</span>
          <span><kbd className="cmd-kbd">↵</kbd> to select</span>
          <span><kbd className="cmd-kbd">Ctrl+K</kbd> to toggle</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
