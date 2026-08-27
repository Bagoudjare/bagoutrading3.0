import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const FloatingScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton dès que l'utilisateur défile de plus de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero") || document.getElementById("accueil");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      id="floating-scroll-top-btn"
      onClick={scrollToTop}
      aria-label="Remonter à l'accueil"
      className="fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/25 border border-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm group flex items-center justify-center cursor-pointer"
      title="Retour en haut (Accueil)"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="sr-only">Remonter à l'accueil</span>
    </button>
  );
};
