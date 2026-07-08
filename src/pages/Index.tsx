
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VideoPresentationSection } from "@/components/VideoPresentationSection";
import { RoboInteractive } from "@/components/RoboInteractive";
import { BmaeLicensesSection } from "@/components/BmaeLicensesSection";
import Testimonials from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { AutomationSection } from "@/components/AutomationSection";
import { TradingAlgoSection } from "@/components/TradingAlgoSection";
import { BrokersSection } from "@/components/BrokersSection";
import { PartnerCTA } from "@/components/PartnerCTA";
import { Videos } from "@/components/Videos";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-x-hidden">
      <Navigation />
      
      <main className="relative">
        <section id="accueil" data-animate className={`transition-all duration-800 ${isVisible.accueil ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <HeroSection />
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

        {/* <section id="formations" data-animate className={`transition-all duration-1000 delay-180 ${isVisible.formations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FormationsSection />
        </section> */}

        <section id="automatisation" data-animate className={`transition-all duration-1000 delay-220 ${isVisible.automatisation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AutomationSection />
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

        <section id="contact" data-animate className={`transition-all duration-1000 delay-380 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
