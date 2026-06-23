import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { ParticleCanvas } from '../../components/layout/ParticleCanvas';
import { ChatWidget } from '../../components/layout/ChatWidget';
import aboutHeroBg from '../../assets/about_hero_bg.png';
import workspaceHands from '../../assets/workspace_hands.png';
import { teamMembers } from '../../data/teamMembers';

export function TeamDreamwarezsPage() {
  const managingDirector = teamMembers[0];
  const employees = teamMembers.slice(1);

  return (
    <div className="app-container" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <ParticleCanvas />
      <div className="gradient-overlay" />
      <SiteHeader />

      <main className="main-content">
        <section
          className="subpage-curved-hero relative overflow-hidden h-[91vh] min-h-[640px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.74), rgba(15, 23, 42, 0.76)), url(${aboutHeroBg})` }}
        >
          <div className="max-w-[1200px] mx-auto px-6 w-full z-10 py-24">
            <div className="max-w-3xl text-left reveal reveal-fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">
                  About Us
                </span>
              </div>
              <h1 className="text-[50px] font-extrabold text-white tracking-tight leading-tight">
                Team <span className="text-[#0EA5E9]">Dreamwarez</span>
              </h1>
              <p className="text-[16px] text-slate-300 mt-5 font-semibold leading-relaxed max-w-2xl">
                Meet the people who turn ideas into practical software, mobile apps, business tools, and client-ready digital solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
            <div className="relative group max-w-[380px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl translate-y-5 translate-x-5 group-hover:bg-blue-600/20 transition-all duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/70 bg-slate-100">
                <img
                  src={managingDirector.src}
                  alt={managingDirector.name}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

            <div className="reveal reveal-fade-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                  Leadership
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-900 leading-tight">
                {managingDirector.name}
              </h2>
              <p className="text-[#0EA5E9] font-bold text-[16px] mt-2">{managingDirector.role}</p>
              <p className="text-slate-500 text-[16px] leading-relaxed mt-6 max-w-xl">
                {managingDirector.bio}
              </p>
              <blockquote className="mt-8 border-l-4 border-orange-500 pl-5 text-slate-700 text-[16px] font-bold italic leading-relaxed">
                "{managingDirector.quote}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                {managingDirector.skills.map((skill) => (
                  <div key={skill.n} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block text-[14px] uppercase tracking-widest text-slate-400 font-bold">{skill.n}</span>
                    <span className="block text-[16px] font-extrabold text-slate-900 mt-2">{skill.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                  Our People
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-900">
                The <span className="text-[#0EA5E9]">Dreamwarez</span> Team
              </h2>
              <p className="text-slate-500 text-[16px] mt-4 leading-relaxed">
                A focused group of developers and builders working across mobile, web, backend systems, dashboards, and business applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {employees.map((member) => (
                <article key={member.name} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="aspect-square bg-slate-100 overflow-hidden">
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[16px] font-extrabold text-slate-900">{member.name}</h3>
                    <p className="text-[#0EA5E9] text-[14px] font-bold uppercase tracking-wide mt-1">{member.role}</p>
                    <p className="text-slate-500 text-[14px] leading-relaxed mt-4">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
                <span className="text-[14px] font-bold text-orange-500 uppercase tracking-widest">
                  Work Together
                </span>
              </div>
              <h2 className="text-[46px] font-extrabold text-slate-900 leading-tight">
                People-first software delivery
              </h2>
              <p className="text-slate-500 text-[16px] leading-relaxed mt-5">
                Our strength is a practical team culture: clear ownership, fast collaboration, and solutions shaped around real business needs.
              </p>
              <div className="mt-8">
                <a href="/contact/" className="inline-flex items-center gap-3 bg-[#0EA5E9] text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg shadow-[#0EA5E9]/30 hover:bg-[#0284c7] hover:scale-[1.02] transition-all duration-300 group">
                  Work With Our Team <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-slate-100">
              <img src={workspaceHands} alt="Dreamwarez team collaboration" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      <SiteFooter variant="black" />
    </div>
  );
}
