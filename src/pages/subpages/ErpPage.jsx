import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// ERP custom assets
import erpHeroBg from '../../assets/erp_hero_bg.png';
import erpSales from '../../assets/erp_sales.png';
import erpPurchase from '../../assets/erp_purchase.png';
import erpWarehouse from '../../assets/erp_warehouse.png';
import erpAccounting from '../../assets/erp_accounting.png';
import erpMrp from '../../assets/erp_mrp.png';
import erpBi from '../../assets/tablet_graphs.png';
import erpSocial from '../../assets/team_meeting.png';

export function ErpPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom ERP Hero Section */}
        <section className="erp-hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', alignSelf: 'flex-start', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.08)', borderColor: 'rgba(59, 130, 246, 0.15)', marginBottom: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                CORE PLATFORM
              </div>
              <h1 className="erp-hero-title animate-title">
                Enterprise <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Management System</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle">Modern Software For Smart Businesses.</p>
              <p className="erp-hero-desc animate-desc">
                Build, manage, automate, and integrate custom ERP solutions that reflect your organization's unique business processes.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="erp-features-section reveal reveal-fade-up">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.18)', padding: '6px 16px', borderRadius: '100px', marginBottom: '16px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              CAPABILITIES
            </span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Features</h2>
          </div>
          <div className="erp-features-grid">
            <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '0ms' }}>
              <div className="erp-feature-icon browser-icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
                  <line x1="2" y1="8" x2="22" y2="8" />
                  <line x1="6" y1="5" x2="6" y2="5.01" />
                  <line x1="10" y1="5" x2="10" y2="5.01" />
                  <line x1="14" y1="5" x2="14" y2="5.01" />
                </svg>
              </div>
              <h3>Works In Your Web Browser</h3>
              <p>Can run on any device that can display websites with little to no setup required.</p>
            </div>

            <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '100ms' }}>
              <div className="erp-feature-icon offline-icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>No Internet Required</h3>
              <p>If installed on premise you can access in full offline mode in your LAN or wifi.</p>
            </div>

            <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '200ms' }}>
              <div className="erp-feature-icon cloud-icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.5 19A4.5 4.5 0 0 0 22 14.5c0-2.25-1.66-4.12-3.88-4.44A7 7 0 0 0 4.56 12.06A4.5 4.5 0 0 0 5.5 21h12c.34 0 .67-.04 1-.12" />
                </svg>
              </div>
              <h3>Cloud Based Option</h3>
              <p>Faster updates, access from anywhere in the world with internet connection, hassle free backups.</p>
            </div>

            <div className="erp-feature-card reveal reveal-scale" style={{ transitionDelay: '300ms' }}>
              <div className="erp-feature-icon mobile-icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
              </div>
              <h3>Mobile Compatible</h3>
              <p>Responsive design allows the system to adapt to any screen size.</p>
            </div>
          </div>
        </section>

        {/* Module Sections */}
        
        {/* Sales Management */}
        <section className="erp-page-section-redesign">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', borderColor: 'rgba(37, 99, 235, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                SALES MODULE
              </div>
              <h2 className="erp-page-title-new">Sales Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Quotation, Sales Order And Invoicing</p>
              <p className="erp-page-desc-new">
                This application allows you to manage your goals in an effective and efficient manner by keeping track of all sales and order in history.
              </p>
              <p className="erp-page-desc-new">It handles full scale workflow.</p>
              <p className="erp-workflow-arrow" style={{ margin: '10px 0', fontSize: '18px', fontWeight: '800', color: 'var(--primary)' }}>Quotations ➔ Sales order ➔ Invoice</p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/sales-management/" className="cta-button">Explore More</a>
              </div>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-right">
              <div className="erp-page-image-card">
                <img src={erpSales} alt="Sales Management" />
                
                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#2563eb', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)' }}></span>
                    <span>Order Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Avg Process Time</span>
                    <span className="stat-value" style={{ color: '#2563eb' }}>-40% Faster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Management */}
        <section className="erp-page-section-redesign alternate">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-left">
              <div className="erp-page-image-card">
                <img src={erpPurchase} alt="Purchase Management" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ top: '24px', right: '24px', width: '230px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#8b5cf6', boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)' }}></span>
                    <span>Replenishment</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Procurement Rules</span>
                    <span className="stat-value" style={{ color: '#8b5cf6' }}>99.9% Automated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.08)', borderColor: 'rgba(139, 92, 246, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                PROCUREMENT
              </div>
              <h2 className="erp-page-title-new">Purchase Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Purchase Orders, Receptions, Supplier Invoices</p>
              <p className="erp-page-desc-new">
                Purchase management enables you to track your suppliers’ price quotations and convert them into purchase orders if necessary.
              </p>
              <p className="erp-page-desc-new">
                Dreamwarez has several methods of monitoring invoices and tracking the receipt of ordered goods.
              </p>
              <p className="erp-page-desc-new">
                Dreamwarez’s replenishment management rules enable the system to generate draft purchase orders automatically, or you can configure it to run a lean process driven entirely by current production needs.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/purchase-management/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse/Stock Management */}
        <section className="erp-page-section-redesign">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0d9488', background: 'rgba(13, 148, 136, 0.08)', borderColor: 'rgba(13, 148, 136, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                INVENTORY MODULE
              </div>
              <h2 className="erp-page-title-new">Warehouse/Stock Management</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Inventory, Logistic, Storage</p>
              <p className="erp-page-desc-new">
                The warehouse and inventory management is based on a hierarchical location structure, from warehouses to storage bins. The double entry inventory system allows you to manage customers, suppliers as well as manufacturing inventories.
              </p>
              <ul className="erp-bullets-list" style={{ margin: '10px 0', paddingLeft: '20px' }}>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Key Features</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Moves history and planning</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Stock valuation (standard or average price, …)</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Robustness faced with Inventory differences</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Automatic reordering rules</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Rapid detection of mistakes through double entry system</li>
                <li style={{ listStyleType: 'disc', marginBottom: '6px', color: 'var(--text-secondary)' }}>Traceability</li>
              </ul>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/warehouse-stock-management/" className="cta-button">Explore More</a>
              </div>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-right">
              <div className="erp-page-image-card">
                <img src={erpWarehouse} alt="Warehouse/Stock Management" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ bottom: '24px', right: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0d9488', boxShadow: '0 0 0 0 rgba(13, 148, 136, 0.7)' }}></span>
                    <span>Stock Ledger</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Double-Entry Trace</span>
                    <span className="stat-value" style={{ color: '#0d9488' }}>Real-time Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting And E-Invoicing */}
        <section className="erp-page-section-redesign alternate">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-left">
              <div className="erp-page-image-card">
                <img src={erpAccounting} alt="Accounting And E-Invoicing" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ top: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#0284c7', boxShadow: '0 0 0 0 rgba(2, 132, 199, 0.7)' }}></span>
                    <span>Ledger Status</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Invoices Tracker</span>
                    <span className="stat-value" style={{ color: '#0284c7' }}>Instant Sync</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0284c7', background: 'rgba(2, 132, 199, 0.08)', borderColor: 'rgba(2, 132, 199, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                FINANCE MODULE
              </div>
              <h2 className="erp-page-title-new">Accounting And E-Invoicing</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Send Invoices And Track Payments</p>
              <p className="erp-page-desc-new">
                The specific and easy-to-use Invoicing system in Dreamwarez allows you to keep track of your accounting, even when you are not an accountant. It provides an easy way to follow up on your suppliers and customers.
              </p>
              <p className="erp-page-desc-new">
                You could use this simplified accounting in case you work with an (external) account to keep your books, and you still want to keep track of payments.
              </p>
              <p className="erp-page-desc-new">
                You can also track Invoicing & Payments by Accounting Voucher & Receipts.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/accounting/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing And Resource Planning */}
        <section className="erp-page-section-redesign">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ea580c', background: 'rgba(234, 88, 12, 0.08)', borderColor: 'rgba(234, 88, 12, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                MRP MODULE
              </div>
              <h2 className="erp-page-title-new">Manufacturing And Resource Planning</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Manage Bill Of Materials, Plan & Track Manufacturing Orders</p>
              <p className="erp-page-desc-new">
                MRP Module covers planning, ordering, stocks and manufacturing or assembly of products from raw materials and components.
              </p>
              <p className="erp-page-desc-new">
                It handles the consumption and production of products according to Bill of materials.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/mrp/" className="cta-button">Explore More</a>
              </div>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-right">
              <div className="erp-page-image-card">
                <img src={erpMrp} alt="Manufacturing And Resource Planning" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#ea580c', boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.7)' }}></span>
                    <span>BOM Control</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Active Orders</span>
                    <span className="stat-value" style={{ color: '#ea580c' }}>Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence */}
        <section className="erp-page-section-redesign alternate">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-left">
              <div className="erp-page-image-card">
                <img src={erpBi} alt="Business Intelligence" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ top: '24px', right: '24px', width: '230px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' }}></span>
                    <span>BI Engine</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Analytical Reports</span>
                    <span className="stat-value" style={{ color: '#10b981' }}>Dynamic Graphs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                ANALYTICS MODULE
              </div>
              <h2 className="erp-page-title-new">Business Intelligence</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Statistics About Your Data</p>
              <p className="erp-page-desc-new">
                Dreamwarez gives you an easy way to see the statistics about any of your important data.
              </p>
              <p className="erp-page-desc-new">
                You can create detailed reports and graphs in any format you need – all that in few simple clicks.
              </p>
              <p className="erp-page-desc-new">
                No need for specialized program to create graphs and charts.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/business-management/" className="cta-button">Explore More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Social Network */}
        <section className="erp-page-section-redesign">
          <div className="erp-page-grid-redesign">
            {/* Left Column: Text Content */}
            <div className="erp-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6366f1', background: 'rgba(99, 102, 241, 0.08)', borderColor: 'rgba(99, 102, 241, 0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                SOCIAL NETWORK
              </div>
              <h2 className="erp-page-title-new">Enterprise Social Network</h2>
              <p className="erp-page-subtitle-new" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '15px' }}>Your Company's Own Facebook/Twitter And A Complete E-Mail Client</p>
              <p className="erp-page-desc-new">
                Connect with experts, follows what interests you, share documents and promote best practices.
              </p>
              <p className="erp-page-desc-new">
                Get work done with effective collaboration across departments, geographies, documents and business applications. All of this while decreasing email overload.
              </p>
              <div style={{ marginTop: '15px' }}>
                <a href="/erp/enterprise-social-network/" className="cta-button">Explore More</a>
              </div>
            </div>

            {/* Right Column: Image Wrapper with Widget */}
            <div className="erp-page-image-col reveal reveal-fade-right">
              <div className="erp-page-image-card">
                <img src={erpSocial} alt="Enterprise Social Network" />

                {/* Floating Glass Widget */}
                <div className="erp-glass-widget" style={{ bottom: '24px', left: '24px', width: '220px' }}>
                  <div className="widget-header">
                    <span className="pulse-dot" style={{ backgroundColor: '#6366f1', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)' }}></span>
                    <span>Inbox Sync</span>
                  </div>
                  <div className="widget-stat">
                    <span className="stat-label">Collaboration</span>
                    <span className="stat-value" style={{ color: '#6366f1' }}>Real-time Trace</span>
                  </div>
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
