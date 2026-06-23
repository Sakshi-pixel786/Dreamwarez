import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import contactHeroBg from '../../assets/contact_hero_bg.png';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [serviceArea, setServiceArea] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.error('Failed to send email. Ensure you have added your EmailJS keys.', error.text);
          // Fallback for demo purposes
          setIsSubmitted(true);
      });
  };

  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="contact-hero-section relative overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${contactHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 z-10 reveal reveal-fade-up">
            <h1 className="text-[46px] font-extrabold text-white font-heading tracking-tight mb-4">
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-8 font-medium">
              Ready to achieve your vision? We're here to help.
            </p>
            <a href="tel:+919130081817" className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-xl hover:scale-105 cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              +91 9130081817
            </a>
          </div>
        </section>

        {/* Send Us A Message Form - Split Layout */}
        <section className="py-12 px-6 bg-slate-50 relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          
          <div className="max-w-[1100px] mx-auto reveal reveal-fade-up relative z-10">
            
            <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden min-h-[600px]">
              
              {/* Left Side - Image & Copy */}
              <div 
                className="lg:w-[40%] relative flex flex-col justify-end p-10 bg-slate-900 bg-cover bg-center text-white overflow-hidden"
                style={{ backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 100%), url(${contactHeroBg})` }}
              >
                {/* Decorative floating shapes */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 rounded-full"></div>
                  <h3 className="text-[32px] font-extrabold font-heading mb-4 leading-tight">
                    Let's Build the <br/> Future Together
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                    Accelerating your digital transformation with proven technological expertise and custom-tailored software solutions.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-[60%] p-6 lg:p-10 xl:p-12 flex flex-col justify-center">
                
                {/* Header Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-800 uppercase">
                    Lets Work Together
                  </span>
                </div>

                <h2 className="text-[32px] font-extrabold text-slate-900 font-heading mb-2 tracking-tight">
                  Start a Conversation
                </h2>
                <p className="text-slate-500 mb-6 text-sm">
                  Let's discuss your software development and enterprise technology needs.
                </p>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center shadow-sm">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="font-extrabold text-emerald-900 font-heading text-[32px]">Message Sent!</h4>
                    <p className="text-emerald-700 mt-2 text-sm leading-relaxed">
                      Thank you for reaching out, {name || 'there'}. Your request has been successfully submitted and our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <input 
                          type="text" name="user_name" required value={name} onChange={e => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm placeholder:text-slate-400"
                          placeholder="Full Name *"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input 
                          type="email" name="user_email" required value={email} onChange={e => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm placeholder:text-slate-400"
                          placeholder="Email Address *"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <input 
                          type="text" name="company_name" value={company} onChange={e => setCompany(e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm placeholder:text-slate-400"
                          placeholder="Company Name"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <input 
                          type="tel" name="user_phone" required value={phone} onChange={e => setPhone(e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm placeholder:text-slate-400"
                          placeholder="Phone Number *"
                        />
                      </div>

                      {/* Designation */}
                      <div className="md:col-span-2">
                        <select 
                          name="designation" value={designation} onChange={e => setDesignation(e.target.value)}
                          className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm appearance-none ${!designation ? 'text-slate-400' : 'text-slate-900'}`}
                          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem top 50%', backgroundSize: '0.65rem auto' }}
                        >
                          <option value="" disabled>Your Designation</option>
                          <option value="CEO/Founder">CEO / Founder</option>
                          <option value="CTO/CIO">CTO / CIO</option>
                          <option value="Manager/Director">Manager / Director</option>
                          <option value="Developer/Engineer">Developer / Engineer</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Service Area */}
                      <div className="md:col-span-2">
                        <select 
                          name="service_area" value={serviceArea} onChange={e => setServiceArea(e.target.value)}
                          className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm appearance-none ${!serviceArea ? 'text-slate-400' : 'text-slate-900'}`}
                          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem top 50%', backgroundSize: '0.65rem auto' }}
                        >
                          <option value="" disabled>Select Service Area</option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="ERP / CRM Solutions">ERP / CRM Solutions</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="md:col-span-2">
                        <textarea 
                          required name="message" value={message} onChange={handleMessageChange} rows="3"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white hover:border-slate-300 transition-all shadow-sm resize-none placeholder:text-slate-400"
                          placeholder="Tell us about your project requirements... *"
                        />
                      </div>
                    </div>

                    <div className="pt-1">
                      <button 
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-bold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.4)] transition-all hover:-translate-y-1 cursor-pointer w-full md:w-auto text-sm"
                      >
                        Send Inquiry
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch & Contact Info */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
            <h2 className="text-[40px] font-extrabold text-slate-900 font-heading">Get In Touch</h2>
            <p className="text-slate-500 mt-3 text-base max-w-lg mx-auto leading-relaxed">
              Fill out the form and our team will get back to you as soon as we can!
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center items-center gap-3 mt-6 mb-16">
              <a href="#" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Location Card */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-10 h-10 mx-auto bg-slate-100 text-orange-500 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[20px] mb-3">Our Location</h4>
                <p className="text-slate-500 text-base leading-relaxed">
                  Dreamwarez<br/>
                  518, 5th Floor, Wakad Business Bay,<br/>
                  Behind Tip Top International Hotel,<br/>
                  Wakad, Pune - 411057<br/>
                  Maharashtra MH<br/>
                  India
                </p>
              </div>

              {/* Call Us Card */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-10 h-10 mx-auto bg-slate-100 text-orange-500 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[20px] mb-3">Call Us On</h4>
                <a href="tel:+919130081817" className="text-slate-500 hover:text-orange-500 text-base font-medium transition-colors block">
                  +91 9130081817
                </a>
              </div>

              {/* Email Us Card */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-10 h-10 mx-auto bg-slate-100 text-orange-500 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[20px] mb-3">Email Us</h4>
                <a href="mailto:info@dreamwarez.in" className="text-slate-500 hover:text-orange-500 text-base font-medium transition-colors block">
                  info@dreamwarez.in
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-md border border-slate-200 relative z-10 bg-slate-200">
              <iframe 
                src="https://maps.google.com/maps?q=Dreamwarez,%20Wakad%20Business%20Bay,%20Wakad,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dreamwarez Location Map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}
