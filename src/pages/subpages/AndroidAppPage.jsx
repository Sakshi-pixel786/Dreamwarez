import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import androidHero from '../../assets/android_hero.png';
import androidCustomSolutions from '../../assets/android_custom_solutions.png';
import androidUserCentric from '../../assets/android_user_centric.png';
import androidRobustPerf from '../../assets/android_robust_perf.png';
import androidFeatureRich from '../../assets/android_feature_rich.png';
import androidScalableArch from '../../assets/android_scalable_arch.png';
export function AndroidAppPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${androidHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-spin-in">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                Android Ecosystem
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Android App <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Transform Your Vision into a Dynamic Android App.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            MOBILE ARCHITECTURE
          </span>
          <p className="text-slate-500 text-base md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed">
            We specialize in crafting cutting-edge Android applications that cater to your business needs and exceed user expectations.
          </p>
          <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            With a team of experienced developers and a deep understanding of the Android ecosystem, we deliver seamless, innovative, and highly functional apps tailored to your goals.
          </p>
        </section>

        {/* Why Choose Section with Alternating layout grids */}
        <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                DEVELOPMENT BENEFITS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Choose Dreamwarez for Android App Development?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Custom Solutions */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src={androidCustomSolutions} alt="Custom Solutions" className="w-full max-w-[220px] h-[160px] object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Custom Solutions</h3>
                <h4 className="text-slate-700 font-bold text-xs mt-2">Every business is unique, and so are its challenges.</h4>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  We build Android apps designed specifically to align with your business objectives and streamline operations.
                </p>
              </div>

              {/* Card 2: User-Centric Design */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={androidUserCentric} alt="User-Centric Design" className="w-full max-w-[220px] h-[160px] object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">User-Centric Design</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Our designs focus on providing intuitive navigation and a superior user experience, ensuring your customers love using your app.
                </p>
              </div>

              {/* Card 3: Robust Performance */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={androidRobustPerf} alt="Robust Performance" className="w-full max-w-[220px] h-[160px] object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Robust Performance</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Reliability is key. We ensure your app operates smoothly across devices, with fast loading times and minimal downtime.
                </p>
              </div>

              {/* Card 4: Feature-Rich Functionality */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src={androidFeatureRich} alt="Feature-Rich Functionality" className="w-full max-w-[220px] h-[160px] object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Feature-Rich Functionality</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  From e-commerce to real-time analytics, our apps come packed with features that elevate your business operations and customer engagement.
                </p>
              </div>

              {/* Card 5: Scalable Architecture */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={androidScalableArch} alt="Scalable Architecture" className="w-full max-w-[220px] h-[160px] object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Scalable Architecture</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Dreamwarez apps are designed to grow with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Industries We Serve */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto text-center max-w-3xl">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              VERTICAL EXPERIENCE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Industries We Serve</h2>
            <p className="text-slate-500 text-base md:text-lg mt-4 leading-relaxed">
              From retail and healthcare to education and entertainment, we have built transformative Android apps for businesses across diverse industries.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight">
              Ready to start your app journey?
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Whether you’re looking to optimize business processes or create a unique customer experience, our Android solutions are here to make it happen. Let’s create an app that puts your business ahead.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Contact Us Today to Get Started!
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
