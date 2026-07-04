import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Coins, 
  Copy, 
  Check, 
  QrCode, 
  Wallet, 
  X,
  CheckCircle, 
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  provider: string;
  type: "Mobile Money" | "Digital Wallet" | "Cryptocurrency";
  color: string;
  badgeBg: string;
  badgeText: string;
  icon: any;
  address: string;
  network?: string;
  accountHolder?: string;
  extraNote?: string;
}

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "moov",
      name: "Moov Money",
      provider: "Moov Togo",
      type: "Mobile Money",
      color: "from-orange-500 to-amber-600",
      badgeBg: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/40",
      badgeText: "text-orange-600 dark:text-orange-400",
      icon: Smartphone,
      address: "+228 99 12 34 56",
      accountHolder: "BAGOUGJARE SERVICES S.A.R.L.",
      extraNote: "Prise en compte immédiate dès confirmation du transfert de l'opérateur."
    },
    {
      id: "mixx",
      name: "Mixx by Yas",
      provider: "Yas Holding",
      type: "Digital Wallet",
      color: "from-purple-600 to-indigo-600",
      badgeBg: "bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/40",
      badgeText: "text-purple-600 dark:text-purple-400",
      icon: Smartphone,
      address: "YAS-BAGOUG-88390",
      accountHolder: "BAGOUGJARE TRADING GROUP",
      extraNote: "Aucun frais réseau supplémentaire ne sera facturé."
    },
    {
      id: "litecoin",
      name: "Litecoin",
      provider: "LTC Network",
      type: "Cryptocurrency",
      color: "from-slate-400 to-slate-600",
      badgeBg: "bg-slate-100 dark:bg-neutral-900 border-slate-200 dark:border-neutral-800",
      badgeText: "text-slate-600 dark:text-slate-400",
      icon: Coins,
      address: "M8VzFjKxW8C6pTrVsz78NksY6uBGuoJKmQY",
      network: "Litecoin (LTC Native)",
      extraNote: "Nécessite généralement 3 à 6 confirmations sur la blockchain Litecoin (env. 10m)."
    },
    {
      id: "tron",
      name: "Tron",
      provider: "TRX Network",
      type: "Cryptocurrency",
      color: "from-red-600 to-rose-500",
      badgeBg: "bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/40",
      badgeText: "text-red-600 dark:text-red-400",
      icon: Coins,
      address: "TY5v1pAUziYQEsZ4ugmjiozyjRCcMj1Ca8N",
      network: "TRON (TRX / TRC-20)",
      extraNote: "Paiement ultra-rapide validé en moins de 60 secondes sur la blockchain TRON."
    },
    {
      id: "usdt",
      name: "USDT (TRC-20)",
      provider: "Tether USD",
      type: "Cryptocurrency",
      color: "from-emerald-400 to-teal-600",
      badgeBg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40",
      badgeText: "text-emerald-600 dark:text-emerald-400",
      icon: Coins,
      address: "TR7NHqeVg63C3XQ8rwURpSdfBNzsWgjDu6y",
      network: "TRON / TRC-20",
      extraNote: "Utilisez exclusivement le réseau TRON (TRC-20) pour effectuer l'envoi."
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payments" className="py-24 relative overflow-hidden bg-white dark:bg-black border-t border-slate-100 dark:border-neutral-900 transition-colors duration-300">
      {/* Visual lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 rounded-full">
            Moyens de Règlement Sécurisés
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Modes de Paiement Disponibles
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
            Cliquez sur un moyen de paiement pour faire apparaître l'adresse ou le numéro de réception de dépôt.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {paymentMethods.map((method) => {
            const MethodIcon = method.icon;

            return (
              <motion.button
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                id={`payment-card-${method.id}`}
                className="w-full p-5 rounded-2xl border text-left flex flex-row items-center justify-between transition-all duration-300 cursor-pointer bg-white dark:bg-[#090909] border-slate-200 dark:border-neutral-900 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] group"
              >
                <div className="flex items-center gap-4">
                  {/* Left visual icon badge */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-md shadow-blue-500/5 group-hover:scale-110 transition-transform`}>
                    <MethodIcon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {method.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 dark:text-neutral-500 mt-0.5 uppercase tracking-wider">
                      {method.type}
                    </p>
                  </div>
                </div>

                <div className="text-slate-300 dark:text-neutral-800 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors pl-2">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>

      {/* Pop-up modal details view */}
      <AnimatePresence>
        {selectedMethod && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedMethod(null);
                setCopied(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-left overflow-hidden"
            >
              {/* Corner Close Button */}
              <button
                onClick={() => {
                  setSelectedMethod(null);
                  setCopied(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative side accent gradient */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${selectedMethod.color}`} />

              <div className="space-y-6">
                
                {/* Header info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedMethod.color} flex items-center justify-center text-white shadow-md`}>
                    {(() => {
                      const Icon = selectedMethod.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${selectedMethod.badgeBg} ${selectedMethod.badgeText}`}>
                      {selectedMethod.provider}
                    </span>
                    <h3 className="text-xl font-display font-black text-slate-900 dark:text-white mt-1">
                      {selectedMethod.name}
                    </h3>
                  </div>
                </div>

                {/* Main details box display (THE ADDRESS ONLY / CORE COMPONENT) */}
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block">
                    {selectedMethod.type === "Cryptocurrency" ? "Adresse Blockchain de Dépôt" : "Numéro de Réception"}
                  </span>
                  
                  {/* Address Display Box */}
                  <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-neutral-950 border border-slate-200/80 dark:border-neutral-900 font-mono text-sm md:text-base text-slate-850 dark:text-white select-all break-all flex items-center justify-between shadow-sm relative group/addr">
                    <span className="pr-4">{selectedMethod.address}</span>
                  </div>

                  {selectedMethod.network && (
                    <div className="flex items-center justify-between px-1 text-xs">
                      <span className="text-slate-400 dark:text-neutral-500 font-mono">Réseau requis :</span>
                      <span className="text-blue-600 dark:text-blue-400 font-mono font-bold">{selectedMethod.network}</span>
                    </div>
                  )}

                  {selectedMethod.accountHolder && (
                    <div className="flex items-center justify-between px-1 text-xs">
                      <span className="text-slate-400 dark:text-neutral-500 font-mono">Nom du compte :</span>
                      <span className="text-slate-800 dark:text-neutral-300 font-display font-medium">{selectedMethod.accountHolder}</span>
                    </div>
                  )}
                </div>

                {/* QR Code graphic representation for high usability */}
                <div className="flex flex-col items-center justify-center py-2 bg-slate-50/50 dark:bg-neutral-950/40 rounded-2xl border border-slate-100 dark:border-neutral-900/60 p-4">
                  <div className="relative p-2 bg-white rounded-xl border border-slate-200 dark:border-neutral-800 w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                      <rect x="5" y="5" width="22" height="22" strokeWidth="6" rx="2" />
                      <rect x="12" y="12" width="8" height="8" fill="currentColor" />
                      <rect x="73" y="5" width="22" height="22" strokeWidth="6" rx="2" />
                      <rect x="80" y="12" width="8" height="8" fill="currentColor" />
                      <rect x="5" y="73" width="22" height="22" strokeWidth="6" rx="2" />
                      <rect x="12" y="80" width="8" height="8" fill="currentColor" />
                      
                      <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                      <rect x="48" y="5" width="12" height="6" fill="currentColor" />
                      <rect x="64" y="12" width="6" height="12" fill="currentColor" />
                      <rect x="36" y="20" width="18" height="6" fill="currentColor" />
                      <rect x="85" y="36" width="10" height="12" fill="currentColor" />
                      <rect x="5" y="38" width="12" height="6" fill="currentColor" />
                      <rect x="22" y="44" width="20" height="8" fill="currentColor" />
                      <rect x="48" y="36" width="8" height="18" fill="currentColor" />
                      <rect x="62" y="44" width="16" height="6" fill="currentColor" />
                      <rect x="36" y="60" width="12" height="12" fill="currentColor" />
                      <rect x="56" y="64" width="14" height="8" fill="currentColor" />
                      <rect x="76" y="56" width="18" height="12" fill="currentColor" />
                      <rect x="36" y="78" width="8" height="16" fill="currentColor" />
                      <rect x="48" y="84" width="16" height="10" fill="currentColor" />
                      <rect x="68" y="78" width="26" height="8" fill="currentColor" />
                      <rect x="80" y="90" width="14" height="5" fill="currentColor" />
                    </svg>
                    <div className="absolute inset-0 m-auto w-8 h-8 bg-white dark:bg-black rounded-lg flex items-center justify-center border border-slate-200 dark:border-neutral-800 shadow-md">
                      <QrCode className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-neutral-500 mt-2">
                    Scannez pour effectuer le transfert directement
                  </p>
                </div>

                {/* Big Copy Button */}
                <button
                  onClick={() => handleCopy(selectedMethod.address)}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/10 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-300 animate-bounce" />
                      Copié dans le presse-papiers
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copier l'adresse de réception
                    </>
                  )}
                </button>

                {/* Important notice reminder / warning */}
                {selectedMethod.extraNote && (
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 flex gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] font-sans text-slate-550 dark:text-neutral-400 leading-normal">
                      <strong>Recommandation :</strong> {selectedMethod.extraNote} Assurez-vous de bien respecter le réseau et le montant pour garantir la validation.
                    </p>
                  </div>
                )}

                {/* Footer status validation */}
                <div className="pt-4 border-t border-slate-100 dark:border-neutral-900 text-center">
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-neutral-600 uppercase flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Paiement chiffré et audité de bout en bout
                  </span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
