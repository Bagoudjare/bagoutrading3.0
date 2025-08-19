
import { TrendingUp, Target, Lightbulb } from "lucide-react";
import profile from "@/assets/imgs/profile.png";
import files from "@/assets/files/Reussir_En_Trading-v1.pdf";

export const AboutSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
              
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-10 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Mon parcours</h3>
              <p className="text-gray-300 leading-relaxed">
                Avec 5 ans d'expérience dans les marchés financiers, j'ai développé une expertise unique dans le trading algorithmique et l'automatisation de stratégies. Ma passion pour l'innovation m'a conduit à créer des solutions sur mesure pour optimiser les performances de trading.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-lg border border-blue-500/30">
                <Target className="h-10 w-10 text-blue-400 mb-3" />
                <h4 className="text-white font-semibold mb-3">Ma Mission</h4>
                <p className="text-gray-300 text-sm">Démocratiser le trading professionnel</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-lg border border-purple-500/30">
                <Lightbulb className="h-10 w-10 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-3">Ma Vision</h4>
                <p className="text-gray-300 text-sm">L'automatisation au service de tous</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <div className="text-center mb-6">
                <div className="w-30 h-30 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src={profile} alt="ma photo" className="w-full h-95 object-cover " />
                </div>
                <h3 className="text-xl font-bold text-white">Expert Trader & Formateur</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Années d'expérience</span>
                  <span className="text-blue-400 font-bold">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stratégies développées</span>
                  <span className="text-purple-400 font-bold">++</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Clients formés</span>
                  <span className="text-green-400 font-bold">++</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free guide section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à débuter votre aventure trading ?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Découvrez les bases solides du trading avec ce guide offert. Un condensé de mes meilleures stratégies pour bien commencer.
          </p>
          <button 
            onClick={() => window.open(files, '_blank')} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            📚 Télécharger le guide gratuit
          </button>
        </div>
      </div>
    </div>
  );
};
