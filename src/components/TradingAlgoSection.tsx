import { useState, useEffect } from "react";
import { TrendingUp, BarChart3, Target, Shield, LineChart, Calculator, History, Zap, Download, Play, Lock, CheckCircle, Users, Star, MessageSquarePlus, Copy, Check, X } from "lucide-react";
import sniper from "@/assets/imgs/sniper.jpg";
import supabase from "@/utils/supabase";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle } from "lucide-react";

export const TradingAlgoSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
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
    // {
    //   icon: Shield,
    //   title: "Mesure du risque et du reward",
    //   description: "Analyse complète du ratio risk/reward",
    //   gradient: "from-indigo-500 to-purple-500"
    // },
    {
      icon: History,
      title: "Outils de backtesting",
      description: "Testez vos stratégies sur données historiques",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const handleCopyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    toast({ title: "Adresse copiée !", description: address });
    setTimeout(() => {
      setCopied(false);
      setSelectedPayment(null);
    }, 800);
  };

  return (
    <div className="py-10 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-4 pb-10">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex gap-4">
            <div className="shrink-0 mt-0.5">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300">Important :</span> les signaux générés par Best Market Analyser Edge constituent une aide à l'analyse et à la prise de décision. Ils doivent être confirmés par la méthodologie enseignée dans la formation, et ne garantissent pas un résultat sur chaque opération.
            </p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex gap-4">
            <div className="shrink-0 mt-0.5">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300">Testeur de stratégie :</span> Best Market Analyser Edge repose en grande partie sur une interface interactive (boutons d'analyse, filtres et boutons d'exécution manuelle des ordres) qui nécessite une interaction en temps réel. Ces boutons ne sont pas opérationnels dans le Testeur de Stratégie de MetaTrader, qui ne permet pas de clics interactifs pendant la simulation. Pour évaluer pleinement l'outil et l'ensemble de ses fonctionnalités, il est recommandé de l'utiliser sur un compte démo ou réel, en conditions de marché réelles.
            </p>
          </div>
        </div>

        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Système BT3.0
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Un système complet composé de la stratégie <strong className="text-blue-400">BT3.0 STRATEGY ULTIME</strong> (2 indicateurs) 
            et de l'outil d'exécution <strong className="text-purple-400">Système BT3.0</strong>.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Système BT3.0 est l'outil ultime d'exécution automatique — il analyse la structure du marché, 
            détecte les zones clés et gère vos trades en toute autonomie.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div> */}

        {/* Hero Image + Price */}
        {/* <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"> */}
            {/* Image à gauche */}
            {/* <div className="relative group">
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
            </div> */}

            {/* Prix à droite */}
            {/* <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-3xl font-bold text-white mb-4">Système BT3.0</h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-white">$699.99</span>
                  <span className="text-gray-400 text-sm">/ licence annuelle</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-white">$399.99</span>
                  <span className="text-gray-400 text-sm">/ licence semestrielle</span>
                </div>
                <p className="text-gray-300 text-sm">Prix standard après l'offre de lancement</p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 border border-green-500/30 mb-4">
                <p className="text-green-400 text-sm font-semibold text-center">
                  🎉 Profitez d'une réduction de 50% grâce au programme de partenariat sur la licence annuelle uniquement
                </p>
              </div>
              
              {/* <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 text-green-400 mr-3" />
                  <span>Profitez dès maintenants de l'outils avec toutes ses fonctionnalités</span>
                </div>
              </div> */}

              {/* <div className="text-center">
                <p className="text-yellow-400 font-semibold mb-4">⚡ Profitez de l'offre limitée ci-dessus !</p>
              </div> */}
            {/* </div>
          </div>
        </div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Fontionnalités principales :</h3> */}
        
        {/* Features Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
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
        </div> */}

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
                    Testez l'outil BMAE avant d'acheter. Toutes les fonctionnalités ne seront pas disponibles dans le testeur de stratégie 
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => handleDownload('BMAE_Demo.ex5', '/demo/BMAE_Demo.ex5')}
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
                      Télécharger la Démo de BMAE (.ex5)
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

        {/* Trustpilot Buttons */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-600/40 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Que pensent nos utilisateurs ?</h3>
            <p className="text-gray-400 text-sm mb-5">Consultez les avis vérifiés et partagez votre expérience sur Trustpillot</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {/* <a
                href="https://fr.trustpilot.com/review/bagoudjaretrading3-0.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Star className="h-5 w-5" />
                Voir les avis
              </a> */}
              <a
                href="https://fr.trustpilot.com/evaluate/bagoudjaretrading3-0.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageSquarePlus className="h-5 w-5" />
                Donner son avis
              </a>
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
        .payment-scroll::-webkit-scrollbar { height: 8px; }
        .payment-scroll::-webkit-scrollbar-track { background: rgba(15,23,42,0.4); border-radius: 4px; }
        .payment-scroll::-webkit-scrollbar-thumb { background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 4px; }
      `}</style>
    </div>
  );
};