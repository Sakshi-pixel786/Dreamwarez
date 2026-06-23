import React from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import aboutHeroBg from '../../assets/about_hero_bg.png';
import whoWeAreTeam from '../../assets/who_we_are_team.png';

// Client logos
import logoDeccan from '../../assets/logo_deccan.jpg';
import logoDenler from '../../assets/logo_denler.png';
import logoEasylight from '../../assets/logo_easylight.jpg';
import logoPurviAgro from '../../assets/logo_purvi_agro.png';
import logoSanjivani from '../../assets/logo_sanjivani.png';
import logoVenkatesh from '../../assets/logo_venkatesh.png';
import logoVishwasBuilder from '../../assets/logo_vishwas_builder.jpg';
import logoViswasSales from '../../assets/logo_viswas_sales.png';
import logoVj from '../../assets/logo_vj.png';

export function AboutUsPage() {
  const clientLogos = [
    { src: logoVj, alt: "VJ" },
    { src: logoVishwasBuilder, alt: "Vishwas Builder" },
    { src: logoViswasSales, alt: "Viswas Sales Corporation" },
    { src: logoEasylight, alt: "Easylight" },
    { src: logoPurviAgro, alt: "Purvi Agro" },
    { src: logoVenkatesh, alt: "Venkatesh" },
    { src: logoSanjivani, alt: "Sanjivani Group of Institute" },
    { src: logoDenler, alt: "Denler" },
    { src: logoDeccan, alt: "Deccan" }
  ];

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${aboutHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-flip-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-white font-bold text-[14px] uppercase">
                  Our Identity
                </span>
              </div>
              <h1 className="text-[50px] font-extrabold text-white font-heading tracking-tight leading-tight">
                About <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-[16px] text-slate-300 mt-4 font-semibold">
                Our mission is to impact the lives touched by technology. And help businesses to realize their goals through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Intro Section */}
        <section className="py-24 px-6 max-w-[1080px] mx-auto reveal reveal-fade-right">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Left Content Column */}
            <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-6 leading-tight">
                Who We Are?
              </h2>
              <div className="mt-8 space-y-6 text-slate-500 text-[16px] font-normal leading-relaxed">
                <p>
                  Dreamwarez has a complete suite of business applications covering all business needs, from Website/e-commerce down to manufacturing, inventory and accounting, all seamlessly integrated.
                </p>
                <p>
                  Our mission is to Create Technological tools, that empower people, free them to express their greatest potential and get out of the way by just working, disappearing out of sight.
                </p>
                <p>
                  Our core values attract and unite individuals focused on building a stable, desirable work environment and providing exceptional solutions we are proud of.
                </p>
              </div>
              <div className="mt-10">
                <a href="/contact/" className="inline-flex items-center gap-3 bg-[#0EA5E9] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#0EA5E9]/30 hover:bg-[#0284c7] hover:scale-[1.02] transition-all duration-300 group">
                  contact us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full md:w-1/2 relative group">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-blue-600/20 transition-all duration-500 transform translate-y-4 translate-x-4"></div>
              <div className="absolute -inset-4 border-2 border-slate-200/50 rounded-3xl -z-10 group-hover:-rotate-2 transition-transform duration-500"></div>
              
              <img 
                src={whoWeAreTeam} 
                alt="Dreamwarez Software Team" 
                className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500 ease-out border border-slate-100"
              />
            </div>

          </div>
        </section>

        {/* Company Overview Details */}
        <section className="py-20 px-6 bg-white reveal reveal-fade-up">
          <div className="max-w-[1180px] mx-auto text-center">
            <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-extrabold text-[#1f1f1f] font-heading leading-tight capitalize">
              Leading Software Development Company In Pune
            </h2>

            <div className="mt-14 max-w-[920px] mx-auto space-y-7 text-slate-500 text-[18px] leading-[1.75]">
              <div className="space-y-5">
                <p>
                  Dreamwarez is a trusted software development company in Pune providing innovative digital solutions for startups, enterprises, and growing businesses. Our expert team specializes in custom software development, mobile application development, enterprise ERP solutions, and advanced digital transformation services.
                </p>
                <p>
                  We help businesses automate processes, improve operational efficiency, and scale faster through powerful technology solutions. From web applications to AI-driven platforms, our goal is to deliver secure, scalable, and user-friendly software that drives real business growth.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-500 text-[18px] mb-6">Our services include:</h3>
                <ul className="space-y-5 text-slate-500 text-[18px]">
                  <li>Custom Web Application Development</li>
                  <li>Mobile App Development (Android & iOS)</li>
                  <li>ERP & CRM Development</li>
                  <li>AR/VR Application Development</li>
                  <li>Digital Marketing & SEO Services</li>
                  <li>Cloud-Based Business Solutions</li>
                </ul>
              </div>

              <p>
                With a customer-centric approach and modern technologies, Dreamwarez empowers companies to innovate, optimize workflows, and achieve long-term digital success.
              </p>
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="py-20 reveal reveal-fade-left px-6 bg-white text-slate-900">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
              <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                TEAM DREAMWAREZ
              </span>
            </div>
            <h2 className="text-[46px] font-extrabold font-heading mb-4 text-black">Meet The People Behind Dreamwarez</h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto leading-relaxed">
              We want to devote a dedicated page to the main driving force behind Dreamwarez: the people who design, build, support, and lead our software work.
            </p>
            <div className="mt-10">
              <a href="/about-us/team-dreamwarezs/" className="inline-flex items-center gap-3 bg-[#0EA5E9] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#0EA5E9]/30 hover:bg-[#0284c7] hover:scale-[1.02] transition-all duration-300 group">
                Explore Team Dreamwarez <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Mission fuels section with image */}
        <section className="py-12 px-6 max-w-[900px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="reveal reveal-fade-left flex-1">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                  OUR MISSION
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-3">Our mission fuels our actions.</h2>
              <p className="text-slate-500 text-[16px] mt-3 leading-relaxed">
                Everything we do is linked to our mission of making an extraordinary impact on our clients, colleagues, and communities. It permeates how we spend our time, our resources, and our talents.
              </p>
            </div>
            <div className="reveal reveal-fade-right shrink-0">
              <div className="border border-slate-200 p-1.5 rounded-xl bg-white shadow-sm w-[280px] sm:w-[320px]">
                <img src="https://dreamwarez.in/wp-content/uploads/2020/07/furniture.jpg" alt="Our mission fuels our actions" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Valued clients & collaborations */}
        <section className="py-20 reveal reveal-fade-left px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
              <span className="text-[14px] font-bold text-orange-500 uppercase tracking-wider">
                COLLABORATIONS & PARTNERS
              </span>
            </div>
            <h2 className="text-[46px] font-extrabold text-slate-800 font-heading mt-6 mb-4">Our Valued Clients & Collaborations</h2>
            <p className="text-slate-500 text-[16px] mt-2 max-w-xl mx-auto mb-12">
              We are constantly searching and testing for the best tools and services on the market. We partner with these organizations to provide the best service and value for our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center opacity-75 max-w-[900px] mx-auto">
              {clientLogos.map((logo, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 shadow-xs flex items-center justify-center w-full h-20 hover:opacity-100 transition-opacity">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}
