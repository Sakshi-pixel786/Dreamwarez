import React, { useState } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import posHeroBg from '../../assets/pos_hero_bg.png';
import salesDashboard from '../../assets/sales_dashboard.png';
import stickerBrowser from '../../assets/sticker_browser.png';
import stickerTouchscreen from '../../assets/sticker_touchscreen.png';
import stickerPrinter from '../../assets/sticker_printer.png';
import outdoorLaptop from '../../assets/online_offline_moderate.png';
import erpPurchase from '../../assets/ui_simple_moderate.png';
import erpSales from '../../assets/ui_productivity_moderate.png';
import erpWarehouse from '../../assets/ui_search_moderate.png';
import warehouseScaleWms from '../../assets/inventory_mgmt_moderate.png';
import erpMrp from '../../assets/customer_service_moderate.png';
import accountingInvoicing from '../../assets/accounting_invoice_moderate.png';
import unifiedDataDiagram from '../../assets/unified_data_diagram.png.png';
import teamMeeting from '../../assets/team_meeting.png';

export function PointOfSalePage() {
  const [showSandbox, setShowSandbox] = useState(false);
  const [cart, setCart] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [offlineQueue, setOfflineQueue] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const menuItems = [
    { id: 1, name: 'Espresso Macchiato', price: 2.75, category: 'Beverages' },
    { id: 2, name: 'Club Turkey Sandwich', price: 6.50, category: 'Food' },
    { id: 3, name: 'Butter Croissant', price: 3.25, category: 'Food' },
    { id: 4, name: 'Cold Brew Coffee', price: 3.50, category: 'Beverages' },
    { id: 5, name: 'Chocolate Muffin', price: 3.00, category: 'Food' }
  ];

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    if (!isOnline) {
      setOfflineQueue(prev => prev + 1);
      alert('Offline transaction recorded locally in database queue.');
      clearCart();
      return;
    }

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    setReceipt({
      id: Math.floor(Math.random() * 90000) + 10000,
      items: [...cart],
      subtotal,
      tax,
      total,
      time: new Date().toLocaleTimeString()
    });
    clearCart();
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="app-container">
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden h-[60vh] min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${posHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10">
            <div className="max-w-2xl text-left reveal reveal-fade-left" style={{ transitionDuration: '1000ms' }}>
              <span className="inline-block bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4">
                Retail Engine
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Point Of <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Sale</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-4 font-semibold">
                Set up in second, sell in a minute
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: User Friendly Point of Sale */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-right">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-6 py-1.5 rounded-md hover:bg-teal-100 transition-colors cursor-default">CLEAN INTERFACE</span>
              <h2 className="text-3xl px-6 font-extrabold text-slate-800 font-heading mt-4">User Friendly Point of Sale</h2>
              <p className="text-slate-500 px-6 mt-4 leading-relaxed">
                Dreamwarez's Point of Sale introduces a super clean interface with no installation required that runs online and offline on modern hardwares.
              </p>
              <p className="text-slate-500 px-6 mt-3 leading-relaxed">
                It's full integration with the company inventory and accounting, gives you real time statistics and consolidations amongst all shops without the hassle of integrating several applications.
              </p>
            </div>
            
            <div className="reveal reveal-fade-left" style={{ transitionDelay: '200ms' }}>
              <div className="flex justify-center hover:-translate-y-2 transition-transform duration-500">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(20,184,166,0.15)] max-w-[450px]">
                  <img src={salesDashboard} alt="User Friendly Point of Sale screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Work with hardware you already have */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="reveal reveal-fade-up">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">
                DEVICE FLEXIBILITY
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">Work with hardware you already have</h2>
              <h3 className="text-lg font-bold text-slate-500 mt-2">Desktop, laptops, tablets, it run on everything</h3>
            </div>

            {/* 3 Column Hardware Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerBrowser} alt="In your web browser" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">In your web browser</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dreamwarez’s POS is a web application that can run on any device that can display website with little to no setup required.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerTouchscreen} alt="Touchscreen or Keyboard?" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Touchscreen or Keyboard?</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The Point of sale work perfectly on any kind of touch enabled device, whether its multi-touch tablets like an iPad or keyboard less resistive touchscreen terminals.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-center mb-4">
                  <img src={stickerPrinter} alt="Scale and Printers" className="w-24 h-24 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Scale and Printers</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Barcode scanner and printers are supported out of the box with no setup required. Scales, cashboxes, and other peripherals can be used with the proxy API.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Online and Offline */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-7 py-1.5 rounded-md">HYBRID CONNECTIVITY</span>
              <h2 className="text-3xl  font-extrabold text-slate-800 font-heading mt-4">Online and Offline</h2>
              <h3 className="text-lg  font-bold text-slate-700 mt-2">Dreamwarez's POS stays reliable even if your connection isn't</h3>
              <p className="text-slate-500  mt-4 leading-relaxed">
                Deploy new stores with just an internet connection: no installation, no specific hardware required. It works with any iPad, Tablet PC, laptop or industrial POS machine.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                While an internet connection is required to start the Point of Sale, it will stay operational even after a complete disconnection.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-sm max-w-[450px]">
                  <img src={outdoorLaptop} alt="Online Offline simulator screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: A super clean user interface */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="reveal reveal-fade-up">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">
                UI & AESTHETICS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-6">A super clean user interface</h2>
              <h3 className="text-lg font-bold text-slate-500 mt-2">The Point Of Sale software Retailers love to use</h3>
            </div>

            {/* 3 Column Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-4">
                  <img src={erpPurchase} alt="Simple and Beautiful" className="w-full h-auto object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Simple and Beautiful</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Say goodbye to ugly, outdated POS software and enjoy the Dreamwarez web interface designed for modern retailer.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-4">
                  <img src={erpSales} alt="Design for Productivity" className="w-full h-auto object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Design for Productivity</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether it’s for a restaurant or a shop, you can activate the multiple tickets in parallel to not make your customers wait.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center reveal reveal-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="overflow-hidden rounded-lg border border-slate-100 mb-4">
                  <img src={erpWarehouse} alt="Blazing fast search" className="w-full h-auto object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Blazing fast search​</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Scan products, browse through hierarchical categories or get quick information about products with the blasting fast filter across all your products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Integrated Inventory Management */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1.5 rounded-md">INVENTORY CONTROL</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-4">Integrated Inventory Management</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Consolidate all your sales channels in real time: stores, ecommerce, sales teams. Get real time control of the inventory and accurate forecasts to manage procurements.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                A full warehouse management system at your fingertips: get information about products availability, trigger procurement requests, etc.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-sm max-w-[450px]">
                  <img src={warehouseScaleWms} alt="Integrated Inventory screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Delivery Store Customer Services */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1.5 rounded-md">CUSTOMER SERVICE</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-4">Delivery Store Customer Services</h2>
              <h3 className="text-lg font-bold text-slate-700 mt-2">Repairs, Warrantees, Deliveries, etc.</h3>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Give your shoppers a strong experience by integrating in-store customer services. Handle Reparation, track warantees, follow customer claims, plan delivery orders, etc.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-sm max-w-[450px]">
                  <img src={erpMrp} alt="Customer Service screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Invoicing & Accounting Integration */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1.5 rounded-md">LEDGER SYNC</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-4">Invoicing & Accounting Integration</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Produce customer invoices in just a few clicks. Control sales and cash in real time and use Dreamwarez's powerful reporting to make smarter decisions to improve your store's efficiency.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                No more hassle of having to integrate softwares: get all your sales and inventory operations automatically posted in your G/L.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-sm max-w-[450px]">
                  <img src={accountingInvoicing} alt="Accounting integration screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Unified Data Amongst All Shops */}
        <section className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1.5 rounded-md">MULTI-STORE SYNC</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-4">Unified Data Amongst All Shops</h2>
              <h3 className="text-lg font-bold text-slate-700 mt-2">Sync products, price, customers with no efforts</h3>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Get new products, pricing strategies and promotions applied automatically to selected stores. Work on a unified customer base. No complex interface is required to pilot a global strategy amongst all your stores.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                With Dreamwarez as a backend, you have a system proven to be perfectly suitable for small stores or large companies.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-2 rounded-2xl bg-[#F4F7FC] shadow-sm max-w-[450px] w-full overflow-hidden">
                  <div className="relative w-full pb-[80%] rounded-xl overflow-hidden">
                    <img 
                      src={unifiedDataDiagram} 
                      alt="Unified Data diagram" 
                      className="absolute top-0 right-0 w-[165%] h-[120%] max-w-none object-cover object-right" 
                      style={{ transform: 'translate(5%, -10%)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Know Your Customers - IN Store and Out */}
        <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-fade-left lg:order-2">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1.5 rounded-md">CUSTOMER RELATIONS</span>
              <h2 className="text-3xl font-extrabold text-slate-800 font-heading mt-4 font-semibold leading-snug">
                “Know Your Customers - IN Store and Out”
              </h2>
              <h4 className="text-lg font-bold text-slate-700 mt-4">“With our POS, you’re not just selling—you’re learning. Every transaction builds a smarter, more loyal customer base.”</h4>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Successful brands integrates all their customer relationship accross all their channels to develop accurate customer profile and communicate with shoppers as they make buying decisions, in store or online.
              </p>
              <p className="text-slate-500 mt-3 leading-relaxed">
                With Dreamwarez, you get a 360° customer view, including cross-channel sales, interaction history, profiles, and more.
              </p>
            </div>
            
            <div className="reveal reveal-fade-right lg:order-1">
              <div className="flex justify-center">
                <div className="border border-slate-200 p-4 rounded-2xl bg-white shadow-sm max-w-[450px]">
                  <img src={teamMeeting} alt="Customer Insights screenshot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Bottom Call to Action Section */}
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

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
