import React, { useState, useEffect } from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ParticleCanvas } from '../components/layout/ParticleCanvas';
import { ChatWidget } from '../components/layout/ChatWidget';
import { Helmet } from 'react-helmet-async';
import dashboardMockup from '../assets/dashboard_mockup.png';

export function Home() {
  const [modulesSelected, setModulesSelected] = useState({
    erp: true,
    crm: false,
    accounting: false,
    warehouse: false,
    pos: false,
  });
  const [usersCount, setUsersCount] = useState(10);
  const [cloudHosting, setCloudHosting] = useState(true);



  const calculateQuote = () => {
    let baseRate = 0;
    if (modulesSelected.erp) baseRate += 50;
    if (modulesSelected.crm) baseRate += 30;
    if (modulesSelected.accounting) baseRate += 25;
    if (modulesSelected.warehouse) baseRate += 20;
    if (modulesSelected.pos) baseRate += 15;

    const userMultiplier = usersCount <= 5 ? 1.0 : usersCount <= 20 ? 1.2 : 1.5;
    const hostingCost = cloudHosting ? 20 : 0;
    return Math.round((baseRate * userMultiplier) + hostingCost);
  };

  const handleModuleToggle = (mod) => {
    setModulesSelected(prev => ({ ...prev, [mod]: !prev[mod] }));
  };

  return (
    <div className="app-container home-page">
      <Helmet>
        <title>Dreamwarez | Custom ERP & Enterprise Software Solutions</title>
        <meta name="description" content="Dreamwarez offers bespoke software development, ERP solutions, cutting-edge digital marketing, and 3D media animations for global businesses." />
        <meta name="keywords" content="ERP Software, Custom Software Development, Digital Marketing, 3D Animation, Web Development, Tech Agency" />
      </Helmet>
      
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section - Two Column Layout with Dashboard Mockup */}
        <section className="hero-section hero-split">
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1"></div>
            <div className="glow-blob blob-2"></div>
            <div className="glow-blob blob-3"></div>
          </div>
          <div className="hero-inner hero-grid">
            {/* Left Content */}
            <div className="hero-content reveal reveal-fade-right">
              <div className="hero-badge animate-badge">
                <span className="badge-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Modern Enterprise Solutions
                </span>
              </div>
              <h1 className="hero-title animate-title">
                Your Pathway<br />
                <span>To Innovation</span>
              </h1>
              <p className="hero-subtitle animate-subtitle">
                Streamlining Business Through Technology. Empowering You with Digital Solutions revolutionizing with Every Click.
              </p>
              <div className="hero-actions animate-actions flex gap-4">
                <a href="/contact/" className="cta-button">
                  Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
                </a>
                <a href="/our-softwares/" className="cta-button-secondary">
                  Explore Softwares <span style={{ marginLeft: '8px' }}>➔</span>
                </a>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup & Floating Cards */}
            <div className="hero-visual reveal reveal-fade-left">
              <div className="dashboard-container relative w-full aspect-video rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl shadow-blue-500/10 p-2">
                <img src={dashboardMockup} alt="Enterprise Dashboard UI" className="w-full h-full object-cover rounded-xl shadow-inner border border-slate-200/50" />
                

              </div>
            </div>
          </div>
        </section>

        {/* Section: Simplify Work (Smart Solutions) */}
        <section className="section simplify-section" style={{ borderBottom: '1px solid var(--border-glass)' }}>
          <div className="section-header centered reveal reveal-fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
              SIMPLIFY WORK
            </span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '700', marginBottom: '16px' }}>Smart Solutions For Every Business & Individual</h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
              As a Software Company, we recognize that brilliant ideas demand exceptional executions. We boost your success with our expertise and innovative cutting edge IT solutions. It's our passion, process, & integrity that guarantees your success.
            </p>
            <a href="/about-us/" className="cta-button" style={{ marginBottom: '40px' }}>
              About Us <span style={{ marginLeft: '8px' }}>➔</span>
            </a>
          </div>

          <div className="features-grid-layout">
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '0ms' }}>
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">Experienced Developers</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '100ms' }}>
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="feature-card-title">Cost-Effective Services</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '200ms' }}>
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">Daily/Weekly/Monthly Reporting</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '300ms' }}>
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="feature-card-title">24/7 Dedicated Support</div>
            </div>
            
            <div className="glass-card feature-card reveal reveal-scale" style={{ transitionDelay: '400ms' }}>
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="feature-card-title">100% Assurance</div>
            </div>
          </div>
        </section>

        {/* Section: Powerful ERP Solution - Redesigned Asymmetric Open Layout */}
        <section className="section erp-promo-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="layout-bg-text-left">ERP</div>
          <div className="section-glow-radial erp-radial"></div>
          <div className="erp-grid-redesign">
            {/* Left Column: Text & CTA */}
            <div className="erp-text-content-new reveal reveal-fade-left">
              <div className="erp-pill-badge-new">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  ENTERPRISE PLATFORM
                </span>
              </div>
              <h2 className="erp-title-new">
                Optimize Your Business With <span className="erp-title-gradient">Dreamwarez's Powerful ERP Solution</span>
              </h2>
              <p className="erp-desc-new">
                Manage your complete business software flow from multiple warehouse, manufacturing to sales and purchase right from a single software solution.
              </p>
              <div className="erp-btn-wrapper-new">
                <a href="/erp/" className="erp-magnetic-btn">
                  Explore More <span className="arrow">➔</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Interactive Isometric Collage */}
            <div className="erp-visual-content-new reveal reveal-fade-right">
              <div className="collage-3d-stack">
                <div className="collage-glow"></div>
                <div className="img-container-3d main-img-3d">
                  <img src="/src/assets/office_chair.png" alt="Modern Office Lounge" />
                </div>
                <div className="img-container-3d secondary-img-3d">
                  <img src="/src/assets/workspace_hands.png" alt="Professional Workspace" />
                </div>
                {/* Floating operations hub stats widget */}
                <div className="dashboard-glass-widget">
                  <div className="widget-header">
                    <span className="pulse-dot"></span>
                    <span>Operations Hub</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Workflow Automation</span>
                    <span className="stat-value">98.4% Optimized</span>
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

        {/* Section: Digital Strategies - Redesigned Offset Layout */}
        <section className="section promo-layout-section section-digital-strategies" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="layout-bg-text-right">GROWTH</div>
          <div className="section-glow-radial strategies-radial"></div>
          <div className="strategies-grid-redesign">
            
            {/* Left Column: Typography */}
            <div className="strategies-text-new reveal reveal-fade-left">
              <div className="badge-growth-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                GROWTH HUB
              </div>
              <h2 className="strategies-title-new">
                Driving Business Growth Through <span className="strategies-gradient-span">Smart Digital Strategies</span>
              </h2>
              <p className="strategies-desc-new">
                Empower your business online with our comprehensive marketing solutions. From paid advertising to organic strategies, and design to web development – the power is in your hands.
              </p>
              <div className="strategies-btn-wrapper-new">
                <a href="/customised-software-development/" className="strategies-glow-btn">
                  Explore Services <span className="arrow">➔</span>
                </a>
              </div>
            </div>

            {/* Right Column: Layered Media Circular Frame */}
            <div className="strategies-visual-new reveal reveal-fade-right">
              <div className="strategies-media-box">
                <div className="media-backdrop-circle"></div>
                <div className="strategies-img-wrapper">
                  <img src="/src/assets/couch_workspace.png" alt="Digital Strategies Workspace" />
                </div>
                {/* Analytics Glass Widget */}
                <div className="glass-widget-analytics">
                  <div className="analytics-icon">📊</div>
                  <div className="analytics-content">
                    <h4 className="analytics-title">Let's Grow Your Brand</h4>
                    <p className="analytics-text">Partner with a leading digital marketing agency to increase brand awareness, reach your target audience & grow your business online.</p>
                    <div className="analytics-progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Android App Development - Redesigned Offset Layout */}
        <section className="section promo-layout-section alternate section-android-app" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="layout-bg-text-left">MOBILE</div>
          <div className="section-glow-radial android-radial"></div>
          <div className="android-grid-redesign">
            
            {/* Left Column: Android Interface Mockup */}
            <div className="android-visual-new reveal reveal-fade-left">
              <div className="android-media-box">
                <div className="media-backdrop-square"></div>
                <div className="android-img-wrapper">
                  <img src="/src/assets/dev_woman.png" alt="Android Development Workspace" />
                </div>
                {/* App Mock Widget */}
                <div className="glass-widget-android">
                  <div className="android-badge-header">
                    <span className="android-icon">🤖</span>
                    <h4>Android App Development</h4>
                  </div>
                  <p className="android-widget-text">Our android apps development services help you choose the best android platform.</p>
                  <div className="mock-interface-decor">
                    <div className="dot-indicator green"></div>
                    <div className="dot-indicator blue"></div>
                    <div className="dot-indicator yellow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Actions */}
            <div className="android-text-new reveal reveal-fade-right">
              <div className="badge-mobile-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                MOBILE PLATFORMS
              </div>
              <h2 className="android-title-new">
                Bringing Your Ideas To Life With <span className="android-gradient-span">Dreamwarez Custom Android Apps</span>
              </h2>
              <p className="android-desc-new">
                We offer a range of Android development services that are fully capable of supporting established companies. We deliver scalability with expertise in everything related to what is android app development.
              </p>
              <div className="android-btn-wrapper-new">
                <a href="/android-app/" className="android-glow-btn">
                  Explore More <span className="arrow">➔</span>
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* Section: Portfolio Image Grid with Hover Overlays */}
        <section className="section portfolio-grid-section">
          <div className="portfolio-grid-inner">
            <div className="portfolio-row-large reveal reveal-fade-up">
              <div className="portfolio-item large">
                <img src="/src/assets/team_meeting.png" alt="Team Meeting Collaboration" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Corporate</span>
                  <h4>Team Collaboration</h4>
                </div>
              </div>
              <div className="portfolio-item large">
                <img src="/src/assets/outdoor_laptop.png" alt="Working Outdoors" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Remote Work</span>
                  <h4>Productivity & Focus</h4>
                </div>
              </div>
            </div>
            <div className="portfolio-row-small reveal reveal-fade-up" style={{ transitionDelay: '150ms' }}>
              <div className="portfolio-item small">
                <img src="/src/assets/coffee_desk.png" alt="Coffee and Laptop" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Creative</span>
                  <h4>Workspace Setup</h4>
                </div>
              </div>
              <div className="portfolio-item small">
                <img src="/src/assets/sofa_laptop.png" alt="Working on Sofa" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Development</span>
                  <h4>Agile Coding Sessions</h4>
                </div>
              </div>
              <div className="portfolio-item small">
                <img src="/src/assets/office_walk.png" alt="Office Discussion" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Strategy</span>
                  <h4>Informal Brainstorms</h4>
                </div>
              </div>
              <div className="portfolio-item small">
                <img src="/src/assets/tablet_graphs.png" alt="Business Metrics Tablet" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Analytics</span>
                  <h4>BI Metrics Dashboard</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
