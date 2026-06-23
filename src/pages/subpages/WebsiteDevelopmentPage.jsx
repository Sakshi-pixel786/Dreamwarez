import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import cyberHeroBg from '../../assets/cyber_hero_bg.png';
import couchWorkspace from '../../assets/couch_workspace.png';
import csWebDesign from '../../assets/cs_process_design_1781517476994.png';
import seoImage from '../../assets/global_reach_ios_1781517195521.png';

export function WebsiteDevelopmentPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${cyberHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-left">
              <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                Web Systems
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Website <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                We build modern, fast, and responsive websites for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section - 4 Columns */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.01] transition-all">
              <span className="text-2xl mb-3 block">🏢</span>
              <h3 className="font-heading font-bold text-slate-800 text-lg">Business Website</h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Professional website for companies
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.01] transition-all">
              <span className="text-2xl mb-3 block">🛒</span>
              <h3 className="font-heading font-bold text-slate-800 text-lg">E-Commerce Website</h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Online store with payment gateway
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.01] transition-all">
              <span className="text-2xl mb-3 block">⚙️</span>
              <h3 className="font-heading font-bold text-slate-800 text-lg">Custom Website</h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Fully custom design & coding
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center hover:scale-[1.01] transition-all">
              <span className="text-2xl mb-3 block">🔄</span>
              <h3 className="font-heading font-bold text-slate-800 text-lg">Website Redesign</h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Upgrade your old website
              </p>
            </div>
          </div>

        </section>

        {/* Professional Website Development Services */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center reveal reveal-fade-up">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
              OUR ENGINEERING STANDARDS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Professional Website Development Services</h2>
            <p className="text-slate-555 text-base md:text-lg mt-6 leading-relaxed">
              At Dreamwarez, we provide professional website development services for businesses, startups, and individuals. We create fast, secure, and modern websites that help your business grow online.
            </p>
            <p className="text-slate-555 text-base md:text-lg mt-4 leading-relaxed">
              Our websites are fully responsive, SEO friendly, and designed to give the best user experience on all devices. Whether you need a business website, e-commerce store, or custom web application, our team can build the perfect solution for you.
            </p>
            <p className="text-slate-555 text-base md:text-lg mt-4 leading-relaxed">
              We focus on performance, design, and functionality to ensure your website looks great and works smoothly.
            </p>
          </div>
        </section>

        {/* Features of Our Websites */}
        <section className="py-20 px-6 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal reveal-fade-left lg:order-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
                PLATFORM STANDARDS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Features of Our Websites</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { text: 'Mobile Responsive Design', icon: '📱' },
                  { text: 'Fast Loading Speed', icon: '⚡' },
                  { text: 'SEO Friendly Structure', icon: '🔍' },
                  { text: 'Secure Website', icon: '🔒' },
                  { text: 'Modern UI Design', icon: '✨' },
                  { text: 'Easy to Manage', icon: '⚙️' },
                  { text: 'Lifetime Support', icon: '🤝' }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-150 p-4 rounded-xl shadow-xs hover:shadow-md hover:border-indigo-200 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex shrink-0 items-center justify-center text-xl shadow-inner">
                      {feat.icon}
                    </div>
                    <span className="text-slate-800 text-sm font-bold leading-tight">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-fade-right lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-[500px]">
                <img src={csWebDesign} alt="Features of Our Websites" className="w-full h-[400px] object-cover rounded-2xl shadow-lg border border-slate-200" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Friendly Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal reveal-fade-left text-left">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
                SEARCH OPTIMIZATION
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">SEO Friendly Website Development</h2>
              <p className="text-slate-555 text-base md:text-lg mt-6 leading-relaxed">
                We build SEO friendly websites that help your business rank higher on Google. Our websites are optimized for speed, performance, and search engines so that your customers can easily find you online. We follow the latest SEO standards while developing websites to ensure better visibility, more traffic, and more leads.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[450px]">
                <img src={seoImage} alt="SEO Optimization and Global Reach" className="w-full h-auto object-contain drop-shadow-xl rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Business Needs a Website */}
        <section className="py-20 px-6 max-w-[900px] mx-auto text-center reveal reveal-fade-up">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            BUSINESS VISIBILITY
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Your Business Needs a Website</h2>
          <p className="text-slate-555 text-base md:text-lg mt-6 leading-relaxed">
            A website helps your business grow faster by reaching more customers online. Today every company needs a professional website to build trust and attract new clients.
          </p>
          <p className="text-slate-555 text-base md:text-lg mt-4 leading-relaxed">
            At Dreamwarez, we design websites that are modern, fast, and optimized for search engines. Our goal is to help your business stand out from competitors and get more leads.
          </p>
        </section>

        {/* Our Website Development Process */}
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
              WORKFLOW STAGES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Our Website Development Process</h2>
            <p className="text-slate-555 text-base mt-2">We follow a simple and professional process to create high quality websites for our clients.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up">
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-4">1</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Planning</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  We understand your business requirements and plan the website structure.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-4">2</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Design</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  We create modern and attractive UI design for your website.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-4">3</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Development</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  We develop fast, secure, and responsive website using latest technologies.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-left reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-4">4</span>
                <h4 className="font-heading font-bold text-slate-800 text-base">Launch</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  After testing, we launch your website and provide support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight leading-tight">
              Start Your Website Today
            </h2>
            <p className="text-slate-555 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Contact Dreamwarez now to build your professional website.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
