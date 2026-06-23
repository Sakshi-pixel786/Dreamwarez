import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import servicesHeroBg from '../../assets/services_hero_tech.png';
import iosUserExperience from '../../assets/ios_user_experience.png';
import iosCustomSolutions from '../../assets/ios_custom_solutions.png';
import androidScalableArch from '../../assets/android_scalable_arch.png';
import officeChair from '../../assets/office_chair.png';
import coffeeDesk from '../../assets/coffee_desk.png';

export function ServicesDirectoryPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);

  const servicesList = [
    'System Integration',
    'Custom Web Development',
    'Custom UI/UX Design',
    'API Development',
    'Software Consulting',
    'Implementation & Deployment',
    'Custom Application Development',
    'Mobile App Development',
    'Maintenance & Management'
  ];

  const faqs = [
    {
      q: 'How long does software development take?',
      a: 'We cannot possibly answer this question precisely because there are projects finished in 2 to 3 weeks, but there are also tasks that take several years to complete. To provide you with a precise answer, we have to evaluate the project complexity and the work scope. Knowing this information, we can provide you with the estimated time frame.'
    },
    {
      q: 'How does the project work process take place?',
      a: 'Each project is unique and requires a customized approach, but most of the development stages are relevant to all of them. However, the very process of their implementation may differ somewhat. We recommend you read more about our work processes on our website.'
    },
    {
      q: 'What information do you need from me to start work?',
      a: 'Share the details of your project – like scope, timeframes, or business challenges you’d like to solve.'
    },
    {
      q: 'Do you provide product support services after the app development is complete?',
      a: 'Yes, we are always glad to provide technical support and service the apps we have developed. We can also further develop your software product if you need to implement new features or integrate third-party services.'
    }
  ];

  const toggleService = (serv) => {
    if (selectedServices.includes(serv)) {
      setSelectedServices(selectedServices.filter(s => s !== serv));
    } else {
      setSelectedServices([...selectedServices, serv]);
    }
  };

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${servicesHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-up">
              <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                Services Directory
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Services
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Take Your business to the Next Level with Dreamwarez Solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="reveal reveal-fade-left">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                OPERATIONAL EXCELLENCE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6 mb-12">How We Can Help</h2>
              <p className="text-slate-500 text-s md:text-base max-w-7xl mx-auto mb-12 leading-relaxed">
                Dreamwarez has what you need and scales as you grow. Our services cover the deep breadth of what we can deliver. For easy, we have all-in-one professional services management. We work with clients to understand the type of support they need and combine it with industry expertise to ensure the right, tailored solution is offered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-zoom-in">
                <div className="flex justify-center p-4 border border-slate-100 rounded-xl bg-slate-50 mb-4">
                  <img src={iosUserExperience} alt="Easy to use" className="w-full h-auto aspect-video object-cover rounded-lg shadow-sm" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">Easy to use</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  With an intuitive interface, start streamlining your professional services processes today!
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-zoom-in" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center p-4 border border-slate-100 rounded-xl bg-slate-50 mb-4">
                  <img src={iosCustomSolutions} alt="Fully customizable" className="w-full h-auto aspect-video object-cover rounded-lg shadow-sm" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">Fully customizable</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Software that works the way you need it to and is essential for everyday use. Dreamwarez's flexible platform adapts to your processes so you can deliver your unique services more efficiently and profitably.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs reveal reveal-zoom-in" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center p-4 border border-slate-100 rounded-xl bg-slate-50 mb-4">
                  <img src={androidScalableArch} alt="Infinitely scalable" className="w-full h-auto aspect-video object-cover rounded-lg shadow-sm" />
                </div>
                <h3 className="font-heading font-bold text-slate-800 text-lg">Infinitely scalable</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Dreamwarez brings everyone and everything together in one hub for seamless management.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowSimulator(!showSimulator)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                {showSimulator ? 'Hide Service request Planner' : '⚡ Try Service Request Planner'}
              </button>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        {showSimulator && (
          <section className="py-12 px-6 bg-slate-100/50 border-b border-slate-200">
            <div className="max-w-[700px] mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg text-left reveal reveal-flip-up">
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-150">
                <h4 className="font-heading font-bold text-slate-800">Custom Request Planner</h4>
                <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md">{selectedServices.length} Selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {servicesList.map(serv => (
                  <div 
                    key={serv}
                    onClick={() => toggleService(serv)}
                    className={`border p-3 rounded-xl flex justify-between items-center cursor-pointer transition-all ${selectedServices.includes(serv) ? 'border-blue-600 bg-blue-50/20 font-bold' : 'border-slate-200 hover:border-slate-400 bg-slate-50/10'}`}
                  >
                    <span className="text-xs text-slate-700">{serv}</span>
                    {selectedServices.includes(serv) && <span className="text-blue-600 text-xs font-bold">✓</span>}
                  </div>
                ))}
              </div>
              
              {selectedServices.length > 0 && (
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Request Details</span>
                  <p className="text-xs text-slate-500">I would like a customized solution covering: {selectedServices.join(', ')}.</p>
                  <a href="/contact/" className="inline-block mt-3 bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-500">Submit Inquiry</a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Services We Are providing */}
        <section className="py-20 px-6 max-w-[1080px] mx-auto">
          <div className="text-center mb-12 reveal reveal-fade-right">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Services We Are providing</h2>
            <h3 className="text-slate-550 text-base md:text-lg max-w-7xl mx-auto mt-4 leading-relaxed">
              These services span the entire software development lifecycle — from ideation and design to development, deployment, and maintenance.
            </h3>
            <p className="text-slate-500 text-sm max-w-8xl mx-auto mt-2 leading-relaxed">
              We are a leading technology solutions provider, offering a wide range of services to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'System Integration', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              },
              { 
                title: 'Custom Web Development', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              },
              { 
                title: 'Custom UI/UX Design', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              },
              { 
                title: 'API Development', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              },
              { 
                title: 'Software Consulting', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
              },
              { 
                title: 'Implementation & Deployment', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              },
              { 
                title: 'Custom Application Development', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              },
              { 
                title: 'Mobile App Development', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              },
              { 
                title: 'Maintenance & Management', 
                icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              }
            ].map((serv, index) => (
              <div key={index} className={`bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-300 transition-all reveal ${index % 3 === 0 ? 'reveal-fade-right' : index % 3 === 2 ? 'reveal-fade-left' : 'reveal-zoom-in'}`} style={{ animationDelay: `${(index % 3) * 100}ms` }}>
                {serv.icon}
                <h4 className="font-heading font-extrabold text-slate-800 text-base mb-2">{serv.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Tailored {serv.title.toLowerCase()} engineered with next-generation coding paradigms to optimize execution efficiency and security.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-[1080px] mx-auto w-full bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-stretch overflow-hidden group/container reveal reveal-zoom-in">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 relative bg-slate-50/50 py-16 flex items-center justify-center min-h-[450px] overflow-hidden">
              {/* Dot Pattern */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-indigo-200/60"></div>
                ))}
              </div>
              
              <div className="relative z-10 ml-8 group/images cursor-pointer">
                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl group-hover/images:bg-blue-600/20 transition-all duration-500 transform translate-y-4"></div>
                <img src={officeChair} alt="Office" className="w-[260px] h-[340px] object-cover rounded-2xl shadow-lg relative z-10 group-hover/images:scale-[1.02] transition-transform duration-500 ease-out" />
                <img src={coffeeDesk} alt="Working" className="w-[240px] h-[160px] object-cover rounded-2xl shadow-2xl absolute -bottom-12 -right-20 z-20 border-[8px] border-white group-hover/images:translate-x-3 group-hover/images:-translate-y-3 transition-transform duration-500 ease-out" />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 p-12 md:p-16 flex flex-col justify-center text-left z-30 relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[60px] -translate-y-1/3 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3"></div>
              
              <div className="relative z-10">
                <span className="inline-block bg-white/20 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 w-max border border-white/30 backdrop-blur-md shadow-sm">
                  Enterprise Solution
                </span>
                
                <h3 className="font-heading font-extrabold text-white text-3xl md:text-4xl mb-6 leading-tight max-w-sm drop-shadow-md">
                  Run A Smooth Business With ERP Intact.
                </h3>
                
                <p className="text-blue-50 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-medium opacity-90 drop-shadow-sm">
                  Manage your complete business software flow from multiple warehouses and manufacturing to sales and purchasing—all right from a single, unified solution.
                </p>
                
                <div>
                  <a href="/contact/" className="inline-flex items-center gap-3 bg-white text-blue-700 font-extrabold text-sm px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 group/btn">
                    Explore More <span className="text-lg group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12 reveal reveal-fade-up">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                FAQ
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">About Our Software Development Services</h2>
              <p className="text-slate-500 text-xs mt-2">Explore more Frequently Asked Questions About Our Software Development Services</p>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-5 font-heading font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50/50 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-blue-600 text-lg">{activeFaq === idx ? '−' : '+'}</span>
                  </button>
                  {activeFaq === idx && (
                    <div className="p-5 pt-0 border-t border-slate-100 text-s text-slate-500 leading-relaxed bg-slate-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent opacity-50 z-0"></div>
          <div className="max-w-[1200px] mx-auto z-10 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
              Want to start a project?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Our team is ready to implement your ideas.
            </p>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                Get Started Today
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
