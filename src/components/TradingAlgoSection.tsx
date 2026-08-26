import { useState, useEffect } from "react";
import { TrendingUp, BarChart3, Target, Shield, LineChart, Calculator, History, Zap, Play, Lock, CheckCircle, Users, Star, MessageSquarePlus, Copy, Check, MonitorPlay, GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ID YouTube de la vidéo "tutoriel téléchargement et installation démo"
const DEMO_TUTORIAL_VIDEO_ID = "6AK6WmPqm8U";

export const TradingAlgoSection = () => {
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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
    <div className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Demo Tutorial Video */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
              <MonitorPlay className="h-4 w-4" />
              Tutoriel vidéo
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment télécharger et installer la version démo
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Suivez ce tutoriel rapide pour obtenir et installer la démo du système BT3.0 sur MetaTrader 5 en quelques minutes.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-slate-600/40 bg-slate-900 aspect-video group">
            <iframe
              src={`https://www.youtube.com/embed/${DEMO_TUTORIAL_VIDEO_ID}`}
              title="Tutoriel téléchargement et installation démo BT3.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Une fois la démo installée, retrouvez les fichiers .ex5 à télécharger juste en dessous.
          </p>
        </div>

        {/* Demo Download Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 rounded-3xl p-8 sm:p-10 border border-emerald-500/30 shadow-2xl relative">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg shadow-green-500/20">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Essayez la Version Démo Gratuite
                </h3>
              </div>
              
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-2 text-sm sm:text-base">
                Testez l'outil BMAE avant d'acheter. Téléchargez la version démo directement via notre boutique sécurisée Chariow.
              </p>
            </div>

            {/* Widget Chariow pour le produit Démo (prd_p8ppzq46) placé à l'intérieur de la carte */}
            <div className="w-full flex justify-center items-center min-h-[60px] my-6">
              <div
                id="chariow-widget"
                className="w-full max-w-[360px] mx-auto"
                data-product-id="prd_p8ppzq46"
                data-store-domain="vhconuvm.mychariow.shop"
                data-style="tap"
                data-border-style="rounded"
                data-cta-width="full"
                data-background-color="#FFFFFF"
                data-cta-animation="none"
                data-locale="fr"
                data-primary-color="#22c55e"
                data-custom-cta-text="Télécharger maintenant"
              />
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm text-center mb-6">
              Compatible uniquement MT5 • Support WhatsApp direct • Téléchargement immédiat sur Chariow
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://fr.trustpilot.com/evaluate/bagoudjaretrading3-0.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
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