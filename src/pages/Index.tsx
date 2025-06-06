
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FormationsSection } from "@/components/FormationsSection";
import { AutomationSection } from "@/components/AutomationSection";
import { TradingAlgoSection } from "@/components/TradingAlgoSection";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <main className="relative">
        <section id="accueil" data-animate className={`transition-all duration-1000 ${isVisible.accueil ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <HeroSection />
        </section>

        <section id="apropos" data-animate className={`transition-all duration-1000 delay-200 ${isVisible.apropos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AboutSection />
        </section>

        <section id="formations" data-animate className={`transition-all duration-1000 delay-300 ${isVisible.formations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FormationsSection />
        </section>

        <section id="automatisation" data-animate className={`transition-all duration-1000 delay-400 ${isVisible.automatisation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AutomationSection />
        </section>

        <section id="algo" data-animate className={`transition-all duration-1000 delay-500 ${isVisible.algo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TradingAlgoSection />
        </section>

        <section id="videos" data-animate className={`transition-all duration-1000 delay-S00 ${isVisible.videos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Videos />
        </section>

        <section id="contact" data-animate className={`transition-all duration-1000 delay-700 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
