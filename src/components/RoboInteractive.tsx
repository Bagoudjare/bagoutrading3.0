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

export function RoboInteractive() {
  const [selectedId, setSelectedId] = useState<string | null>("robo-ai");

  const selectedFeature = robotFeatures.find((f) => f.id === selectedId);

  return (
    <section id="robot" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
      {/* Grid Pattern and Dark Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-blue-400/80 flex flex-col items-center justify-center cursor-pointer relative group"
              >
                {/* Central glowing core light */}
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-b from-blue-500/20 via-cyan-500/10 to-purple-500/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <Cpu className="w-10 h-10 md:w-14 md:h-14 text-blue-300 group-hover:scale-110 transition-transform duration-300 z-10" />
                <span className="text-[10px] md:text-xs font-mono font-bold text-white tracking-widest mt-1.5 z-10 animate-pulse">
                  BMAE
                </span>
                {/* Simulated connection rays */}
                {selectedId && (
                  <div className="absolute -inset-8 border border-blue-400/20 rounded-full animate-ping pointer-events-none" />
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
                        ? "bg-blue-600 border-blue-300 text-white shadow-blue-500/40"
                        : "bg-slate-800/80 border-slate-700 hover:border-blue-400/60 text-blue-200 hover:text-white backdrop-blur-sm"
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
                  className="p-8 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-blue-400/20 backdrop-blur-md shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent pointer-events-none rounded-tr-3xl" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      {(() => {
                        const IconComponent = iconMap[selectedFeature.iconName] || Cpu;
                        return <IconComponent className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-blue-300 tracking-wider uppercase">
                        Module Actif
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-0.5">
                        {selectedFeature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {selectedFeature.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-700/60 space-y-3">
                    <h4 className="text-xs font-mono font-semibold text-gray-400 tracking-widest uppercase">
                      Spécifications Techniques
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {selectedFeature.detailedExplanation || "Notre algorithme auto-ajuste ses paramètres selon la déviation standard de la volatilité moyenne, assurant une conformité parfaite avec les critères de levier définis."}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gray-500">
                      Module Status: <span className="text-emerald-400 font-bold">OPTIMAL</span>
                    </span>
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-300 hover:text-blue-200 group"
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
