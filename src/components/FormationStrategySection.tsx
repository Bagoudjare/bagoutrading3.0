import { useEffect } from "react";
import { GraduationCap, BookOpen, Target, Shield, Sparkles, CheckCircle2, Award, Zap, PlayCircle } from "lucide-react";

export const FormationStrategySection = () => {
  // Charger les ressources Chariow pour le widget d'achat
  useEffect(() => {
    const linkId = "chariow-widget-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://js.chariowcdn.com/v1/widget.min.css";
      document.head.appendChild(link);
    }

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

  const features = [
    {
      icon: BookOpen,
      title: "Méthodologie Détaillée",
      description: "Comprenez la structure du marché et la logique d'analyse sous-jacente au système BMAE (Best Market Analyser Edge).",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Entrées & Sorties Précises",
      description: "Apprenez à valider les signaux d'analyse, éliminer le bruit de marché et exécuter vos trades au meilleur moment.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Money Management Pro",
      description: "Maîtrisez la gestion du risque, le calcul de taille de lot et la préservation de votre capital sur le Forex et les Indices.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: PlayCircle,
      title: "Cas Pratiques & Graphiques",
      description: "Études de cas réels sur MetaTrader 5 montrant l'application exacte de la stratégie en conditions réelles.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div id="formation-strategie" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold mb-6 shadow-xl backdrop-blur-md">
            <GraduationCap className="h-4 w-4 text-amber-400" />
            <span>FORMATION EXCLUSIVE BMAE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Maîtrisez la Stratégie derrière le Système <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">BMAE</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez la méthodologie professionnelle complète qui alimente l'indicateur BMAE. Apprenez à analyser le marché avec clarté, valider les opportunités et appliquer un money management irréprochable.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 mx-auto mt-8 rounded-full" />
        </div>

        {/* Features Grid */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-3 flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Main CTA Card with Chariow Widget */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Accès Immédiat
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Obtenir la Formation Stratégie BMAE
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Rejoignez la formation pour accéder aux cours vidéo complets, guides pratiques et à la communauté d'apprenants.
              </p>
            </div>

            {/* List of included items */}
            {/* <div className="grid sm:grid-cols-2 gap-3 mb-8 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vidéos de cours en HD</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Règles strictes de trading</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gestion du risque & taille de lot</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Accès à vie aux contenus</span>
              </div>
            </div> */}

            {/* Chariow Widget Box */}
            <div className="w-full flex justify-center items-center min-h-[60px] my-4">
              <div
                id="chariow-widget"
                className="w-full max-w-[360px] mx-auto"
                data-product-id="prd_k6jcxe45"
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

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> Validation instantanée
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-400" /> Qualité garantie BMAE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationStrategySection;
