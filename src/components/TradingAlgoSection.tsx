
import { TrendingUp, BarChart3, Target, Shield, LineChart, Calculator, History, Zap } from "lucide-react";

export const TradingAlgoSection = () => {
  const features = [
    {
      icon: LineChart,
      title: "Auto-analyse de la structure du marché",
      description: "Analyse automatique SMC (Smart Money Concepts)",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Auto-détection des zones de décision",
      description: "Identification précise des zones clés de trading",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Gestion automatique des trades",
      description: "Automatisation complète de vos positions",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Calculator,
      title: "Outils de calcul du risque",
      description: "Calcul précis de votre exposition au risque",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Mesure du risque et du reward",
      description: "Analyse complète du ratio risk/reward",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: History,
      title: "Outils de backtesting",
      description: "Testez vos stratégies sur données historiques",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const paymentMethods = [
    { name: "Litecoin", logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png" },
    { name: "USDT TRC20", logo: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
    { name: "TRON", logo: "https://cryptologos.cc/logos/tron-trx-logo.png" },
    { name: "Mobile Money", logo: "" }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sniper Setup UE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            L'outil ultime pour trader comme un professionnel
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Sniper Setup UE"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end justify-center pb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                  <span className="text-white font-bold text-lg">Outil Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-20">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Télécharger maintenant
          </button>
          <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300">
            Documentation
          </button>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-slate-700 pt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Moyens de paiement acceptés</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...paymentMethods, ...paymentMethods].map((method, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                  style={{ width: '180px' }}
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="w-16 h-16 mx-auto mb-3 object-contain"
                  />
                  <p className="text-gray-300 text-center text-sm font-semibold">{method.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
