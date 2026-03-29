import { useState, useEffect } from "react";
import { TrendingUp, BarChart3, Target, Shield, LineChart, Calculator, History, Zap, Download, Play, Lock, CheckCircle, Users } from "lucide-react";
import sniper from "@/assets/imgs/sniper.jpg";
import supabase from "@/utils/supabase";
import { useToast } from "@/hooks/use-toast";

export const TradingAlgoSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const { toast } = useToast();

  // Fetch download count on mount
  useEffect(() => {
    const fetchDownloadCount = async () => {
      const { count, error } = await supabase
        .from('demo_downloads')
        .select('*', { count: 'exact', head: true });
      
      if (!error && count !== null) {
        setDownloadCount(count);
      }
    };
    
    fetchDownloadCount();
  }, []);

  const handleDownload = async (fileName: string, filePath: string) => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Appeler l'API de tracking (serverless function sur Vercel)
      const response = await fetch('/api/track-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error('Erreur lors du tracking du téléchargement');
      } else {
        // Mise à jour locale du compteur
        setDownloadCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Erreur réseau', error);
    }

    // Toujours lancer le téléchargement même si le tracking échoue
    toast({
      title: "Téléchargement démarré !",
      description: `Le fichier ${fileName} est en cours de téléchargement.`,
    });

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Re-enable after 3 seconds
    setTimeout(() => setIsDownloading(false), 3000);
  };

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
    { name: "Litecoin", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" },
    { name: "USDT TRC20", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" },
    { name: "TRON", logo: "https://research.binance.com/static/images/projects/tron/tronlogo.png" },
    { name: "Moov money", logo: "https://moov-africa.tg/wp-content/uploads/elementor/thumbs/2logo-moov-africa-put36aevvcwbxm9ucoog0ot5tre773bvjb8nnh8514.jpeg" },
    { name: "Mixx by Yas", logo: "https://cdn-ilcckdn.nitrocdn.com/mJCoEvGkeejlEvJdEMQjiBVdPamvpGSY/assets/images/optimized/rev-ef13978/yas.tg/wp-content/uploads/2025/07/mixx-logo.svg" }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sniper Setup EA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            L'outil ultime pour trader comme un professionnel
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        {/* Hero Image + Price */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Image à gauche */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <img
                  src={sniper}
                  alt="Sniper Setup UE"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end justify-center pb-6">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-white" />
                    <span className="text-white font-bold text-lg">Outil Premium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prix à droite */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-3xl font-bold text-white mb-4">Sniper Setup EA</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">$699.99</span>
                </div>
                <p className="text-gray-300 text-sm">Prix standard après l'offre de lancement</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 text-green-400 mr-3" />
                  <span>Profitez dès maintenants de l'outils avec toutes ses fonctionnalités</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-yellow-400 font-semibold mb-4">⚡ Profitez de l'offre limitée ci-dessus !</p>
              </div>
            </div>
          </div>
        </div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Fontionnalités principales :</h3>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group text-center"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${feature.gradient} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight">{feature.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Demo Download Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-600/40 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Essayez la Version Démo Gratuite
                </h3>
              </div>
              
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
                Testez SNIPER_SETUP EA avant d'acheter. La version démo inclut toutes les fonctionnalités 
                de base pour vous familiariser avec l'outil sur MT5.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <LineChart className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">BT3.0 SMART TREND</p>
                      <p className="text-gray-400 text-sm">Version limitée</p>
                    </div>
                  </div>
                      <button onClick={() => handleDownload('BT3.0_TREND_STRATEGY.ex5', '/demo/BT3.0_TREND_STRATEGY.ex5')} disabled={isDownloading} className={`p-2 rounded-lg transition-all duration-300 ${isDownloading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500/20 hover:bg-green-500/40 cursor-pointer'}`}>
                        <Download className={`h-4 w-4 ${isDownloading ? 'text-gray-500' : 'text-green-400'}`} />
                      </button>
                </div>

                <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Target className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">BT3.0 CCT</p>
                      <p className="text-gray-400 text-sm">Version limitée</p>
                    </div>
                  </div>
                      <button onClick={() => handleDownload('BT3.0_CCT.ex5', '/demo/BT3.0_CCT.ex5')} disabled={isDownloading} className={`p-2 rounded-lg transition-all duration-300 ${isDownloading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500/20 hover:bg-blue-500/40 cursor-pointer'}`}>
                        <Download className={`h-4 w-4 ${isDownloading ? 'text-gray-500' : 'text-blue-400'}`} />
                      </button>
                </div>

                <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Lock className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">BT3.0 MSS</p>
                      <p className="text-gray-400 text-sm">Version limitée</p>
                    </div>
                  </div>
                      <button onClick={() => handleDownload('DAY_TRADER.ex5', '/demo/DAY_TRADER.ex5')} disabled={isDownloading} className={`p-2 rounded-lg transition-all duration-300 ${isDownloading ? 'bg-gray-600 cursor-not-allowed' : 'bg-purple-500/20 hover:bg-purple-500/40 cursor-pointer'}`}>
                        <Download className={`h-4 w-4 ${isDownloading ? 'text-gray-500' : 'text-purple-400'}`} />
                      </button>
                </div>

              </div>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => handleDownload('SNS_EA_DEMO.ex5', '/demo/SNS_EA_DEMO.ex5')}
                  disabled={isDownloading}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    isDownloading 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90 transform hover:scale-105 shadow-green-500/25'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Téléchargement lancé
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      Télécharger la Démo (.ex5)
                    </>
                  )}
                </button>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users className="h-4 w-4" />
                  <span><strong className="text-green-400">{downloadCount}</strong> téléchargements</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm text-center mt-4">
                Compatible uniquement MT5 • Installation en 2 minutes • Aucune inscription requise
              </p>
            </div>
          </div>
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
          animation: scroll 12s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};