import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Purchase custom assets
import purchaseDashboard from '../../assets/purchase_dashboard.png';
import purchaseReordering from '../../assets/purchase_reordering.png';
import purchaseEmail from '../../assets/purchase_email.png';
import purchaseControl from '../../assets/purchase_control.png';

export function PurchaseManagementPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section purchase-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <h1 className="erp-hero-title animate-title">
                Purchase <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Management</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle">Automate Purchase Order, Control Invoicing.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>PROCUREMENT SYSTEM</span>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              Automate Procurement Propositions, launch Request for Quotations, track Purchase Orders, manage Suppliers Information, control Products Reception and check Suppliers Invoices.
            </p>
            <div className="purchase-dashboard-wrapper">
              <img src={purchaseDashboard} alt="Purchase Order Dashboard" />
            </div>
          </div>
        </section>

        {/* Section 1: Automated Procurement Propositions */}
        <section className="purchase-section-redesign">
          <div className="purchase-grid-redesign">
            {/* Left Column: Image Wrapper */}
            <div className="purchase-image-col reveal reveal-fade-left">
              <div className="purchase-image-card">
                <img src={purchaseReordering} alt="Automated Procurement Rules" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="purchase-text-col reveal reveal-fade-right">
              <div className="badge-growth-new" style={{ color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', borderColor: 'rgba(37, 99, 235, 0.15)' }}>PROCUREMENT PROPOSITIONS</div>
              <h2 className="purchase-title-new">
                Automated <span className="purchase-title-gradient">Procurement Propositions</span>
              </h2>
              <p className="purchase-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>
                Maintain Inventory Level with Procurement Rules
              </p>
              <p className="purchase-desc-new">
                Get the right purchase proposition at the right time to maintain your inventory level. Improve your purchase and inventory performance with procurement rules depending on stock levels, logistic rules, sales orders, forecasted manufacturing orders, etc.
              </p>
              <p className="purchase-desc-new" style={{ marginTop: '-10px' }}>
                Send requests for quotations or purchase orders to your supplier in one click. Get access to product receptions and invoices from your purchase order.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Email Integration */}
        <section className="purchase-section-redesign alternate">
          <div className="purchase-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="purchase-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.08)', borderColor: 'rgba(139, 92, 246, 0.15)' }}>COMMUNICATIONS</div>
              <h2 className="purchase-title-new">
                Email <span style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline', backgroundSize: '200% auto', animation: 'shine-slow 8s ease infinite' }}>Integration</span>
              </h2>
              <p className="purchase-desc-new">
                Integrate all supplier’s communications on the purchase orders (or RfQs) to get a strong traceability on the negotiation or after sales service issues.
              </p>
            </div>

            {/* Right Column: Image Wrapper */}
            <div className="purchase-image-col reveal reveal-fade-right">
              <div className="purchase-image-card">
                <img src={purchaseEmail} alt="Email Integration" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Control Products and Invoices */}
        <section className="purchase-section-redesign">
          <div className="purchase-grid-redesign">
            {/* Left Column: Image Wrapper */}
            <div className="purchase-image-col reveal reveal-fade-left">
              <div className="purchase-image-card">
                <img src={purchaseControl} alt="Invoice and Product Control" />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="purchase-text-col reveal reveal-fade-right">
              <div className="badge-mobile-new" style={{ color: '#0d9488', background: 'rgba(13, 148, 136, 0.08)', borderColor: 'rgba(13, 148, 136, 0.15)' }}>FINANCIAL CONTROL</div>
              <h2 className="purchase-title-new">
                Control <span style={{ background: 'linear-gradient(135deg, #0d9488 0%, #06b6d4 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline', backgroundSize: '200% auto', animation: 'shine-slow 8s ease infinite' }}>Products & Invoices</span>
              </h2>
              <p className="purchase-desc-new">
                No product or order is left behind, the inventory control allows you to manage back orders, refunds, product reception and quality control. Choose the right control method according to your need.
              </p>
              <p className="purchase-desc-new" style={{ marginTop: '-10px' }}>
                Control supplier invoices with no effort. Choose the right method according to your need: pre-generate draft invoices based on purchase orders, on products receptions, create invoices manually and import lines from purchase orders, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px' }}>INTEGRATIONS HUB</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
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
