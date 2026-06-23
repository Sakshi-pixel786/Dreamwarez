import React, { useState, useEffect } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import cybersecurityHero from '../../assets/cybersecurity_hero.png';
import cyberHeroBg from '../../assets/cyber_hero_bg.png';
import erpHeroBgNew from '../../assets/erp_hero_bg_new.png';
import coffeeDesk from '../../assets/coffee_desk.png';
import teamMeeting from '../../assets/team_meeting.png';
import alertsDashboard from '../../assets/alerts_dashboard_ui.png';
import sofaLaptop from '../../assets/sofa_laptop.png';
import accountingInvoice from '../../assets/accounting_invoice_moderate.png';

export function CybersecurityPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${cybersecurityHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-up">
              <span className="inline-block bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                Defense & Auditing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Cybersecurity & <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">Digital Forensics Services</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Protect. Prevent. Respond.
              </p>
            </div>
          </div>
        </section>


        {/* Cybersecurity Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading">Cybersecurity & Digital Forensics</h2>
              <h3 className="text-slate-800 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-bold">
                Building A Safer Digital World, One Layer At A Time.
              </h3>
              
              <div className="text-slate-500 text-sm max-w-5xl mx-auto mt-8 space-y-6 leading-relaxed">
                <p>
                  In today's ever-evolving digital landscape, <strong className="text-slate-600">cyber threats</strong> are more sophisticated, frequent, and damaging than ever before. At Dreamwarez, we believe <strong className="text-slate-600">security is not an option—it's a necessity.</strong>
                </p>
                <p>
                  Whether you're a small startup, an enterprise, or a government body, your data, systems, and privacy must be protected against cyberattacks, breaches, malware, and insider threats. That's why we offer comprehensive, customizable <strong className="text-slate-600">Cybersecurity and Digital Forensics services</strong> tailored to your unique infrastructure.
                </p>
                <p>
                  Our goal is simple: <strong className="text-slate-600">To proactively protect your organization, respond effectively to incidents, and empower you to operate without fear.</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Card 1: Penetration Testing */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden">
                <div className="h-40 relative overflow-hidden">
                  <img src={cyberHeroBg} alt="Penetration Testing" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 right-4 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-3">Penetration Testing (Ethical Hacking)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    We simulate real-world cyberattacks to uncover vulnerabilities before malicious actors do. Our ethical hackers perform black-box, white-box, and grey-box penetration tests on:
                    <br/><br/>
                    Web & mobile applications, Networks & infrastructure, IoT and cloud platforms.
                  </p>
                </div>
              </div>

              {/* Card 2: Network & Endpoint Security */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ animationDelay: '100ms' }}>
                <div className="h-40 relative overflow-hidden">
                  <img src={erpHeroBgNew} alt="Network & Endpoint Security" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 right-4 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-3">Network & Endpoint Security</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Secure every node in your system—from servers to smartphones. We offer:
                    <br/><br/>
                    Intrusion detection & prevention systems (IDS/IPS), Next-gen firewalls configuration, Zero Trust Architecture, Secure access protocols.
                  </p>
                </div>
              </div>

              {/* Card 3: Email Security */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ animationDelay: '200ms' }}>
                <div className="h-40 relative overflow-hidden">
                  <img src={coffeeDesk} alt="Email Security & Phishing Protection" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 right-4 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-3">Email Security & Phishing Protection</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Combat phishing, business email compromise (BEC), and ransomware threats with:
                    <br/><br/>
                    Advanced spam filters, Email encryption & authentication (SPF, DKIM, DMARC), Threat intelligence integrations.
                  </p>
                </div>
              </div>

              {/* Card 4: Audits & Compliance */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all reveal reveal-fade-up flex flex-col overflow-hidden" style={{ animationDelay: '300ms' }}>
                <div className="h-40 relative overflow-hidden">
                  <img src={teamMeeting} alt="Cybersecurity Audits & Compliance" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-4 right-4 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-3">Cybersecurity Audits & Compliance</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Ensure your organization meets industry and government regulations like:
                    <br/><br/>
                    ISO 27001, GDPR, HIPAA, SOC 2. We perform thorough audits and guide you to full compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Forensics Services */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
              POST-INCIDENT FORENSICS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Digital Forensics Services</h2>
            <h3 className="text-slate-550 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-bold">
              When a cyber incident occurs, our Digital Forensics experts step in to analyze, contain, and trace the breach or attack.
            </h3>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2 leading-relaxed">
              When a breach or cyber incident occurs, speed and precision are everything. Our digital forensics experts uncover the who, what, when, and how behind every incident.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-2xl bg-indigo-50 text-indigo-600 mb-6 mx-auto border border-indigo-100 shadow-inner">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-base">Incident Response & Breach Investigation</h4>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Immediate on-site or remote investigation into cybersecurity events. We identify breach origins, mitigate active threats, and secure your infrastructure.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-2xl bg-indigo-50 text-indigo-600 mb-6 mx-auto border border-indigo-100 shadow-inner">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m-4-8.5v2m0 0l-2-2m2 2l2-2" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-base">Data Recovery & Preservation</h4>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Using advanced tools, we recover deleted or encrypted files, reconstruct compromised systems, and preserve digital evidence for legal or disciplinary action.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-2xl bg-indigo-50 text-indigo-600 mb-6 mx-auto border border-indigo-100 shadow-inner">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-heading font-extrabold text-slate-800 text-base">Legal & Regulatory Reporting</h4>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Detailed forensic reports with clear timelines, evidence logs, and impact analysis to support legal proceedings, insurance claims, or internal audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dreamwarez Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
              TRUST & CERTIFICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">Why Choose Dreamwarez?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  text: "Certified Cybersecurity Professionals (CEH, CISSP, CHFI)",
                  icon: (
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                },
                {
                  text: "24/7 Threat Monitoring & Response Team",
                  icon: (
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  text: "Proven Track Record with Corporate and Government Clients",
                  icon: (
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  text: "Tools like Wireshark, FTK, EnCase, and Metasploit Framework",
                  icon: (
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  text: "100% Confidentiality and Data Integrity Guaranteed",
                  icon: (
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl flex gap-3 items-start shadow-xs">
                  {item.icon}
                  <span className="text-xs text-slate-700 font-semibold mt-0.5">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-heading italic max-w-3xl mx-auto leading-relaxed">
              "You can’t control when a cyberattack happens. But with Dreamwarez, you can control how prepared you are."
            </h2>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-rose-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Contact Us
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
