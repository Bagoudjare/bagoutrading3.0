
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeroSection } from "@/components/HeroSection";
import { VideoPresentationSection } from "@/components/VideoPresentationSection";
import { RoboInteractive } from "@/components/RoboInteractive";
import { BmaeLicensesSection } from "@/components/BmaeLicensesSection";
import PaymentMethods from "@/components/PaymentMethods";
import { ProofPerformanceSection } from "@/components/ProofPerformanceSection";
import Testimonials from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { AutomationSection } from "@/components/AutomationSection";
import { TradingAlgoSection } from "@/components/TradingAlgoSection";
import { BrokersSection } from "@/components/BrokersSection";
import { PartnerCTA } from "@/components/PartnerCTA";
import { Videos } from "@/components/Videos";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";
import { PurchaseNotification } from "@/components/PurchaseNotification";

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Fallback: force all sections to be visible after 500ms in case IntersectionObserver
    // is blocked or fails to trigger (highly common inside preview iFrames)
    const fallbackTimer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach(section => {
        setIsVisible(prev => ({
          ...prev,
          [section.id]: true
        }));
      });
    }, 500);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Navigation />
      
      <main className="relative">
        <section id="hero" data-animate className={`transition-all duration-800 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Hero />
        </section>

        <section id="presentation" data-animate className={`transition-all duration-800 ${isVisible.presentation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <VideoPresentationSection />
        </section>

        <section id="robointeractive" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.robointeractive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <RoboInteractive />
        </section>

        <section id="bmaesection" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.bmaesection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <BmaeLicensesSection />
        </section>

        <section id="paiement" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.paiement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PaymentMethods />
        </section>

        <section id="proof" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.proof ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ProofPerformanceSection />
        </section>

        <section id="testimonials" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Testimonials />
        </section>

        {/* <section id="warning" data-animate className={`transition-all duration-1000 delay-220 ${isVisible.warning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <WarningNoticeSection />
        </section> */}

        <section id="algo" data-animate className={`transition-all duration-1000 delay-260 ${isVisible.algo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TradingAlgoSection />
        </section>

        <section id="apropos" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.apropos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AboutSection />
        </section>

        <section id="brokers" data-animate className={`transition-all duration-1000 delay-550 ${isVisible.brokers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <BrokersSection />
        </section>

        <section id="partner" data-animate className={`transition-all duration-1000 delay-300 ${isVisible.partner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PartnerCTA />
        </section>

        <section id="videos" data-animate className={`transition-all duration-1000 delay-340 ${isVisible.videos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Videos />
        </section>

        <section id="faqsection" data-animate className={`transition-all duration-1000 delay-340 ${isVisible.faqsection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FaqSection />
        </section>

        <section id="contact" data-animate className={`transition-all duration-1000 delay-380 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ContactSection />
        </section>
      </main>

      <Footer />
      {/* <SignupPopup /> */}
      <PurchaseNotification />
    </div>
  );
};

export default Index;
