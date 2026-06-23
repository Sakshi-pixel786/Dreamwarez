import React, { useState, useEffect } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import hrHeroBg from '../../assets/hr_hero_bg.png';
import teamMeeting from '../../assets/hr_startup_spirit.png';
import officeChair from '../../assets/hr_continuous_learning.png';
import officeWalk from '../../assets/hr_diverse_team.png';
import couchWorkspace from '../../assets/hr_flexible_culture.png';
import tabletGraphs from '../../assets/hr_growth_pathways.png';
import coffeeDesk from '../../assets/hr_mission_driven.png';

export function CareerOpportunitiesPage() {
  const [showSimulator, setShowSimulator] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fileName, setFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setFileName(file.name);
    setIsUploading(true);
    setUploadProgress(0);
  };

  useEffect(() => {
    if (!isUploading) return;
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isUploading]);

  const deleteFile = () => {
    setFileName('');
    setUploadProgress(0);
    setIsUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${hrHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-right">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-white font-bold text-xs uppercase tracking-wider">Join Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Career <span className="text-[#0EA5E9]">Opportunities</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Passion. Innovation. Growth.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1000px] mx-auto text-center reveal reveal-fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading max-w-4xl mx-auto leading-snug">
            Career Opportunities At Dreamwarez
          </h2>
          
          <p className="text-slate-800 text-lg md:text-xl font-bold max-w-4xl mx-auto mt-6">
            "Your Talent. Our Vision. Let's Build The Future Together."
          </p>

          <p className="text-slate-500 text-[15px] md:text-base max-w-5xl mx-auto mt-6 leading-relaxed">
            At <strong className="font-semibold text-slate-600">Dreamwarez</strong>, we don't just develop software—we develop <strong className="font-semibold text-slate-600">people</strong>. We believe in creating a culture where innovation, collaboration, and growth are at the core of everything we do.
          </p>

          <p className="text-slate-500 text-[15px] md:text-base max-w-5xl mx-auto mt-8 leading-relaxed">
            Whether you're a fresh graduate ready to make your mark, or a seasoned professional looking to elevate your career, Dreamwarez is the place where you can truly thrive.
          </p>

        </section>

        {/* Why Work with Us Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">OUR ENVIRONMENT</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Work with Us?</h2>
              <h3 className="text-slate-700 font-bold text-lg md:text-xl mt-4">
                At Dreamwarez, we don’t just write code — we craft digital experiences that shape the future.
              </h3>
              <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
                If you're passionate about technology, innovation, and making an impact, Dreamwarez is where your career takes flight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up">
                <img src={teamMeeting} alt="Startup Spirit, Enterprise Mindset" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Startup Spirit, Enterprise Mindset</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    We’re agile and innovative, yet robust and scalable.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={officeChair} alt="Continuous Learning" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Continuous Learning</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Workshops, training, certifications, mentorships.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={officeWalk} alt="Diverse Team" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Diverse Team</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    A community of developers, designers, strategists, thinkers.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up">
                <img src={couchWorkspace} alt="Flexible Culture" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Flexible Culture</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Remote options, hackathons, offsites, and more.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <img src={tabletGraphs} alt="Growth Pathways" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Growth Pathways</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Leadership programs, internal promotions, and skill accelerators.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <img src={coffeeDesk} alt="Mission-Driven" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-heading font-bold text-slate-850 text-base">Mission-Driven</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Be part of something meaningful — we're building products that solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship & Training Programs */}
        <section className="py-8 px-6 bg-white">
          <div className="max-w-[900px] mx-auto text-center reveal reveal-fade-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">TRAINING PROGRAMS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-heading mt-4">Internship & Training Programs</h2>
            <p className="text-slate-500 text-[15px] md:text-base mt-4 leading-relaxed">
              Dreamwarez is passionate about shaping the next generation of tech talent.
            </p>
            <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed font-bold">
              Interns get a certificate, letter of recommendation, and a chance for a full-time role!
            </p>
            <p className="text-slate-500 text-sm max-w-4xl mx-auto mt-3 leading-relaxed">
              We offer 3- to 6-month paid internship programs in: Web Development (Python, PHP, HTML/CSS), Mobile App Development (Flutter, iOS, Android), Cybersecurity & Digital Forensics, Business Analysis & Project Coordination.
            </p>
          </div>
        </section>

        {/* Why Work with Dreamwarez Section */}
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[980px] mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">WHY DREAMWAREZ</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Why Work with Dreamwarez?</h2>
            <h3 className="text-slate-700 font-bold text-lg md:text-xl mt-4">
              We're a company that invests in your growth.
            </h3>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto mb-12">
              Be part of projects that solve real-world challenges across industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Fast-paced learning environment</span>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Work with modern tech stack</span>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Fun, friendly and flexible work culture</span>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs">
                <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Performance bonuses and growth paths</span>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-center shadow-xs md:col-span-2 lg:col-span-1">
                <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                <span className="text-sm leading-snug text-slate-600 font-bold">Work that actually matters to real clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ready To Join Us Form Section */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[700px] mx-auto text-center mb-10 reveal reveal-fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Ready To Join Us?</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
              Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.
            </p>
            <p className="text-slate-500 mt-3 text-sm md:text-base">Please fill in your details below</p>
          </div>

          <div className="max-w-[700px] mx-auto bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 reveal reveal-fade-up">
            {isSubmitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 text-center">
                <span className="text-5xl mb-4 block">🎉</span>
                <h4 className="font-bold text-teal-800 font-heading text-xl">Application Submitted!</h4>
                <p className="text-teal-600 text-sm mt-2 leading-relaxed">
                  Thank you, {name}. We have received your application and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Name</label>
                  <input 
                    type="text" required value={name} onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Email Address</label>
                  <input 
                    type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Phone Number</label>
                  <input 
                    type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Position Applying For</label>
                  <textarea 
                    value={selectedJob} onChange={e => setSelectedJob(e.target.value)} rows="4"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 transition-all resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 mb-2 block">Upload your CV Here</label>
                  <div className="flex items-center gap-4">
                    <label className="flex-shrink-0 bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-sm font-semibold py-2.5 px-6 rounded-lg cursor-pointer transition-colors shadow-sm">
                      Choose File
                      <input type="file" onChange={handleFileUpload} className="hidden" />
                    </label>
                    <span className="text-sm text-slate-500 truncate">
                      {fileName ? fileName : "No file chosen"}
                    </span>
                  </div>
                  {isUploading && (
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3 max-w-xs">
                      <div className="bg-[#0EA5E9] h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}
                </div>

                {/* Simulated reCAPTCHA */}
                <div className="bg-slate-50 border border-slate-200 rounded-md p-3 flex items-center justify-between w-full max-w-[320px] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-white border-2 border-slate-300 rounded-sm cursor-pointer flex items-center justify-center hover:shadow-inner transition-all">
                      <input type="checkbox" required className="opacity-0 absolute w-7 h-7 cursor-pointer peer" />
                      <svg className="w-5 h-5 text-green-600 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[14px] text-slate-700">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center pr-2">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 7.732 6.268 14 14 14 7.732 0 14-6.268 14-14C30 8.268 23.732 2 16 2zm0 25.55c-6.38 0-11.55-5.17-11.55-11.55S9.62 4.45 16 4.45c3.19 0 6.08 1.29 8.16 3.38l-3.23 3.23c-1.27-1.27-3.03-2.06-4.93-2.06-3.86 0-7 3.14-7 7s3.14 7 7 7c3.42 0 6.27-2.45 6.87-5.69h-6.87v-4.55h11.58c.11.73.17 1.48.17 2.25 0 6.38-5.17 11.55-11.55 11.55z" fill="#4285F4"/>
                    </svg>
                    <span className="text-[8px] text-slate-500 mt-1 tracking-wider">reCAPTCHA</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    support CV
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Connect with us details */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-slate-850 font-heading">Connect with us</h2>
            <p className="text-slate-555 mt-4 text-base">Whether you're just starting your career or looking to take the next big step, we offer a place where your skills, creativity, and ambition will be valued and nurtured.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
              <a href="mailto:jobs@dreamwarez.in" className="block bg-slate-50 border border-slate-200 p-6 rounded-2xl w-full max-w-xs text-center shadow-xs hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1">EMAIL APPLICATIONS</span>
                <span className="font-bold text-slate-800 group-hover:text-blue-600 text-sm transition-colors">jobs@dreamwarez.in</span>
              </a>

              <a href="https://wa.me/919130081817" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 border border-slate-200 p-6 rounded-2xl w-full max-w-xs text-center shadow-xs hover:shadow-md hover:border-green-200 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.87 5.83L3 22l4.31-1.13A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.5 14c-.2.57-1.14 1.1-1.57 1.15-.4.04-.93.12-2.83-.67-2.3-1-3.8-3.34-3.92-3.48-.12-.15-.94-1.25-.94-2.38 0-1.12.58-1.67.79-1.9.2-.21.43-.27.57-.27.15 0 .29 0 .41.01.13.01.3-.05.47.36.17.43.59 1.44.64 1.55.05.1.09.23.01.38-.08.15-.12.25-.24.38-.11.13-.24.29-.33.39-.11.11-.23.23-.1.45.13.21.57.94 1.23 1.52.85.75 1.55.98 1.76 1.09.21.11.33.09.46-.05.13-.15.55-.65.7-.87.15-.22.3-.18.5-.1.2.08 1.27.6 1.48.7.22.11.36.17.41.27.05.1.05.58-.15 1.15z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block mb-1">WHATSAPP HIRING</span>
                <span className="font-bold text-slate-800 group-hover:text-green-600 text-sm transition-colors">+91 9130081817</span>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-slate-100 text-center">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading italic max-w-3xl mx-auto leading-relaxed">
              “At Dreamwarez, we don’t just build software—we build careers.”
            </h2>
            <div className="mt-8">
              <a 
                href="/contact/" 
                className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-extrabold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all inline-block hover:scale-[1.02] cursor-pointer"
              >
                apply job now
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}
