
import { BookOpen, Users, Clock, Code } from "lucide-react";

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const socialLinks = [
    { name: "WhatsApp", icon: "📱", url: "https://wa.me/+22898740835", color: "from-green-400 to-green-600" },
  ];
  const openUrl = (url: string) => {
    window.open(`${url}`, '_blank');
  };

export const FormationsSection = () => {
  const formations = [
    {
      name: "Formation MQL5",
      description: "Apprenez à programmer vos propres outils de trading avec le langage MQL5.",
      features: ["Programmation MQL5", "Création d'indicateurs", "Développement d'EAs", "Optimisation de code"],
      price: "249.99 $",
      gradient: "from-blue-500 to-blue-600",
      message: "Je+veux+m'inscrire+a+la+formation+MQL5+Je+me+nomme:+",
      icon: Code
    },
    {
      name: "Formation Trading",
      description: "Maîtrisez les fondamentaux du trading Forex et crypto pour devenir un trader professionnel.",
      features: ["Analyse technique avancée", "Gestion des risques", "Psychologie du trader", "Stratégies gagnantes", "Accès a mes indicateurs personnalisé a vie"],
      price: "499.99 $",
      gradient: "from-green-500 to-emerald-600",
      message: "Je+veux+m'+inscrire+a+la+formation+complette+en+Trading+Je+me+nomme:+",
      popular: true,
      icon: BookOpen
    },
    {
      name: "Trading + Programmation",
      description: "Formation complète alliant expertise trading et compétences en programmation MQL5.",
      features: ["Trading professionnel", "Programmation avancée", "Automatisation complète", "Coaching personnalisé"],
      price: "599.99 $",
      gradient: "from-purple-500 to-purple-600",
      message: "Je+veux+m'+inscrire+a+la+formation+complette+Trading&Programation+Je+me+nomme:+",
      icon: Users
    }
  ];
    const opentext = (message: string) => {
    window.open(`https://wa.me/+22898740835?text=${message}`, '_blank');
  };
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Formations Trading
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des formations complètes adaptées à votre niveau pour maîtriser les marchés financiers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation, index) => {
            const IconComponent = formation.icon;
            return (
              <div
                key={formation.name}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 ${
                  formation.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {formation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${formation.gradient} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{formation.name}</h3>
                  <p className="text-gray-300">{formation.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {formation.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-4">{formation.price}</div>
                  {socialLinks.map((social) => (
                  <button 
                    onClick={() => opentext(formation.message)} className={`w-full bg-gradient-to-r ${formation.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    S'inscrire
                  </button>
                ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">++ Élèves</h4>
            <p className="text-gray-300">Déjà formés avec succès</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-purple-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Support 24/7</h4>
            <p className="text-gray-300">Accompagnement personnalisé</p>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="h-12 w-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Accès A mon canal Télegram VIP</h4>
            <p className="text-gray-300">Signaux de trading incluses</p>
          </div>
        </div>
      </div>
    </div>
  );
};
