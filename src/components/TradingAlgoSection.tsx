
import { TrendingUp, BarChart3 } from "lucide-react";
import sys from "@/assets/imgs/BT3.0.jpg";


export const TradingAlgoSection = () => {
  const indicators = [
    {
      name: "Système BT3.0",
      description: "BT3.0 est un solution qui vous facilite le trading, il est composé de 6 indicateurs personnalisés. et un assistant intelligent",
      features: ["✅ Viking Strategy indicator", "✅ C_BAGOU", "✅ C_BAGOU_LEVELS", "✅ QM_DETECTOR", "✅ OB_DETECTOR", "✅ DAILY_OPEN_LINE"],
      image: sys,
      gradient: "from-blue-500 to-cyan-500",
      algoId: "124360"
    },
  ];

  const openAlgo = (algoId: string) => {
    window.open(`https://www.mql5.com/fr/market/product/${algoId}?source=Site+Profile+Seller#`, '_blank');
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Algorithmes de Trading
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deux outils révolutionnaires développés pour maximiser vos performances de trading
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {indicators.map((indicator, index) => (
            <div
              key={indicator.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative">
                    <img
                      src={indicator.image}
                      alt={indicator.name}
                      className="w-full h-50 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${indicator.gradient} px-4 py-2 rounded-full mb-4`}>
                      <TrendingUp className="h-5 w-5 text-white" />
                      <span className="text-white font-semibold">Outil Premium</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{indicator.name}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {indicator.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {indicator.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${indicator.gradient} rounded-full`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button onClick={() => openAlgo(indicator.algoId)} className={`bg-gradient-to-r ${indicator.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                      Acheter
                    </button>
                    <button 
                    onClick={() => openAlgo(indicator.algoId)} 
                    className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300">
                      Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30">
            <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">98%</h4>
            <p className="text-gray-300">Taux de réussite moyen</p>
          </div>
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30">
            <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">2%</h4>
            <p className="text-gray-300">Ratio risk</p>
          </div>
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30">
            <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">35+</h4>
            <p className="text-gray-300">Traders utilisateurs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
