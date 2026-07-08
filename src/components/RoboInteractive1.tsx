import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Boxes,
  GitBranch,
  LineChart,
  Layers,
  Crosshair,
  TrendingUp,
  Filter,
  Calculator,
  Shield,
  BellRing,
  Sparkles,
  Cpu,
  ArrowRight,
} from "lucide-react";

type Feature = {
  id: string;
  title: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  detailed: string;
};

const features: Feature[] = [
  { id: "ob", title: "Order Blocks", short: "OB", icon: Boxes, description: "Détection automatique des zones institutionnelles où les gros ordres ont été passés.", detailed: "L'algorithme scanne l'historique multi-timeframes pour repérer les blocs d'ordres significatifs et projette les zones de réaction du prix." },
  { id: "fvg", title: "Fair Value Gaps", short: "FVG", icon: GitBranch, description: "Repère les déséquilibres de liquidité laissés par le marché.", detailed: "Chaque FVG est classé selon sa fraîcheur et sa force, avec une projection des zones de rééquilibrage probables." },
  { id: "struct", title: "Structure du marché", short: "BOS", icon: LineChart, description: "Analyse intelligente de la structure haussière/baissière (BOS, CHoCH).", detailed: "Détection en temps réel des cassures de structure et changements de caractère pour identifier la tendance dominante." },
  { id: "mtf", title: "Multi-Timeframe", short: "MTF", icon: Layers, description: "Analyse simultanée de plusieurs unités de temps pour valider un setup.", detailed: "Corrélation automatique des signaux entre M15, H1, H4 et D1 pour n'exécuter que les setups à haute conviction." },
  { id: "sniper", title: "Setups Sniper", short: "SNP", icon: Crosshair, description: "Configurations à forte probabilité — précision maximale, risque minimal.", detailed: "Convergence de plusieurs critères (OB + FVG + BOS + MTF) filtrés par un score de qualité propriétaire." },
  { id: "bsss", title: "Signaux Buy / Sell", short: "BS/SS", icon: TrendingUp, description: "Signaux Buy (BS) et Sell (SS) filtrés intelligemment.", detailed: "Filtrage anti-bruit via ATR, sessions et volume pour éliminer les faux signaux en range." },
  { id: "fbfs", title: "Filter Buy / Sell", short: "FB/FS", icon: Filter, description: "Signaux avancés FB/FS avec guide d'interprétation intégré.", detailed: "Deuxième couche de validation combinant momentum, contexte structurel et confluence pour affiner vos décisions." },
  { id: "rr", title: "Risk / Reward auto", short: "R:R", icon: Calculator, description: "Calcul automatique du ratio Risque/Rendement sur chaque setup.", detailed: "Chaque signal affiche son R:R projeté ; seuls les setups >= 1:2 sont mis en avant par défaut." },
  { id: "risk", title: "Gestion du risque", short: "RSK", icon: Shield, description: "Calcul automatique du lot, du Stop Loss et du Take Profit.", detailed: "Money management dynamique basé sur votre capital, votre % de risque et la volatilité de l'instrument." },
  { id: "push", title: "Notifications Push", short: "PSH", icon: BellRing, description: "Alertes de signaux directement sur votre smartphone via MetaTrader.", detailed: "Push, e-mail et alertes sonores paramétrables par type de signal et par paire." },
  { id: "graph", title: "Objets graphiques", short: "GFX", icon: Sparkles, description: "Affichage clair et intuitif des zones, signaux et niveaux clés.", detailed: "Rendu graphique optimisé, non intrusif, avec code couleur cohérent et légende intégrée au chart." },
];

export const BmaeSpotlightSection = () => {
  const [selectedId, setSelectedId] = useState<string>(features[0].id);
  const selected = features.find((f) => f.id === selectedId)!;

  return (
    <section id="robot" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#060606] transition-colors duration-300" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-5">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-400/30 rounded-full">
              Système Central Autonome
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight"
          >
            Pourquoi choisir BMAE ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mt-4 text-sm md:text-base"
          >
            BMAE réduit considérablement la courbe d'apprentissage en automatisant les analyses les plus complexes. Cliquez sur n'importe quel module périphérique pour inspecter ses fonctionnalités.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          {/* Orbit */}
          <div className="lg:col-span-7 flex justify-center items-center relative h-[420px] md:h-[520px]">
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-blue-400/20 animate-[spin_120s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-blue-400/10 pointer-events-none" />

            {/* Core */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.25)",
                    "0 0 45px rgba(59,130,246,0.5)",
                    "0 0 20px rgba(59,130,246,0.25)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-blue-400/80 flex flex-col items-center justify-center cursor-pointer relative group"
              >
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-b from-blue-500/20 via-cyan-500/10 to-purple-500/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <Cpu className="w-10 h-10 md:w-14 md:h-14 text-blue-300 group-hover:scale-110 transition-transform duration-300 z-10" />
                <span className="text-[10px] md:text-xs font-mono font-bold text-white tracking-widest mt-1.5 z-10 animate-pulse">
                  BMAE
                </span>
                {selectedId && (
                  <div className="absolute -inset-8 border border-blue-400/20 rounded-full animate-ping pointer-events-none" />
                )}
              </motion.div>
            </div>

            {/* Orbit nodes */}
            {features.map((feat, index) => {
              const total = features.length;
              const angle = (index * 2 * Math.PI) / total;
              const radius = 140;
              const mdRadius = 190;
              const Icon = feat.icon;
              const isSelected = selectedId === feat.id;

              return (
                <div
                  key={feat.id}
                  style={{
                    position: "absolute",
                    transform: `translate(calc(var(--radius) * ${Math.cos(angle)}), calc(var(--radius) * ${Math.sin(angle)}))`,
                    ["--radius" as any]: `${radius}px`,
                  }}
                  className="md:[--radius:190px] transition-all duration-300 z-30"
                >
                  <motion.button
                    onClick={() => setSelectedId(feat.id)}
                    whileHover={{ scale: 1.15 }}
                    className={`flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 border-blue-300 text-white shadow-blue-500/40"
                        : "bg-slate-800/80 border-slate-700 hover:border-blue-400/60 text-blue-200 hover:text-white backdrop-blur-sm"
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    <span className="hidden md:block text-[9px] font-mono mt-1 font-semibold tracking-tight text-center max-w-[54px] overflow-hidden truncate">
                      {feat.short}
                    </span>
                  </motion.button>
                  {isSelected && (
                    <svg className="absolute inset-0 -z-10 w-full h-full overflow-visible pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% - ${Math.cos(angle) * (mdRadius - 40)}px)`}
                        y2={`calc(50% - ${Math.sin(angle) * (mdRadius - 40)}px)`}
                        stroke="rgba(96, 165, 250, 0.5)"
                        strokeWidth="1.5"
                        strokeDasharray="4"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-blue-400/20 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent pointer-events-none rounded-tr-3xl" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/40 flex items-center justify-center text-blue-300">
                    <selected.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-blue-300 tracking-wider uppercase">
                      Module Actif
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-0.5">{selected.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-700/60 space-y-3">
                  <h4 className="text-xs font-mono font-semibold text-gray-400 tracking-widest uppercase">
                    Spécifications techniques
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {selected.detailed}
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-400">
                    Module Status: <span className="text-emerald-400 font-bold">OPTIMAL</span>
                  </span>
                  <a
                    href="#licence-section"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-300 hover:text-blue-200 group"
                  >
                    Acquérir ce module
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
