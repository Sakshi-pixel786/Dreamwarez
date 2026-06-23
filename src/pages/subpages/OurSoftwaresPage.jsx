import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

import softwaresSolutions from '../../assets/softwares_solutions.jpg';
import softwaresMarketing from '../../assets/softwares_marketing.jpg';
import softwaresGlobal from '../../assets/softwares_global.jpg';

// Client collaboration logos
import logoEasylight from '../../assets/logo_easylight.jpg';
import logoPurviAgro from '../../assets/logo_purvi_agro.png';
import logoVenkatesh from '../../assets/logo_venkatesh.png';
import logoDenler from '../../assets/logo_denler.png';
import logoSanjivani from '../../assets/logo_sanjivani.png';
import logoDeccan from '../../assets/logo_deccan.jpg';
import logoVj from '../../assets/logo_vj.png';
import logoVishwasBuilder from '../../assets/logo_vishwas_builder.jpg';
import logoViswasSales from '../../assets/logo_viswas_sales.png';

export function OurSoftwaresPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section softwares-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1"></div>
            <div className="glow-blob blob-2"></div>
            <div className="glow-blob blob-3"></div>
          </div>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>OUR SOFTWARE</span>
              </div>
              <h1 className="erp-hero-title animate-title">
                Our <span className="softwares-title-gradient">Software</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle">With Us, You Can Grow Your Business</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px', marginBottom: '16px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              OPPORTUNITY
            </span>
            <h2 className="section-title" style={{ marginBottom: '20px', fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Every challenge brings opportunity</h2>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
              Dreamwarez all about connecting those who need support with those who are best prepared to provide it. Your users get direct access to advanced technicians who provide better, faster solutions that work every time – anytime, anywhere.
            </p>
          </div>
        </section>

        {/* Section 1: Smart Solutions */}
        <section className="section erp-promo-section" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-glass)' }}>
          <div className="layout-bg-text-left">SYSTEMS</div>
          <div className="section-glow-radial erp-radial"></div>
          <div className="erp-grid-redesign">
            {/* Left Column: Text & Bullets */}
            <div className="erp-text-content-new reveal reveal-fade-left">
              <div className="erp-pill-badge-new">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  INTEGRATED APPLICATIONS
                </span>
              </div>
              <h2 className="erp-title-new">
                Dreamwarez Software: <span className="erp-title-gradient">Smart Solutions for Smarter Businesses</span>
              </h2>
              <p className="erp-desc-new">
                We specialize in developing innovative software solutions that accelerate business growth. From conceptualizing cutting-edge digital products to deploying robust enterprise systems, our expertise covers the entire software development lifecycle.
              </p>
              <ul className="erp-bullets-list" style={{ marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> Web & Mobile Applications
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> Enterprise Solutions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> Access to Professional Network
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> 24x7x365 Hardware and Software Support
                </li>
              </ul>
              <div className="erp-btn-wrapper-new">
                <a href="/erp/" className="erp-magnetic-btn">
                  Explore Now <span className="arrow">➔</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Isometric Stack */}
            <div className="erp-visual-content-new reveal reveal-fade-right">
              <div className="collage-3d-stack">
                <div className="collage-glow"></div>
                <div className="img-container-3d main-img-3d" style={{ width: '320px', height: '280px' }}>
                  <img src={softwaresSolutions} alt="Smart Solutions" />
                </div>
                {/* Floating glass widget */}
                <div className="dashboard-glass-widget" style={{ bottom: '20px', left: '-20px', width: '230px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot"></span>
                    <span>Smart System</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Active Deployments</span>
                    <span className="stat-value">150+ Enterprise</span>
                  </div>
                  <div className="widget-mini-chart">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-4"></div>
                    <div className="bar bar-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Digital Marketing */}
        <section className="section promo-layout-section section-digital-strategies" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-glass)' }}>
          <div className="layout-bg-text-right">MARKETING</div>
          <div className="section-glow-radial strategies-radial"></div>
          <div className="android-grid-redesign" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            {/* Left Column: 3D Stack */}
            <div className="android-visual-new reveal reveal-fade-left">
              <div className="android-media-box">
                <div className="media-backdrop-square"></div>
                <div className="android-img-wrapper" style={{ width: '320px', height: '320px', borderRadius: '40px' }}>
                  <img src={softwaresMarketing} alt="Digital Marketing Solutions" />
                </div>
                {/* Marketing Hub Widget */}
                <div className="glass-widget-android" style={{ top: '-10px', right: '-10px', width: '250px' }}>
                  <div className="android-badge-header">
                    <span className="android-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>📈</span>
                    <h4 style={{ fontFamily: 'var(--font-heading)' }}>Marketing Hub</h4>
                  </div>
                  <p className="android-widget-text">Data-driven user acquisitions and campaign management tools.</p>
                  <div className="widget-stat" style={{ marginTop: '8px' }}>
                    <span className="stat-label">Conversion Rate</span>
                    <span className="stat-value" style={{ color: '#8b5cf6', fontSize: '18px' }}>+28.4% Growth</span>
                  </div>
                  <div className="mock-interface-decor">
                    <div className="dot-indicator green"></div>
                    <div className="dot-indicator blue"></div>
                    <div className="dot-indicator yellow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Bullets */}
            <div className="android-text-new reveal reveal-fade-right" style={{ paddingLeft: '20px' }}>
              <div className="badge-growth-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                GROWTH MARKETING
              </div>
              <h2 className="android-title-new">
                Expert Data-Driven <span className="strategies-gradient-span">Digital Marketing Solutions</span>
              </h2>
              <p className="android-desc-new">
                We empower your digital marketing goals and enhance your brand presence as if it were our own. At Dreamwarez, we blend marketing expertise with technical proficiency to deliver exceptional value.
              </p>
              <ul className="erp-bullets-list" style={{ marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span> Digital Strategy
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span> Content Marketing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span> Social Media Marketing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span> Search Engine Optimization (SEO)
                </li>
              </ul>
              <div className="android-btn-wrapper-new">
                <a href="/customised-software-development/" className="strategies-glow-btn">
                  Explore Now <span className="arrow">➔</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Global Reach */}
        <section className="section promo-layout-section alternate section-android-app" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-glass)' }}>
          <div className="layout-bg-text-left">GLOBAL</div>
          <div className="section-glow-radial android-radial"></div>
          <div className="strategies-grid-redesign">
            {/* Left Column: Text & Bullets */}
            <div className="strategies-text-new reveal reveal-fade-left">
              <div className="badge-mobile-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                GLOBAL IMPACT
              </div>
              <h2 className="strategies-title-new">
                From Local to Global: <span className="android-gradient-span">Transforming Businesses Digitally</span>
              </h2>
              <p className="strategies-desc-new" style={{ fontWeight: '700', color: 'var(--primary)' }}>
                50+ Projects Delivered & Counting...
              </p>
              <ul className="erp-bullets-list" style={{ marginTop: '10px', display: 'grid', gap: '10px', width: '100%' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>✓</span> Healthcare | Wellness
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>✓</span> E-commerce
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>✓</span> Transportation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  <span style={{ color: '#0d9488', fontWeight: 'bold' }}>✓</span> Education
                </li>
              </ul>
              <div className="strategies-btn-wrapper-new">
                <a href="/about-us/" className="android-glow-btn">
                  Explore Now <span className="arrow">➔</span>
                </a>
              </div>
            </div>

            {/* Right Column: Image rotated stack & Projects hub widget */}
            <div className="strategies-visual-new reveal reveal-fade-right">
              <div className="strategies-media-box">
                <div className="media-backdrop-circle"></div>
                <div className="strategies-img-wrapper" style={{ width: '320px', height: '320px' }}>
                  <img src={softwaresGlobal} alt="Transforming Businesses" />
                </div>
                {/* Floating projects widget */}
                <div className="glass-widget-analytics" style={{ bottom: '-10px', left: '-10px', width: '250px' }}>
                  <div className="analytics-icon" style={{ background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488' }}>🌍</div>
                  <div className="analytics-content">
                    <h4 className="analytics-title">Projects Hub</h4>
                    <p className="analytics-text">Delivering digital transformation solutions across diverse sectors globally.</p>
                    <div className="analytics-progress-bar">
                      <div className="progress-fill" style={{ width: '92%', background: 'linear-gradient(90deg, #0d9488, #06b6d4)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivering Excellence Banner */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <span className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              PARTNER FOR SUCCESS
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              Delivering Excellence, Partnering for Success
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              We are the best value digital solutions company. A claim that our clients have gladly endorsed.
            </p>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
              Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
            </a>
          </div>
        </section>

        {/* Valued Clients Section */}
        <section className="softwares-clients-section reveal reveal-fade-up" style={{ padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px', marginBottom: '16px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                OUR ECOSYSTEM
              </span>
              <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Our Valued Clients & Collaborations</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
                We are constantly searching and testing for the best tools and services on the market. We partner with these organizations to provide the best service and value for our clients.
              </p>
            </div>

            <div className="clients-logo-grid">
              {[
                { img: logoEasylight, alt: "Easylight" },
                { img: logoPurviAgro, alt: "Purvi Agro" },
                { img: logoVenkatesh, alt: "Venkatesh" },
                { img: logoDenler, alt: "Denler" },
                { img: logoSanjivani, alt: "Sanjivani" },
                { img: logoDeccan, alt: "Deccan" },
                { img: logoVj, alt: "VJ" },
                { img: logoVishwasBuilder, alt: "Vishwas Builder" },
                { img: logoViswasSales, alt: "Viswas Sales" }
              ].map((client, i) => (
                <div 
                  key={i} 
                  className="client-logo-card reveal reveal-scale" 
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img src={client.img} alt={client.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
