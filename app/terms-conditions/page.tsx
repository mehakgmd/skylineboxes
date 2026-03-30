"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const sections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.`,
  },
  {
    id: "use-of-site",
    title: "Use of the Site",
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.\n\nYou must not misuse our website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorized access to our website, the server on which our website is stored or any server, computer or database connected to our website.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of this website or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of this website, with copyright authorship for this collection by this website, and protected by international copyright laws.\n\nYou may not reproduce, duplicate, copy, sell, resell or exploit any portion of the service, use of the service, or access to the service without express written permission by us.`,
  },
  {
    id: "disclaimer-of-warranties",
    title: "Disclaimer of Warranties",
    content: `This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available are free of viruses or other harmful components.\n\nWe make no warranties or representations about the accuracy or completeness of this site's content or the content of any sites linked to this site and assumes no liability or responsibility for any errors or omissions in the content of this site.`,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: `In no event shall we be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this website, even if advised of the possibility of such damage.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location. Any dispute arising out of or in connection with these terms, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration.`,
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: `We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the site after changes become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the website.`,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: `If there are any questions regarding these terms and conditions, please call 1-800-725-9660 or email sales@example.com for assistance.`,
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      const sectionEls = sections.map((s) => document.getElementById(s.id));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-1 transition-all duration-150" style={{ width: `${scrollProgress}%`, backgroundColor: "#e0c112" }} />

      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #e0c112 50%, #C9A100 100%)" }}>
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-10" style={{ background: "#ffffff" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5" style={{ background: "#ffffff" }} />
          {/* Wavy lines */}
          <svg className="absolute top-6 right-0 w-64 opacity-40" viewBox="0 0 300 80" fill="none">
            <path d="M0 40 Q30 10 60 40 Q90 70 120 40 Q150 10 180 40 Q210 70 240 40 Q270 10 300 40" stroke="#ffffff" strokeWidth="3" fill="none" />
            <path d="M0 55 Q30 25 60 55 Q90 85 120 55 Q150 25 180 55 Q210 85 240 55 Q270 25 300 55" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-6 left-0 w-64 opacity-30" viewBox="0 0 300 80" fill="none">
            <path d="M0 40 Q30 10 60 40 Q90 70 120 40 Q150 10 180 40 Q210 70 240 40 Q270 10 300 40" stroke="#ffffff" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase" style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "#ffffff", fontFamily: "sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#ffffff" }} />
            Legal Document
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ color: "#ffffff" }}>
            Terms & Conditions
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif" }}>
            Last Updated: <span style={{ color: "#ffffff", fontWeight: "600" }}>March 23, 2023</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5" style={{ fontFamily: "sans-serif" }}>On This Page</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200"
                    style={{
                      fontFamily: "sans-serif",
                      backgroundColor: activeSection === s.id ? "rgba(224,193,18,0.1)" : "transparent",
                      color: activeSection === s.id ? "#b8990d" : "#6b7280",
                      fontWeight: activeSection === s.id ? "600" : "400",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all"
                      style={{ backgroundColor: activeSection === s.id ? "#e0c112" : "#d1d5db" }}
                    />
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Callout card */}
              <div className="mt-10 rounded-2xl p-5 border" style={{ borderColor: "rgba(224,193,18,0.3)", backgroundColor: "rgba(224,193,18,0.04)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "#e0c112" }}>
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700 mb-1" style={{ fontFamily: "sans-serif" }}>Questions?</p>
                <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "sans-serif" }}>We're here to help with any concerns about our terms.</p>
                <a href="tel:18007259660" className="text-xs font-semibold" style={{ color: "#b8990d", fontFamily: "sans-serif" }}>
                  1-800-725-9660 →
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 max-w-3xl">
            {/* Intro */}
            <div className="mb-12 p-8 rounded-2xl border-l-4" style={{ borderLeftColor: "#e0c112", backgroundColor: "#fafaf7" }}>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Please read these Terms and Conditions carefully before using our website. These terms govern your access to and use of our services, and constitute a legally binding agreement between you and our company.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                By accessing or using our website, you confirm that you are at least 18 years of age, have read and understood these terms, and agree to be bound by them. If you are using the site on behalf of an organization, you represent that you have authority to bind that organization to these terms.
              </p>
            </div>

            {/* Notice banner */}
            <div className="mb-12 flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "rgba(224,193,18,0.08)", border: "1px solid rgba(224,193,18,0.25)" }}>
              <div className="flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#b8990d">
                  <path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                These terms may be updated from time to time. Continued use of our website after any changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: "#e0c112", color: "#1a1a1a", fontFamily: "sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "sans-serif" }}>
                      {section.title}
                    </h2>
                  </div>
                  <div className="pl-12">
                    {section.content.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-base mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                  {index < sections.length - 1 && (
                    <div className="mt-10 h-px" style={{ background: "linear-gradient(to right, rgba(224,193,18,0.3), transparent)" }} />
                  )}
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-400 italic" style={{ fontFamily: "sans-serif" }}>Last Updated: March 23, 2023</p>
                   <button
              className="text-md font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center gap-2"
              style={{ backgroundColor: "#e0c112", color: "#FFFFFF", fontFamily: "sans-serif" }}
            >
              <FaPhoneAlt />
              <span>Contact Us</span>
            </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}