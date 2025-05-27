
import { Settings, Zap, Target, Users } from "lucide-react";

  const scrollToAlgo = () => {
    document.querySelector('#algo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

export const AutomationSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automatisation de Stratégies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformez vos stratégies en robots de trading performants avec un accompagnement personnalisé
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Développement sur mesure
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Je développe des Expert Advisors (EAs) personnalisés basés sur vos stratégies de trading. 
                Chaque robot est optimisé pour votre style de trading et vos objectifs de performance.
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">Livrable + Formation</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30">
                <Target className="h-8 w-8 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Précision</h4>
                <p className="text-gray-300 text-sm">Exécution parfaite de vos stratégies</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-500/30">
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold mb-1">Support</h4>
                <p className="text-gray-300 text-sm">Accompagnement personnalisé</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Processus de développement</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-gray-300">Analyse de votre stratégie</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-gray-300">Développement de l'EA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="text-gray-300">Tests et optimisation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span className="text-gray-300">Livraison et formation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à automatiser vos stratégies ?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Transformez vos idées en robots de trading performants. Consultation gratuite pour évaluer votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContact} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Consultation gratuite
            </button>
            <button onClick={scrollToAlgo} className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Voir mes réalisations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
