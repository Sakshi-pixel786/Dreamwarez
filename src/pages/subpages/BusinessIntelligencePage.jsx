


import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Business Intelligence custom assets
import warehouseReporting from '../../assets/warehouse_reporting.png';
import erpBi from '../../assets/tablet_graphs.png';
import mrpAnalytics from '../../assets/mrp_analytics.png';
import accountingDashboard from '../../assets/accounting_dashboard.png';
import accountingChart from '../../assets/accounting_chart.png';

export function BusinessIntelligencePage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section bi-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1" style={{ background: 'rgba(6, 182, 212, 0.15)' }}></div>
            <div className="glow-blob blob-2" style={{ background: 'rgba(37, 99, 235, 0.15)' }}></div>
            <div className="glow-blob blob-3" style={{ background: 'rgba(14, 165, 233, 0.12)' }}></div>
          </div>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ color: '#0ea5e9', background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(14, 165, 233, 0.18)' }}>
                <span>⚡ BI ENGINE</span>
              </div>
              <h1 className="erp-hero-title animate-title">
                Business <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Intelligence</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: '#0ea5e9' }}>Statistics About Your Data</p>
              <p className="erp-hero-desc animate-subtitle">
                Keep An Eye On Your Whole Business. Beautiful And Full Time Reports For All Your Modules.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0ea5e9', background: 'rgba(14,165,233,.08)', border: '1px solid rgba(14,165,233,.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>DATA-DRIVEN</span>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              To enable data-driven decision-making by collecting, analyzing, and visualizing business data across departments such as sales, finance, operations, inventory, and customer service.
            </p>
            <div className="purchase-dashboard-wrapper" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <img src={warehouseReporting} alt="BI Dashboard Preview" className="mockup-img" />
            </div>
          </div>
        </section>

        {/* Section 1: Generate Graphs & Charts */}
        <section className="bi-page-section-cv bnmh
        jredesign">2.5
        36
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="bi-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Generate Graphs and Charts In Just A Click</h2>
          </div>

          <div className="bi-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="bi-page-text-col reveal reveal-fade-left">
              <p className="bi-page-desc-new">
                Create detailed reports and graphs in any format you like without the need of an external program.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="bi-page-image-col reveal reveal-fade-right">
              <div className="bi-page-image-card">
                <img src={erpBi} alt="Generate Graphs & Charts" />

                {/* Floating Glass Widget */}
                <div className="bi-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' }}></span>
                    <span>Quick Charts</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Formats Available</span>
                    <span className="stat-value" style={{ color: '#0ea5e9' }}>1-Click Graph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Information You Need */}
        <section className="bi-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="bi-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>The Information You Need The Way You Need It</h2>
            <p className="bi-page-subtitle-new" style={{ fontWeight: '700', color: '#0ea5e9', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Filter all results to fit your field of research</p>
          </div>

          <div className="bi-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="bi-page-image-col reveal reveal-fade-left">
              <div className="bi-page-image-card">
                <img src={mrpAnalytics} alt="Filter Results" />

                {/* Floating Glass Widget */}
                <div className="bi-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' }}></span>
                    <span>Filter Manager</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Saved Favorites</span>
                    <span className="stat-value" style={{ color: '#0ea5e9' }}>Instant Favorites</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="bi-page-text-col reveal reveal-fade-right">
              <p className="bi-page-desc-new">
                Filter and group each analysis using built-in filters, and create custom filters to gather only the information you are looking for. Save the filters you created in your favorites to access them anytime in just a click.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Dashboards */}
        <section className="bi-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="bi-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Dashboards</h2>
            <p className="bi-page-subtitle-new" style={{ fontWeight: '700', color: '#0ea5e9', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Birds Eye View of Everything That Matters</p>
          </div>

          <div className="bi-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="bi-page-text-col reveal reveal-fade-left">
              <p className="bi-page-desc-new" style={{ marginBottom: '10px' }}>
                Dreamwarez comes pre-configured with several dashboards to get you started, to show you whats going on and what needs action. All of which updates dynamically.
              </p>
              <p className="bi-page-desc-new">
                You can create your own dashboards from any of the tree,graph or calendar views with custom filters and group-bys if necessary.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="bi-page-image-col reveal reveal-fade-right">
              <div className="bi-page-image-card">
                <img src={accountingDashboard} alt="Pre-configured Dashboards" />

                {/* Floating Glass Widget */}
                <div className="bi-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' }}></span>
                    <span>Live Dashboard</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Dynamic View</span>
                    <span className="stat-value" style={{ color: '#0ea5e9' }}>Pre-configured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Most Advance Report Engine */}
        <section className="bi-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="bi-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>The Most Advance Report Engine</h2>
            <p className="bi-page-subtitle-new" style={{ fontWeight: '700', color: '#0ea5e9', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Generate New Custom Reports On The Fly</p>
          </div>

          <div className="bi-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="bi-page-image-col reveal reveal-fade-left">
              <div className="bi-page-image-card">
                <img src={accountingChart} alt="Custom Reports On The Fly" />

                {/* Floating Glass Widget */}
                <div className="bi-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' }}></span>
                    <span>Excel Exporter</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Data Slicing</span>
                    <span className="stat-value" style={{ color: '#0ea5e9' }}>Screen to Excel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="bi-page-text-col reveal reveal-fade-right">
              <p className="bi-page-desc-new">
                Slice and Dice to get the data that you want to export the current tree view with the printscreen function (current screen to excel). Or just with a few clicks choose the fields or headers that you wish to see on the report and click exports. It’s that easy!
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#0ea5e9', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)' }}>
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
