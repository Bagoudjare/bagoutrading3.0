import { useEffect } from "react";
import { TrendingUp, Target, Lightbulb } from "lucide-react";
import profile from "@/assets/imgs/profile.png";
import files from "@/assets/files/Reussir_En_Trading-V2.pdf";

export const AboutSection = () => {
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
    <div className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80 backdrop-blur-md shadow-md">
              <h3 className="text-2xl font-bold text-white mb-4">Mon parcours</h3>
              <p className="text-slate-300 leading-relaxed">
                Avec 6 ans d'expérience dans les marchés financiers, j'ai développé une expertise unique dans le trading algorithmique et l'automatisation de stratégies. Ma passion pour l'innovation m'a conduit à créer des solutions sur mesure pour optimiser les performances de trading.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/20">
                <Target className="h-8 w-8 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Ma Mission</h4>
                <p className="text-slate-300 text-sm">Démocratiser le trading professionnel</p>
              </div>
              <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                <Lightbulb className="h-8 w-8 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Ma Vision</h4>
                <p className="text-slate-300 text-sm">L'automatisation au service de tous</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900/40 p-8 rounded-xl border border-slate-800/80 backdrop-blur-md shadow-md">
              <div className="text-center mb-6">
                <div className="w-55 h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-lg border border-slate-700/50">
                  <img src={profile} alt="ma photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-white">Expert Trader Formateur & Programmeur MQL5</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-purple-950/40 rounded-2xl p-8 border border-slate-800/80 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Hey ! Pas de blabla, juste ce qui est nécessaire pour réussir
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Découvrez notre guide exclusif contenant uniquement l'essentiel pour performer, ainsi que la présentation complète de BMAE.
          </p>
          <div className="w-full flex justify-center items-center min-h-[50px] px-2 sm:px-4">
            <div
              id="chariow-widget"
              className="w-full max-w-[340px]"
              data-product-id="prd_2a4vvu"
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
    </div>
  );
};
