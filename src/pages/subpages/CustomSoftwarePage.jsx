import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Import local assets
import customSoftwareHero from '../../assets/custom_software_hero.png';
import softwaresSolutions from '../../assets/softwares_solutions.jpg';
import workspaceHands from '../../assets/workspace_hands.png';
import devWoman from '../../assets/dev_woman.png';
import tabletGraphs from '../../assets/tablet_graphs.png';
import coffeeDesk from '../../assets/coffee_desk.png';
import salesDashboard from '../../assets/sales_dashboard.png';
import erpWarehouse from '../../assets/erp_warehouse.png';
import outdoorLaptop from '../../assets/outdoor_laptop.png';
import accountingDashboard from '../../assets/accounting_dashboard.png';
import officeChair from '../../assets/office_chair.png';
import csProcessNeeds from '../../assets/cs_process_needs_1781517456394.png';
import csProcessDesign from '../../assets/cs_process_design_1781517476994.png';
import csProcessQa from '../../assets/cs_process_qa_1781517497068.png';
import csProcessDeploy from '../../assets/cs_process_deploy_1781517517189.png';
import csIndConstruction from '../../assets/cs_industry_construction_1781517538935.png';
import csIndRetail from '../../assets/cs_industry_retail_1781517558014.png';
import csIndHealthcare from '../../assets/cs_industry_healthcare_1781517578018.png';
import csIndLogistics from '../../assets/cs_industry_logistics_1781517597939.png';
import csIndEducation from '../../assets/cs_industry_education_1781517618060.png';
import iosHigherRoi from '../../assets/higher_roi_ios_1781517214951.png';

export function CustomSoftwarePage() {
  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${customSoftwareHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-right" style={{ transitionDuration: '1000ms' }}>
              <span className="inline-flex items-center gap-2 text-white font-bold text-[14px] uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Bespoke Systems
              </span>
              <h1 className="text-[50px] font-extrabold text-white font-heading tracking-tight leading-tight">
                Customized <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Software Development</span>
              </h1>
              <p className="text-[16px] text-slate-300 mt-4 font-semibold">
                Empowering Businesses with Tailored Software Solutions
              </p>
            </div>
          </div>
        </section>

    

        {/* Why Choose Section */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100 text-center">
          <div className="max-w-[800px] mx-auto reveal reveal-fade-up">
            <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              TAILORED SOLUTIONS
            </span>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Why Choose Customized Software?</h2>
            <p className="text-slate-500 text-[16px] mt-6 leading-relaxed">
              As a software company, we believe that every business is unique, and so are its challenges. That’s why we specialize in developing customized software solutions designed to address your specific needs, streamline your operations, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-[1080px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              CORE CAPABILITIES
            </span>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm reveal reveal-fade-up">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-orange-500 font-bold text-[16px] mb-4">01</div>
              <h3 className="font-heading font-bold text-[16px] text-slate-800">Tailored for Your Business</h3>
              <p className="text-slate-500 text-[14px] mt-3 leading-relaxed">
                Unlike off-the-shelf software, our solutions are designed to integrate seamlessly with your workflows, ensuring maximum efficiency and minimal disruption.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-orange-500 font-bold text-[16px] mb-4">02</div>
              <h3 className="font-heading font-bold text-[16px] text-slate-800">Enhanced Flexibility</h3>
              <p className="text-slate-500 text-[14px] mt-3 leading-relaxed">
                Your business is dynamic, and so should your software be. Our custom solutions adapt to your growth and changing requirements.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-orange-500 font-bold text-[16px] mb-4">03</div>
              <h3 className="font-heading font-bold text-[16px] text-slate-800">Cost-Efficiency</h3>
              <p className="text-slate-500 text-[14px] mt-3 leading-relaxed">
                With a focus on delivering value, we ensure that you pay for only the features you need, avoiding unnecessary extras that come with generic software.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm reveal reveal-fade-up">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-orange-500 font-bold text-[16px] mb-4">04</div>
              <h3 className="font-heading font-bold text-[16px] text-slate-800">Improved Security</h3>
              <p className="text-slate-500 text-[14px] mt-3 leading-relaxed">
                We implement robust security measures tailored to your industry’s needs, keeping your sensitive data safe and compliant with regulations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-orange-500 font-bold text-[16px] mb-4">05</div>
              <h3 className="font-heading font-bold text-[16px] text-slate-800">Scalable Architecture</h3>
              <p className="text-slate-500 text-[14px] mt-3 leading-relaxed">
                Whether you’re a startup or an established enterprise, our software solutions grow with you, supporting your journey to success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              WORKFLOW PATHWAY
            </span>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Our Development Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white border border-slate-250 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <img src={csProcessNeeds} alt="Understanding Your Needs" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 mt-4">Understanding Your Needs</h3>
                <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">
                  We start by diving deep into your business, identifying pain points, and gathering insights to ensure the software aligns with your goals.
                </p>
              </div>

              <div className="bg-white border border-slate-250 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={csProcessDesign} alt="Design & Development" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 mt-4">Design & Development</h3>
                <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">
                  Our expert team combines innovation with technical expertise to design intuitive and feature-rich software tailored to your requirements.
                </p>
              </div>

              <div className="bg-white border border-slate-250 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={csProcessQa} alt="Testing & Quality Assurance" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 mt-4">Testing & Quality Assurance</h3>
                <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">
                  We leave no room for errors. Every solution undergoes rigorous testing to ensure flawless performance and user satisfaction.
                </p>
              </div>

              <div className="bg-white border border-slate-250 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <img src={csProcessDeploy} alt="Deployment & Support" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 mt-4">Deployment & Support</h3>
                <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">
                  From smooth implementation to ongoing support, we’re with you every step of the way, ensuring your software continues to perform at its best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              INDUSTRIES SERVED
            </span>
            <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Industries We Serve</h2>
            <p className="text-slate-500 text-[16px] mt-4 max-w-2xl mx-auto">
              Our customized software solutions cater to a wide range of industries
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up">
                <img src={csIndConstruction} alt="Construction" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Construction</h4>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={csIndRetail} alt="Retail & E-commerce" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Retail & E-commerce</h4>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={csIndHealthcare} alt="Healthcare" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Healthcare</h4>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up">
                <img src={csIndLogistics} alt="Logistics & Supply Chain" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Logistics & Supply Chain</h4>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={csIndEducation} alt="Education" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Education</h4>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={iosHigherRoi} alt="Finance & Accounting" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-slate-800">Finance & Accounting</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
       <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Your business deserves a solution as unique as you are. Let’s build it together!
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#0EA5E9', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)' }}>
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
