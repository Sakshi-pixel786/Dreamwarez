import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

export function CrmPage() {
  const [crmActiveTab, setCrmActiveTab] = useState('emails');
  const [crmCalendarMember, setCrmCalendarMember] = useState('All');
  const [crmStages, setCrmStages] = useState(['Qualification', 'Proposition', 'Demo', 'Negotiation', 'Won']);

  const [crmCards, setCrmCards] = useState([
    { id: 1, title: 'Standard Software License', value: 5000, contact: 'J. Smith', column: 'Qualification' },
    { id: 2, title: 'ERP Implementation', value: 12500, contact: 'Deco Addict', column: 'Proposition' },
    { id: 3, title: 'Annual Support Contract', value: 2400, contact: 'TechCorp', column: 'Proposition' },
    { id: 4, title: 'Custom Analytics Module', value: 8500, contact: 'DataFlow Inc', column: 'Negotiation' },
    { id: 5, title: 'Basic Website Package', value: 1200, contact: 'Local Shop', column: 'Won' },
    { id: 6, title: 'Cloud Hosting Setup', value: 3500, contact: 'CloudWays', column: 'Won' }
  ]);

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section crm-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1" style={{ background: 'rgba(16, 185, 129, 0.15)' }}></div>
            <div className="glow-blob blob-2" style={{ background: 'rgba(59, 130, 246, 0.15)' }}></div>
            <div className="glow-blob blob-3" style={{ background: 'rgba(6, 182, 212, 0.12)' }}></div>
          </div>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.18)' }}>
                <span>⚡ RELATIONSHIP ENGINE</span>
              </div>
              <h1 className="erp-hero-title animate-title">
                Customer Relationship <span className="crm-title-gradient" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Management</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: '#10b981' }}>Boost sales productivity, improve win rates & grow revenue</p>
            </div>
          </div>
        </section>

        {/* Intro Section: Manage Your Sales Funnel With No Effort. */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>SALES FUNNEL</span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Manage Your Sales Funnel With No Effort.</h2>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
              Attract leads, follow-up on phone calls and meetings. Analyse the quality of your leads to make informed decisions and save time by integrating emails directly into the application.
            </p>
            
            {/* Interactive Opportunity Details Panel */}
            <div className="glass-card crm-detail-panel" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '30px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', padding: '4px 10px', borderRadius: '4px', marginRight: '8px' }}>Proposition</span>
                  <h3 style={{ margin: '8px 0 4px', fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)' }}>Quote for 10 Custom Desks & Conference Tables</h3>
                  <p style={{ margin: '0', fontSize: '14px', color: 'var(--text-secondary)' }}>Customer: <strong>Global Solutions Ltd.</strong> (Contact: Ronit Wagh)</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: '900', color: '#10b981' }}>$4,500.00</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Probability: <strong>80%</strong></div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
                {/* Info Column */}
                <div>
                  <h4 style={{ margin: '0 0 12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)' }}>Action Plan & Activities</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>✓</span>
                      <div>
                        <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>Initial Call Scheduled</p>
                        <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>Done on 2026-06-10 by Kanchan Kate</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>⏰</span>
                      <div>
                        <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>Product Demonstration</p>
                        <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>Scheduled for Tomorrow at 2:00 PM</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ background: 'rgba(156, 163, 175, 0.1)', color: '#6b7280', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>—</span>
                      <div>
                        <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)' }}>Send Final Invoicing Proposal</p>
                        <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>Triggered after demo approval</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Actions Column */}
                <div style={{ borderLeft: '1px solid var(--border-glass)', paddingLeft: '30px', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                  <button className="cta-button" style={{ background: '#10b981', color: 'white', border: 'none', width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '10px', borderRadius: '8px' }}>Mark Won</button>
                  <button className="cta-button" style={{ background: '#ef4444', color: 'white', border: 'none', width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '10px', borderRadius: '8px' }}>Mark Lost</button>
                  <button className="cta-button" style={{ background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '10px', borderRadius: '8px' }}>Edit Opportunity</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Your Sales Funnel, The Way You Like It */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Your Sales Funnel, The Way You Like It</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#10b981', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Track your opportunities pipeline with the revolutionary kanban view.</p>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '800px', margin: '0 auto' }}>
              Work inside your sales funnel and get instant visual information about next action, new messages, opportunities and expected revenue. Click the arrow button on cards to move them down the funnel.
            </p>

            {/* Kanban Grid */}
            <div className="crm-kanban-board" style={{ display: 'flex', gap: '20px', marginTop: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
              {['Qualification', 'Proposition', 'Negotiation', 'Won'].map(colName => {
                const colCards = crmCards.filter(c => c.column === colName);
                const totalVal = colCards.reduce((acc, c) => acc + c.value, 0);
                const borderColors = {
                  'Qualification': '#3b82f6',
                  'Proposition': '#f59e0b',
                  'Negotiation': '#8b5cf6',
                  'Won': '#10b981'
                };
                return (
                  <div key={colName} className="glass-card crm-kanban-col" style={{ flex: '1', minWidth: '240px', padding: '16px', borderRadius: '20px', border: '1px solid var(--border-glass)', background: 'rgba(255, 255, 255, 0.4)', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: `4px solid ${borderColors[colName]}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '15px' }}>{colName}</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '100px', color: 'var(--text-secondary)' }}>{colCards.length}</span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: borderColors[colName] }}>
                      Expected: ${totalVal.toLocaleString()}
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '200px' }}>
                      {colCards.map(card => (
                        <div key={card.id} className="crm-kanban-card" style={{ background: '#ffffff', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                          <div style={{ fontSize: '13px', fontWeight: '850', color: 'var(--text-primary)', lineHeight: '1.4' }}>{card.title}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                            <span style={{ fontSize: '13px', fontWeight: '800', color: '#10b981' }}>${card.value.toLocaleString()}</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{card.contact}</span>
                          </div>
                          
                          {colName !== 'Won' && (
                            <button 
                              onClick={() => {
                                const stages = ['Qualification', 'Proposition', 'Negotiation', 'Won'];
                                const currentIdx = stages.indexOf(card.column);
                                if (currentIdx < stages.length - 1) {
                                  setCrmCards(prev => prev.map(c => c.id === card.id ? { ...c, column: stages[currentIdx + 1] } : c));
                                }
                              }}
                              style={{ alignSelf: 'flex-end', background: 'rgba(0, 0, 0, 0.03)', border: 'none', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
                              title="Move to next stage"
                            >
                              →
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Lead Management Made Easy */}
        <section className="sales-page-section-redesign">
          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>LEAD HUB</div>
              <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Lead Management Made Easy</h2>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Create leads automatically from incoming emails. Analyse leads efficiency and compare performance by campaigns, channels or sales team.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Find duplicates, merge leads and assign them to the right salesperson in one operation. Spend less time on administration and more time on qualifying leads.
              </p>
            </div>

            {/* Right Column: Visual Dashboard of charts */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="glass-card lead-dashboard-widget" style={{ padding: '24px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px' }}>
                  <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '14px', textTransform: 'uppercase' }}>Lead Analytics Dashboard</span>
                  <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>⚡ Real-time</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '20px' }}>
                  {/* Planned Revenue by User */}
                  <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block', marginBottom: '10px' }}>PLANNED REVENUE BY SALESPERSON</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { name: 'Kanchan Kate', val: 18000, max: 25000, color: '#3b82f6' },
                        { name: 'Ronit Wagh', val: 24000, max: 25000, color: '#10b981' },
                        { name: 'Swami Wardule', val: 12500, max: 25000, color: '#8b5cf6' },
                        { name: 'Ishika Bhaskar', val: 9000, max: 25000, color: '#f59e0b' }
                      ].map(u => (
                        <div key={u.name} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700' }}>
                            <span style={{ color: 'var(--text-primary)' }}>{u.name}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>${u.val.toLocaleString()}</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                            <div style={{ width: `${(u.val / u.max) * 100}%`, height: '100%', background: u.color, borderRadius: '99px' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Source Donut/Pie list */}
                  <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block' }}>OPPORTUNITIES BY SOURCE</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      {[
                        { name: 'Email Campaign', share: '45%', color: '#10b981' },
                        { name: 'Direct Website', share: '30%', color: '#3b82f6' },
                        { name: 'Referral Link', share: '15%', color: '#8b5cf6' },
                        { name: 'Cold outreach', share: '10%', color: '#f59e0b' }
                      ].map(src => (
                        <div key={src.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: src.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: '650', color: 'var(--text-primary)', flexGrow: 1 }}>{src.name}</span>
                          <span style={{ fontWeight: '800', color: 'var(--text-secondary)' }}>{src.share}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Campaign stats */}
                <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)' }}>MONTHLY LEAD CONVERSION RATE</span>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: '#10b981' }}>+12.4% vs Last Month</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', height: '60px', gap: '8px', padding: '5px 0' }}>
                    {[32, 45, 38, 55, 64, 72, 85].map((h, i) => (
                      <div key={i} style={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <div style={{ height: `${h}%`, width: '100%', background: 'linear-gradient(180deg, #10b981, rgba(16, 185, 129, 0.4))', borderRadius: '4px 4px 0 0' }} />
                        <span style={{ fontSize: '9px', color: 'var(--text-secondary)', textAlign: 'center', display: 'block', marginTop: '4px' }}>M{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Organize Your Opportunities */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Organize Your Opportunities</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#10b981', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>A Clean User Interface With Everything In One Screen</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Interactive Tabbed Screen */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="glass-card crm-tabbed-widget" style={{ padding: '24px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                {/* Card Title & Header info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '14px' }}>
                  <div>
                    <h4 style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>Deco Addict - ERP Implementation</h4>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Opportunity Value: <strong>$12,500.00</strong></span>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '800', background: 'rgba(245, 158, 11, 0.08)', color: '#f59e0b', padding: '4px 8px', borderRadius: '4px' }}>Stage: Proposition</span>
                </div>
                
                {/* Tabs headers */}
                <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '8px', overflowX: 'auto', marginBottom: '16px' }}>
                  {[
                    { id: 'emails', label: '✉ Emails' },
                    { id: 'calls', label: '📞 Calls' },
                    { id: 'notes', label: '✍ Notes' },
                    { id: 'meetings', label: '🗓 Meetings' },
                    { id: 'quotes', label: '📄 Quotes' }
                  ].map(tab => {
                    const isActive = crmActiveTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setCrmActiveTab(tab.id)}
                        style={{
                          background: isActive ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                          color: isActive ? '#10b981' : 'var(--text-secondary)',
                          border: isActive ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: '700',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                
                {/* Tab Content Panels */}
                <div style={{ minHeight: '130px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {crmActiveTab === 'emails' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-primary)' }}>From: Ronit Wagh (Deco Addict)</span>
                          <span style={{ color: 'var(--text-secondary)' }}>Today, 9:15 AM</span>
                        </div>
                        <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          "Hi, we would like to schedule a demo of your warehouse inventory automation next week. Let us know what times work for your developers."
                        </p>
                      </div>
                    </div>
                  )}
                  {crmActiveTab === 'calls' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Call with: Abhishek Jagzap</span>
                          <span style={{ color: 'var(--text-secondary)' }}>Yesterday, 3:40 PM</span>
                        </div>
                        <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          <strong>Status:</strong> Completed (12m). Discussed custom Android field audits. Lead seems ready to commit if custom fields can be synced offline.
                        </p>
                      </div>
                    </div>
                  )}
                  {crmActiveTab === 'notes' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Internal Note: Kanchan Kate</span>
                          <span style={{ color: 'var(--text-secondary)' }}>2 days ago</span>
                        </div>
                        <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          "Client uses an external accounting firm but wants to keep track of voucher entries locally. Suggested our standard Accounting Voucher & Receipts package."
                        </p>
                      </div>
                    </div>
                  )}
                  {crmActiveTab === 'meetings' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Event: Scope Discussion Meeting</span>
                          <span style={{ color: 'var(--text-secondary)' }}>June 16, 11:00 AM</span>
                        </div>
                        <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          <strong>Location:</strong> Google Meet. <strong>Attendees:</strong> Kanchan Kate, Ronit Wagh, Swami Wardule.
                        </p>
                      </div>
                    </div>
                  )}
                  {crmActiveTab === 'quotes' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-primary)', display: 'block' }}>#QT-2026-089 (Standard ERP Suite)</span>
                          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Generated today by Kanchan Kate</span>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#10b981' }}>$12,500.00</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Give your opportunities organised to stay focused on the best deals. Manage all your user interaction from the opportunity like emails, phone calls, internal notes, meetings and quotations.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Follow opportunities that interest you to get notified upon specific events: deal won or lost, stage changed, new customer demand, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Email Integration And Automation */}
        <section className="sales-page-section-redesign">
          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>EMAIL SYNC</div>
              <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Email Integration And Automation</h2>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Work with the email applications you already use every day. Whether your company uses Microsoft Outlook or Gmail, no one needs to change the way they work, so everyone stays productive.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Route, sort and filter incoming emails automatically.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Dreamwarez CRM handles incoming emails and route them to the right opportunities or sales team. New leads are created on the fly and interested salespersons are notified automatically.
              </p>
            </div>

            {/* Right Column: Email thread mockup client */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="glass-card crm-email-thread" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px', display: 'flex', justifyItems: 'center', gap: '8px' }}>
                  <span>📥 INBOX INTEGRATION</span>
                  <span style={{ color: '#3b82f6' }}>• Outlook / Gmail Synced</span>
                </div>
                
                {/* Email 1 */}
                <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px', display: 'flex', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0 }}>R</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>Ronit Wagh (Deco Addict)</span>
                      <span style={{ color: 'var(--text-secondary)' }}>9:15 AM</span>
                    </div>
                    <span style={{ fontSize: '11.5px', fontWeight: '750', color: '#3b82f6' }}>Re: Demo request for inventory module</span>
                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "I have a friend working at Topic Technologies. He told me they plan to upgrade their backup servers within the next 2 months. I think someone should contact them..."
                    </p>
                  </div>
                </div>

                {/* Email 2 */}
                <div style={{ background: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-glass)', borderRadius: '14px', padding: '12px', display: 'flex', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0 }}>C</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>Contact Clinic</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Yesterday</span>
                    </div>
                    <span style={{ fontSize: '11.5px', fontWeight: '750', color: 'var(--text-primary)' }}>New lead generated via website form</span>
                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "The next version of our products catalog is scheduled for next month. Our product team sent me their updated document listing the prices and costs, and I updated our catalog..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Collaborative Agenda */}
        <section className="sales-page-section-redesign alternate">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Collaborative Agenda</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#10b981', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Calendar synchronization across team members</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Interactive Calendar */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="glass-card crm-calendar-widget" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                {/* Calendar controls */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text-primary)' }}>📅 Team Calendar - June 2026</span>
                  
                  {/* Member Filter Select */}
                  <select 
                    value={crmCalendarMember} 
                    onChange={(e) => setCrmCalendarMember(e.target.value)}
                    style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-primary)', fontWeight: '700', cursor: 'pointer' }}
                  >
                    <option value="All">All Members</option>
                    <option value="Ronit Wagh">Ronit Wagh</option>
                    <option value="Kanchan Kate">Kanchan Kate</option>
                    <option value="Swami Wardule">Swami Wardule</option>
                  </select>
                </div>
                
                {/* Calendar Days */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                  {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16'].map(day => (
                    <div key={day} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '800', color: 'var(--text-secondary)', paddingBottom: '6px' }}>{day}</div>
                  ))}
                </div>
                
                {/* Calendar Grid cells with events */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', minHeight: '120px', marginTop: '6px' }}>
                  {[
                    { day: 0, time: '10:00 AM', text: 'Call - Deco Addict', owner: 'Kanchan Kate', color: '#3b82f6' },
                    { day: 1, time: '2:30 PM', text: 'Demo - Big Systems', owner: 'Ronit Wagh', color: '#10b981' },
                    { day: 2, time: '11:00 AM', text: 'Tech Review', owner: 'Swami Wardule', color: '#8b5cf6' },
                    { day: 3, time: '1:00 PM', text: 'Scope Meeting', owner: 'Kanchan Kate', color: '#3b82f6' },
                    { day: 4, time: '4:00 PM', text: 'Weekly Sync', owner: 'All', color: '#ef4444' }
                  ].map((evt, idx) => {
                    const isVisible = crmCalendarMember === 'All' || crmCalendarMember === evt.owner || evt.owner === 'All';
                    return (
                      <div 
                        key={idx} 
                        style={{
                          gridColumnStart: evt.day + 1,
                          background: isVisible ? evt.color : 'rgba(0,0,0,0.02)',
                          opacity: isVisible ? 1 : 0.15,
                          color: isVisible ? '#ffffff' : 'var(--text-secondary)',
                          borderRadius: '8px',
                          padding: '8px',
                          fontSize: '10.5px',
                          fontWeight: '700',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'all 0.3s',
                          boxShadow: isVisible ? '0 4px 10px rgba(0,0,0,0.05)' : 'none',
                          minHeight: '80px'
                        }}
                      >
                        <span style={{ fontSize: '9px', opacity: 0.85 }}>{evt.time}</span>
                        <span style={{ margin: '4px 0', lineHeight: '1.2' }}>{evt.text}</span>
                        <span style={{ fontSize: '9px', opacity: 0.85, textAlign: 'right' }}>{evt.owner}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right">
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Schedule your meetings and phone calls using the integrated calendar. You can see your agenda and your colleagues' in one view. As a manager, it's easy to see what your team is busy with.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Customize Your Sales Cycle */}
        <section className="sales-page-section-redesign">
          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>CYCLE BUILDER</div>
              <h2 className="sales-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Customize Your Sales Cycle</h2>
              <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#8b5cf6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>It Fits Your Sales Approach</p>
              <p className="sales-page-desc-new" style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Customize your sales cycle by configuring sales stages that perfectly fit your sales approach.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Control statistics to get accurate forecasts to improve your sales performance at every stage of your customer relationship.
              </p>
            </div>

            {/* Right Column: Pipeline/Stages customizer widget */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="glass-card crm-stages-widget" style={{ padding: '24px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '850', color: 'var(--text-primary)' }}>🛠 PIPELINE CONFIGURATOR</span>
                  <span style={{ fontSize: '11px', color: '#8b5cf6', fontWeight: '700' }}>Active: {crmStages.length} Stages</span>
                </div>
                
                {/* Stages List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'Qualification', desc: 'Initial contact, verify budget & needs' },
                    { id: 'Proposition', desc: 'Submit tailored product proposal' },
                    { id: 'Demo', desc: 'Present live product features' },
                    { id: 'Negotiation', desc: 'Price adjustments & legal review' },
                    { id: 'Won', desc: 'Deal completed & contract signed' }
                  ].map((stage, idx) => {
                    const isActive = crmStages.includes(stage.id);
                    return (
                      <div 
                        key={stage.id}
                        onClick={() => {
                          if (stage.id === 'Qualification' || stage.id === 'Won') return;
                          setCrmStages(prev => prev.includes(stage.id) ? prev.filter(s => s !== stage.id) : [...prev, stage.id]);
                        }}
                        style={{
                          background: isActive ? 'rgba(139, 92, 246, 0.04)' : 'rgba(0,0,0,0.01)',
                          border: isActive ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid var(--border-glass)',
                          borderRadius: '12px',
                          padding: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: (stage.id === 'Qualification' || stage.id === 'Won') ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s',
                          opacity: (stage.id === 'Qualification' || stage.id === 'Won') ? 0.85 : 1
                        }}
                      >
                        <div>
                          <span style={{ fontSize: '13px', fontWeight: '800', color: isActive ? '#8b5cf6' : 'var(--text-secondary)', display: 'block' }}>
                            {idx + 1}. {stage.id}
                          </span>
                          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{stage.desc}</span>
                        </div>
                        
                        {/* Toggle Switch */}
                        <div style={{ width: '36px', height: '20px', background: isActive ? '#8b5cf6' : '#cbd5e1', borderRadius: '10px', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
                          <div style={{ width: '14px', height: '14px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '3px', left: isActive ? '19px' : '3px', transition: 'left 0.2s' }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#3B82F6', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)' }}>
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
