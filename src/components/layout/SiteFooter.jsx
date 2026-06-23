import React from 'react';
import { Link } from 'react-router-dom';

export function SiteFooter({ variant = 'default' }) {
  return (
    <footer className={`site-footer ${variant === 'black' ? 'black-footer' : ''}`}>
      <div className="footer-inner">
        
        {/* Column 1: DREAMWAREZ Brand Detail */}
        <div className="footer-brand-column">
          <h3 className="footer-brand-title">DREAMWAREZ</h3>
          <p className="footer-brand-text">
            Dreamwarez solutions designed by experts, built with the future in mind. Our history makes us credible. Our work keeps us competitive. Our people are our strength.
          </p>
          <p className="footer-brand-text">
            Whether you need to minimize overhead, modernize your workloads, accelerate change, or scale your business—we have you covered.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-container">
          <h3>Quick Links</h3>
          <div className="footer-links-columns-grid">
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us/">About Us</Link></li>
              <li><Link to="/about-us/team-dreamwarezs/">Team Dreamwarez</Link></li>
              <li><Link to="/career-opportunities/">Career Opportunities</Link></li>
              <li><Link to="/contact/">Contact Us</Link></li>
              <li><Link to="/our-softwares/">Our Softwares</Link></li>
              <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="/services/">Services</Link></li>
            </ul>
            <ul className="footer-links-list no-header-links">
              <li><Link to="/terms-and-condition/">Terms and condition</Link></li>
              <li><Link to="/refund-policy/">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy/">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Let's Connect */}
        <div className="footer-connect-column">
          <h3>Let's Connect!</h3>
          <p className="footer-connect-text">
            Connect with us, concentrate on high-value tasks that truly make an impact.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom-line">
        <div className="footer-bottom-inner">
          <div className="footer-copyright">
            Copyright © 2026 <strong>Dreamwarez The Simplified Software Company</strong>
          </div>
          <div className="footer-powered">
            Powered by <strong>Dreamwarez The Simplified Software Company</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
