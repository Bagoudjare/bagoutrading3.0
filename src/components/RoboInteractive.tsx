import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { robotFeatures } from "../data";
import {
  BarChart3,
  ShieldCheck,
  Layers,
  Activity,
  BrainCircuit,
  Send,
  Cpu,
  X,
  Play,
  ArrowRight
} from "lucide-react";

const iconMap: { [key: string]: any } = {
  BarChart3,
  ShieldCheck,
  Layers,
  Activity,
  BrainCircuit,
  Send
};

export default function RobotInteractive() {
  const [selectedId, setSelectedId] = useState<string | null>("robo-ai");

  const selectedFeature = robotFeatures.find((f) => f.id === selectedId);

  return (
    <section id="robot" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Grid Pattern and Dark Ambient Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#060606] transition-colors duration-300" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 rounded-full">
              Système Central Autonome
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight transition-colors duration-300"
          >
            Le Cerveau Algorithmique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-neutral-400 mt-4 text-sm md:text-base"
          >
            Explorez les engrenages internes du robot de trading de BagougjareTrading 3.0. Cliquez sur n'importe quel module périphérique pour inspecter ses fonctionnalités.
          </motion.p>
        </div>

        {/* Interactive Orbit Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          
          {/* Left Column: Orbital Interactive Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center relative h-[400px] md:h-[480px]">
            {/* Pulsing Concentric Circular Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-slate-300 dark:border-neutral-800/60 animate-[spin_120s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-slate-200 dark:border-neutral-800/40 pointer-events-none" />
            
            {/* Center Robot Engine Core Visual */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.15)",
                    "0 0 35px rgba(59,130,246,0.3)",
                    "0 0 20px rgba(59,130,246,0.15)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-neutral-900 border-2 border-blue-500/80 flex flex-col items-center justify-center cursor-pointer relative group shadow-lg dark:shadow-none"
              >
                {/* Central glowing core light */}
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-purple-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <Cpu className="w-10 h-10 md:w-14 md:h-14 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 z-10" />
                <span className="text-[10px] md:text-xs font-mono font-bold text-slate-800 dark:text-white tracking-widest mt-1.5 z-10 animate-pulse">
                  APEX CORE
                </span>
                {/* Simulated connection rays */}
                {selectedId && (
                  <div className="absolute -inset-8 border border-blue-500/20 rounded-full animate-ping pointer-events-none duration-1000" />
                )}
              </motion.div>
            </div>

            {/* Orbiting Feature Node Buttons arranged geometrically */}
            {robotFeatures.map((feat, index) => {
              const total = robotFeatures.length;
              const angle = (index * 2 * Math.PI) / total; // Math calculation to map evenly in a circle
              const radius = 135; // default pixel radius on mobile
              const mdRadius = 175; // default pixel radius on desktop
              
              const IconComponent = iconMap[feat.iconName] || Cpu;
              const isSelected = selectedId === feat.id;

              return (
                <div
                  key={feat.id}
                  style={{
                    position: "absolute",
                    // We calculate left/top using standard trigonometric functions, mapping cleanly to responsive units
                    transform: `translate(calc(var(--radius) * ${Math.cos(angle)}), calc(var(--radius) * ${Math.sin(angle)}))`,
                    "--radius": `${radius}px`
                  } as any}
                  className="md:[--radius:175px] transition-all duration-300 z-30"
                >
                  <motion.button
                    onClick={() => setSelectedId(feat.id)}
                    whileHover={{ scale: 1.15 }}
                    className={`flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 border-blue-400 text-white shadow-blue-500/25"
                        : "bg-white dark:bg-neutral-900/90 border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-600 text-slate-600 dark:text-neutral-400 hover:text-slate-800 dark:hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5 md:w-7 md:h-7" />
                    <span className="hidden md:block text-[9px] font-mono mt-1 font-semibold tracking-tight text-center max-w-[50px] overflow-hidden truncate">
                      {feat.title.split(" ")[0]}
                    </span>
                  </motion.button>
                  
                  {/* Subtle orbiting visual connecting lines */}
                  {isSelected && (
                    <svg className="absolute inset-0 -z-10 w-full h-full overflow-visible pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% - ${Math.cos(angle) * (mdRadius - 40)}px)`}
                        y2={`calc(50% - ${Math.sin(angle) * (mdRadius - 40)}px)`}
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="1.5"
                        strokeDasharray="4"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Glassmorphic Panel describing the selected functionality */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              {selectedFeature && (
                <motion.div
                  key={selectedFeature.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f]/90 dark:to-neutral-950/90 border border-slate-200 dark:border-neutral-800/80 backdrop-blur-md shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none rounded-tr-3xl" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {(() => {
                        const IconComponent = iconMap[selectedFeature.iconName] || Cpu;
                        return <IconComponent className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                        Module Actif
                      </span>
                      <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mt-0.5">
                        {selectedFeature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                    {selectedFeature.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-neutral-900 space-y-4">
                    <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 tracking-widest uppercase">
                      Spécifications Techniques
                    </h4>
                    <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">
                      {selectedFeature.detailedExplanation || "Notre algorithme auto-ajuste ses paramètres selon la déviation standard de la volatilité moyenne, assurant une conformité parfaite avec les critères de levier définis."}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500">
                      Module Status: <span className="text-emerald-500 dark:text-emerald-400 font-bold">OPTIMAL</span>
                    </span>
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 group"
                    >
                      Acquérir ce module
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
