import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Copy, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  type: "Mobile Money" | "Digital Wallet" | "Cryptocurrency";
  color: string;
  icon: string;
  address: string;
  isCrypto: boolean;
}

export default function PaymentMethods() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "moov",
      name: "Moov Money",
      type: "Mobile Money",
      color: "from-orange-500 to-amber-600",
      icon: "https://moov-africa.tg/wp-content/uploads/elementor/thumbs/2logo-moov-africa-put36aevvcwbxm9ucoog0ot5tre773bvjb8nnh8514.jpeg",
      address: "+228 99 12 34 56",
      isCrypto: false
    },
    {
      id: "mixx",
      name: "Mixx by Yas",
      type: "Digital Wallet",
      color: "from-yellow-400 to-amber-500",
      icon: "https://cdn-ilcckdn.nitrocdn.com/mJCoEvGkeejlEvJdEMQjiBVdPamvpGSY/assets/images/optimized/rev-ef13978/yas.tg/wp-content/uploads/2024/10/jem_logo.svg",
      address: "YAS-BAGOUG-88390",
      isCrypto: false
    },
    {
      id: "litecoin",
      name: "Litecoin (LTC)",
      type: "Cryptocurrency",
      color: "from-slate-400 to-slate-600",
      icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      address: "M8VzFjKxW8C6pTrVsz78NksY6uBGuoJKmQY",
      isCrypto: true
    },
    {
      id: "tron",
      name: "Tron (TRX)",
      type: "Cryptocurrency",
      color: "from-red-600 to-rose-500",
      icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
      address: "TY5v1pAUziYQEsZ4ugmjiozyjRCcMj1Ca8N",
      isCrypto: true
    },
    {
      id: "usdt",
      name: "USDT (TRC-20)",
      type: "Cryptocurrency",
      color: "from-emerald-400 to-teal-600",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      address: "TR7NHqeVg63C3XQ8rwURpSdfBNzsWgjDu6y",
      isCrypto: true
    }
  ];

  const handleCopy = (address: string, isCrypto: boolean, e: React.MouseEvent) => {
    e.stopPropagation(); // Evite de fermer ou de ré-ouvrir l'infobulle au clic
    navigator.clipboard.writeText(address);
    
    const message = isCrypto 
      ? "« Adresse copiée avec succès ! »" 
      : "« Numéro de dépôt copié avec succès ! »";
      
    setToast({
      message,
      id: Date.now()
    });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-payment-card]')) {
        setActiveCardId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <section id="paiement" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-900 transition-colors duration-300">
      {/* Visual lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1.5 text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Moyens de Règlement Sécurisés
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 tracking-tight">
            Moyens de paiement
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm md:text-base">
            Survolez une carte pour afficher son adresse ou numéro de dépôt. Cliquez sur l'adresse pour la copier.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {paymentMethods.map((method) => {
            const isOpened = activeCardId === method.id;

            return (
              <div
                key={method.id}
                data-payment-card
                onMouseEnter={() => setActiveCardId(method.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => setActiveCardId(isOpened ? null : method.id)}
                className="relative flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer bg-slate-900/40 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_rgba(59,130,246,0.05)] group"
              >
                <div className="flex items-center gap-4">
                  {/* Left visual icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center overflow-hidden p-1.5 shadow-md group-hover:scale-105 transition-transform">
                    <img 
                      src={method.icon} 
                      alt={method.name} 
                      className="w-full h-full object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                      {method.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">
                      {method.type}
                    </p>
                  </div>
                </div>

                <div className="text-slate-600 group-hover:text-blue-400 transition-colors pl-2">
                  <HelpCircle className="w-4 h-4 opacity-60" />
                </div>

                {/* Floating Infobulle / Tooltip */}
                <AnimatePresence>
                  {isOpened && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      transition={{ duration: 0.15 }}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-[calc(100%+12px)] left-1/2 z-30 min-w-[240px] max-w-[300px] bg-slate-900 border border-slate-850 rounded-xl p-3.5 shadow-2xl pointer-events-auto"
                    >
                      {/* Triangle */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-slate-850 rotate-45" />

                      <div className="space-y-1.5 relative z-10">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                          {method.isCrypto ? "Adresse de réception" : "Numéro de dépôt"}
                        </span>
                        
                        {/* Interactive Clickable Address */}
                        <div
                          onClick={(e) => handleCopy(method.address, method.isCrypto, e)}
                          className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950 hover:bg-slate-950/80 border border-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group/addr text-blue-400 font-mono text-xs select-all break-all"
                        >
                          <span className="truncate pr-1 select-all font-semibold">{method.address}</span>
                          <Copy className="w-3.5 h-3.5 text-slate-500 group-hover/addr:text-blue-400 flex-shrink-0 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modern custom toast notification */}
      <AnimatePresence>
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 bg-slate-900 border border-emerald-500/30 text-white px-5 py-3.5 rounded-xl shadow-2xl shadow-emerald-500/5 backdrop-blur-md pointer-events-auto"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="font-sans text-sm font-medium text-slate-250">
                {toast.message}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
