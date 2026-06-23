import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Sales custom assets
import salesDashboard from '../../assets/sales_dashboard.png';
import salesQuotation from '../../assets/sales_quotation.png';
import erpSales from '../../assets/erp_sales.png';
import salesIntegration from '../../assets/sales_integration.png';
import salesInvoicing from '../../assets/sales_invoicing.png';
import erpBi from '../../assets/tablet_graphs.png';

export function SalesManagementPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section sales-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ alignSelf: 'flex-start', color: '#4f46e5', background: 'rgba(79, 70, 229, 0.08)', borderColor: 'rgba(79, 70, 229, 0.15)', marginBottom: '8px' }}>
                SALES ENGINE
              </div>
              <h1 className="erp-hero-title animate-title">Sales <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Management</span></h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: '500', marginTop: '6px' }}>From Quotes to Invoices, In Just A Few Click.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4f46e5', background: 'rgba(79, 70, 229, 0.08)', border: '1px solid rgba(79, 70, 229, 0.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>SALES MANAGEMENT SYSTEM</span>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              Drive your sales from quotes to invoices with all the information you need, easily accessible. Keep track of orders, automate invoicing and notify sales when they have nothing to do.
            </p>
            <div className="purchase-dashboard-wrapper" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <img src={salesDashboard} alt="Sales Dashboard" className="mockup-img" />
            </div>
          </div>
        </section>

        {/* Section 1: Create Professional Quotations */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Create Professional Quotations</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#4f46e5', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Spend the extra time focusing on selling, not recording data</p>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <p className="sales-page-desc-new">
                Create quotations in a matter of seconds. Send quotes by email or get a professional PDF. Track quotations, and convert them to sales order in one click.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="sales-page-image-card">
                <img src={salesQuotation} alt="Create Professional Quotations" />
                
                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#4f46e5', boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.7)' }}></span>
                    <span>Quote Builder</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">PDF Generation</span>
                    <span className="stat-value" style={{ color: '#4f46e5' }}>Instant in 5s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Fully Integrated */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Fully Integrated</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#4f46e5', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>The Information You Need, Where You Need It</p>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <p className="sales-page-desc-new" style={{ marginBottom: '10px' }}>
                Don’t lose time looking for customer, products or contact related information; they are all conveniently accessible when creating quotation.
              </p>
              <p className="sales-page-desc-new">
                Get access to stock availabilities in the different warehouses, to customers specific prices, to the history of preceding offers for the prospect, etc.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="sales-page-image-card">
                <img src={erpSales} alt="Fully Integrated Info" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#4f46e5', boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.7)' }}></span>
                    <span>Info Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Quotation Info</span>
                    <span className="stat-value" style={{ color: '#4f46e5' }}>Integrated View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Your Address Book */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Your Address Book</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#4f46e5', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>So Many Features, So Easy To Use</p>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="sales-page-image-card">
                <img src={salesIntegration} alt="Your Address Book" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Profile Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Contacts Data</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>Address Manager</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new">
                Load customer data, assign tags to your prospects, manage relationships between contacts and store all customer’s preferences including pricing, billing conditions, addresses, payment terms, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Fully Integrated Invoicing */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Fully Integrated Invoicing</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#4f46e5', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>All The Invoicing Methods You Need</p>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <p className="sales-page-desc-new" style={{ marginBottom: '10px' }}>
                Whether you invoiced based on time and material, on delivery orders or fixed price, Dreamwarez supports all possible methods.
              </p>
              <p className="sales-page-desc-new">
                Get recurring invoices produced automatically, create advances in just a few clicks, re-invoices expenses easily, etc.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="sales-page-image-card">
                <img src={salesInvoicing} alt="Invoicing Methods & Automation" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#4f46e5', boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.7)' }}></span>
                    <span>Billing Engine</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Recurring Cycles</span>
                    <span className="stat-value" style={{ color: '#4f46e5' }}>Auto Subscriptions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Communicate Efficiently With Customers */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Communicate Efficiently With Customers</h2>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="sales-page-image-card">
                <img src={erpSales} alt="Communicate Efficiently & Chatter" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Chatter Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Negotiations</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>Direct Threading</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ marginBottom: '10px' }}>
                The chatter feature enables you to communicate faster and more efficiently with your customer. This takes place directly on a quotation or sale order from within Dreamwarez or via email.
              </p>
              <p className="sales-page-desc-new">
                Get all the negotiations and discussions attached to the right document and relevent managers notified on specific events.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Have Clear Pricing Strategies */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Have Clear Pricing Strategies</h2>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <p className="sales-page-desc-new" style={{ marginBottom: '10px' }}>
                Use pricelists to record special conditions for a specific customer or to define prices for a segment of customers.
              </p>
              <p className="sales-page-desc-new">
                Define promotions and have them applied automatically for all your sales teams.
              </p>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="sales-page-image-card">
                <img src={erpBi} alt="Pricing Strategies & Promotions" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#4f46e5', boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.7)' }}></span>
                    <span>Pricing Engine</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Discounts</span>
                    <span className="stat-value" style={{ color: '#4f46e5' }}>Auto-promotions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Work Best with CRM System */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Work Best with Dreamwarez's CRM System</h2>
          </div>

          <div className="sales-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="sales-page-image-card">
                <img src={salesDashboard} alt="Work Best with CRM System" />

                {/* Floating Glass Widget */}
                <div className="sales-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Opportunity Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Funnel Conversion</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>1-Click Quote</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ marginBottom: '10px' }}>
                Use Dreamwarez’ CRM along with sales to manage your funnel of opportunities, attract leads, log calls, schedule meetings and launch marketing campaigns.
              </p>
              <p className="sales-page-desc-new">
                Opportunities can be converted into quotation in just one click.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(79, 70, 229, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#4f46e5', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.2)' }}>
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
