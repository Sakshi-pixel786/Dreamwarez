import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

const Target = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const Smartphone = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const MousePointerClick = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>);
const FileText = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>);
const BarChart2 = ({ size = 24, strokeWidth = 2 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>);

// Import local assets
import marketingHero from '../../assets/marketing_hero.png';
import tabletGraphs from '../../assets/tablet_graphs.png';
import softwaresMarketing from '../../assets/softwares_marketing.jpg';
import salesIntegration from '../../assets/sales_integration.png';
import workspaceHands from '../../assets/workspace_hands.png';
import accountingChart from '../../assets/accounting_chart.png';

export function DigitalMarketingPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [budget, setBudget] = useState(1000);
  const [cpc, setCpc] = useState(0.80);
  const [convRate, setConvRate] = useState(3.5);

  const calculateROI = () => {
    const clicks = Math.round(budget / cpc);
    const leads = Math.round(clicks * (convRate / 100));
    const costPerLead = leads ? budget / leads : 0;
    return { clicks, leads, costPerLead };
  };

  const results = calculateROI();

  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${marketingHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-right" style={{ transitionDuration: '1000ms' }}>
              <span className="inline-flex items-center gap-2 text-white font-bold text-[14px] uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Growth Engine
              </span>
              <h1 className="text-[50px] font-extrabold text-white font-heading tracking-tight leading-tight">
                Digital <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Marketing</span>
              </h1>
              <p className="text-[16px] text-slate-300 mt-4 font-semibold">
                Boost your brand's online visibility, increase targeted traffic, and achieve higher sales with our comprehensive digital marketing services.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
          <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
            ONLINE STRATEGY
          </span>
          <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6 max-w-4xl mx-auto leading-snug">
            How Digital Marketing Services helps businesses to grow
          </h2>
          <p className="text-slate-500 text-[16px] max-w-4xl mx-auto mt-6 leading-relaxed">
            Digital marketing has revolutionized the way businesses connect with their customers and grow their brand. By leveraging digital channels such as search engines, social media, and email marketing, businesses can reach their target audience 24/7, enhance brand recognition, and generate leads cost-effectively through digital advertising.
          </p>
          <p className="text-slate-500 text-[16px] max-w-4xl mx-auto mt-4 leading-relaxed">
            Digital marketing companies play a crucial role in helping businesses achieve these goals by providing digital marketing solutions and implementing effective digital marketing strategies.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => setShowSimulator(!showSimulator)}
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-[16px] px-6 py-3 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              {showSimulator ? 'Hide Campaign ROI Calculator' : '⚡ Try ROI Calculator'}
            </button>
          </div>
        </section>

        {/* Simulator Section */}
        {showSimulator && (
          <section className="py-12 px-6 bg-slate-100/50 border-y border-slate-200">
            <div className="max-w-[800px] mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg text-left">
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-150">
                <h4 className="font-heading font-bold text-slate-800">Campaign ROI Calculator</h4>
                <span className="text-[14px] text-slate-400 font-mono">Interactive Sandbox</span>
              </div>

              <div className="flex flex-col gap-6 mb-6">
                <div>
                  <div className="flex justify-between text-[14px] font-bold text-slate-700 mb-1">
                    <span>Monthly Budget</span>
                    <span className="text-blue-600">${budget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100"
                    value={budget} 
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-150 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[14px] font-bold text-slate-400 block mb-1">Cost Per Click (CPC)</label>
                    <input 
                      type="number" 
                      step="0.05"
                      min="0.1"
                      value={cpc} 
                      onChange={(e) => setCpc(parseFloat(e.target.value) || 0.1)}
                      className="w-full text-[14px] p-2 border border-slate-250 rounded-md bg-transparent text-slate-700 font-bold bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-[14px] font-bold text-slate-400 block mb-1">Conversion Rate (%)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      min="0.1"
                      value={convRate} 
                      onChange={(e) => setConvRate(parseFloat(e.target.value) || 0.1)}
                      className="w-full text-[14px] p-2 border border-slate-250 rounded-md bg-transparent text-slate-700 font-bold bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-150 pt-6 bg-slate-50/50 p-4 rounded-2xl">
                <div>
                  <span className="block text-[14px] font-bold text-slate-400 uppercase">Est. Clicks</span>
                  <span className="text-[16px] font-black text-slate-800">{results.clicks.toLocaleString()}</span>
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-slate-400 uppercase">Est. Leads</span>
                  <span className="text-[16px] font-black text-blue-600">{results.leads.toLocaleString()}</span>
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-slate-400 uppercase">Est. Cost Per Lead</span>
                  <span className="text-[16px] font-black text-slate-800">${results.costPerLead.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Digital Marketing Services list */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              OUR SERVICE SUITE
            </span>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Our Digital Marketing Services</h2>
            <p className="text-slate-500 text-[16px] max-w-3xl mx-auto mt-4 leading-relaxed">
              We offer a wide range of services to help your business succeed online. With our dedicated team of experts and a tailored approach to digital marketing, dreamwarez ensures your business stays ahead in the competitive digital landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-blue-50/50 mb-4 text-orange-500 transition-transform hover:scale-105">
                  <Target size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Search Engine Optimization (SEO)</h3>
                <p className="text-slate-555 text-[14px] mt-3 leading-relaxed text-left">
                  Get your business to the top of search results. Our SEO strategies enhance visibility, drive organic traffic, and establish your brand as a trusted authority.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-blue-50/50 mb-4 text-orange-500 transition-transform hover:scale-105">
                  <Smartphone size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Social Media Marketing (SMM)</h3>
                <p className="text-slate-555 text-[14px] mt-3 leading-relaxed text-left">
                  Engage, inspire, and grow your audience. From Instagram to LinkedIn, we create impactful social media campaigns that resonate with your target audience.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-blue-50/50 mb-4 text-orange-500 transition-transform hover:scale-105">
                  <MousePointerClick size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Meta Ads (Facebook & Instagram)</h3>
                <p className="text-slate-555 text-[14px] mt-3 leading-relaxed text-left">
                  Amplify your reach with Meta Ads. We design and execute targeted ad campaigns on Facebook and Instagram that connect with your audience and deliver measurable results.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-blue-50/50 mb-4 text-orange-500 transition-transform hover:scale-105">
                  <FileText size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Content Marketing</h3>
                <p className="text-slate-555 text-[14px] mt-3 leading-relaxed text-left">
                  Content is king, and we help you wear the crown. From blogs and videos to infographics, we create compelling content that informs, engages, and converts.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-8 border border-slate-100 rounded-xl bg-blue-50/50 mb-4 text-orange-500 transition-transform hover:scale-105">
                  <BarChart2 size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-[16px]">Analytics & Reporting</h3>
                <p className="text-slate-555 text-[14px] mt-3 leading-relaxed text-left">
                  Data is at the heart of everything we do. Our detailed analytics and reporting ensure you’re always in the loop on campaign performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Ready To Grow Your Brand Online ?
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#0EA5E9', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)' }}>
                Get Started
              </a>
            </div>
          </section>
      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
