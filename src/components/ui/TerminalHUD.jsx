import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const TerminalHUD = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ YASHAWANT SHARMA // DEV TERMINAL OS [v2.4.0]' },
    { type: 'system', text: 'Full-Stack & MERN Engineering Console initialized.' },
    { type: 'system', text: 'Type "help" to view available system commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    const newEntry = { type: 'user', text: rawCmd };
    let responses = [];

    setCmdHistory(prev => [...prev, rawCmd]);
    setHistoryIdx(-1);

    switch (cmd) {
      case 'help':
        responses = [
          { type: 'output', text: '=== AVAILABLE COMMANDS ===' },
          ...portfolioData.terminalHelp.map(h => ({
            type: 'output',
            text: `  ${h.cmd.padEnd(12, ' ')} : ${h.desc}`
          }))
        ];
        break;

      case 'about':
        responses = [
          { type: 'highlight', text: `>> ${portfolioData.personal.name} | ${portfolioData.personal.title}` },
          { type: 'output', text: portfolioData.personal.tagline },
          { type: 'output', text: portfolioData.about.paragraphs[0] }
        ];
        break;

      case 'skills':
        responses = [
          { type: 'highlight', text: '>> CORE TECHNICAL MATRIX:' },
          ...portfolioData.skills.categories.flatMap(cat => [
            { type: 'info', text: `[${cat.name.toUpperCase()}]` },
            ...cat.skills.map(s => ({
              type: 'output',
              text: `  • ${s.name.padEnd(28, ' ')} [${'█'.repeat(Math.floor(s.level / 10))}${'░'.repeat(10 - Math.floor(s.level / 10))}] ${s.level}%`
            }))
          ])
        ];
        break;

      case 'projects':
        responses = [
          { type: 'highlight', text: '>> DEPLOYED SYSTEMS & REPOSITORIES:' },
          ...portfolioData.projects.map(p => ({
            type: 'output',
            text: `  ⚡ ${p.title} (${p.category}) -> ${p.subtitle}`
          }))
        ];
        break;

      case 'experience':
        responses = [
          { type: 'highlight', text: '>> WORK EXPERIENCE:' },
          ...portfolioData.experience.map(exp => ({
            type: 'output',
            text: `  💼 ${exp.role} @ ${exp.company} (${exp.period}) - ${exp.location}\n     ${exp.description}`
          }))
        ];
        break;

      case 'education':
        responses = [
          { type: 'highlight', text: '>> ACADEMIC QUALIFICATIONS:' },
          ...portfolioData.education.map(edu => ({
            type: 'output',
            text: `  🎓 ${edu.degree}\n     ${edu.institution} (${edu.period}) - ${edu.location}`
          }))
        ];
        break;

      case 'status':
        responses = [
          { type: 'highlight', text: '>> DEVELOPER STATUS & TELEMETRY:' },
          { type: 'output', text: `  Status: ${portfolioData.personal.status}` },
          { type: 'output', text: `  Specialization: MERN Stack & Next.js` },
          { type: 'output', text: `  DSA Solved: ${portfolioData.personal.dsaSolved}` },
          { type: 'output', text: `  Location: ${portfolioData.personal.location}` }
        ];
        break;

      case 'contact':
        responses = [
          { type: 'highlight', text: '>> DIRECT COMMUNICATION CHANNELS:' },
          { type: 'output', text: `  Phone: ${portfolioData.personal.phone}` },
          { type: 'output', text: `  Email: ${portfolioData.personal.socials.email}` },
          { type: 'output', text: `  LinkedIn: ${portfolioData.personal.socials.linkedin}` },
          { type: 'output', text: `  LeetCode: ${portfolioData.personal.socials.leetcode}` },
          { type: 'output', text: `  GitHub: ${portfolioData.personal.socials.github}` }
        ];
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'gui':
      case 'exit':
        onClose();
        return;

      default:
        responses = [
          { type: 'error', text: `Command not recognized: "${rawCmd}". Type "help" for a list of valid commands.` }
        ];
    }

    setHistory(prev => [...prev, newEntry, ...responses]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose}></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="terminal-title mono">
            <TerminalIcon size={14} className="terminal-title-icon" />
            yashawant@dev-shell:~/portfolio
          </div>
          <button className="terminal-btn-close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="terminal-body mono">
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line terminal-${item.type}`}>
              {item.type === 'user' && <span className="term-prompt">yashawant@dev:~$ </span>}
              <span>{item.text}</span>
            </div>
          ))}
          <form onSubmit={handleCommand} className="terminal-input-form">
            <span className="term-prompt">yashawant@dev:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input mono"
              autoFocus
              spellCheck="false"
            />
            <button type="submit" className="terminal-enter-btn">
              <CornerDownLeft size={14} />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        <div className="terminal-footer mono">
          <span>Commands: <strong>help</strong> | <strong>about</strong> | <strong>skills</strong> | <strong>projects</strong> | <strong>experience</strong></span>
          <span>Press <strong>ESC</strong> to exit</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHUD;
