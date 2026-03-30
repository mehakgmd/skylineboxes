"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const sections = [
  {
    id: "information-collection",
    title: "Information Collection",
    content: `We collect information from you when you register on the site, place an order, respond to a survey or communication such as e-mail, or participate in another site feature. When ordering or registering, we may ask you for your name, e-mail address, mailing address, phone number or other information. You may, however, visit our site anonymously. Like many websites, we use "cookies" to enhance your experience and gather information about visitors and visits to our websites. Please refer to the "cookies" section below for information about cookies and how we use them.`,
  },
  {
    id: "information-use",
    title: "Information Use",
    content: `We may use the information we collect from you when you register, purchase products, enter a contest or promotion, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: To personalize your site experience and to allow us to deliver the type of content and product offerings in which you are most interested. To allow us to better service you in responding to your customer service requests. To quickly process your transactions. To administer a contest, promotion, survey or other site feature.\n\nWe do not provide, distribute or sell our website users and customers' information to any other party. The website users and customers' information can be used for marketing and improvement of our website, products, services and promotional offers.`,
  },
  {
    id: "information-protection",
    title: "Information Protection",
    content: `The security of our website users and customers' information is of high priority to us. We take all the reasonable measures against unauthorized access or use of your personal and business information online and offline. Access to website users and customers' information is restricted in our offices. Our site uses the Secure Socket Layer (SSL) encryption, which is the highest form of data security system when information is sent or received over the internet. Although SSL encryption verifies the integrity of information and security of sending/receiving servers, information is not 100% safe over internet. We therefore cannot warrant the security of information you send us over the internet.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Do we use cookies? Yes!\n\nA cookie is actually a set of data programmed and stored on your computer for an extended period of time by our website. A cookie will permit you to use our website as a specific individual and relate to your information in our servers/records. Cookies need to be enabled in order to use our website. You can remove cookies by following instructions in your web browser. Each browser is a little different, so look at your browser Help menu to learn the correct way to modify your cookies. If you turn cookies off, you won't have access to many features that make your site experience more efficient and some of our services will not function properly. However, you can still use many features of our website.`,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: `If there are any questions regarding this privacy policy, please call 1-800-725-9660 or email sales@example.com for assistance.`,
  },
];

export default function PrivacyPolicy() {
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
      <div className="fixed top-0 left-0 z-50 h-1 bg-yellow-400 transition-all duration-150" style={{ width: `${scrollProgress}%`, backgroundColor: "#e0c112" }} />

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
            Privacy Policy
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group"
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
                <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "sans-serif" }}>We're here to help with any privacy concerns.</p>
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
                Visiting our website is an acceptance of agreement to the privacy policy described on this page. We know well and are managing the privacy of users of the website strictly.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                It is assured that any information which is collected for processing of the order or any other query will not be shared or revealed to any third party user, and will cautiously be used only for customer service, fulfilling shipping requests and for contacting the customers for feedback.
              </p>
            </div>

            {/* Disclosure notice */}
            <div className="mb-12 flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "rgba(224,193,18,0.08)", border: "1px solid rgba(224,193,18,0.25)" }}>
              <div className="flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#b8990d">
                  <path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                Please understand we will reveal your information when required by law or to protect our interests and safety, or when you allow us to do so. Your information can also be disclosed during judicial proceedings, court orders, or legal processes.
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