import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import careersHeroBg from '../../assets/careers_hero_bg.png';
const GlobeIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>);
const PenToolIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>);
const MegaphoneIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>);
const MonitorPlayIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/><path d="m10 8 6 4-6 4Z"/></svg>);
const CuboidIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>);
const VideoIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>);

export function MediaAnimationPage() {
  const [showSandbox, setShowSandbox] = useState(false);
  const [activeTab, setActiveTab] = useState('online-presence');
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  const startPlayback = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentFrame(f => {
        if (f >= 120) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return f + 1;
      });
    }, 40);
  };

  const startRender = () => {
    if (isRendering) return;
    setIsRendering(true);
    setRenderProgress(0);
    const interval = setInterval(() => {
      setRenderProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsRendering(false);
          alert('Render complete! Saved output frames to cache.');
          return 100;
        }
        return p + 2;
      });
    }, 60);
  };

  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif", '--font-heading': "'Open Sans', sans-serif", '--font-sans': "'Open Sans', sans-serif" }}>
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${careersHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-right" style={{ transitionDuration: '1000ms' }}>
              <span className="inline-flex items-center gap-2 text-white font-bold text-[14px] uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Creative Studio
              </span>
              <h1 className="text-[50px] font-extrabold text-white font-heading tracking-tight leading-tight">
                Media & <span className="text-blue-400">Animation</span>
              </h1>
              <p className="text-[16px] text-slate-300 mt-4 font-semibold">
                Boost Your Online and Offline Market Presence with Professional Content.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto text-center reveal reveal-fade-up">
        </section>

        {/* Section 1: Social Media Management */}
        <section className="py-2 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="reveal reveal-fade-up">
              <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                PROMOTION LAYERS
              </span>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">Social Media Management</h2>
              <h3 className="text-[16px] font-bold text-slate-500 mt-2">Manage and promote all kind of Social Media Platform</h3>
            </div>

            {/* 3 Column Social Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-right" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <GlobeIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">Online Presence Management</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We handle and maintain your social media.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <PenToolIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">Post Creation</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We create post occasionally and as per your requirement.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-left" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <MegaphoneIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">Campaign Management</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We run ad and marketing campaigns for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 2D and 3D Videos Creation */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="reveal reveal-fade-right">
              <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                VIDEO FABRICATION
              </span>
              <h2 className="text-[40px] font-extrabold text-slate-800 font-heading mt-6">2D and 3D Videos Creation</h2>
              <h3 className="text-[16px] font-bold text-slate-500 mt-2">Animated Videos for Product branding, Tutorials, Company profile, etc</h3>
            </div>

            {/* 3 Column Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-right" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <MonitorPlayIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">2D</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We create 2D ads, tutorials, ex-plainer and videos.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <CuboidIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">3D</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We create 3D company profile, manufacturing processes and working process videos.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-left" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shadow-inner text-orange-500 transition-transform hover:scale-110 border border-purple-100">
                    <VideoIcon />
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-[16px] mb-2">Video Shoots</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We create ads and company profile videos.
                </p>
              </div>
            </div>

            {/* Expandable Animation Sandbox */}
            <div className="mt-16 reveal reveal-fade-left">
              <button 
                onClick={() => setShowSandbox(!showSandbox)}
                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                {showSandbox ? 'Hide Creative Studio' : '🎬 Open Creative Studio Suite'}
              </button>

              {showSandbox && (
                <div className="mt-8 text-left bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg max-w-[1000px] mx-auto animate-fade-in">
                  
                  {/* Top Navigation Tabs */}
                  <div className="flex overflow-x-auto gap-2 pb-4 mb-6 border-b border-slate-100 no-scrollbar">
                    {[
                      { id: 'online-presence', label: 'Online Presence', icon: <GlobeIcon /> },
                      { id: 'post-creation', label: 'Post Creation', icon: <PenToolIcon /> },
                      { id: 'campaign-management', label: 'Ad Campaigns', icon: <MegaphoneIcon /> },
                      { id: '2d-animation', label: '2D Animation', icon: <MonitorPlayIcon /> },
                      { id: '3d-animation', label: '3D Render', icon: <CuboidIcon /> },
                      { id: 'video-shoots', label: 'Video Grading', icon: <VideoIcon /> }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                          activeTab === tab.id 
                            ? 'bg-[#0EA5E9] text-white shadow-md' 
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span className="w-4 h-4 [&>svg]:w-4 [&>svg]:h-4">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[350px]">
                    
                    {/* 1. Online Presence */}
                    {activeTab === 'online-presence' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                          <h4 className="font-heading font-bold text-slate-800 mb-4">Audience Growth</h4>
                          <div className="flex items-end gap-2 h-40 border-b border-l border-slate-200 p-2">
                            {[40, 60, 45, 80, 65, 95, 120].map((h, i) => (
                              <div key={i} className="flex-1 bg-purple-400 rounded-t-sm hover:bg-purple-600 transition-all cursor-pointer" style={{ height: `${(h/120)*100}%` }}></div>
                            ))}
                          </div>
                          <div className="flex justify-between text-[14px] text-slate-400 mt-2 font-bold uppercase">
                            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-center">
                           <div className="text-center mb-6">
                             <div className="text-[40px] font-black text-purple-600 mb-1">+24%</div>
                             <div className="text-[14px] font-bold text-slate-500 uppercase tracking-widest">Engagement Rate</div>
                           </div>
                           <div className="space-y-3">
                             <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">f</div>
                               <div className="flex-1"><div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-blue-500 rounded-full w-[70%]"></div></div></div>
                             </div>
                             <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                               <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">ig</div>
                               <div className="flex-1"><div className="h-2 bg-slate-100 rounded-full w-full"><div className="h-full bg-pink-500 rounded-full w-[85%]"></div></div></div>
                             </div>
                           </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Post Creation */}
                    {activeTab === 'post-creation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[14px] font-bold text-slate-500 mb-2 uppercase">Post Caption</label>
                            <textarea 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] focus:ring-2 focus:ring-purple-500 outline-none resize-none h-24"
                              placeholder="Write a captivating caption..."
                              defaultValue="Excited to announce our new media suite! 🚀 #Creative"
                              id="post-caption-input"
                              onChange={(e) => document.getElementById('post-caption-preview').innerText = e.target.value}
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-[14px] font-bold text-slate-500 mb-2 uppercase">Brand Color</label>
                            <div className="flex gap-2">
                              {['#f43f5e', '#a855f7', '#3b82f6', '#10b981', '#f59e0b'].map(color => (
                                <button 
                                  key={color} 
                                  className="w-8 h-8 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                                  style={{ backgroundColor: color }}
                                  onClick={() => document.getElementById('post-preview-bg').style.backgroundColor = color}
                                ></button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="w-[280px] bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
                            <div id="post-preview-bg" className="h-[200px] bg-purple-500 flex items-center justify-center transition-colors duration-300">
                              <span className="text-white text-[50px] font-black opacity-50">IMAGE</span>
                            </div>
                            <div className="p-4">
                              <div className="flex gap-2 mb-2">
                                <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                <div className="h-3 w-20 bg-slate-200 rounded-full mt-1"></div>
                              </div>
                              <p id="post-caption-preview" className="text-[14px] text-slate-600 font-medium">Excited to announce our new media suite! 🚀 #Creative</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Campaign Management */}
                    {activeTab === 'campaign-management' && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <div>
                            <h4 className="font-bold text-slate-800">Summer Sale Campaign</h4>
                            <span className="text-[14px] text-slate-500">Targeting: 18-35, Tech Enthusiasts</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span id="ad-status-text" className="text-[14px] font-bold text-emerald-500 uppercase">Active</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked onChange={(e) => {
                                const status = document.getElementById('ad-status-text');
                                if(e.target.checked) {
                                  status.innerText = 'Active';
                                  status.className = 'text-[14px] font-bold text-emerald-500 uppercase';
                                } else {
                                  status.innerText = 'Paused';
                                  status.className = 'text-[14px] font-bold text-slate-400 uppercase';
                                }
                              }}/>
                              <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                            </label>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-center">
                            <div className="text-[14px] font-bold text-slate-400 uppercase mb-1">Total Spend</div>
                            <div className="text-[16px] font-black text-slate-800">$1,245<span className="text-[14px] text-slate-400 font-medium">.50</span></div>
                          </div>
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-center">
                            <div className="text-[14px] font-bold text-slate-400 uppercase mb-1">Click-Through</div>
                            <div className="text-[16px] font-black text-purple-600">4.8%</div>
                          </div>
                          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-center">
                            <div className="text-[14px] font-bold text-slate-400 uppercase mb-1">Cost Per Click</div>
                            <div className="text-[16px] font-black text-slate-800">$0.82</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. 2D Animation */}
                    {activeTab === '2d-animation' && (
                      <div className="animate-fade-in flex flex-col gap-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl h-[200px] relative overflow-hidden flex items-center p-4">
                          {/* CSS Animation Target */}
                          <div id="anim-target-2d" className="w-16 h-16 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ease-in-out absolute left-4">
                            2D
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-4 py-2 rounded-lg text-[14px] cursor-pointer shadow-sm"
                            onClick={() => {
                              const el = document.getElementById('anim-target-2d');
                              el.style.left = 'calc(100% - 80px)';
                              el.style.transform = 'rotate(360deg)';
                              el.style.backgroundColor = '#ec4899';
                              setTimeout(() => {
                                el.style.left = '16px';
                                el.style.transform = 'rotate(0deg)';
                                el.style.backgroundColor = '#a855f7';
                              }, 1500);
                            }}
                          >
                            Play 2D Sequence
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 5. 3D Animation (Existing Render Timeline) */}
                    {activeTab === '3d-animation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                        {/* Timeline Scrubber */}
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                          <h4 className="font-heading font-bold text-slate-800 mb-2">3D Render Timelines</h4>
                          <span className="block text-[14px] text-slate-400 mb-4 uppercase">Scrub through animation frames</span>
                          <div className="flex flex-col gap-4">
                            <div className="bg-white border border-slate-200 h-28 rounded-lg flex items-center justify-center relative overflow-hidden shadow-inner">
                              <div className="text-center">
                                <span className="block text-[16px] font-bold text-purple-600">Frame {currentFrame}</span>
                                <span className="text-[14px] text-slate-400">Angle: {(currentFrame * 3) % 360}°</span>
                              </div>
                              <div 
                                className="absolute w-12 h-12 border-2 border-purple-500 bg-purple-50 rounded-lg transition-transform duration-75 shadow-lg"
                                style={{ transform: `rotate(${currentFrame * 3}deg) rotateX(${currentFrame * 2}deg)` }}
                              ></div>
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={startPlayback}
                                disabled={isPlaying}
                                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-4 py-2 rounded-lg text-[14px] cursor-pointer disabled:bg-slate-200"
                              >
                                {isPlaying ? 'Playing...' : 'Play Sequence'}
                              </button>
                              <button 
                                onClick={() => setCurrentFrame(0)}
                                className="border border-slate-250 bg-white hover:bg-slate-50 text-slate-600 font-bold px-4 py-2 rounded-lg text-[14px] cursor-pointer"
                              >
                                Reset
                              </button>
                            </div>
                            <input 
                              type="range" min="0" max="120" value={currentFrame} 
                              onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
                              className="w-full accent-purple-600 cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Render Log Queue */}
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between">
                          <div>
                            <h4 className="font-heading font-bold text-slate-800 mb-2">Render Engine Log</h4>
                            <span className="block text-[14px] text-slate-400 mb-4 uppercase">Track pipeline export jobs</span>
                            <div className="flex flex-col gap-3">
                              <div className="bg-white border border-slate-200 rounded-lg p-3">
                                <div className="flex justify-between items-center text-[14px] text-slate-500 mb-2">
                                  <span>Job: Product_Walkthrough.mp4</span>
                                  <span>{renderProgress}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                  <div className="bg-purple-600 h-full transition-all duration-100" style={{ width: `${renderProgress}%` }}></div>
                                </div>
                              </div>
                              {isRendering && (
                                <div className="font-mono text-[14px] text-slate-400 bg-white border border-slate-150 p-2.5 rounded-lg max-h-[80px] overflow-y-auto">
                                  <div>[INFO] Initializing render engine...</div>
                                  <div>[INFO] Allocating GPU threads...</div>
                                  {renderProgress > 10 && <div>[INFO] Rendered keyframe 1-12...</div>}
                                  {renderProgress > 40 && <div>[INFO] Compositing shadow layers...</div>}
                                  {renderProgress > 80 && <div>[INFO] Writing MPEG container...</div>}
                                </div>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={startRender}
                            disabled={isRendering}
                            className="w-full mt-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-2.5 rounded-lg text-[14px] shadow-sm cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 transition-all"
                          >
                            {isRendering ? 'Rendering Sequence...' : 'Start Job Render'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 6. Video Shoots */}
                    {activeTab === 'video-shoots' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex flex-col">
                           <div id="video-preview-mock" className="flex-1 bg-cover bg-center transition-all duration-100" style={{ backgroundImage: `url(${careersHeroBg})` }}></div>
                           <div className="bg-slate-800 p-3 flex justify-center gap-4 text-white text-[14px]">
                             <span>▶ Play</span><span>⏸ Pause</span><span>⏹ Stop</span>
                           </div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                          <h4 className="font-bold text-slate-800 mb-2">Color Grading</h4>
                          
                          <div>
                            <div className="flex justify-between text-[14px] font-bold text-slate-500 mb-1"><span>Brightness</span></div>
                            <input type="range" min="50" max="150" defaultValue="100" className="w-full accent-purple-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               const filters = el.style.filter || '';
                               el.style.filter = `brightness(${e.target.value}%) sepia(var(--tw-sepia, 0)) saturate(var(--tw-saturate, 100%))`;
                               el.style.setProperty('--tw-brightness', `${e.target.value}%`);
                            }}/>
                          </div>

                          <div>
                            <div className="flex justify-between text-[14px] font-bold text-slate-500 mb-1"><span>Saturation</span></div>
                            <input type="range" min="0" max="200" defaultValue="100" className="w-full accent-purple-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               el.style.filter = `brightness(var(--tw-brightness, 100%)) sepia(var(--tw-sepia, 0)) saturate(${e.target.value}%)`;
                               el.style.setProperty('--tw-saturate', `${e.target.value}%`);
                            }}/>
                          </div>

                          <div>
                            <div className="flex justify-between text-[14px] font-bold text-slate-500 mb-1"><span>Cinematic Look (Sepia)</span></div>
                            <input type="range" min="0" max="100" defaultValue="0" className="w-full accent-purple-600" onChange={(e) => {
                               const el = document.getElementById('video-preview-mock');
                               el.style.filter = `brightness(var(--tw-brightness, 100%)) sepia(${e.target.value}%) saturate(var(--tw-saturate, 100%))`;
                               el.style.setProperty('--tw-sepia', `${e.target.value}%`);
                            }}/>
                          </div>
                          
                          <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 rounded-lg text-[14px] mt-4 transition-colors cursor-pointer" onClick={() => {
                            const el = document.getElementById('video-preview-mock');
                            el.style.filter = 'none';
                            el.style.setProperty('--tw-brightness', '100%');
                            el.style.setProperty('--tw-saturate', '100%');
                            el.style.setProperty('--tw-sepia', '0%');
                            // Reset sliders would need state, but this is a simple mock
                          }}>Reset Grades</button>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
       <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
                Power Up Your Workflow With Integrations Into Your Favourite Tools
              </h2>
              <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#0EA5E9', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)' }}>
                Contact Us
              </a>
            </div>
          </section>
      </main>

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
