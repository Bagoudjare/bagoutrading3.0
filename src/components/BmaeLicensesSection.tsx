import { Check, Crown, Clock, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { ChariowWidget } from "@/components/ChariowWidget";

const benefits6m = [
  "Accès complet pendant 6 mois",
  "Toutes les mises à jour incluses",
  "Support et accompagnement",
  "Même logique d'analyse utilisée dans nos opérations",
];

const benefitsLife = [
  "Accès illimité",
  "Toutes les mises à jour futures incluses",
  "Support et accompagnement",
  "Solution idéale pour une utilisation à long terme",
];

// Hook personnalisé pour Chariow
const useChariowWidget = (productId: string) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadChariowWidget = () => {
      const container = containerRef.current;
      if (!container) return;

      // Vider le conteneur
      container.innerHTML = '';

      // Créer le div du widget
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'chariow-widget-container';
      widgetDiv.setAttribute('data-product-id', productId);
      widgetDiv.setAttribute('data-store-domain', 'vhconuvm.mychariow.shop');
      widgetDiv.setAttribute('data-style', 'tap');
      widgetDiv.setAttribute('data-border-style', 'rounded');
      widgetDiv.setAttribute('data-cta-width', 'xs');
      widgetDiv.setAttribute('data-background-color', '#FFFFFF');
      widgetDiv.setAttribute('data-cta-animation', 'none');
      widgetDiv.setAttribute('data-locale', 'fr');
      
      // Définir la couleur selon le produit
      if (productId === 'prd_yh2r36of') {
        widgetDiv.setAttribute('data-primary-color', '#3B82F6');
      } else {
        widgetDiv.setAttribute('data-primary-color', '#8B5CF6');
      }

      container.appendChild(widgetDiv);

      // Charger le CSS si pas déjà fait
      if (!document.querySelector('link[href="https://js.chariowcdn.com/v1/widget.min.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://js.chariowcdn.com/v1/widget.min.css';
        document.head.appendChild(link);
      }

      // Charger et initialiser le script
      const existingScript = document.querySelector('script[src="https://js.chariowcdn.com/v1/widget.min.js"]');
      
      if (existingScript) {
        // Si le script existe déjà, le réexécuter
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://js.chariowcdn.com/v1/widget.min.js';
      script.async = true;
      script.onload = () => {
        // Forcer l'initialisation du widget si nécessaire
        if (window.ChariowWidget) {
          window.ChariowWidget.init();
        }
      };
      document.head.appendChild(script);
    };

    // Petit délai pour s'assurer que le DOM est prêt
    const timeoutId = setTimeout(loadChariowWidget, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [productId]);

  return containerRef;
};

// Composant widget Chariow
const ChariowWidget = ({ productId }: { productId: string }) => {
  const containerRef = useChariowWidget(productId);

  return (
    <div 
      ref={containerRef}
      className="chariow-widget-wrapper min-h-[50px]"
    />
  );
};

export const BmaeLicensesSection = () => {
  return (
    <div id="licence" className="py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-4">
            Offres de lancement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choisissez votre licence BMAE</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Deux formules pour démarrer avec un système de trading automatisé conçu par un trader professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard 6 mois */}
          <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Licence Standard – 6 mois</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900">399,99 $</span>
                <span className="text-lg text-slate-400 line-through">699,99 $</span>
              </div>
              <p className="text-xs text-blue-600 mt-1">Tarif de lancement</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {benefits6m.map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <ChariowWidget />
              <ChariowWidget productId="prd_yh2r36of" />
            </div>
          </div>

          {/* Lifetime */}
          <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-300 shadow-xl shadow-purple-200/50 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
              Recommandée
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Licence à Vie</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900">699,99 $</span>
                <span className="text-lg text-slate-400 line-through">1 999,99 $</span>
              </div>
              <p className="text-xs text-purple-600 mt-1">Tarif de lancement</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {benefitsLife.map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <ChariowWidget productId="prd_sbe22p9f" />
            </div>
          </div>
        </div>

        {/* Évolutif */}
        <div className="mt-10 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-slate-900 font-bold text-lg mb-1">Tarifs évolutifs — Récompensez votre rapidité</h4>
            <p className="text-slate-600 text-sm">
              Le prix augmente de <span className="text-amber-700 font-semibold">+50 $ après chaque vente</span>, jusqu'à atteindre le tarif final :
              <span className="text-slate-900 font-semibold"> 699,99 $</span> (6 mois) et <span className="text-slate-900 font-semibold">1 999,99 $</span> (à vie). Sécurisez votre tarif de lancement dès maintenant.
            </p>
            <p className="text-gray-700 text-sm">
              Une licence achetée, l'indicateur<span className="text-amber-700 font-semibold"> Viking</span> offert
              <span className="text-slate-900 font-semibold"> gratuitement</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ajouter la déclaration TypeScript pour window.ChariowWidget
declare global {
  interface Window {
    ChariowWidget?: {
      init: () => void;
    };
  }
}