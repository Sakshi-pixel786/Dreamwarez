import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import arvrHero from '../../assets/arvr_hero.png';
import couchWorkspace from '../../assets/couch_workspace.png';
import warehouseScaleWms from '../../assets/warehouse_scale_wms.png';
import outdoorLaptop from '../../assets/outdoor_laptop.png';
import devWoman from '../../assets/dev_woman.png';

export function ArVrPage() {


  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${arvrHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-spin-in">
              <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                AR & VR Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                AR & <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">VR</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Innovate with Immersion.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
          <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 max-w-4xl mx-auto leading-snug">
            AR & VR Solutions By Dreamwarez
          </h2>
          <h3 className="text-slate-800 font-bold text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Immersive Innovation For Real-World Impact
          </h3>
          
          <div className="text-slate-500 text-sm max-w-5xl mx-auto mt-10 leading-relaxed space-y-6">
            <p>
              Welcome to the future of engagement.
            </p>
            <p>
              At Dreamwarez, we help companies <strong className="text-slate-700 font-bold">bridge the gap between digital and reality</strong> with our advanced <strong className="text-slate-700 font-bold">Augmented Reality (AR)</strong> and <strong className="text-slate-700 font-bold">Virtual Reality (VR)</strong> solutions. These immersive technologies are transforming the way people learn, shop, experience, and interact with the world.
            </p>
            <p>
              Whether you're looking to train employees through simulations, enhance eCommerce experiences, or launch interactive educational tools—<strong className="text-slate-700 font-bold">we build it all.</strong>
            </p>
          </div>
        </section>

        {/* We Build AR & VR Applications */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              OUR APPLICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">We Build AR & VR Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={couchWorkspace} alt="AR in Retail & E-Commerce" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">AR in Retail & E-Commerce</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  ● Try-before-you-buy tools <span className="block">● 3D product visualizers</span> <span className="block">● AR-powered catalogs and mirror apps</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={warehouseScaleWms} alt="VR for Industrial & Healthcare Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">VR for Industrial & Healthcare Training</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  ● Hazard-free virtual training environments <span className="block">● Emergency response drills</span> <span className="block">● Skill development simulations</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={outdoorLaptop} alt="360° Virtual Tours" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">360° Virtual Tours</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  ● Real estate walkthroughs <span className="block">● Hospitality previews</span> <span className="block">● University campus navigation</span>
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up md:col-span-2 lg:col-span-1 lg:col-start-2 max-w-sm mx-auto w-full" style={{ animationDelay: '300ms' }}>
                <div className="overflow-hidden rounded-xl border border-slate-150 mb-4 h-40">
                  <img src={devWoman} alt="AR Learning for Education" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">AR Learning for Education</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  ● Interactive learning modules <span className="block">● Science lab simulations</span> <span className="block">● AR flashcards and AR textbooks</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              VERTICAL ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-8">Industries We Serve</h2>
            <h3 className="text-slate-550 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              Our software company brings the power of Augmented Reality (AR) and Virtual Reality (VR) to a wide range of industries, helping businesses enhance user experience, streamline operations, improve training, and create immersive digital environments.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                { title: 'Education & E-Learning', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> },
                { title: 'Healthcare & Medical', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
                { title: 'Retail & Fashion', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
                { title: 'System Integration', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg> },
                { title: 'Travel & Tourism', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: 'Manufacturing & Industrial', icon: <svg className="w-10 h-10 text-purple-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all text-center reveal reveal-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  {item.icon}
                  <span className="block text-sm font-bold text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dreamwarez */}
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              OUR STANDARDS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">Why Choose Dreamwarez?</h2>
            <p className="text-slate-500 text-sm mb-8">
              We’re not just developers — we’re your strategic technology partner. Your success is our mission. Choosing the right technology partner can make all the difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                {
                  text: "Cross-platform apps (iOS, Android, Web)",
                  icon: (
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  text: "Fully customizable & scalable solutions",
                  icon: (
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  )
                },
                {
                  text: "Rich graphics and real-time rendering",
                  icon: (
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  text: "Affordable development cycles",
                  icon: (
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  text: "End-to-end development and post-deployment support",
                  icon: (
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl flex gap-3 items-center shadow-xs">
                  {item.icon}
                  <span className="text-xs text-slate-750 font-semibold mt-0.5">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-heading italic max-w-3xl mx-auto leading-relaxed">
              “We don’t just create AR/VR apps—we create unforgettable experiences.”
            </h2>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Contact Us Today
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
