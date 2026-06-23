import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

export function OurAppsPage() {
  const [reviews, setReviews] = useState([
    { author: 'Vikram Patel', rating: 5, comment: 'The Construction Quality App saved us days of manual inspection paperwork. Dynamic checklists are excellent!' },
    { author: 'Sarah Jenkins', rating: 4, comment: 'Very clean UI design on both Android and iOS apps. Solid performance.' }
  ]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [appFilter, setAppFilter] = useState('All');

  const addReview = (e) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;
    setReviews([{ author: newAuthor, rating: newRating, comment: newComment }, ...reviews]);
    setNewAuthor('');
    setNewComment('');
    setNewRating(5);
  };

  const apps = [
    { name: 'Construction Quality App', slug: 'qualityconstruction-app', desc: 'Review site structures, quality checklists, and materials audit logs. Built for field inspectors and project managers.', category: 'Business' },
    { name: 'Android App', slug: 'android-app', desc: 'Premium, high-performance native Android apps designed by experts, optimized for scalability and performance.', category: 'Mobile' },
    { name: 'iOS App', slug: 'ios-app', desc: 'Elegant, modern native iOS applications for mobile and iPad devices. Crafted to maximize engagement.', category: 'Mobile' }
  ];

  const filteredApps = appFilter === 'All' ? apps : apps.filter(a => a.category === appFilter);

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Banner */}
        <section className="erp-hero-section apps-hero relative overflow-hidden h-[60vh] min-h-[480px] flex items-center">
          <div className="absolute inset-0 bg-slate-900/60 z-0" />
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl reveal reveal-fade-right" style={{ transitionDelay: '100ms' }}>
              <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                Mobile Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Applications</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Explore Dreamwarez’s diverse range of innovative apps designed to boost productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1080px] mx-auto text-center reveal reveal-fade-up">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            APPLICATIONS DIRECTORY
          </span>
          <h2 className="text-3xl md:text-4xl text-slate-500 font-heading mt-6 max-w-6xl mx-auto leading-snug">
            Innovative Mobile & Web Applications designed to enhance user experience and drive business growth across industries.
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-6xl mx-auto mt-6 leading-relaxed">
            We build tailor-made mobile products and systems. Filter our showcase below to explore active development platforms.
          </p>
        </section>

        {/* Showcase Grid with Category Filters */}
        <section className="py-12 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex justify-center gap-4 mb-10 reveal reveal-fade-up">
              {['All', 'Mobile', 'Business'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setAppFilter(cat)}
                  className={`px-5 py-2 text-xs font-bold rounded-full cursor-pointer transition-all border ${appFilter === cat ? 'bg-blue-600 border-blue-600 text-white shadow-lg hover:scale-105' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:scale-105 hover:shadow-sm'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[260px] reveal reveal-fade-up"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div>
                    <span className="text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase">{app.category}</span>
                    <h4 className="font-heading font-extrabold text-slate-800 text-lg mt-3">{app.name}</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{app.desc}</p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href={`/${app.slug}/`} 
                      className="inline-block bg-slate-50 border border-slate-250 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer hover:scale-105"
                    >
                      Learn More ➔
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive App Store Review Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal reveal-fade-left">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">USER FEEDBACK</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-3">What Our Users Say</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                We continuously iterate on user feedback. Submit your comments and star ratings directly to our mobile product development board.
              </p>
            </div>

            <div className="reveal reveal-fade-right">
              {/* Interactive Review Form & Feed */}
              <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-6 shadow-md">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                  <h4 className="font-heading font-bold text-slate-800">Store Ratings Board</h4>
                  <span className="text-[10px] text-slate-400 font-mono">Real-time Feed</span>
                </div>

                <div className="flex flex-col gap-3 max-h-[160px] overflow-y-auto mb-4 pr-1">
                  {reviews.map((rev, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-150 p-3 rounded-xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-slate-700">{rev.author}</span>
                        <span className="text-xs text-amber-500 font-bold">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={addReview} className="border-t border-slate-100 pt-4 flex flex-col gap-2">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">Submit App Rating</span>
                  <div className="grid grid-cols-3 gap-2">
                    <input 
                      type="text" 
                      placeholder="Your Name..." 
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="col-span-2 text-xs p-2 border border-slate-200 rounded-md bg-transparent text-slate-700 font-bold"
                    />
                    <select 
                      value={newRating} 
                      onChange={(e) => setNewRating(parseInt(e.target.value))}
                      className="col-span-1 text-xs p-2 border border-slate-200 rounded-md bg-transparent text-slate-700 font-bold"
                    >
                      <option value={5}>5 Stars</option>
                      <option value={4}>4 Stars</option>
                      <option value={3}>3 Stars</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Comment..." 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 text-xs p-2 border border-slate-200 rounded-md bg-transparent text-slate-700 font-bold"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 rounded-md cursor-pointer">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
