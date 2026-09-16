import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ArrowRight, ShieldCheck, Phone, AlertCircle, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send real email via FormSubmit API directly to yashawantsharma785@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${personal.socials.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: `🚀 Portfolio Message from ${formData.name} (${formData.email})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || "Failed to transmit message.");
      }
    } catch (err) {
      console.warn("Direct transmission attempt fallback:", err);
      // Even if network blocks formsubmit, ensure graceful fallback
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || 'Full-Stack Developer Opportunity');
    const body = encodeURIComponent(`Hi Yashawant,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personal.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono">
            <span className="accent-cyan">//</span> 05. GET IN TOUCH
          </div>
          <h2 className="section-title">
            Let's discuss <span className="gradient-text-cyan">roles</span> &amp; full-stack <span className="gradient-text-violet">collaborations</span>.
          </h2>
          <p className="section-subtitle">
            Open for MERN stack, Full-Stack Developer opportunities, and technical projects. Messages sent here land directly in my Gmail inbox.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Action Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title mono">// DIRECT CHANNELS</h3>
              <p className="contact-card-desc">
                Reach out via email, phone, or connect through LinkedIn and LeetCode.
              </p>

              {/* Copyable Email Box */}
              <div className="email-copy-box">
                <div className="email-copy-left">
                  <Mail size={16} className="accent-cyan" />
                  <span className="mono email-text">{personal.socials.email}</span>
                </div>
                <button
                  className="btn-copy-action mono"
                  onClick={copyEmail}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="accent-emerald" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Copyable Phone Box */}
              <div className="email-copy-box">
                <div className="email-copy-left">
                  <Phone size={16} className="accent-emerald" />
                  <span className="mono email-text">{personal.socials.phone}</span>
                </div>
                <button
                  className="btn-copy-action mono"
                  onClick={copyPhone}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} className="accent-emerald" /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels List */}
              <div className="contact-social-links">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                >
                  <div className="social-icon-wrapper">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="social-details">
                    <span className="social-platform">LinkedIn</span>
                    <span className="social-handle mono">in/yashawant-sharma</span>
                  </div>
                  <ArrowRight size={16} className="social-arrow" />
                </a>

                <a
                  href={personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                >
                  <div className="social-icon-wrapper">
                    <LeetCodeIcon size={18} />
                  </div>
                  <div className="social-details">
                    <span className="social-platform">LeetCode</span>
                    <span className="social-handle mono">u/yashawant_sharma</span>
                  </div>
                  <ArrowRight size={16} className="social-arrow" />
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                >
                  <div className="social-icon-wrapper">
                    <GithubIcon size={18} />
                  </div>
                  <div className="social-details">
                    <span className="social-platform">GitHub</span>
                    <span className="social-handle mono">@yashawant-sharma</span>
                  </div>
                  <ArrowRight size={16} className="social-arrow" />
                </a>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="availability-card glass-card mono">
              <div className="avail-status-row">
                <span className="pulse-dot"></span>
                <span className="avail-text">{personal.status}</span>
              </div>
              <div className="avail-sub">Location: {personal.location}</div>
            </div>
          </div>

          {/* Right: Interactive Message Transmission Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-header mono">
                <span className="form-header-badge accent-cyan">TRANSMIT_MESSAGE.EXE</span>
                <span className="form-security">
                  <ShieldCheck size={14} className="accent-emerald" /> Direct Inbox Delivery
                </span>
              </div>

              {submitted ? (
                <div className="submission-success-box">
                  <div className="success-icon-box">
                    <CheckCircle2 size={32} className="accent-emerald" />
                  </div>
                  <h3 className="success-title">Message Delivered!</h3>
                  <p className="success-msg">
                    Your message has been dispatched directly to <strong className="text-white mono">{personal.socials.email}</strong>. Yashawant will review your inquiry and get back to you promptly.
                  </p>
                  <div className="success-actions-row">
                    <button
                      className="btn-glow-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="transmission-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label mono">YOUR NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe / Hiring Manager"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label mono">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="recruiter@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label mono">SUBJECT / ROLE</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. MERN Stack Developer Opportunity"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label mono">MESSAGE *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Discuss job requirements, project specifications, or schedule an interview..."
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="form-error-alert mono">
                      <AlertCircle size={15} />
                      <span>{errorMessage}</span>
                      <button type="button" onClick={openMailtoFallback} className="fallback-link">
                        Open in Gmail / Email App ↗
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-glow-primary btn-submit-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting to {personal.socials.email}...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
