
import { useState, useEffect } from "react";
import { TrendingUp, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["accueil", "presentation", "proof", "paiement", "algo", "apropos", "videos", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#accueil", id: "accueil" },
    { label: "Presentation de BMAE", href: "#presentation", id: "presentation" },
    { label: "Licence BMAE", href: "#bmaesection", id: "bmaesection" },
    { label: "Performance", href: "#proof", id: "proof" },
    { label: "Strategie BMAE", href: "#formation-strategie", id: "formation-strategie" },
    { label: "Demo", href: "#algo", id: "algo" },
    { label: "À propos", href: "#apropos", id: "apropos" },
    { label: "Vidéos", href: "#videos", id: "videos" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group cursor-pointer shrink-0" onClick={() => scrollToSection('#accueil')}>
            <TrendingUp className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
            Bagoudjare Trading 3.0
          </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2.5 lg:px-3.5 py-2 rounded-lg text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Medium Screens (MD to XL) Navigation with slightly smaller padding */}
          <div className="hidden md:flex xl:hidden items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>          

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-slate-700/50">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
