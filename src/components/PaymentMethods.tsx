import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Copy, 
  CheckCircle,
  ShieldCheck,
  Check,
  ExternalLink
} from "lucide-react";
import { BMAE_LICENSES, BmaeLicense } from "@/types";

interface PaymentMethod {
  id: string;
  name: string;
  type: "Mobile Money" | "Digital Wallet" | "Cryptocurrency";
  color: string;
  icon: string;
  address: string;
  isCrypto: boolean;
}

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
  </svg>
);

interface PaymentMethodsProps {
  selectedLicense?: BmaeLicense;
  onSelectLicense?: (license: BmaeLicense) => void;
}

export default function PaymentMethods({
  selectedLicense,
  onSelectLicense,
}: PaymentMethodsProps) {
  // Licence active (utilise la prop si fournie, sinon recherche dans localStorage ou défaut à "Licence à Vie")
  const [internalLicense, setInternalLicense] = useState<BmaeLicense>(() => {
    if (selectedLicense) return selectedLicense;
    try {
      const stored = localStorage.getItem("bmae_selected_license");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.name) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return BMAE_LICENSES[2]; // Licence à Vie par défaut
  });

  const activeLicense = selectedLicense || internalLicense;

  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "moov",
      name: "Moov Money",
      type: "Mobile Money",
      color: "from-orange-500 to-amber-600",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_Moov_Africa.png",
      address: "+228 99 12 34 56",
      isCrypto: false
    },
    {
      id: "mixx",
      name: "Mixx by Yas",
      type: "Digital Wallet",
      color: "from-yellow-400 to-amber-500",
      icon: "https://yas.tg/favicon.png",
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
    e.stopPropagation(); // Évite d'ouvrir WhatsApp lors de la copie
    navigator.clipboard.writeText(address);
    
    const message = isCrypto 
      ? "« Adresse copiée avec succès ! »" 
      : "« Numéro de dépôt copié avec succès ! »";
      
    setToast({
      message,
      id: Date.now()
    });
  };

  const handleSelectPaymentMethod = (method: PaymentMethod) => {
    const licenseName = activeLicense.name;
    // Format requis : Contenir exactement "Je souhaite confirmer l'adresse de payement"
    // et mentionner la licence choisie ainsi que le moyen de paiement
    const message = `Bonjour, je souhaite confirmer l'adresse de payement pour la ${licenseName} via ${method.name}.`;
    const phoneNumber = "22898740835";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSwitchLicense = (lic: BmaeLicense) => {
    setInternalLicense(lic);
    if (onSelectLicense) {
      onSelectLicense(lic);
    }
    try {
      localStorage.setItem("bmae_selected_license", JSON.stringify(lic));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section id="paiement" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-900 transition-colors duration-300">
      {/* Visual lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1.5 text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Moyens de Règlement Sécurisés
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 tracking-tight">
            Moyens de paiement
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm md:text-base">
            Cliquez sur le moyen de paiement de votre choix pour confirmer les coordonnées de règlement et finaliser votre commande directement sur WhatsApp.
          </p>
        </div>

        {/* Encadré d'affichage et de confirmation de la licence sélectionnée */}
        <div className="mb-12 max-w-2xl mx-auto bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-purple-950/40 border border-blue-500/30 rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-500/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 shadow-sm">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Licence sélectionnée
                </span>
                <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                  <span className="text-lg font-bold text-white">
                    {activeLicense.name}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">
                    ({activeLicense.price})
                  </span>
                </div>
              </div>
            </div>

            {/* Sélecteur rapide pour basculer facilement de licence */}
            <div className="flex items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
              {BMAE_LICENSES.map((lic) => {
                const isSelected = activeLicense.id === lic.id;
                return (
                  <button
                    key={lic.id}
                    type="button"
                    onClick={() => handleSwitchLicense(lic)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-400 hover:text-white hover:bg-slate-850"
                    }`}
                  >
                    {lic.period}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {paymentMethods.map((method) => {
            return (
              <div
                key={method.id}
                id={`payment-method-${method.id}`}
                onClick={() => handleSelectPaymentMethod(method)}
                title={`Cliquez pour confirmer le règlement par ${method.name} sur WhatsApp`}
                className="relative flex flex-col justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer bg-slate-900/50 border-slate-800 hover:border-emerald-500/60 hover:bg-slate-900/90 hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] group transform hover:-translate-y-1 active:translate-y-0"
              >
                <div>
                  {/* Top: Icon + Name & Type */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center p-2 shadow-md group-hover:scale-105 group-hover:border-emerald-500/40 transition-all flex-shrink-0">
                      <img 
                        src={method.icon} 
                        alt={method.name} 
                        className="w-full h-full object-contain rounded"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-bold text-white group-hover:text-emerald-400 transition-colors text-sm sm:text-base truncate">
                        {method.name}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                        {method.type}
                      </p>
                    </div>
                  </div>

                  {/* Numéro ou Adresse avec bouton Copier */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono text-slate-500 mb-1 flex items-center justify-between">
                      <span>{method.isCrypto ? "Adresse de dépôt" : "Numéro de dépôt"}</span>
                    </div>
                    <div
                      onClick={(e) => handleCopy(method.address, method.isCrypto, e)}
                      title="Cliquer pour copier"
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950 hover:bg-slate-950/90 border border-slate-800/80 hover:border-blue-500/40 transition-all cursor-pointer text-blue-400 font-mono text-xs group/addr"
                    >
                      <span className="truncate text-[11px] font-medium select-all">
                        {method.address}
                      </span>
                      <span className="p-1 rounded bg-slate-800/60 text-slate-400 group-hover/addr:text-emerald-400 transition-colors flex-shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bouton d'action WhatsApp sur la carte */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPaymentMethod(method);
                  }}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 group-hover:bg-emerald-500 group-hover:text-white shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Confirmer sur WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note de sécurité en bas */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Validation manuelle et assistance personnalisée via WhatsApp après chaque transaction.
          </p>
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
              <span className="font-sans text-sm font-medium text-slate-200">
                {toast.message}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
