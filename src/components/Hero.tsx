import { useState, useEffect, FormEvent } from "react";
import { Play, ShoppingCart, Cpu, Settings, Sliders, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  // États
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState<"general" | "inputs">("inputs");
  const [activePair, setActivePair] = useState<string>("Volatility 100 Index, M5");
  
  // Signaux BMAE interactifs
  const [activeSignals, setActiveSignals] = useState<Record<string, boolean>>({
    S_PNL: true,
    S_FVG: true,
    S_SNS: true,
    S_SS: true,
    S_PR: true,
    S_TRD: true,
    S_PO3: true,
    S_MSS: true,
  });

  // Paramètres utilisateur
  const [useVisualSimulator, setUseVisualSimulator] = useState<boolean>(true);
  const [buyTradeEmulation, setBuyTradeEmulation] = useState<boolean>(true);
  const [sellTradeEmulation, setSellTradeEmulation] = useState<boolean>(false);
  const [signalTimeframe, setSignalTimeframe] = useState<number>(15);
  const [showFvgZone, setShowFvgZone] = useState<boolean>(true);
  const [showH4Zone, setShowH4Zone] = useState<boolean>(true);
  const [useTrendLine, setUseTrendLine] = useState<boolean>(true);
  const [trendLineUpColor, setTrendLineUpColor] = useState<string>("DodgerBlue");
  const [trendLineDownColor, setTrendLineDownColor] = useState<string>("OrangeRed");
  const [numCandles, setNumCandles] = useState<number>(1000);
  const [lotSize] = useState<number>(1.00);

  // Navigation
  const scrollToLicence = () => {
    document.querySelector('#bmaesection')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Horloge temps réel
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${year}.${month}.${day} ${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const toggleSignal = (key: string) => {
    setActiveSignals(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveSettings = (e: FormEvent) => {
    e.preventDefault();
    setShowSettingsModal(false);
  };

  const handleResetSettings = () => {
    setUseVisualSimulator(true);
    setBuyTradeEmulation(true);
    setSellTradeEmulation(false);
    setSignalTimeframe(15);
    setShowFvgZone(true);
    setShowH4Zone(true);
    setUseTrendLine(true);
    setTrendLineUpColor("DodgerBlue");
    setTrendLineDownColor("OrangeRed");
    setNumCandles(1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Fond */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      {/* Effets de flou */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full px-3 sm:px-4 lg:px-6 py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Colonne gauche - Texte */}
          <div className="text-center md:text-left animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-5">
              Solution BMAE — Trading Automatisé
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ne perdez plus des mois à apprendre seul{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                le trading
              </span>
              .
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 mb-7 leading-relaxed">
              BMAE a été conçu pour vous faire gagner des années d'apprentissage en vous offrant une lecture du marché claire et efficace. BMAE est le résultat de plus de 6 ans d'expérience, de recherche et d'optimisation condensé en un seul outil. Attachez-le à votre graphique et profitez immédiatement de la même vision du marché que celle de plusieurs professionnels qui utilisent l'outil au quotidien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToLicence}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Acheter une licence
              </button>

              <button
                onClick={scrollToLicence}
                className="border-2 border-blue-400 text-blue-300 px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Voir les offres
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-5 text-sm text-gray-400">
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

          {/* Colonne droite - ÉCRAN AVEC VIDÉO EN BOUCLE */}
          <div className="relative flex items-center justify-center w-full animate-scale-in">
            
            {/* Effet lumineux d'ambiance */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />

            {/* Écran unique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[640px]"
            >
              {/* Coque du moniteur */}
              <div className="relative bg-[#1a1c24] p-[8px] sm:p-[10px] rounded-[20px] sm:rounded-[24px] shadow-[0_25px_65px_rgba(0,0,0,0.95)] border border-neutral-800">
                
                {/* Caméra frontale */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-neutral-700 border border-neutral-600">
                    <div className="w-1 h-1 rounded-full bg-neutral-500 mx-auto mt-0.5"></div>
                  </div>
                </div>

                {/* Bordure intérieure de l'écran */}
                <div className="bg-[#040508] p-2 sm:p-3 rounded-[12px] sm:rounded-[16px] mt-2">
                  {/* Zone vidéo - Lecture automatique en boucle */}
                  <div className="relative bg-black aspect-video overflow-hidden rounded-lg border border-neutral-900">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/demo-bmae.mp4" type="video/mp4" />
                      <source src="/demo-bmae.webm" type="video/webm" />
                    </video>
                  </div>
                </div>

                {/* Menton du moniteur */}
                <div className="h-5 sm:h-7 bg-gradient-to-r from-[#2a2c34] via-[#484a54] to-[#2a2c34] rounded-b-[12px] sm:rounded-b-[16px] flex items-center justify-center border-t border-neutral-800/80">
                  <span className="text-[6px] sm:text-[8px] font-mono font-black tracking-[0.25em] text-neutral-400 uppercase">
                    BMAE — Démonstration
                  </span>
                </div>
              </div>

              {/* Pied du moniteur */}
              <div className="relative w-20 sm:w-24 h-12 sm:h-16 bg-gradient-to-b from-[#2a2c34] to-[#121318] mx-auto shadow-md" 
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)" }} 
              />
              
              {/* Base du pied */}
              <div className="w-32 sm:w-40 h-2 sm:h-2.5 bg-gradient-to-r from-[#1c1d24] via-[#2d2e38] to-[#1c1d24] mx-auto rounded-b-md shadow-lg" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Modale Paramètres BMAE */}
      <AnimatePresence>
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettingsModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.form
              onSubmit={handleSaveSettings}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-[#161920] border border-neutral-800 rounded-2xl shadow-2xl z-10 text-left overflow-hidden flex flex-col font-sans max-h-[85vh]"
            >
              <div className="bg-[#101218] border-b border-neutral-900 px-5 py-3 flex justify-between items-center select-none">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-neutral-300 font-mono uppercase tracking-wider">
                    Best Market Analyzer Edge 4.00 (Volatility 100 Index, M5)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSettingsModal(false)}
                  className="p-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-[#13151c] px-5 py-1.5 border-b border-neutral-900 flex gap-2 select-none">
                <button
                  type="button"
                  onClick={() => setActiveSettingsTab("general")}
                  className={`px-4 py-1.5 font-mono text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    activeSettingsTab === "general"
                      ? "bg-[#161920] text-blue-400 border-t border-x border-neutral-800"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  Général
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSettingsTab("inputs")}
                  className={`px-4 py-1.5 font-mono text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    activeSettingsTab === "inputs"
                      ? "bg-[#161920] text-blue-400 border-t border-x border-neutral-800"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  Entrées d'utilisateurs
                </button>
              </div>

              <div className="p-5 overflow-y-auto space-y-4 bg-[#161920]">
                {activeSettingsTab === "general" ? (
                  <div className="space-y-4 text-neutral-300 text-xs leading-relaxed">
                    <div className="p-4 rounded-xl bg-black/30 border border-neutral-800/80 space-y-3">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        Best Market Analyzer Edge 4.00
                      </h4>
                      <p className="text-neutral-400 text-[11px]">
                        Copyright © 2026, BAGOUGJARE TRADING GROUP.<br />
                        Algorithme optimisé pour les indices synthétiques de type Volatilité et Marchés OTC.
                      </p>
                    </div>

                    <label className="flex items-center gap-3.5 p-3 rounded-lg bg-black/20 hover:bg-black/30 border border-neutral-900 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useVisualSimulator}
                        onChange={(e) => setUseVisualSimulator(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-neutral-900 border-neutral-800 rounded focus:ring-blue-500"
                      />
                      <div>
                        <span className="font-semibold block text-white text-xs">Autoriser le trading algorithmique</span>
                        <span className="text-[10px] text-neutral-500">Permet au robot d'entrer de manière autonome sur signal validé.</span>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-neutral-900 bg-black/35 overflow-hidden">
                      <table className="w-full text-left text-xs text-neutral-400 font-mono">
                        <thead className="bg-[#12141a] text-neutral-200 border-b border-neutral-900">
                          <tr>
                            <th className="px-4 py-2.5">Variable</th>
                            <th className="px-4 py-2.5">Valeur</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-900/60">
                          <tr className="bg-[#1a1d27]/40 text-[10px] text-neutral-500 font-bold">
                            <td colSpan={2} className="px-4 py-1.5">--- VISUAL TRADE SIMULATOR ---</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">USE VISUAL TRADE SIMULATOR</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={String(useVisualSimulator)}
                                onChange={(e) => setUseVisualSimulator(e.target.value === "true")}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">BUY TRADE EMULATION</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={String(buyTradeEmulation)}
                                onChange={(e) => setBuyTradeEmulation(e.target.value === "true")}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </td>
                          </tr>
                          <tr className="bg-[#1a1d27]/40 text-[10px] text-neutral-500 font-bold">
                            <td colSpan={2} className="px-4 py-1.5">--- SIGNAL SETTINGS ---</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">NUMBER OF CANDLES TO ANALYSE</td>
                            <td className="px-4 py-2 text-white">
                              <input
                                type="number"
                                value={numCandles}
                                onChange={(e) => setNumCandles(Number(e.target.value))}
                                className="w-20 bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">SIGNAL TIMEFRAME</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={signalTimeframe}
                                onChange={(e) => setSignalTimeframe(Number(e.target.value))}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value={5}>5 (M5)</option>
                                <option value={15}>15 (M15)</option>
                                <option value={30}>30 (M30)</option>
                                <option value={60}>60 (H1)</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">SHOW FVG ZONE</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={String(showFvgZone)}
                                onChange={(e) => setShowFvgZone(e.target.value === "true")}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#101218] border-t border-neutral-900 px-5 py-4 flex justify-between items-center select-none">
                <button
                  type="button"
                  onClick={handleResetSettings}
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-mono text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Réinitialiser
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSettingsModal(false)}
                    className="px-4 py-2 rounded-lg bg-transparent border border-neutral-800 hover:bg-neutral-800 text-neutral-400 font-mono text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs tracking-wider transition-all cursor-pointer shadow-md shadow-blue-600/10 active:scale-95"
                  >
                    OK
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};