import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isSoftwaresActive = location.pathname.startsWith('/our-softwares') ||
                           location.pathname.startsWith('/erp') || 
                           location.pathname.startsWith('/crm') || 
                           location.pathname.startsWith('/human-resources') || 
                           location.pathname.startsWith('/project-management') || 
                           location.pathname.startsWith('/point-of-sale') || 
                           location.pathname.startsWith('/media-animation') || 
                           location.pathname.startsWith('/digital-marketing') || 
                           location.pathname.startsWith('/customised-software-development');

  const isAppsActive = ['/qualityconstruction-app', '/android-app', '/ios-app'].some(p => location.pathname.startsWith(p)) ||
                       (location.pathname.startsWith('/customised-software-development') && !isSoftwaresActive);

  const isServicesActive = ['/website-development', '/cybersecurity-digital-forensics', '/ar-vr'].some(p => location.pathname.startsWith(p));

  const isAboutActive = ['/about-us', '/privacy-policy', '/terms-and-condition', '/refund-policy', '/cancellation-policy'].some(p => location.pathname.startsWith(p));


  // Global Scroll Reveal Animation Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    let observer;
    let revealElements = [];

    const setupObserver = () => {
      observer = new IntersectionObserver(handleIntersection, observerOptions);
      
      // Dynamically add diverse animations to all major sections across the entire site
      const sections = document.querySelectorAll('section:not(.reveal):not([class*="hero"])');
      const animations = ['reveal-fade-up', 'reveal-fade-left', 'reveal-fade-right'];
      
      sections.forEach((el, i) => {
        el.classList.add('reveal');
        el.classList.add(animations[i % animations.length]);
      });

      // Also dynamically animate inner grids
      const grids = document.querySelectorAll('.grid:not(.reveal)');
      grids.forEach((el, i) => {
        el.classList.add('reveal');
        el.classList.add(animations[(i + 1) % animations.length]);
        el.style.transitionDelay = '150ms';
      });

      // Dynamically animate Hero Content Blocks Globally
      const heroContents = document.querySelectorAll('section h1');
      heroContents.forEach(h1 => {
        const container = h1.parentElement;
        if (container && !container.classList.contains('reveal')) {
          container.classList.add('reveal');
          container.classList.add('reveal-fade-up');
          container.style.transitionDuration = '1000ms';
        }
      });

      revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    };

    const timer = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        revealElements.forEach(el => observer.unobserve(el));
      }
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header static-white">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Dreamwarez Logo" />
          <span className="logo-subtitle">The Simplified Software Company</span>
        </Link>

        <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link>
          </li>
          
          <li className="nav-item dropdown-parent">
            <Link to="/our-softwares/" className={`nav-link ${isSoftwaresActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Our Softwares <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu nested-dropdown">
              
              <div className="dropdown-submenu-parent">
                <Link to="/erp/" className="dropdown-item submenu-trigger" onClick={closeMobileMenu}>
                  ERP <span className="submenu-arrow">›</span>
                </Link>
                <div className="dropdown-submenu">
                  <Link to="/erp/purchase-management/" className="dropdown-item" onClick={closeMobileMenu}>Purchase Management</Link>
                  <Link to="/erp/warehouse-stock-management/" className="dropdown-item" onClick={closeMobileMenu}>Warehouse/Stock Management</Link>
                  <Link to="/erp/accounting/" className="dropdown-item" onClick={closeMobileMenu}>Accounting</Link>
                  <Link to="/erp/mrp/" className="dropdown-item" onClick={closeMobileMenu}>MRP</Link>
                  <Link to="/erp/sales-management/" className="dropdown-item" onClick={closeMobileMenu}>Sales Management</Link>
                  <Link to="/erp/business-management/" className="dropdown-item" onClick={closeMobileMenu}>Business Management</Link>
                  <Link to="/erp/enterprise-social-network/" className="dropdown-item" onClick={closeMobileMenu}>Enterprise Social Network</Link>
                </div>
              </div>

              <Link to="/crm/" className="dropdown-item" onClick={closeMobileMenu}>CRM</Link>
              <Link to="/human-resources/" className="dropdown-item" onClick={closeMobileMenu}>Human Resources</Link>
              <Link to="/project-management/" className="dropdown-item" onClick={closeMobileMenu}>Project Management</Link>
              <Link to="/point-of-sale/" className="dropdown-item" onClick={closeMobileMenu}>Point of Sale</Link>
              <Link to="/media-animation/" className="dropdown-item" onClick={closeMobileMenu}>Media & Animation</Link>
              <Link to="/customised-software-development/" className="dropdown-item" onClick={closeMobileMenu}>Customised Software Development</Link>
              <Link to="/digital-marketing/" className="dropdown-item" onClick={closeMobileMenu}>Digital Marketing</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/our-apps/" className={`nav-link ${isAppsActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Our Apps <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/qualityconstruction-app/" className="dropdown-item" onClick={closeMobileMenu}>Construction Quality App</Link>
              <Link to="/android-app/" className="dropdown-item" onClick={closeMobileMenu}>Android App</Link>
              <Link to="/ios-app/" className="dropdown-item" onClick={closeMobileMenu}>iOS App</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/services/" className={`nav-link ${isServicesActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Services <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/website-development/" className="dropdown-item" onClick={closeMobileMenu}>Website Development</Link>
              <Link to="/cybersecurity-digital-forensics/" className="dropdown-item" onClick={closeMobileMenu}>Cybersecurity & Digital Forensics Services</Link>
              <Link to="/ar-vr/" className="dropdown-item" onClick={closeMobileMenu}>AR & VR Solutions</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/about-us/" className={`nav-link ${isAboutActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              About Us <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/about-us/team-dreamwarezs/" className="dropdown-item" onClick={closeMobileMenu}>Team Dreamwarez</Link>
              <Link to="/career-opportunities/" className="dropdown-item" onClick={closeMobileMenu}>Career Opportunities</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/contact/" className={`nav-link ${location.pathname.startsWith('/contact') ? 'active' : ''}`} onClick={closeMobileMenu}>Contact Us</Link>
          </li>
        </nav>

        <div className="header-actions">
          <Link to="/login/" className="login-button" onClick={closeMobileMenu}>Log In</Link>
        </div>
      </div>
    </header>
  );
}
