import { useEffect } from "react";
import { Check, Crown, Clock, TrendingUp, ShoppingCart, Zap, XCircle, ShieldCheck } from "lucide-react";

const scrollToPayment = () => {
  document.querySelector('#paiement')?.scrollIntoView({ behavior: 'smooth' });
};
const benefits1m = [
  "Accès pendant 1 mois",
  "Utilisation restreinte à 1 seul actif au choix",
  "Toutes les mises à jour incluses",
  "Support et accompagnement inclus",
];
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
export const BmaeLicensesSection = () => {
  useEffect(() => {
    // 1. Charger la feuille de style du widget Chariow si elle n'existe pas déjà
    const linkId = "chariow-widget-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://js.chariowcdn.com/v1/widget.min.css";
      document.head.appendChild(link);
    }

    // 2. Charger le script du widget Chariow de manière asynchrone et différée
    const scriptId = "chariow-widget-js";
    const runScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js.chariowcdn.com/v1/widget.min.js";
      script.async = true;
      document.head.appendChild(script);
    };

    const timer = setTimeout(runScript, 100);
    return () => clearTimeout(timer);
  }, []);

return (
    <div id="licence" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            Offres de lancement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choisissez votre licence BMAE</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Trois formules adaptées à vos objectifs pour démarrer avec un système de trading automatisé conçu par un trader professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Licence 1 mois - Restreinte */}
          <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Licence 1 mois</h3>
                    <span className="text-xs text-amber-400 font-semibold">Version Restreinte</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">99,99 $</span>
                  <span className="text-sm text-slate-400">/ mois</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Utilisation limitée à 1 seul actif</p>
              </div>

              <ul className="space-y-3 mb-6">
                {benefits1m.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-red-400 text-sm font-medium pt-2 border-t border-slate-800">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Aucun remboursement possible</span>
                </li>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center min-h-[50px] mt-4">
              <div
                id="chariow-widget"
                className="w-full"
                data-product-id="prd_4fw86tj0"
                data-store-domain="vhconuvm.mychariow.shop"
                data-style="tap"
                data-border-style="rounded"
                data-cta-width="full"
                data-background-color="#FFFFFF"
                data-cta-animation="none"
                data-locale="fr"
                data-primary-color="#ffcc00"
              />
            </div>
          </div>

          {/* Standard 6 mois */}
          <div className="relative bg-slate-900 border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-blue-500/60 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              6 Mois d'accès
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Licence Standard – 6 mois</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-white">399,99 $</span>
                  <span className="text-lg text-slate-500 line-through">699,99 $</span>
                </div>
                <p className="text-xs text-blue-400 mt-1">Tarif de lancement</p>
              </div>

              <ul className="space-y-3 mb-6">
                {benefits6m.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-emerald-400 text-sm font-semibold pt-2 border-t border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Satisfait ou remboursé au bout de 6 mois</span>
                </li>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center min-h-[50px] mt-4">
              <div
                id="chariow-widget"
                className="w-full"
                data-product-id="prd_yh2r36of"
                data-store-domain="vhconuvm.mychariow.shop"
                data-style="tap"
                data-border-style="rounded"
                data-cta-width="full"
                data-background-color="#FFFFFF"
                data-cta-animation="none"
                data-locale="fr"
                data-primary-color="#ffcc00"
              />
            </div>
          </div>

          {/* Lifetime */}
          <div className="relative bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-blue-950/40 rounded-2xl p-6 sm:p-8 border-2 border-purple-500/40 shadow-2xl shadow-purple-500/10 hover:border-purple-400 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[11px] font-bold px-4 py-0.5 rounded-full uppercase tracking-wider shadow">
              Recommandée • À Vie
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Licence à Vie</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-white">699,99 $</span>
                  <span className="text-lg text-slate-500 line-through">1 999,99 $</span>
                </div>
                <p className="text-xs text-purple-400 mt-1">Tarif de lancement</p>
              </div>

              <ul className="space-y-3 mb-6">
                {benefitsLife.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-emerald-400 text-sm font-semibold pt-2 border-t border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Satisfait ou remboursé au bout de 6 mois</span>
                </li>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center min-h-[50px] mt-4">
              <div
                id="chariow-widget"
                className="w-full"
                data-product-id="prd_sbe22p9f"
                data-store-domain="vhconuvm.mychariow.shop"
                data-style="tap"
                data-border-style="rounded"
                data-cta-width="full"
                data-background-color="#FFFFFF"
                data-cta-animation="none"
                data-locale="fr"
                data-primary-color="#ffcc00"
              />
            </div>
          </div>
        </div>

        {/* Évolutif & Garantie banner */}
        <div className="mt-10 bg-gradient-to-r from-amber-500/10 via-slate-900/80 to-purple-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-1">Tarifs évolutifs — Récompensez votre rapidité</h4>
            <p className="text-slate-300 text-sm">
              Le prix augmente de <span className="text-amber-400 font-semibold">+50 $ après chaque vente</span>, jusqu'à atteindre le tarif final :
              <span className="text-white font-semibold"> 699,99 $</span> (6 mois) et <span className="text-white font-semibold">1 999,99 $</span> (à vie). Sécurisez votre tarif de lancement dès maintenant.
            </p>
            <p className="text-slate-300 text-sm mt-1">
              Une licence achetée = l'indicateur <span className="text-amber-400 font-semibold">Viking</span> offert <span className="text-white font-semibold">gratuitement</span>.
            </p>
            <p className="text-emerald-400 text-xs font-semibold mt-2 flex items-center justify-center md:justify-start gap-1">
              <ShieldCheck className="w-4 h-4" />
              Garantie de 6 mois Satisfait ou Remboursé applicable sur les licences 6 Mois et à Vie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

