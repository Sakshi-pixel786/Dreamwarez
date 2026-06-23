import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Warehouse custom assets
import warehouseDashboard from '../../assets/warehouse_dashboard.png';
import warehouseDoubleEntry from '../../assets/warehouse_double_entry.png';
import warehouseTraceability from '../../assets/warehouse_traceability.png';
import warehouseReduceStock from '../../assets/warehouse_reduce_stock.png';
import warehouseScaleWms from '../../assets/warehouse_scale_wms.png';
import warehouseReporting from '../../assets/warehouse_reporting.png';

export function WarehouseStockManagementPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section warehouse-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ alignSelf: 'flex-start', color: '#0d9488', background: 'rgba(13, 148, 136, 0.08)', borderColor: 'rgba(13, 148, 136, 0.15)', marginBottom: '8px' }}>
                INVENTORY MANAGEMENT
              </div>
              <h1 className="erp-hero-title animate-title">Warehouse/Stock <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Management</span></h1>
              <p className="erp-hero-subtitle animate-subtitle">Inventory, Logistics, Storage.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>WMS ARCHITECTURE</span>
            <h2 className="section-title" style={{ marginBottom: '20px', fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>A revolutionary double entry inventory system</h2>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              Decrease your process times, automate transactions, maintain your stock level and get complete traceability on all operations with the Dreamwarez double entry inventory system.
            </p>
            <div className="purchase-dashboard-wrapper">
              <img src={warehouseDashboard} alt="Warehouse Dashboard" className="mockup-img" />
            </div>
          </div>
        </section>

        {/* Module Sections */}

        {/* Section 1: Double Entry Inventory Management */}
        <section className="warehouse-page-section-redesign alternate">
          <div className="warehouse-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="warehouse-page-image-col reveal reveal-fade-left">
              <div className="warehouse-page-image-card">
                <img src={warehouseDoubleEntry} alt="Double Entry Inventory Management" />
                
                {/* Floating Glass Widget */}
                <div className="warehouse-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0d9488', boxShadow: '0 0 0 0 rgba(13, 148, 136, 0.7)' }}></span>
                    <span>Double-Entry Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Active Ledgers</span>
                    <span className="stat-value" style={{ color: '#0d9488' }}>Real-time Trace</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="warehouse-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#0d9488', background: 'rgba(13, 148, 136, 0.08)', borderColor: 'rgba(13, 148, 136, 0.15)' }}>LEDGER ENGINE</div>
              <h2 className="warehouse-page-title-new">Double Entry Inventory Management</h2>
              <p className="warehouse-page-desc-new">
                Nothing is lost, everything is moved. Based on the concept of double entry that revolutionized accounting, Dreamwarez’s inventory management isn’t about consumption, loss or missing products; products are just moved from one location to another. This allows full traceability (from customer to supplier, not limited to your warehouse), advanced reporting (e.g. inventory valuation on manufacturing counter-parts locations) and a very simple user interface.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Get Full Traceability */}
        <section className="warehouse-page-section-redesign">
          <div className="warehouse-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="warehouse-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', borderColor: 'rgba(37, 99, 235, 0.15)' }}>TRACEABILITY</div>
              <h2 className="warehouse-page-title-new">Get Full Traceability</h2>
              <p className="warehouse-page-desc-new">
                Keep an eye on all your stock by tracking all your past and future inventory transactions.
              </p>
              <p className="warehouse-page-desc-new" style={{ marginTop: '-10px' }}>
                Track in detail all stock moves, not only in your warehouse but also in counter-parts of the double entry moves (customers, suppliers or manufacturing locations).
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="warehouse-page-image-col reveal reveal-fade-right">
              <div className="warehouse-page-image-card">
                <img src={warehouseTraceability} alt="Full Traceability Moves" />

                {/* Floating Glass Widget */}
                <div className="warehouse-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#2563eb', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)' }}></span>
                    <span>Trace Verified</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Stock Flow Status</span>
                    <span className="stat-value" style={{ color: '#2563eb' }}>100% Traceable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Reduce your stock level */}
        <section className="warehouse-page-section-redesign alternate">
          <div className="warehouse-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="warehouse-page-image-col reveal reveal-fade-left">
              <div className="warehouse-page-image-card">
                <img src={warehouseReduceStock} alt="Reduce Stock Procurement" />

                {/* Floating Glass Widget */}
                <div className="warehouse-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Stock Optimizer</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Procurements Rules</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>Lean Inventory</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="warehouse-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.08)', borderColor: 'rgba(139, 92, 246, 0.15)' }}>STOCK OPTIMIZATION</div>
              <h2 className="warehouse-page-title-new">Reduce your stock level</h2>
              <p className="warehouse-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Fine-tune procurement methods according to your need</p>
              <p className="warehouse-page-desc-new">
                Reduce your stock while always staying replenished! You can setup minimum stock rules to have automatic procurements with the right quantities computed to get to the optimum level specified. Get rid of the stress of your stock and let the system help you with fullfilment propositions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Scale Your WMS easily */}
        <section className="warehouse-page-section-redesign">
          <div className="warehouse-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="warehouse-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#ea580c', background: 'rgba(234, 88, 12, 0.08)', borderColor: 'rgba(234, 88, 12, 0.15)' }}>SCALABILITY</div>
              <h2 className="warehouse-page-title-new">Scale Your WMS easily</h2>
              <p className="warehouse-page-desc-new">
                Manage your own internal and external locations, customers, suppliers or manufacturing inventories with the Dreamwarez multi-warehouse management system based on a hierarchical location structure.
              </p>
              <p className="warehouse-page-desc-new" style={{ marginTop: '-10px' }}>
                Dreamwarez Warehouse Management is designed to scale from a few thousands operations to several millions of transactions.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="warehouse-page-image-col reveal reveal-fade-right">
              <div className="warehouse-page-image-card">
                <img src={warehouseScaleWms} alt="Scale Warehouse System" />

                {/* Floating Glass Widget */}
                <div className="warehouse-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>Capacity Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Millions of Tx</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>Fully Scalable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Reporting and Dashboards */}
        <section className="warehouse-page-section-redesign alternate">
          <div className="warehouse-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="warehouse-page-image-col reveal reveal-fade-left">
              <div className="warehouse-page-image-card">
                <img src={warehouseReporting} alt="Reporting and Dashboards" />

                {/* Floating Glass Widget */}
                <div className="warehouse-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' }}></span>
                    <span>BI Reports</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Inventory Velocity</span>
                    <span className="stat-value" style={{ color: '#10b981' }}>Live Dashboards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="warehouse-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.15)' }}>ANALYTICS</div>
              <h2 className="warehouse-page-title-new">Reporting and Dashboards</h2>
              <p className="warehouse-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Analyse your warehouse efficiency to improve performance</p>
              <p className="warehouse-page-desc-new">
                Get the insights you need to make smarter decisions. Design custom dashboards to get a picture of your warehouse efficiency at a glance. Dig deeper with real-time reports that anyone can create and share.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px' }}>INTEGRATIONS HUB</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
              Power up your workflow with integrations into your favourite tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
              Contact Us <span style={{ marginLeft: '8px' }}>➔</span>
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
