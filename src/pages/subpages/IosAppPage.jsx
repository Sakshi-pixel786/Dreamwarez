import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import iosHero from '../../assets/ios_hero.png';
import iosUserExperience from '../../assets/ios_user_experience.png';
import iosCustomSolutions from '../../assets/ios_custom_solutions.png';
import iosRobustSecurity from '../../assets/ios_robust_security.png';
import iosHighPerformance from '../../assets/ios_high_performance.png';
import salesQuotation from '../../assets/sales_quotation.png';
import iosReqAnalysis from '../../assets/req_analysis_ios_1781516934814.png';
import iosUiUx from '../../assets/ui_ux_ios_1781516956654.png';
import iosDevIntegration from '../../assets/dev_integration_ios_1781516976696.png';
import iosQaTesting from '../../assets/qa_testing_ios_1781516996394.png';
import iosLaunchMaint from '../../assets/launch_maint_ios_1781517017797.png';
import iosGlobalReach from '../../assets/global_reach_ios_1781517195521.png';
import iosHigherRoi from '../../assets/higher_roi_ios_1781517214951.png';
import iosAdvancedFeatures from '../../assets/advanced_features_ios_1781517234114.png';

export function IosAppPage() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${iosHero})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-flip-up">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2c1 .5 2 2 2 5"></path></svg>
                iOS Ecosystem
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                iOS App <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Innovative iOS Apps Tailored to Your Business Needs.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            PREMIUM MOBILE PRODUCTS
          </span>
          <p className="text-slate-500 text-base md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed">
            We specialize in crafting cutting-edge iOS applications that combine functionality, aesthetics, and performance.
          </p>
          <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            Whether you’re a startup looking to make a mark or an established business aiming to expand your digital footprint, our custom iOS apps help you achieve your goals.
          </p>
        </section>

        {/* Why Choose Section with Alternating layout grids */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                DEVELOPMENT BENEFITS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Choose Our iOS App Development Services?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Seamless User Experience */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src={iosUserExperience} alt="Seamless User Experience" className="w-full max-w-[240px] h-[180px] object-cover rounded-xl shadow-sm" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Seamless User Experience</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  We design intuitive and user-friendly apps that provide your customers with a smooth and engaging experience.
                </p>
              </div>

              {/* Card 2: Custom Solutions for Every Industry */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={iosCustomSolutions} alt="Custom Solutions for Every Industry" className="w-full max-w-[240px] h-[180px] object-cover rounded-xl shadow-sm" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Custom Solutions for Every Industry</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  From retail and e-commerce to healthcare and finance, our iOS apps are tailored to meet the unique demands of your industry.
                </p>
              </div>

              {/* Card 3: Robust Security */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={iosRobustSecurity} alt="Robust Security" className="w-full max-w-[240px] h-[180px] object-cover rounded-xl shadow-sm" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">Robust Security</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Protect your users’ data with high-end security features and compliance with Apple’s stringent standards.
                </p>
              </div>

              {/* Card 4: High-Performance Applications */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src={iosHighPerformance} alt="High-Performance Applications" className="w-full max-w-[240px] h-[180px] object-cover rounded-xl shadow-sm" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">High-Performance Applications</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Our iOS apps are optimized for speed, scalability, and reliability, ensuring superior performance on all Apple devices.
                </p>
              </div>

              {/* Card 5: App Store Approval Guarantee */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs text-center reveal reveal-fade-up transition-transform hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-6">
                  <img src={salesQuotation} alt="App Store Approval Guarantee" className="w-full max-w-[240px] h-[180px] object-cover rounded-xl shadow-sm" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-heading">App Store Approval Guarantee</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  We ensure your app meets Apple’s guidelines, streamlining the submission process and guaranteeing approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-white border-b border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              WORKFLOW PIPELINE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">Our iOS App Development Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-xs reveal reveal-fade-up">
                <img src={iosReqAnalysis} alt="Requirement Analysis" className="w-full h-[120px] object-cover rounded-lg" />
                <h4 className="font-heading font-bold text-slate-800 text-sm mt-4">Requirement Analysis</h4>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed text-left">
                  We work closely with you to understand your vision and objectives, laying the foundation for a successful app.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={iosUiUx} alt="UI/UX Design" className="w-full h-[120px] object-cover rounded-lg" />
                <h4 className="font-heading font-bold text-slate-800 text-sm mt-4">UI/UX Design</h4>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed text-left">
                  Our design experts create visually stunning and highly functional interfaces that captivate your audience.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={iosDevIntegration} alt="Development & Integration" className="w-full h-[120px] object-cover rounded-lg" />
                <h4 className="font-heading font-bold text-slate-800 text-sm mt-4">Development & Integration</h4>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed text-left">
                  Leveraging the latest technologies, we bring your ideas to life, ensuring seamless integration with your existing systems.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <img src={iosQaTesting} alt="Testing & Quality Assurance" className="w-full h-[120px] object-cover rounded-lg" />
                <h4 className="font-heading font-bold text-slate-800 text-sm mt-4">Testing & Quality Assurance</h4>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed text-left">
                  Every app undergoes rigorous testing to ensure flawless performance, security, and compatibility across Apple devices.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '400ms' }}>
                <img src={iosLaunchMaint} alt="Launch & Maintenance" className="w-full h-[120px] object-cover rounded-lg" />
                <h4 className="font-heading font-bold text-slate-800 text-sm mt-4">Launch & Maintenance</h4>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed text-left">
                  From app store submission to ongoing updates, we’re with you at every step to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why iOS Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              PLATFORM REACH
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">Why iOS for Your Business?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up">
                <img src={iosGlobalReach} alt="Global Reach" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 text-lg">Global Reach</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Tap into Apple’s premium user base with an app that reflects your brand’s excellence.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={iosHigherRoi} alt="Higher ROI" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 text-lg">Higher ROI</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  iOS users are known for higher engagement and spending, making it a lucrative platform for businesses.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={iosAdvancedFeatures} alt="Advanced Features" className="w-full h-[180px] object-cover rounded-xl mb-4" />
                <h3 className="font-heading font-bold text-slate-800 text-lg">Advanced Features</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Leverage the latest iOS capabilities, including AR, Siri, and Apple Pay, to create unique user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              STRATEGIC COOPERATION
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-heading mt-6">Partner with Dreamwarez</h2>
            <p className="text-slate-500 text-s md:text-base max-w-5xl mx-auto mt-4 leading-relaxed">
              With a team of experienced developers, designers, and strategists, Dreamwarez Software delivers iOS applications that drive results and elevate your business.
            <p className="text-slate-500 text-s md:text-base max-w-5xl mx-auto mt-4 leading-relaxed">
               Let’s transform your ideas into a world-class app that stands out in the competitive Apple ecosystem.
            </p>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-heading tracking-tight leading-tight">
              Let’s build an iOS app that redefines your business. Contact us today!
            </h2>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all inline-block hover:scale-[1.02] cursor-pointer"
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
