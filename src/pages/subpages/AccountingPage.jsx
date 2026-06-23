import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Accounting custom assets
import accountingInvoicing from '../../assets/accounting_invoicing.png';
import accountingVouchers from '../../assets/accounting_vouchers.png';
import accountingChart from '../../assets/accounting_chart.png';
import accountingEmail from '../../assets/accounting_email.png';

export function AccountingPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section accounting-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <h1 className="erp-hero-title animate-title"><span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Accounting</span></h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: '500', marginTop: '6px' }}>Financial & Analytical Accounting</p>
            </div>
          </div>
        </section>

        {/* Module Sections */}

        {/* Section 1: Invoicing & Payment Tracking */}
        <section className="accounting-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="accounting-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Invoicing & Payment Tracking</h2>
            <p className="accounting-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Fully Integrated Invoicing</p>
          </div>

          <div className="accounting-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="accounting-page-text-col reveal reveal-fade-left">
              <p className="accounting-page-desc-new" style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '16px', marginBottom: '8px' }}>
                All the invoicing methods you need
              </p>
              <p className="accounting-page-desc-new" style={{ marginBottom: '10px' }}>
                Whether you invoice based on time and materials, on delivery orders or fixed price; Dreamwarez supports all possible methods.
              </p>
              <p className="accounting-page-desc-new" style={{ marginBottom: '10px' }}>
                Create Invoices and track Customer and Supplier Payments.
              </p>
              <p className="accounting-page-desc-new" style={{ marginBottom: '10px' }}>
                Set Credit limit for Customers.
              </p>
              <p className="accounting-page-desc-new">
                Track overdue payments and generate auto overdue statement PDF for Customers.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="accounting-page-image-col reveal reveal-fade-right">
              <div className="accounting-page-image-card">
                <img src={accountingInvoicing} alt="Invoicing & Payment Tracking" />
                
                {/* Floating Glass Widget */}
                <div className="accounting-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#2563eb', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)' }}></span>
                    <span>Invoicing Engine</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Auto PDF Delivery</span>
                    <span className="stat-value" style={{ color: '#2563eb' }}>Auto Statements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Journal Vouchers */}
        <section className="accounting-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="accounting-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Journal Vouchers</h2>
            <p className="accounting-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Sales, Purchase, Payment, Receipt</p>
          </div>

          <div className="accounting-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="accounting-page-image-col reveal reveal-fade-left">
              <div className="accounting-page-image-card">
                <img src={accountingVouchers} alt="Journal Vouchers" />

                {/* Floating Glass Widget */}
                <div className="accounting-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Voucher Tracker</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Ledger Sync</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>Reconciliation Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="accounting-page-text-col reveal reveal-fade-right">
              <p className="accounting-page-desc-new">
                Create accounting vouchers to track payments, sales, purchase & receipts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Charts */}
        <section className="accounting-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="accounting-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Charts</h2>
            <p className="accounting-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Chart Of Accounts & Taxes</p>
          </div>

          <div className="accounting-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="accounting-page-text-col reveal reveal-fade-left">
              <p className="accounting-page-desc-new">
                Manage your company balance sheet using Dreamwarez chart of accounts & taxes. Chart of accounts are configured as per Schedule VI of Indian Accounting.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="accounting-page-image-col reveal reveal-fade-right">
              <div className="accounting-page-image-card">
                <img src={accountingChart} alt="Chart of Accounts & Taxes" />

                {/* Floating Glass Widget */}
                <div className="accounting-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0d9488', boxShadow: '0 0 0 0 rgba(13, 148, 136, 0.7)' }}></span>
                    <span>Tax Compliance</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Schedule VI</span>
                    <span className="stat-value" style={{ color: '#0d9488' }}>Indian Accounting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: E-Mail Integration */}
        <section className="accounting-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="accounting-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>E-Mail Integration</h2>
          </div>

          <div className="accounting-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="accounting-page-image-col reveal reveal-fade-left">
              <div className="accounting-page-image-card">
                <img src={accountingEmail} alt="E-Mail Integration" />

                {/* Floating Glass Widget */}
                <div className="accounting-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>Mail Automated</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Invoice Delivery</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>Templates Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="accounting-page-text-col reveal reveal-fade-right">
              <p className="accounting-page-desc-new">
                Using Dreamwarez's E-Mail Integration send your invoice directly from the system & also send system generated overdue statements.
              </p>
              <p className="accounting-page-desc-new" style={{ marginTop: '10px' }}>
                Use Pre-defined or custom templates to send mails faster.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px' }}>
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
