import { useState } from "react";
import { Play, ShoppingCart } from "lucide-react";
import bmaeAsset from "@/assets/bmae.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const scrollToLicence = () => {
    document.querySelector('#bmaesection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center px-4 max-w-6xl mx-auto py-24">
        <div className="text-center md:text-left animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6">
            Solution BMAE — Trading Automatisé
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ne perdez plus des mois à apprendre seul {" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              le trading
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            BMAE a été conçu pour vous faire gagner des années d'apprentissage en vous offrant une lecture du marché claire et efficace. BMAE est le résultat de plus de 6 ans d'expérience, de recherche et d'optimisation condensé en un seul outil. Attachez-le à votre graphique et profitez immédiatement de la même vision du marché que celle de plusieurs professionnelle qui utilisent l'outil au quotidien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToLicence}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Acheter une licence
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Découvrir le fonctionnement
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Analyse temps réel
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Multi-Timeframe
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Signaux Sniper
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full border border-blue-400/20 animate-pulse"></div>
            <div className="absolute -inset-16 rounded-full border border-purple-400/10"></div>
            <img
              src={bmaeAsset}
              alt="BMAE - Best Market Analyser Edge"
              className="relative w-64 md:w-80 rounded-3xl shadow-2xl shadow-blue-500/40"
            />
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black border-slate-700">
          <div className="aspect-video w-full">
            {videoOpen && (
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/6TglLCU7rdc?autoplay=1"
                title="Découvrir BMAE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};