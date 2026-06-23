import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';

export function HumanResourcesPage() {
  const [hrSearchQuery, setHrSearchQuery] = useState('');
  const [hrSelectedEmployee, setHrSelectedEmployee] = useState(1);
  const [hrEmployees, setHrEmployees] = useState([
    { id: 1, name: 'Ronit Wagh', role: 'Managing Director', department: 'Management', email: 'ronit@dreamwarez.com', status: 'Active', image: 'RW', contract: 'Permanent' },
    { id: 2, name: 'Kanchan Kate', role: 'Android Developer', department: 'R&D', email: 'kanchan@dreamwarez.com', status: 'Active', image: 'KK', contract: 'Permanent' },
    { id: 3, name: 'Swami Wardule', role: 'Software Developer', department: 'R&D', email: 'swami@dreamwarez.com', status: 'Active', image: 'SW', contract: 'Permanent' },
    { id: 4, name: 'Abhishek Jagzap', role: 'Sales Executive', department: 'Sales', email: 'abhishek@dreamwarez.com', status: 'On Leave', image: 'AJ', contract: 'Permanent' },
    { id: 5, name: 'Disha Khachane', role: 'Software Developer', department: 'R&D', email: 'disha@dreamwarez.com', status: 'Active', image: 'DK', contract: 'Permanent' }
  ]);

  const [hrLeaveRequests, setHrLeaveRequests] = useState([
    { id: 1, employee: 'Abhishek Jagzap', type: 'Paid Vacation', days: 3, status: 'Pending' },
    { id: 2, employee: 'Disha Khachane', type: 'Sick Leave', days: 1, status: 'Pending' }
  ]);

  const [hrLeaveCalendar, setHrLeaveCalendar] = useState([
    { employee: 'Abhishek Jagzap', type: 'Paid Vacation', dates: [12, 13, 14] }
  ]);

  const [hrTimesheets, setHrTimesheets] = useState({
    'Project Phoenix': [8, 8, 8, 4, 0],
    'Internal Maintenance': [0, 0, 0, 4, 8]
  });

  const [hrExpenses, setHrExpenses] = useState([
    { id: 1, description: 'Client Lunch Meeting', category: 'Meals', amount: 85.50, status: 'Approved', employee: 'Ronit Wagh' },
    { id: 2, description: 'Server Hardware SSD', category: 'Equipment', amount: 240.00, status: 'Pending', employee: 'Kanchan Kate' },
    { id: 3, description: 'Travel to Conference', category: 'Travel', amount: 450.00, status: 'Approved', employee: 'Swami Wardule' }
  ]);
  const [hrNewExpense, setHrNewExpense] = useState({ description: '', category: 'Meals', amount: '' });

  const filteredEmployees = hrEmployees.filter(emp => 
    emp.name.toLowerCase().includes(hrSearchQuery.toLowerCase()) || 
    emp.role.toLowerCase().includes(hrSearchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(hrSearchQuery.toLowerCase())
  );

  const selectedEmpDetails = hrEmployees.find(e => e.id === hrSelectedEmployee) || hrEmployees[0];

  const timesheetTotals = Object.keys(hrTimesheets).reduce((acc, proj) => {
    const projTotal = hrTimesheets[proj].reduce((sum, hrs) => sum + hrs, 0);
    return acc + projTotal;
  }, 0);

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Custom Hero Section */}
        <section className="erp-hero-section hr-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-glow-blobs">
            <div className="glow-blob blob-1" style={{ background: 'rgba(59, 130, 246, 0.15)' }}></div>
            <div className="glow-blob blob-2" style={{ background: 'rgba(124, 58, 237, 0.15)' }}></div>
            <div className="glow-blob blob-3" style={{ background: 'rgba(6, 182, 212, 0.12)' }}></div>
          </div>
          <div className="erp-hero-inner">
            <div className="erp-hero-content">
              <div className="erp-pill-badge-new" style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.18)' }}>
                <span>⚡ TALENT ENGINE</span>
              </div>
              <h1 className="erp-hero-title animate-title">
                Human <span className="hr-title-gradient" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Resources</span>
              </h1>
              <p className="erp-hero-subtitle animate-subtitle" style={{ color: '#60a5fa' }}>Manage the most important asset in your company : Employees.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="purchase-intro-section reveal reveal-fade-up" style={{ marginBottom: '60px' }}>
          <div className="section-inner" style={{ textAlign: 'center', maxWidth: '950px', margin: '0 auto' }}>
            <span className="section-kicker" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.18)', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>HRMS SYSTEM</span>
            <p className="purchase-intro-text" style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: '1.7', textAlign: 'justify' }}>
              HRMS Human Resource Software is a widely demanded software designed to streamline and automate diverse HR processes within an organization. It provides a centralized platform for managing employee data, onboarding, recruitment, leave management, time and attendance tracking, training, performance evaluation, and payroll. HRMS Human Resource Software helps in simplifying HR administrative tasks, improves efficiency, and also ensures compliance with labor regulations. It allows HR professionals to access accurate employee information, analyze data and generate reports, to make informed decisions. The software facilitates effective communication, enhances employee engagement, and promotes organizational transparency. We have gained high rising appreciation for its user friendly interface, robust features, and customizable modules, making it a preferred choice for businesses of all sizes.
            </p>
          </div>
        </section>

        {/* Section 1: Manage Your Employees */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Manage Your Employees</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#3b82f6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Keep Your Corporate Directory Structured</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Interactive Employee Directory */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="glass-card hr-directory-widget" style={{ padding: '24px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                
                {/* Search Bar */}
                <input 
                  type="text" 
                  placeholder="Search employees by name, role..."
                  value={hrSearchQuery}
                  onChange={(e) => setHrSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', fontSize: '13.5px', fontWeight: '650', outline: 'none' }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px', minHeight: '260px' }}>
                  {/* Employees list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', maxHeight: '280px', paddingRight: '4px' }}>
                    {filteredEmployees.map(emp => (
                      <div 
                        key={emp.id} 
                        onClick={() => setHrSelectedEmployee(emp.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px',
                          borderRadius: '12px',
                          border: hrSelectedEmployee === emp.id ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid var(--border-glass)',
                          background: hrSelectedEmployee === emp.id ? 'rgba(59, 130, 246, 0.04)' : 'rgba(255,255,255,0.02)',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '11px', flexShrink: 0 }}>
                          {emp.image}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <span style={{ fontSize: '12.5px', fontWeight: '850', color: 'var(--text-primary)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{emp.name}</span>
                          <span style={{ fontSize: '10.5px', color: 'var(--text-secondary)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{emp.role}</span>
                        </div>
                      </div>
                    ))}
                    {filteredEmployees.length === 0 && (
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '20px' }}>No employees found.</span>
                    )}
                  </div>

                  {/* Selected Employee profile details */}
                  <div style={{ borderLeft: '1px solid var(--border-glass)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', flexShrink: 0 }}>
                        {selectedEmpDetails.image}
                      </div>
                      <div>
                        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: '900', color: 'var(--text-primary)' }}>{selectedEmpDetails.name}</h4>
                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{selectedEmpDetails.role}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', marginTop: '10px' }}>
                      <div>
                        <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Department</span>
                        <span style={{ fontWeight: '750', color: 'var(--text-primary)' }}>{selectedEmpDetails.department}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Corporate Email</span>
                        <span style={{ fontWeight: '750', color: 'var(--text-primary)', wordBreak: 'break-all' }}>{selectedEmpDetails.email}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Active Contract</span>
                        <span style={{ fontWeight: '750', color: 'var(--text-primary)' }}>{selectedEmpDetails.contract}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Status</span>
                        <span style={{ 
                          fontWeight: '800', 
                          color: selectedEmpDetails.status === 'Active' ? '#10b981' : '#ef4444',
                          background: selectedEmpDetails.status === 'Active' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          display: 'inline-block'
                        }}>{selectedEmpDetails.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Oversee all important information in your company address book.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Some information are restricted to HR managers, others are public to easily look colleagues.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Record employee contracts and get alerts when they have to be renewed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Leave Management */}
        <section className="sales-page-section-redesign alternate" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Leave Management</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#3b82f6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Manage Holidays, Legal Leaves And Sick Days</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Keep track of vacation day accrued by each employee.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Employees enter their request (paid holidays, sick leave, etc.), for managers to approve and validate. Its all done in just a few clicks.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                The agenda of each employee is updated accordingly.
              </p>
            </div>

            {/* Right Column: Interactive Leave Tracker */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="glass-card hr-leave-widget" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                
                {/* Calendar / Leave schedule */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>JUNE 2026 SCHEDULE</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                      <div key={idx} style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-secondary)' }}>{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const date = i - 0; // offset if needed, let's keep it simple: date 1 to 30
                      if (date < 1 || date > 30) {
                        return <div key={i} style={{ padding: '6px 0' }} />;
                      }
                      // check if any employee has leave booked on this date
                      const leaveBooked = hrLeaveCalendar.find(cal => cal.dates.includes(date));
                      let bgColor = 'transparent';
                      let textColor = 'var(--text-primary)';
                      if (leaveBooked) {
                        bgColor = leaveBooked.type === 'Paid Vacation' ? '#3b82f6' : '#a855f7';
                        textColor = '#fff';
                      }
                      return (
                        <div 
                          key={i} 
                          style={{ 
                            fontSize: '11px', 
                            fontWeight: '700', 
                            padding: '6px 0', 
                            borderRadius: '6px', 
                            background: bgColor, 
                            color: textColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          title={leaveBooked ? `${leaveBooked.employee} - ${leaveBooked.type}` : `June ${date}`}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pending approvals */}
                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>PENDING LEAVE APPROVALS</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {hrLeaveRequests.map(req => (
                      <div key={req.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '8px 12px' }}>
                        <div>
                          <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-primary)' }}>{req.employee}</span>
                          <span style={{ fontSize: '10.5px', color: 'var(--text-secondary)', display: 'block' }}>{req.type} ({req.days} days)</span>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button 
                            onClick={() => {
                              const datesToAdd = req.id === 1 ? [18, 19, 20] : [15];
                              setHrLeaveCalendar(prev => [...prev, { employee: req.employee, type: req.type, dates: datesToAdd }]);
                              setHrLeaveRequests(prev => prev.filter(r => r.id !== req.id));
                            }}
                            style={{ background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', fontSize: '11px', fontWeight: '750', cursor: 'pointer' }}
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => {
                              setHrLeaveRequests(prev => prev.filter(r => r.id !== req.id));
                            }}
                            style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', fontSize: '11px', fontWeight: '750', cursor: 'pointer' }}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                    {hrLeaveRequests.length === 0 && (
                      <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '750', textAlign: 'center', display: 'block', padding: '8px' }}>✓ All requests processed!</span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Track Time And Attendances */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Track Time And Attendances</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#3b82f6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Weekly Or Monthly Time-Sheets With Optional Attendance Tracking</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Interactive Timesheet Table */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="glass-card hr-timesheet-widget" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: '850', color: 'var(--text-primary)' }}>📝 Timesheet Week - June 12</span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6' }}>Total: {timesheetTotals}h</span>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-secondary)' }}>
                      <th style={{ textAlign: 'left', padding: '6px 0', fontSize: '10px', textTransform: 'uppercase' }}>Project Task</th>
                      {['M', 'T', 'W', 'T', 'F'].map(day => (
                        <th key={day} style={{ textAlign: 'center', padding: '6px 0', width: '28px' }}>{day}</th>
                      ))}
                      <th style={{ textAlign: 'right', padding: '6px 0', width: '36px' }}>Tot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(hrTimesheets).map(proj => {
                      const days = hrTimesheets[proj];
                      const projTotal = days.reduce((sum, hrs) => sum + hrs, 0);
                      return (
                        <tr key={proj} style={{ borderBottom: '1px dotted var(--border-glass)' }}>
                          <td style={{ padding: '8px 0', fontWeight: '750', color: 'var(--text-primary)', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{proj}</td>
                          {days.map((hrs, idx) => (
                            <td key={idx} style={{ textAlign: 'center', padding: '8px 0' }}>
                              <input 
                                type="text" 
                                value={hrs} 
                                onChange={(e) => {
                                  const val = parseInt(e.target.value) || 0;
                                  setHrTimesheets(prev => {
                                    const updatedDays = [...prev[proj]];
                                    updatedDays[idx] = val;
                                    return { ...prev, [proj]: updatedDays };
                                  });
                                }}
                                style={{ width: '22px', padding: '2px 0', textAlign: 'center', border: '1px solid var(--border-glass)', borderRadius: '4px', background: 'transparent', color: 'var(--text-primary)', fontSize: '11px', fontWeight: '700', outline: 'none' }}
                              />
                            </td>
                          ))}
                          <td style={{ textAlign: 'right', padding: '8px 0', fontWeight: '800', color: 'var(--text-secondary)' }}>{projTotal}h</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Keep track of the time spent by project, client or task.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                It's easy to record timesheets or check attendances for each employee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Keep Track Of Employee Expenses */}
        <section className="sales-page-section-redesign alternate" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Keep Track Of Employee Expenses</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#3b82f6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Expenses submission and validation flow</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-left" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Get rid of the paper work and follow employee expenses directly in Dreamwarez.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Don't loose time or money by controlling the full flow: expense, validation, reimbursement of employees, posting in the accounting and re-invoicing to customers.
              </p>
            </div>

            {/* Right Column: Interactive Expense claim board */}
            <div className="sales-page-image-col reveal reveal-fade-right">
              <div className="glass-card hr-expense-widget" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                
                {/* Expense list */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>EXPENSE CLAIMS LIST</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '160px', overflowY: 'auto' }}>
                    {hrExpenses.map(exp => (
                      <div key={exp.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '8px 12px' }}>
                        <div>
                          <span style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--text-primary)', display: 'block' }}>{exp.description}</span>
                          <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>By: {exp.employee} • {exp.category}</span>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-primary)' }}>${exp.amount.toFixed(2)}</span>
                          <span style={{ 
                            fontSize: '9.5px', 
                            fontWeight: '800', 
                            background: exp.status === 'Approved' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)',
                            color: exp.status === 'Approved' ? '#10b981' : '#f59e0b',
                            padding: '2px 6px',
                            borderRadius: '4px'
                          }}>{exp.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add expense form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!hrNewExpense.description || !hrNewExpense.amount) return;
                    const newClaim = {
                      id: hrExpenses.length + 1,
                      description: hrNewExpense.description,
                      category: hrNewExpense.category,
                      amount: parseFloat(hrNewExpense.amount) || 0,
                      status: 'Pending',
                      employee: 'Abigail Peterson'
                    };
                    setHrExpenses(prev => [newClaim, ...prev]);
                    setHrNewExpense({ description: '', category: 'Meals', amount: '' });
                  }}
                  style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--text-secondary)', display: 'block' }}>NEW EXPENSE CLAIM</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Description..." 
                      value={hrNewExpense.description}
                      onChange={(e) => setHrNewExpense(prev => ({ ...prev, description: e.target.value }))}
                      style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-primary)', fontSize: '11.5px', outline: 'none' }}
                    />
                    <input 
                      type="number" 
                      step="0.01"
                      placeholder="Amount..." 
                      value={hrNewExpense.amount}
                      onChange={(e) => setHrNewExpense(prev => ({ ...prev, amount: e.target.value }))}
                      style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-primary)', fontSize: '11.5px', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select 
                      value={hrNewExpense.category}
                      onChange={(e) => setHrNewExpense(prev => ({ ...prev, category: e.target.value }))}
                      style={{ flexGrow: 1, padding: '6px', borderRadius: '6px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-primary)', fontSize: '11.5px', fontWeight: '700', outline: 'none' }}
                    >
                      <option value="Meals" style={{ color: '#000' }}>Meals</option>
                      <option value="Travel" style={{ color: '#000' }}>Travel</option>
                      <option value="Equipment" style={{ color: '#000' }}>Equipment</option>
                      <option value="Other" style={{ color: '#000' }}>Other</option>
                    </select>
                    <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}>Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Enterprise Social Network */}
        <section className="sales-page-section-redesign">
          <div className="section-header centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="sales-page-title-new" style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0', color: 'var(--text-primary)' }}>Enterprise Social Network</h2>
            <p className="sales-page-subtitle-new" style={{ fontWeight: '700', color: '#3b82f6', fontSize: '16px', marginTop: '8px', marginBottom: '0' }}>Collaborate Across Departments, Geographies And Business Applications</p>
          </div>

          <div className="sales-page-grid-redesign" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left Column: Mini social collaborative widget */}
            <div className="sales-page-image-col reveal reveal-fade-left">
              <div className="glass-card hr-social-feed" style={{ padding: '20px', borderRadius: '24px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px' }}>
                  📢 COMPANY BULLETIN BOARD
                </div>
                
                {/* Feed post 1 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '10px', display: 'flex', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '10px', flexShrink: 0 }}>HR</div>
                  <div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '10.5px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>HR Announcements</span>
                      <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>• Today</span>
                    </div>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "Welcome to our new team member, Swami Wardule, who joins us as a Software Developer today! Feel free to reach out and say hi in the R&D channel."
                    </p>
                  </div>
                </div>

                {/* Feed post 2 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '10px', display: 'flex', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '10px', flexShrink: 0 }}>R</div>
                  <div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '10.5px', fontWeight: '800' }}>
                      <span style={{ color: 'var(--text-primary)' }}>Ronit Wagh</span>
                      <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>• Yesterday</span>
                    </div>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "Excellent work team on delivering the E-Invoicing & Receipts milestones. The customer feedback has been absolutely stellar!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="sales-page-text-col reveal reveal-fade-right" style={{ justifyContent: 'center' }}>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Break down information silos.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Share knowledge and best practices among all employees.
              </p>
              <p className="sales-page-desc-new" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                Follow specific people or documents and join groups of interests to share expertise and documents.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Call To Action */}
        <section className="purchase-cta-section reveal reveal-fade-up" style={{ textAlign: 'center', padding: '80px 24px', borderTop: '1px solid var(--border-glass)', background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.02))' }}>
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '60px 40px', borderRadius: '32px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3', margin: '0' }}>
              Power Up Your Workflow With Integrations Into Your Favourite Tools
            </h2>
            <a href="/contact/" className="cta-button" style={{ padding: '14px 36px', fontSize: '16px', marginTop: '10px', background: '#3b82f6', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)' }}>
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
