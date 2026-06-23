import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const LoginPage = lazy(() => import('./pages/subpages/LoginPage').then(module => ({ default: module.LoginPage })));
const ContactPage = lazy(() => import('./pages/subpages/ContactPage').then(module => ({ default: module.ContactPage })));
const AboutUsPage = lazy(() => import('./pages/subpages/AboutUsPage').then(module => ({ default: module.AboutUsPage })));
const TeamDreamwarezsPage = lazy(() => import('./pages/subpages/TeamDreamwarezsPage').then(module => ({ default: module.TeamDreamwarezsPage })));
const OurSoftwaresPage = lazy(() => import('./pages/subpages/OurSoftwaresPage').then(module => ({ default: module.OurSoftwaresPage })));
const MediaAnimationPage = lazy(() => import('./pages/subpages/MediaAnimationPage').then(module => ({ default: module.MediaAnimationPage })));
const ErpPage = lazy(() => import('./pages/subpages/ErpPage').then(module => ({ default: module.ErpPage })));
const CrmPage = lazy(() => import('./pages/subpages/CrmPage').then(module => ({ default: module.CrmPage })));
const PurchaseManagementPage = lazy(() => import('./pages/subpages/PurchaseManagementPage').then(module => ({ default: module.PurchaseManagementPage })));
const WarehouseStockManagementPage = lazy(() => import('./pages/subpages/WarehouseStockManagementPage').then(module => ({ default: module.WarehouseStockManagementPage })));
const AccountingPage = lazy(() => import('./pages/subpages/AccountingPage').then(module => ({ default: module.AccountingPage })));
const MrpPage = lazy(() => import('./pages/subpages/MrpPage').then(module => ({ default: module.MrpPage })));
const SalesManagementPage = lazy(() => import('./pages/subpages/SalesManagementPage').then(module => ({ default: module.SalesManagementPage })));
const BusinessIntelligencePage = lazy(() => import('./pages/subpages/BusinessIntelligencePage').then(module => ({ default: module.BusinessIntelligencePage })));
const EnterpriseSocialNetworkPage = lazy(() => import('./pages/subpages/EnterpriseSocialNetworkPage').then(module => ({ default: module.EnterpriseSocialNetworkPage })));
const HumanResourcesPage = lazy(() => import('./pages/subpages/HumanResourcesPage').then(module => ({ default: module.HumanResourcesPage })));
const ProjectManagementPage = lazy(() => import('./pages/subpages/ProjectManagementPage').then(module => ({ default: module.ProjectManagementPage })));
const PointOfSalePage = lazy(() => import('./pages/subpages/PointOfSalePage').then(module => ({ default: module.PointOfSalePage })));
const DigitalMarketingPage = lazy(() => import('./pages/subpages/DigitalMarketingPage').then(module => ({ default: module.DigitalMarketingPage })));
const OurAppsPage = lazy(() => import('./pages/subpages/OurAppsPage').then(module => ({ default: module.OurAppsPage })));
const CareerOpportunitiesPage = lazy(() => import('./pages/subpages/CareerOpportunitiesPage').then(module => ({ default: module.CareerOpportunitiesPage })));
const ServicesDirectoryPage = lazy(() => import('./pages/subpages/ServicesDirectoryPage').then(module => ({ default: module.ServicesDirectoryPage })));
const CustomSoftwarePage = lazy(() => import('./pages/subpages/CustomSoftwarePage').then(module => ({ default: module.CustomSoftwarePage })));
const QualityConstructionPage = lazy(() => import('./pages/subpages/QualityConstructionPage').then(module => ({ default: module.QualityConstructionPage })));
const AndroidAppPage = lazy(() => import('./pages/subpages/AndroidAppPage').then(module => ({ default: module.AndroidAppPage })));
const IosAppPage = lazy(() => import('./pages/subpages/IosAppPage').then(module => ({ default: module.IosAppPage })));
const WebsiteDevelopmentPage = lazy(() => import('./pages/subpages/WebsiteDevelopmentPage').then(module => ({ default: module.WebsiteDevelopmentPage })));
const CybersecurityPage = lazy(() => import('./pages/subpages/CybersecurityPage').then(module => ({ default: module.CybersecurityPage })));
const ArVrPage = lazy(() => import('./pages/subpages/ArVrPage').then(module => ({ default: module.ArVrPage })));
const PolicyPage = lazy(() => import('./pages/subpages/PolicyPage').then(module => ({ default: module.PolicyPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-900 text-purple-400 font-bold">Loading Experience...</div>}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact/" replace />} />
        
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate to="/login/" replace />} />
        
        <Route path="/about-us/" element={<AboutUsPage />} />
        <Route path="/about-us" element={<Navigate to="/about-us/" replace />} />
        <Route path="/about-us/team-dreamwarezs/" element={<TeamDreamwarezsPage />} />
        <Route path="/about-us/team-dreamwarezs" element={<Navigate to="/about-us/team-dreamwarezs/" replace />} />

        <Route path="/our-softwares/" element={<OurSoftwaresPage />} />
        <Route path="/our-softwares" element={<Navigate to="/our-softwares/" replace />} />

        <Route path="/media-animation/" element={<MediaAnimationPage />} />
        <Route path="/media-animation" element={<Navigate to="/media-animation/" replace />} />

        {/* ERP Modules */}
        <Route path="/erp/" element={<ErpPage />} />
        <Route path="/erp" element={<Navigate to="/erp/" replace />} />

        <Route path="/crm/" element={<CrmPage />} />
        <Route path="/crm" element={<Navigate to="/crm/" replace />} />

        {/* Nested ERP Modules under /erp/ */}
        <Route path="/erp/purchase-management/" element={<PurchaseManagementPage />} />
        <Route path="/erp/purchase-management" element={<Navigate to="/erp/purchase-management/" replace />} />
        <Route path="/purchase-management/" element={<Navigate to="/erp/purchase-management/" replace />} />
        <Route path="/purchase-management" element={<Navigate to="/erp/purchase-management/" replace />} />

        <Route path="/erp/warehouse-stock-management/" element={<WarehouseStockManagementPage />} />
        <Route path="/erp/warehouse-stock-management" element={<Navigate to="/erp/warehouse-stock-management/" replace />} />
        <Route path="/warehouse-stock-management/" element={<Navigate to="/erp/warehouse-stock-management/" replace />} />
        <Route path="/warehouse-stock-management" element={<Navigate to="/erp/warehouse-stock-management/" replace />} />

        <Route path="/erp/accounting/" element={<AccountingPage />} />
        <Route path="/erp/accounting" element={<Navigate to="/erp/accounting/" replace />} />
        <Route path="/accounting/" element={<Navigate to="/erp/accounting/" replace />} />
        <Route path="/accounting" element={<Navigate to="/erp/accounting/" replace />} />

        <Route path="/erp/mrp/" element={<MrpPage />} />
        <Route path="/erp/mrp" element={<Navigate to="/erp/mrp/" replace />} />
        <Route path="/mrp/" element={<Navigate to="/erp/mrp/" replace />} />
        <Route path="/mrp" element={<Navigate to="/erp/mrp/" replace />} />

        <Route path="/erp/sales-management/" element={<SalesManagementPage />} />
        <Route path="/erp/sales-management" element={<Navigate to="/erp/sales-management/" replace />} />
        <Route path="/sales-management/" element={<Navigate to="/erp/sales-management/" replace />} />
        <Route path="/sales-management" element={<Navigate to="/erp/sales-management/" replace />} />

        <Route path="/erp/business-management/" element={<BusinessIntelligencePage />} />
        <Route path="/erp/business-management" element={<Navigate to="/erp/business-management/" replace />} />
        <Route path="/business-management/" element={<Navigate to="/erp/business-management/" replace />} />
        <Route path="/business-management" element={<Navigate to="/erp/business-management/" replace />} />

        <Route path="/erp/enterprise-social-network/" element={<EnterpriseSocialNetworkPage />} />
        <Route path="/erp/enterprise-social-network" element={<Navigate to="/erp/enterprise-social-network/" replace />} />
        <Route path="/enterprise-social-network/" element={<Navigate to="/erp/enterprise-social-network/" replace />} />
        <Route path="/enterprise-social-network" element={<Navigate to="/erp/enterprise-social-network/" replace />} />

        <Route path="/human-resources/" element={<HumanResourcesPage />} />
        <Route path="/human-resources" element={<Navigate to="/human-resources/" replace />} />

        <Route path="/project-management/" element={<ProjectManagementPage />} />
        <Route path="/project-management" element={<Navigate to="/project-management/" replace />} />

        <Route path="/point-of-sale/" element={<PointOfSalePage />} />
        <Route path="/point-of-sale" element={<Navigate to="/point-of-sale/" replace />} />

        {/* Services & Mobile Apps */}
        <Route path="/digital-marketing/" element={<DigitalMarketingPage />} />
        <Route path="/digital-marketing" element={<Navigate to="/digital-marketing/" replace />} />

        <Route path="/our-apps/" element={<OurAppsPage />} />
        <Route path="/our-apps" element={<Navigate to="/our-apps/" replace />} />

        <Route path="/career-opportunities/" element={<CareerOpportunitiesPage />} />
        <Route path="/career-opportunities" element={<Navigate to="/career-opportunities/" replace />} />

        <Route path="/services/" element={<ServicesDirectoryPage />} />
        <Route path="/services" element={<Navigate to="/services/" replace />} />

        <Route path="/customised-software-development/" element={<CustomSoftwarePage />} />
        <Route path="/customised-software-development" element={<Navigate to="/customised-software-development/" replace />} />

        <Route path="/qualityconstruction-app/" element={<QualityConstructionPage />} />
        <Route path="/qualityconstruction-app" element={<Navigate to="/qualityconstruction-app/" replace />} />

        <Route path="/android-app/" element={<AndroidAppPage />} />
        <Route path="/android-app" element={<Navigate to="/android-app/" replace />} />

        <Route path="/ios-app/" element={<IosAppPage />} />
        <Route path="/ios-app" element={<Navigate to="/ios-app/" replace />} />

        <Route path="/website-development/" element={<WebsiteDevelopmentPage />} />
        <Route path="/website-development" element={<Navigate to="/website-development/" replace />} />

        <Route path="/cybersecurity-digital-forensics/" element={<CybersecurityPage />} />
        <Route path="/cybersecurity-digital-forensics" element={<Navigate to="/cybersecurity-digital-forensics/" replace />} />

        <Route path="/ar-vr/" element={<ArVrPage />} />
        <Route path="/ar-vr" element={<Navigate to="/ar-vr/" replace />} />

        {/* Policies */}
        <Route path="/privacy-policy/" element={<PolicyPage title="Privacy Policy" slug="privacy-policy" />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy-policy/" replace />} />

        <Route path="/terms-and-condition/" element={<PolicyPage title="Terms &amp; Conditions" slug="terms-and-condition" />} />
        <Route path="/terms-and-condition" element={<Navigate to="/terms-and-condition/" replace />} />

        <Route path="/refund-policy/" element={<PolicyPage title="Refund Policy" slug="refund-policy" />} />
        <Route path="/refund-policy" element={<Navigate to="/refund-policy/" replace />} />

        <Route path="/cancellation-policy/" element={<PolicyPage title="Cancellation Policy" slug="cancellation-policy" />} />
        <Route path="/cancellation-policy" element={<Navigate to="/cancellation-policy/" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
