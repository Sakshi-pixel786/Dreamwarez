import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// MRP custom assets
import erpMrp from '../../assets/erp_mrp.png';
import mrpScheduling from '../../assets/mrp_scheduling.png';
import mrpBom from '../../assets/mrp_bom.png';
import warehouseReduceStock from '../../assets/warehouse_reduce_stock.png';
import erpBi from '../../assets/tablet_graphs.png';
import mrpAnalytics from '../../assets/mrp_analytics.png';

export function MrpPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section mrp-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <h1 className="erp-hero-title animate-title"><span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">MRP</span></h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: '500', marginTop: '6px' }}>Manufacturing Orders, Bill Of Material, Routing</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ea580c', background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>MRP ARCHITECTURE</span>
            <h2 className="section-title" style={{ marginBottom: '20px', fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Manage Bill of Material, Plan Manufacturing Orders, Track Work Orders</h2>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              To streamline the planning and procurement of materials, ensuring timely availability for production while minimizing overstock and inventory carrying costs.
            </p>
            <div className="purchase-dashboard-wrapper" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <img src={erpMrp} alt="MRP Dashboard" className="mockup-img" />
            </div>
          </div>
        </section>

        {/* Section 1: Schedule Manufacturing Orders Efficiently */}
        <section className="mrp-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="mrp-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Schedule Manufacturing Orders Efficiently</h2>
          </div>

          <div className="mrp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="mrp-page-text-col reveal reveal-fade-left">
              <p className="mrp-page-desc-new">
                Get manufacturing orders and work orders scheduled automatically based on your procurement rules, quantities, forecasted and dependent demand (demand for this part based on another part consuming it).
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="mrp-page-image-col reveal reveal-fade-right">
              <div className="mrp-page-image-card">
                <img src={mrpScheduling} alt="Schedule Manufacturing Orders Efficiently" />
                
                {/* Floating Glass Widget */}
                <div className="mrp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>Schedule Engine</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Automation Level</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>100% Demand-driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Define Flexible Master Data */}
        <section className="mrp-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="mrp-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Define Flexible Master Data</h2>
            <p className="mrp-page-subtitle-new" style={{ fontWeight: '700', color: '#ea580c', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Products, Bill of Materials, Routing</p>
          </div>

          <div className="mrp-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="mrp-page-image-col reveal reveal-fade-left">
              <div className="mrp-page-image-card">
                <img src={mrpBom} alt="Define Flexible Master Data" />

                {/* Floating Glass Widget */}
                <div className="mrp-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#f97316', boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.7)' }}></span>
                    <span>Structure Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">BOM Config</span>
                    <span className="stat-value" style={{ color: '#f97316' }}>Multi-level Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="mrp-page-text-col reveal reveal-fade-right">
              <p className="mrp-page-desc-new">
                Get the flexibility to create multi-level bill of materials and optional routing. You can use BoM for manufacturing orders.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Flexibility In All Operations */}
        <section className="mrp-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="mrp-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Get Flexibility In All Operations</h2>
          </div>

          <div className="mrp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="mrp-page-text-col reveal reveal-fade-left">
              <p className="mrp-page-desc-new">
                Edit manually all proposed operations at any level of the progress. With Dreamwarez, you will not be frustrated by rigid system.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="mrp-page-image-col reveal reveal-fade-right">
              <div className="mrp-page-image-card">
                <img src={warehouseReduceStock} alt="Get Flexibility In All Operations" />

                {/* Floating Glass Widget */}
                <div className="mrp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>Operations Control</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Process Edits</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>Dynamic Adjustments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Flexibility in Views */}
        <section className="mrp-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="mrp-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Flexibility in Views</h2>
            <p className="mrp-page-subtitle-new" style={{ fontWeight: '700', color: '#ea580c', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>A Product User Interface</p>
          </div>

          <div className="mrp-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="mrp-page-image-col reveal reveal-fade-left">
              <div className="mrp-page-image-card">
                <img src={erpBi} alt="Flexibility in Views" />

                {/* Floating Glass Widget */}
                <div className="mrp-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#f97316', boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.7)' }}></span>
                    <span>View Manager</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Layout Formats</span>
                    <span className="stat-value" style={{ color: '#f97316' }}>Gantt, list, calendars</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="mrp-page-text-col reveal reveal-fade-right">
              <p className="mrp-page-desc-new">
                Work with list, calendars or gantt charts. Each of the view is tailor-made to get maximum productivity by quickly looking up things.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Inventory & Manufacturing Analytics */}
        <section className="mrp-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="mrp-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Inventory & Manufacturing Analytics</h2>
          </div>

          <div className="mrp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="mrp-page-text-col reveal reveal-fade-left">
              <p className="mrp-page-desc-new" style={{ marginBottom: '10px' }}>
                Track the evolution of the stock value, according to level of manufacturing activities as they progress in the transformation process.
              </p>
              <p className="mrp-page-desc-new">
                Add custom Dashboard to track progress or a list of To-dos for the day.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="mrp-page-image-col reveal reveal-fade-right">
              <div className="mrp-page-image-card">
                <img src={mrpAnalytics} alt="Inventory & Manufacturing Analytics" />

                {/* Floating Glass Widget */}
                <div className="mrp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>Analytics Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Valuation Flow</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>Live Dashboards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(234, 88, 12, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#ea580c', boxShadow: '0 4px 15px rgba(234, 88, 12, 0.2)' }}>
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
