import { TrendingUp, Target, Lightbulb } from "lucide-react";
import profile from "@/assets/imgs/profile.png";
import files from "@/assets/files/Reussir_En_Trading-V2.pdf";

export const AboutSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mon parcours</h3>
              <p className="text-slate-600 leading-relaxed">
                Avec 6 ans d'expérience dans les marchés financiers, j'ai développé une expertise unique dans le trading algorithmique et l'automatisation de stratégies. Ma passion pour l'innovation m'a conduit à créer des solutions sur mesure pour optimiser les performances de trading.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-slate-900 font-semibold mb-1">Ma Mission</h4>
                <p className="text-slate-600 text-sm">Démocratiser le trading professionnel</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <Lightbulb className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-slate-900 font-semibold mb-1">Ma Vision</h4>
                <p className="text-slate-600 text-sm">L'automatisation au service de tous</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <img src={profile} alt="ma photo" className="w-full h-95 object-cover " />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Expert Trader Formateur & Programmeur MQL5</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Voici un guide pour vous aider à commencer votre aventure en trading ?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Découvrez les bases solides du trading avec ce guide. Un condensé de mes meilleures stratégies pour bien commencer.
          </p>
          <button 
            onClick={() => window.open("https://vhconuvm.mychariow.shop/prd_2a4vvu/checkout", '_blank')} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            📚 Télécharger le guide
          </button>
        </div>
      </div>
    </div>
  );
};
