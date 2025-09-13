
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FormationsSection } from "@/components/FormationsSection";
import { AutomationSection } from "@/components/AutomationSection";
import { TradingAlgoSection } from "@/components/TradingAlgoSection";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <main className="relative">
        <section id="accueil" data-animate className={`transition-all duration-800 ${isVisible.accueil ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <HeroSection />
        </section>

        <section id="apropos" data-animate className={`transition-all duration-1000 delay-140 ${isVisible.apropos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AboutSection />
        </section>

        <section id="formations" data-animate className={`transition-all duration-1000 delay-180 ${isVisible.formations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FormationsSection />
        </section>

        <section id="automatisation" data-animate className={`transition-all duration-1000 delay-220 ${isVisible.automatisation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AutomationSection />
        </section>

        <section id="algo" data-animate className={`transition-all duration-1000 delay-260 ${isVisible.algo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TradingAlgoSection />
        </section>

        <section id="partner" data-animate className={`transition-all duration-1000 delay-300 ${isVisible.partner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {/* Effet de balayage lumineux principal - plus visible */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, transparent 35%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 65%, transparent 100%)',
            width: '300%',
            height: '120%',
            left: '-150%',
            top: '-10%',
            animation: 'light-sweep-smooth 6s ease-in-out infinite alternate',
            transform: 'skewX(-15deg)',
          }}
        />
        
        {/* Deuxième couche pour effet plus diffus */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: 'linear-gradient(100deg, transparent 0%, transparent 30%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.2) 60%, transparent 70%, transparent 100%)',
            width: '250%',
            height: '110%',
            left: '-125%',
            top: '-5%',
            animation: 'light-sweep-smooth 8s ease-in-out infinite alternate-reverse',
            transform: 'skewX(10deg)',
            animationDelay: '1s',
          }}
        />
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
