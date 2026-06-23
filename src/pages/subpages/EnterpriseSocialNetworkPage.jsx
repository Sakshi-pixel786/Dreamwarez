import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

// Social Network custom assets
import socialDevWoman from '../../assets/dev_woman.png';
import socialCoffeeDesk from '../../assets/coffee_desk.png';
import socialInboxEmail from '../../assets/couch_workspace.png';
import socialWorkspaceHands from '../../assets/workspace_hands.png';
import socialCouchWorkspace from '../../assets/couch_workspace.png';
import socialSofaLaptop from '../../assets/sofa_laptop.png';
import socialOutdoorLaptop from '../../assets/outdoor_laptop.png';

export function EnterpriseSocialNetworkPage() {
  const [selectedExpert, setSelectedExpert] = useState('');
  const [expertQuestion, setExpertQuestion] = useState('');
  const [expertMessage, setExpertMessage] = useState('');

  const [subscribedChannels, setSubscribedChannels] = useState({
    'Engineering Team': true,
    'Marketing Updates': false,
    'Company Announcements': true,
    'Sales Pipeline': false
  });
  const [notifications, setNotifications] = useState(3);

  const [inboxEmails, setInboxEmails] = useState([
    { id: 1, from: 'CEO Updates', subject: 'Q3 Targets Reached', done: false },
    { id: 2, from: 'HR Dept', subject: 'New Policy Doc', done: false },
    { id: 3, from: 'System Alert', subject: 'Server Maintenance', done: true }
  ]);

  const [pollVotes, setPollVotes] = useState({
    'Morning Standup at 9AM': 15,
    'Async Status Updates': 28,
    'Weekly Full Sync': 12
  });
  const [hasVoted, setHasVoted] = useState(false);

  const [securityPolicy, setSecurityPolicy] = useState('Invitation');

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSiloSearch = (val) => {
    setSearchQuery(val);
    if (!val) {
      setSearchResults([]);
      return;
    }
    const mockDb = [
      { title: 'Project Alpha Requirements', category: 'Files', snippet: '...breakdown of module requirements for Alpha...' },
      { title: 'Ronit Wagh', category: 'Directory', snippet: 'Managing Director, Dreamwarez...' },
      { title: 'Invoice #1024', category: 'Accounting', snippet: '...payment pending for new server hardware...' },
      { title: 'Customer rules update', category: 'CRM', snippet: '...new automation rules for lead scoring...' }
    ];
    setSearchResults(mockDb.filter(r => r.title.toLowerCase().includes(val.toLowerCase()) || r.snippet.toLowerCase().includes(val.toLowerCase())));
  };

  const [socialFeedLikes, setSocialFeedLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [socialFeedComments, setSocialFeedComments] = useState([
    { author: 'Disha Khachane', text: 'Looks amazing! Great job team. 👏' },
    { author: 'Kanchan Kate', text: 'Love the new spacing.' }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section social-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1" style={{ background: 'rgba(139, 92, 246, 0.15)' }}></div>
            <div className="glow-blob blob-2" style={{ background: 'rgba(236, 72, 153, 0.15)' }}></div>
            <div className="glow-blob blob-3" style={{ background: 'rgba(6, 182, 212, 0.12)' }}></div>
          </div>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.18)' }}>
                <span>⚡ TEAM COLLABORATION</span>
              </div>
              <h1 className="erp-hero-title animate-title">
                Enterprise Social <span className="social-title-gradient" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Network</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: '#c084fc' }}>Engage Your Employees</p>
              <p className="erp-hero-desc animate-subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Collaboration among coworkers, share knowledge across your company, improve the general awareness among your employees.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Engage With Your Coworkers */}
        <section className="social-page-section-redesign">
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#6366f1', background: 'rgba(99, 102, 241, 0.08)', borderColor: 'rgba(99, 102, 241, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>NETWORK</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Engage With Your Coworkers</h2>
              <h3 className="social-page-subtitle-new" style={{ fontWeight: '700', color: '#6366f1', fontSize: '15px', marginTop: '5px' }}>Connect with experts</h3>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Next time you have a question for the marketing, sales, R&D or any other department, don’t send an email blast-post the question to Dreamwarez and get answers from the right persons.
              </p>
            </div>

            <div className="social-page-image-col reveal reveal-fade-right">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialDevWoman} alt="Connect with experts" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 1: Expert Finder */}
                <div className="social-glass-widget" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '260px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }}></span>
                    <span>Ask an Expert</span>
                  </div>
                  <div className="widget-content">
                    <select 
                      className="widget-select"
                      onChange={(e) => setSelectedExpert(e.target.value)}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', marginBottom: '8px', fontSize: '12px', outline: 'none' }}
                    >
                      <option value="" style={{ color: '#000' }}>Select Expert...</option>
                      <option value="Disha" style={{ color: '#000' }}>Disha Khachane (Software Developer)</option>
                      <option value="Ronit" style={{ color: '#000' }}>Ronit Wagh (MD)</option>
                      <option value="Kanchan" style={{ color: '#000' }}>Kanchan Kate (Android Developer)</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="Type question..." 
                      value={expertQuestion}
                      onChange={(e) => setExpertQuestion(e.target.value)}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', marginBottom: '8px', fontSize: '12px', outline: 'none' }}
                    />
                    <button 
                      onClick={() => {
                        if (selectedExpert && expertQuestion) {
                          setExpertMessage(`Question sent to ${selectedExpert}!`);
                          setExpertQuestion('');
                        }
                      }}
                      style={{ width: '100%', padding: '8px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', transition: 'background 0.2s' }}
                    >
                      Post Question
                    </button>
                    {expertMessage && (
                      <p style={{ fontSize: '11px', color: '#10b981', marginTop: '8px', fontWeight: '600', textAlign: 'center' }}>{expertMessage}</p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Follow what Interest you */}
        <section className="social-page-section-redesign alternate" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-image-col reveal reveal-fade-left">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialCoffeeDesk} alt="Follow what interest you" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 2: Channel Subscriptions */}
                <div className="social-glass-widget" style={{ position: 'absolute', top: '20px', right: '20px', width: '260px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b5cf6' }}></span>
                    <span>Information Flow Manager</span>
                  </div>
                  <div className="widget-content">
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {Object.keys(subscribedChannels).map(ch => (
                        <div key={ch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#fff' }}>
                          <span>{ch}</span>
                          <button 
                            onClick={() => {
                              const newSub = { ...subscribedChannels, [ch]: !subscribedChannels[ch] };
                              setSubscribedChannels(newSub);
                              const count = Object.values(newSub).filter(Boolean).length;
                              setNotifications(count * 2 - 1);
                            }}
                            style={{ padding: '4px 10px', background: subscribedChannels[ch] ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: subscribedChannels[ch] ? '#a78bfa' : '#aaa', cursor: 'pointer', fontSize: '11px', transition: 'all 0.2s' }}
                          >
                            {subscribedChannels[ch] ? 'Following' : 'Follow'}
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="widget-stat" style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                      <span className="stat-label" style={{ fontSize: '12px' }}>Feed Alerts</span>
                      <span className="stat-value" style={{ color: '#a78bfa', fontSize: '14px', fontWeight: 'bold' }}>{notifications > 0 ? notifications : 0} Alerts</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="social-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.08)', borderColor: 'rgba(139, 92, 246, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>INFORMATION FLOW</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Follow what Interest you</h2>
              <h3 className="social-page-subtitle-new" style={{ fontWeight: '700', color: '#8b5cf6', fontSize: '15px', marginTop: '5px' }}>Make the information flow across your company</h3>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Want to get informed about new product features, hot deals, bottleneck in projects or any other event? Just follow what interest you to get the information you need; what you need; no more; no less.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Get Things Done */}
        <section className="social-page-section-redesign">
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#ec4899', background: 'rgba(236, 72, 153, 0.08)', borderColor: 'rgba(236, 72, 153, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>EFFICIENCY</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Get Things Done</h2>
              <h3 className="social-page-subtitle-new" style={{ fontWeight: '700', color: '#ec4899', fontSize: '15px', marginTop: '5px' }}>Your inbox is a todo list</h3>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                You can process (not only read) the inbox and easily mark messages for future actions. Start feeling the pleasure of having an empty inbox every day; no more overload of information.
              </p>
            </div>

            <div className="social-page-image-col reveal reveal-fade-right">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialInboxEmail} alt="Get Things Done" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 3: Inbox-to-Todo */}
                <div className="social-glass-widget" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '280px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ec4899' }}></span>
                    <span>Inbox ({inboxEmails.filter(e => !e.done).length} left)</span>
                  </div>
                  <div className="widget-content">
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {inboxEmails.map(email => (
                        <div key={email.id} style={{ padding: '10px', background: email.done ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '6px', opacity: email.done ? 0.5 : 1, transition: 'all 0.3s ease' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>
                            <span>{email.from}</span>
                            {!email.done && <span style={{ color: '#f472b6', fontSize: '10px', textTransform: 'uppercase' }}>New</span>}
                          </div>
                          <p style={{ fontSize: '12px', color: '#ccc', margin: '0' }}>{email.subject}</p>
                          {!email.done && (
                            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                              <button 
                                onClick={() => {
                                  setInboxEmails(inboxEmails.map(e => e.id === email.id ? { ...e, done: true } : e));
                                }}
                                style={{ flex: 1, padding: '4px', background: 'rgba(236,72,153,0.15)', color: '#f472b6', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', transition: 'background 0.2s' }}
                              >
                                Archive
                              </button>
                              <button 
                                onClick={() => {
                                  setInboxEmails(inboxEmails.map(e => e.id === email.id ? { ...e, done: true } : e));
                                  alert(`Message converted to task!`);
                                }}
                                style={{ flex: 1, padding: '4px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', transition: 'background 0.2s' }}
                              >
                                Mark Task
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {inboxEmails.every(e => e.done) && (
                      <p style={{ fontSize: '12px', color: '#10b981', textAlign: 'center', marginTop: '12px', fontWeight: 'bold' }}>🎉 Inbox cleared!</p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Promote Best Practice */}
        <section className="social-page-section-redesign alternate" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-image-col reveal reveal-fade-left">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialWorkspaceHands} alt="Promote Best Practice" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 4: Poll Widget */}
                <div className="social-glass-widget" style={{ position: 'absolute', top: '20px', left: '20px', width: '280px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                    <span>Best Practice Discussion Poll</span>
                  </div>
                  <div className="widget-content">
                    <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '12px' }}>Vote on standard collaborative ideas:</p>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {Object.entries(pollVotes).map(([opt, votes]) => {
                        const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);
                        const percentage = totalVotes ? Math.round((votes / totalVotes) * 100) : 0;
                        return (
                          <div key={opt} style={{ display: 'grid', gap: '4px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#fff' }}>
                              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '180px' }}>{opt}</span>
                              <span style={{ fontWeight: 'bold' }}>{votes} ({percentage}%)</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', cursor: hasVoted ? 'default' : 'pointer' }}
                              onClick={() => {
                                if (!hasVoted) {
                                  setPollVotes({ ...pollVotes, [opt]: votes + 1 });
                                  setHasVoted(true);
                                }
                              }}
                            >
                              <div style={{ height: '100%', background: '#10b981', width: `${percentage}%`, transition: 'width 0.5s ease', borderRadius: '4px' }}></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {hasVoted && (
                      <p style={{ fontSize: '12px', color: '#10b981', marginTop: '12px', textAlign: 'center', fontWeight: 'bold' }}>Thanks for voting!</p>
                    )}
                  </div>
                </div>

              </div>
            </div>

            <div className="social-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>BEST PRACTICE</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Promote Best Practice</h2>
              <h3 className="social-page-subtitle-new" style={{ fontWeight: '700', color: '#10b981', fontSize: '15px', marginTop: '5px' }}>Discussion groups at your fingertips</h3>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Cut back on meeting and email chains by working together in group of interests. Create a group to let people share files, discuss ideas, and vote to promote best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Collaborate Securely */}
        <section className="social-page-section-redesign">
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#eab308', background: 'rgba(234, 179, 8, 0.08)', borderColor: 'rgba(234, 179, 8, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>SECURITY</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Collaborate Securely</h2>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Set the right security policy; private or on invitation only — according to the information sensitivity.
              </p>
            </div>

            <div className="social-page-image-col reveal reveal-fade-right">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialCouchWorkspace} alt="Collaborate Securely" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 5: Security Configurator */}
                <div className="social-glass-widget" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '280px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
                    <span>Security Policy Configurator</span>
                  </div>
                  <div className="widget-content">
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                      {['Private', 'Invitation', 'Public'].map(mode => (
                        <button 
                          key={mode}
                          onClick={() => setSecurityPolicy(mode)}
                          style={{ flex: 1, padding: '6px', background: securityPolicy === mode ? 'rgba(234, 179, 8, 0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: securityPolicy === mode ? '#fde047' : '#aaa', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', transition: 'all 0.2s' }}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#ccc', lineHeight: '1.4' }}>
                      <strong style={{ color: '#fff' }}>Active Status:</strong><br/>
                      {securityPolicy === 'Private' ? '🔒 Restricted only to verified internal team members.' : securityPolicy === 'Invitation' ? '✉️ Membership requires access invitation links.' : '🌐 Public access within internal workspace.'}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Improve Access to Information and Expertise */}
        <section className="social-page-section-redesign alternate" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-image-col reveal reveal-fade-left">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialSofaLaptop} alt="Easily find the information you need" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 6: Silo Searcher */}
                <div className="social-glass-widget" style={{ position: 'absolute', top: '20px', right: '20px', width: '280px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4' }}></span>
                    <span>Cross-System Search Engine</span>
                  </div>
                  <div className="widget-content">
                    <input 
                      type="text" 
                      placeholder="Search CRM, ERP, Files..." 
                      value={searchQuery}
                      onChange={(e) => handleSiloSearch(e.target.value)}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', marginBottom: '12px', fontSize: '12px', outline: 'none' }}
                    />
                    <div style={{ display: 'grid', gap: '6px', maxHeight: '140px', overflowY: 'auto', paddingRight: '4px' }}>
                      {searchResults.map((res, i) => (
                        <div key={i} style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '11px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#22d3ee', fontWeight: 'bold', marginBottom: '4px' }}>
                            <span>{res.title}</span>
                            <span style={{ fontSize: '9px', background: 'rgba(6, 182, 212, 0.2)', padding: '2px 4px', borderRadius: '4px' }}>{res.category}</span>
                          </div>
                          <p style={{ margin: '0', color: '#ccc', lineHeight: '1.3' }}>{res.snippet}</p>
                        </div>
                      ))}
                      {searchQuery && searchResults.length === 0 && (
                        <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', padding: '10px 0' }}>No results. Try typing "Ronit", "rules", or "silos".</p>
                      )}
                      {!searchQuery && (
                        <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', padding: '10px 0' }}>Type keyword above to break information silos.</p>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="social-page-text-col reveal reveal-fade-right">
              <div className="erp-pill-badge-new" style={{ color: '#06b6d4', background: 'rgba(6, 182, 212, 0.08)', borderColor: 'rgba(6, 182, 212, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>KNOWLEDGE MANAGEMENT</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Improve Access to Information and Expertise</h2>
              <h3 className="social-page-subtitle-new" style={{ fontWeight: '700', color: '#06b6d4', fontSize: '15px', marginTop: '5px' }}>Easily find the information you need</h3>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Break down information silos. Search across your existing systems to find the answer and expertise you need to complete projects quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: A Twitter/Facebook-like Network For Your Company */}
        <section className="social-page-section-redesign">
          <div className="social-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="social-page-text-col reveal reveal-fade-left">
              <div className="erp-pill-badge-new" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.08)', borderColor: 'rgba(168, 85, 247, 0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>ENGAGEMENT</div>
              <h2 className="social-page-title-new" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>A Twitter/Facebook-like Network For Your Company</h2>
              <p className="social-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '15px' }}>
                Make every employee feel more connected and engaged with twitter-like features for your own company. Follow people, share best practices, ‘like’ top ideas, etc.
              </p>
            </div>

            <div className="social-page-image-col reveal reveal-fade-right">
              <div className="social-page-image-card" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={socialOutdoorLaptop} alt="Twitter/Facebook-like Network" style={{ width: '100%', display: 'block' }} />
                
                {/* Interactive Widget 7: Company Social Feed */}
                <div className="social-glass-widget" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '280px', padding: '16px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="widget-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>
                    <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a855f7' }}></span>
                    <span>Dreamwarez Live Feed</span>
                  </div>
                  <div className="widget-content">
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff' }}>RW</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>Ronit Wagh</span>
                          <span style={{ fontSize: '10px', color: '#aaa' }}>Just now</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '12px', margin: '8px 0 0', lineHeight: '1.4', color: '#ddd' }}>Deploying the new responsive design system today! Everything aligns horizontally with the Dreamwarez logo. 🚀</p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '11px' }}>
                        <button 
                          onClick={() => {
                            setSocialFeedLikes(hasLiked ? socialFeedLikes - 1 : socialFeedLikes + 1);
                            setHasLiked(!hasLiked);
                          }}
                          style={{ background: 'none', border: 'none', color: hasLiked ? '#d946ef' : '#aaa', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 'bold', transition: 'color 0.2s' }}
                        >
                          <span>❤️</span> {socialFeedLikes}
                        </button>
                        <span style={{ color: '#aaa' }}>💬 {socialFeedComments.length} Comments</span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: '6px', marginTop: '10px', maxHeight: '100px', overflowY: 'auto', paddingRight: '4px' }}>
                      {socialFeedComments.map((c, i) => (
                        <div key={i} style={{ fontSize: '11px', padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: '#fff' }}>
                          <strong style={{ color: '#d946ef' }}>{c.author}:</strong> <span style={{ color: '#ccc' }}>{c.text}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                      <input 
                        type="text" 
                        placeholder="Add comment..."
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        style={{ flex: 1, padding: '6px 8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '11px', outline: 'none' }}
                      />
                      <button 
                        onClick={() => {
                          if (newCommentText.trim()) {
                            setSocialFeedComments([...socialFeedComments, { author: 'You', text: newCommentText }]);
                            setNewCommentText('');
                          }
                        }}
                        style={{ padding: '6px 12px', background: '#a855f7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', transition: 'background 0.2s' }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6366f1', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.18)', padding: '6px 16px', borderRadius: '100px' }}>INTEGRATION CENTER</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power up your workflow with integrations into your favourite tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#6366f1', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)' }}>
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <ChatWidget />
      <SiteFooter />
    </div>
  );
}
