import { useState, useEffect, FormEvent } from "react";
import { Play, ShoppingCart, Cpu, Settings, Sliders, X } from "lucide-react";
import bmaeAsset from "@/assets/bmae.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";

export const Hero = () => {
  // États du Fichier 1
  const [videoOpen, setVideoOpen] = useState(false);

  // États du Fichier 2 - Terminal MT5 interactif
  const [livePrice, setLivePrice] = useState<number>(428.65);
  const [lastTickDirection, setLastTickDirection] = useState<"up" | "down">("up");
  const [profit, setProfit] = useState<number>(14.77);
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

  // Navigation (Fichier 1)
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

  // Simulation prix temps réel
  useEffect(() => {
    const priceInterval = setInterval(() => {
      setLivePrice((prev) => {
        const delta = (Math.random() - 0.48) * 0.4;
        const next = parseFloat((prev + delta).toFixed(3));
        setLastTickDirection(delta >= 0 ? "up" : "down");
        
        if (buyTradeEmulation) {
          setProfit((p) => parseFloat((p + delta * 1.5).toFixed(2)));
        }
        return next;
      });
    }, 1500);

    return () => clearInterval(priceInterval);
  }, [buyTradeEmulation]);

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

  // Composant Terminal MT5 (conservé du Fichier 2)
  const MT5Terminal = ({ isCompact = false }: { isCompact?: boolean }) => {
    return (
      <div className={`w-full h-full bg-[#07080c] select-none flex flex-col relative text-white font-sans ${isCompact ? "text-[10px]" : ""}`}>
        
        {/* Header MT5 */}
        {!isCompact && (
          <div className="bg-[#12141d] border-b border-neutral-900 px-3 py-1.5 flex items-center justify-between text-neutral-400 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-[8px] font-black text-white">5</div>
              <span className="text-[9.5px] font-semibold text-neutral-300 font-mono truncate max-w-[180px] sm:max-w-none">
                61343461 : DeriV (SVG) LLC - Volatility 100 Index, M5
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>
          </div>
        )}

        {/* Barre de menu avec bouton Paramètres */}
        {!isCompact && (
          <div className="bg-[#161a25] border-b border-[#0f1118] px-3 py-1 flex items-center justify-between text-[9px] text-neutral-300 font-sans select-none">
            <div className="flex gap-3">
              <span className="hover:text-white cursor-pointer transition-colors">Fichier</span>
              <span className="hover:text-white cursor-pointer transition-colors">Voir</span>
              <span className="hover:text-white cursor-pointer transition-colors">Insérer</span>
              <span className="hover:text-white cursor-pointer transition-colors">Graphiques</span>
              <span className="hover:text-white cursor-pointer font-extrabold text-blue-400">BMAE</span>
            </div>
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowSettingsModal(true);
              }}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-900/30 border border-blue-800/40 hover:bg-blue-800/30 text-blue-400 font-mono text-[7.5px] uppercase tracking-wider cursor-pointer"
            >
              <Sliders className="w-2.5 h-2.5" />
              PROPRIÉTÉS
            </button>
          </div>
        )}

        {/* Info paire active */}
        <div className="bg-[#0e111a] px-3 py-1.5 flex items-center justify-between border-b border-neutral-900 text-[9px] font-mono text-neutral-400 select-none">
          <div className="flex gap-x-3 gap-y-1 items-center">
            <span className="text-white font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              {activePair}
            </span>
            {!isCompact && (
              <>
                <span className="hidden sm:inline text-neutral-500">|</span>
                <span>MS_MD =&gt; <span className="text-emerald-400 font-bold">Flat</span></span>
              </>
            )}
          </div>
          <div className="text-[#00ff00] font-bold text-right tracking-wider">
            {currentTime || "2026.07.09 00:33:32"}
          </div>
        </div>

        {/* Zone graphique */}
        <div className="flex-1 relative bg-[#07080c] overflow-hidden select-none">
          {/* Grille de fond */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-8 grid-rows-6 opacity-[0.05]">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-b border-neutral-500 border-dashed" />
            ))}
          </div>

          {/* HUD overlay */}
          <div className={`absolute inset-x-2.5 z-10 grid grid-cols-3 font-mono font-bold text-neutral-400 pointer-events-none select-none ${isCompact ? "top-1 text-[7px]" : "top-3 text-[8px] sm:text-[8.5px]"}`}>
            {/* Colonne gauche */}
            <div className="space-y-0.5 text-left">
              {activeSignals.S_SNS && (
                <>
                  <div className="flex gap-2 text-neutral-500 text-[6.5px]">
                    <span>H4_SNS</span>
                    <span>H4_CIT</span>
                  </div>
                  <div className="text-[#00ff00] font-black text-[8px] sm:text-[9px] tracking-wide filter drop-shadow-[0_0_2px_rgba(0,255,0,0.4)]">
                    BAGOUDJARE WA:+228 98 74 08 35
                  </div>
                </>
              )}
            </div>

            {/* Colonne centre */}
            <div className="text-center space-y-0.5">
              <div className="flex justify-center gap-2 text-[6.5px]">
                <span>MN1 AV</span>
                <span>W1 AV</span>
                <span className="text-[#ff00ff] font-extrabold filter drop-shadow-[0_0_2.5px_rgba(255,0,255,0.4)]">Jeudi</span>
              </div>
              {!isCompact && (
                <div className="text-[6.5px] flex justify-center gap-1">
                  <span className="text-neutral-600">M5_MD=&gt;</span>
                  <span className="text-white font-bold">Flat</span>
                </div>
              )}
            </div>

            {/* Colonne droite */}
            <div className="text-right space-y-0.5">
              <div className="text-[#00ff00] font-black tracking-wider text-[8px] sm:text-[9.5px]">
                {currentTime || "2026.07.09 00:33:32"}
              </div>
              <div className="flex justify-end gap-0.5 pt-0.5">
                <span className="px-0.5 py-0.2 bg-[#00ff00]/10 border border-[#00ff00]/35 text-[#00ff00] text-[6.5px] font-black rounded-sm">H4</span>
                <span className="px-0.5 py-0.2 bg-[#00ff00]/10 border border-[#00ff00]/35 text-[#00ff00] text-[6.5px] font-black rounded-sm">W1</span>
              </div>
            </div>
          </div>

          {/* Prix en direct */}
          {activeSignals.S_PR && (
            <div 
              className={`absolute right-12 px-1 py-0.2 text-[8px] font-mono rounded font-bold transition-all duration-300 z-20 shadow-md ${
                lastTickDirection === "up" 
                  ? "bg-emerald-600 text-white translate-y-[-1px]" 
                  : "bg-red-600 text-white translate-y-[1px]"
              }`}
              style={{ top: "45%" }}
            >
              {livePrice}
            </div>
          )}

          {/* Graphique SVG avec tous les indicateurs */}
          <svg className="w-full h-full absolute inset-0 z-0 pr-12 pb-10 pt-12" viewBox="0 0 520 340" preserveAspectRatio="none">
            
            {/* S_PNL - Niveaux de trading */}
            {activeSignals.S_PNL && (
              <g className="transition-opacity duration-300">
                <line x1="5" y1="70" x2="515" y2="70" stroke="#10b981" strokeWidth="0.8" strokeDasharray="3 3" />
                <text x="15" y="64" fill="#10b981" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                  Take Profit +{(profit * lotSize).toFixed(2)} USD
                </text>

                <line x1="5" y1="130" x2="515" y2="130" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3 1" />
                <text x="15" y="124" fill="#3b82f6" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                  @BUY_LIMIT RR = 6.30
                </text>

                <line x1="5" y1="260" x2="515" y2="260" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 3" />
                <text x="15" y="254" fill="#ef4444" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                  Stop Loss -{(2.32 * lotSize).toFixed(2)} USD
                </text>
              </g>
            )}

            {/* S_FVG - Zones FVG */}
            {activeSignals.S_FVG && (
              <g className="transition-opacity duration-300">
                <rect x="155" y="130" width="145" height="110" fill="none" stroke="#52525b" strokeWidth="0.8" strokeDasharray="3 3" />
                <rect x="305" y="80" width="135" height="150" fill="none" stroke="#52525b" strokeWidth="0.8" strokeDasharray="3 3" />
                <rect x="445" y="195" width="55" height="50" fill="none" stroke="#52525b" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="500" y1="195" x2="500" y2="245" stroke="#ef4444" strokeWidth="1.2" />
              </g>
            )}

            {/* S_MSS - Market Structure Shift */}
            {activeSignals.S_MSS && (
              <g className="transition-opacity duration-300">
                <line x1="10" y1="145" x2="510" y2="145" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="4 4" />
                <text x="15" y="139" fill="#3b82f6" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                  S_MSS (BOS) @420.770
                </text>
              </g>
            )}

            {/* S_PO3 - Power of 3 */}
            {activeSignals.S_PO3 && (
              <g className="transition-opacity duration-300">
                <rect x="25" y="190" width="125" height="45" fill="rgba(234, 179, 8, 0.04)" stroke="#eab308" strokeWidth="0.7" strokeDasharray="1 3" />
                <text x="30" y="202" fill="#eab308" fontSize="7" fontFamily="monospace" fontWeight="bold">ACCUMULATION</text>
                
                <rect x="155" y="240" width="75" height="40" fill="rgba(239, 68, 68, 0.04)" stroke="#ef4444" strokeWidth="0.7" strokeDasharray="1 3" />
                <text x="160" y="252" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="bold">MANIPULATION</text>
              </g>
            )}

            {/* S_SS - Tendance et moyennes mobiles */}
            {activeSignals.S_SS && (
              <g className="transition-opacity duration-300">
                <path d="M 20 215 Q 140 185 260 245 T 480 225" stroke="#00d2ff" strokeWidth="1.0" fill="none" opacity="0.75" />
                <path d="M 20 220 Q 140 195 260 255 T 480 230" stroke="#ffaa00" strokeWidth="1.0" fill="none" opacity="0.75" />
              </g>
            )}

            {/* S_TRD - Piliers de signal */}
            {activeSignals.S_TRD && (
              <g className="transition-opacity duration-300">
                <rect x="380" y="15" width="5" height="275" fill="#00ff00" opacity="0.85" />
                <rect x="420" y="15" width="5" height="275" fill="#00ff00" opacity="0.85" />
                <text x="365" y="196" fill="#ffffff" fontSize="7.5" fontFamily="monospace" fontWeight="extrabold">
                  Volatility 100 Index_M5
                </text>
              </g>
            )}

            {/* Bougies du graphique */}
            <g>
              {[
                { o: 210, h: 200, l: 230, c: 220 }, { o: 220, h: 210, l: 235, c: 215 },
                { o: 215, h: 185, l: 220, c: 190 }, { o: 190, h: 170, l: 200, c: 175 },
                { o: 175, h: 155, l: 180, c: 160 }, { o: 160, h: 140, l: 165, c: 145 },
                { o: 145, h: 140, l: 155, c: 152 }, { o: 152, h: 150, l: 175, c: 170 },
                { o: 170, h: 165, l: 190, c: 185 }, { o: 185, h: 180, l: 215, c: 210 },
                { o: 210, h: 195, l: 220, c: 200 }, { o: 200, h: 190, l: 230, c: 225 },
                { o: 225, h: 220, l: 250, c: 245 }, { o: 245, h: 240, l: 275, c: 270 },
                { o: 270, h: 250, l: 285, c: 260 }, { o: 260, h: 255, l: 295, c: 290 },
                { o: 290, h: 280, l: 305, c: 300 }, { o: 300, h: 295, l: 310, c: 305 },
                { o: 305, h: 280, l: 310, c: 285 }, { o: 285, h: 250, l: 290, c: 255 },
                { o: 255, h: 220, l: 260, c: 225 }, { o: 225, h: 195, l: 230, c: 200 },
              ].map((c, idx) => {
                const x = 12 + idx * 16.5;
                const isBullish = c.c < c.o;
                const bodyTop = Math.min(c.o, c.c);
                const bodyBottom = Math.max(c.o, c.c);
                const bodyHeight = Math.max(2, bodyBottom - bodyTop);

                return (
                  <g key={idx}>
                    <line x1={x} y1={c.h} x2={x} y2={c.l} stroke={isBullish ? "#00ff00" : "#94a3b8"} strokeWidth="1" />
                    <rect x={x - 2.5} y={bodyTop} width="5" height={bodyHeight} fill={isBullish ? "none" : "#11131a"} stroke={isBullish ? "#00ff00" : "#94a3b8"} strokeWidth="1" />
                  </g>
                );
              })}
            </g>

            <circle cx="480" cy="225" r="4.5" fill="#00ff00" />
          </svg>

          {/* Axe Y des prix */}
          {activeSignals.S_PR && (
            <div className="absolute right-0 top-0 bottom-10 w-12 bg-black/45 border-l border-neutral-900 flex flex-col justify-between py-6 text-[7px] font-mono text-neutral-500 z-10 select-none pl-1 leading-none">
              <span>438.29</span>
              <span>433.34</span>
              <span>428.39</span>
              <span>423.44</span>
              <span>418.49</span>
              <span>413.54</span>
              <span>408.59</span>
            </div>
          )}

          {/* Labels temporels */}
          <div className="absolute bottom-9 left-2 right-12 flex justify-between text-[6.5px] font-mono text-neutral-500 pointer-events-none select-none px-1 border-t border-neutral-900/40 pt-0.5 z-10 bg-[#07080c]/60">
            <span>8 Jul</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>00:00</span>
          </div>

          {/* Contrôles des signaux BMAE */}
          <div className="absolute bottom-1.5 left-1.5 right-12 flex justify-between gap-0.5 select-none z-20 px-0.5 bg-[#07080c]/85 py-0.5 rounded border border-neutral-900/50">
            {Object.keys(activeSignals).map((key) => {
              const isActive = activeSignals[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSignal(key);
                  }}
                  className={`flex-1 py-1 text-[7px] font-mono font-black rounded-sm border transition-all duration-150 active:scale-95 cursor-pointer text-center select-none ${
                    isActive
                      ? "bg-[#00ff00] text-[#07080c] border-[#00ff00] font-extrabold shadow-[0_0_5px_rgba(0,255,0,0.3)]"
                      : "bg-[#14161f]/90 text-neutral-500 border-neutral-800 hover:text-neutral-300"
                  }`}
                >
                  {key.replace("S_", "")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabs paires en bas */}
        {!isCompact && (
          <div className="bg-[#10131b] border-t border-neutral-900 px-2 py-1 flex gap-1 select-none overflow-x-auto whitespace-nowrap">
            {["Volatility 100 Index, M5", "Volatility 75 Index, M5", "Step Index, M5"].map((pair) => {
              const isActive = pair === activePair;
              return (
                <button
                  key={pair}
                  onClick={() => setActivePair(pair)}
                  className={`px-1.5 py-0.5 font-mono text-[7.5px] font-semibold rounded border cursor-pointer transition-colors ${
                    isActive ? "bg-[#07080c] text-white border-neutral-800" : "bg-[#141824] text-neutral-400 border-transparent hover:text-neutral-200"
                  }`}
                >
                  {pair.split(",")[0]}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond du Fichier 1 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Effets de flou animés */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center px-4 max-w-6xl mx-auto py-24">
        {/* Colonne gauche - Texte (Fichier 1) */}
        <div className="text-center md:text-left animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6">
            Solution BMAE — Trading Automatisé
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ne perdez plus des mois à apprendre seul{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              le trading
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            BMAE a été conçu pour vous faire gagner des années d'apprentissage en vous offrant une lecture du marché claire et efficace. BMAE est le résultat de plus de 6 ans d'expérience, de recherche et d'optimisation condensé en un seul outil. Attachez-le à votre graphique et profitez immédiatement de la même vision du marché que celle de plusieurs professionnels qui utilisent l'outil au quotidien.
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

        {/* Colonne droite - DOUBLE ÉCRAN : iMac + MacBook superposé (Fichier 2) */}
        <div className="lg:col-span-7 relative flex items-center justify-center pt-8 pb-12 w-full animate-scale-in">
          
          {/* Effet lumineux d'ambiance */}
          <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />

          {/* 1. Écran principal iMac */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[480px] sm:max-w-[530px] md:max-w-[560px] transition-all"
          >
            {/* Coque externe du moniteur */}
            <div className="relative bg-[#1a1c24] p-[6px] sm:p-[8px] rounded-[16px] sm:rounded-[20px] shadow-[0_25px_65px_rgba(0,0,0,0.95)] border border-neutral-800">
              {/* Bordure intérieure de l'écran */}
              <div className="bg-[#040508] p-1.5 sm:p-2 rounded-[10px] sm:rounded-[14px]">
                {/* Contenu de l'écran */}
                <div className="relative bg-black aspect-[16/10] overflow-hidden rounded border border-neutral-950">
                  <MT5Terminal isCompact={false} />
                </div>
              </div>
              {/* Menton aluminium en bas du moniteur */}
              <div className="h-5 sm:h-7 bg-gradient-to-r from-[#2a2c34] via-[#484a54] to-[#2a2c34] rounded-b-[10px] sm:rounded-b-[14px] flex items-center justify-center border-t border-neutral-800/80">
                <span className="text-[6px] sm:text-[7.5px] font-mono font-black tracking-[0.25em] text-neutral-400 uppercase">
                  BMAE MONITOR
                </span>
              </div>
            </div>
            {/* Pied du moniteur */}
            <div className="relative w-16 sm:w-20 h-10 sm:h-14 bg-gradient-to-b from-[#2a2c34] to-[#121318] mx-auto shadow-md" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }} />
            {/* Base du pied */}
            <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-[#1c1d24] via-[#2d2e38] to-[#1c1d24] mx-auto rounded-b-md shadow-lg" />
          </motion.div>

          {/* 2. Deuxième écran MacBook superposé */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 sm:-right-8 lg:-right-4 z-30 w-[230px] sm:w-[280px] md:w-[310px] lg:w-[340px] transition-all"
          >
            {/* Capot de l'écran */}
            <div className="relative bg-[#1a1c24] p-[4px] rounded-t-lg border-t border-x border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
              {/* Contenu de l'écran */}
              <div className="relative bg-black aspect-[16/10] overflow-hidden rounded border border-neutral-950">
                <MT5Terminal isCompact={true} />
              </div>
            </div>
            {/* Base du laptop */}
            <div className="relative h-1.5 sm:h-2 bg-gradient-to-r from-[#2a2c34] via-[#484a54] to-[#2a2c34] rounded-b-lg border-t border-neutral-500/25 shadow-[0_12px_25px_rgba(0,0,0,0.95)]">
              {/* Encoche d'ouverture */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-neutral-950 rounded-b" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modale vidéo (Fichier 1) */}
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

      {/* Modale Paramètres BMAE (Fichier 2) */}
      <AnimatePresence>
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Fond flouté */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettingsModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Boîte modale */}
            <motion.form
              onSubmit={handleSaveSettings}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-[#161920] border border-neutral-800 rounded-2xl shadow-2xl z-10 text-left overflow-hidden flex flex-col font-sans"
            >
              {/* En-tête */}
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

              {/* Onglets */}
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

              {/* Contenu scrollable */}
              <div className="p-5 max-h-[360px] overflow-y-auto space-y-4 bg-[#161920]">
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

                    <div className="space-y-2">
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

                      <label className="flex items-center gap-3.5 p-3 rounded-lg bg-black/20 hover:bg-black/30 border border-neutral-900 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={buyTradeEmulation}
                          onChange={(e) => setBuyTradeEmulation(e.target.checked)}
                          className="w-4 h-4 text-blue-600 bg-neutral-900 border-neutral-800 rounded focus:ring-blue-500"
                        />
                        <div>
                          <span className="font-semibold block text-white text-xs">Autoriser la modification des signaux</span>
                          <span className="text-[10px] text-neutral-500">Active la re-calcul dynamique des niveaux de stop loss sur structure.</span>
                        </div>
                      </label>
                    </div>
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

                          <tr>
                            <td className="px-4 py-2">SHOW H4 SIGNAL ZONE</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={String(showH4Zone)}
                                onChange={(e) => setShowH4Zone(e.target.value === "true")}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </td>
                          </tr>

                          <tr className="bg-[#1a1d27]/40 text-[10px] text-neutral-500 font-bold">
                            <td colSpan={2} className="px-4 py-1.5">--- TREND LINE SETTINGS ---</td>
                          </tr>

                          <tr>
                            <td className="px-4 py-2">USE TREND LINE</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={String(useTrendLine)}
                                onChange={(e) => setUseTrendLine(e.target.value === "true")}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-4 py-2">TREND LINE UP COLOR</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={trendLineUpColor}
                                onChange={(e) => setTrendLineUpColor(e.target.value)}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="DodgerBlue">DodgerBlue</option>
                                <option value="Cyan">Cyan</option>
                                <option value="LimeGreen">LimeGreen</option>
                              </select>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-4 py-2">TREND LINE DOWN COLOR</td>
                            <td className="px-4 py-2 text-white">
                              <select
                                value={trendLineDownColor}
                                onChange={(e) => setTrendLineDownColor(e.target.value)}
                                className="bg-[#13151c] border border-neutral-800 rounded px-2 py-0.5 text-xs text-blue-400 outline-none"
                              >
                                <option value="OrangeRed">OrangeRed</option>
                                <option value="Rose">Rose Red</option>
                                <option value="Yellow">Yellow</option>
                              </select>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Boutons d'action */}
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