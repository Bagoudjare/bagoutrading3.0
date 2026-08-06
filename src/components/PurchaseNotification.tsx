import { useEffect, useState } from "react";
import { Sparkles, X, Tag, Copy, Check } from "lucide-react";

export const PurchaseNotification = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Premier affichage après 6 secondes
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    // Réapparition périodique toutes les 60 secondes si fermé
    const interval = setInterval(() => {
      setVisible(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("BMAE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToLicence = () => {
    const el = document.querySelector("#bmaesection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 left-5 z-[60] max-w-sm sm:max-w-md animate-in slide-in-from-left-5 fade-in duration-500"
      role="status"
      aria-live="polite"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-slate-900/98 to-blue-950/90 border border-amber-500/30 shadow-2xl rounded-2xl p-4 sm:p-5 backdrop-blur-xl text-white group">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-3.5 relative z-10">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-lg">
            <Tag className="w-5 h-5 animate-pulse" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réduction Exclusive</span>
            </div>

            <p className="text-sm font-medium text-slate-100 leading-snug mb-3">
              Achetez une licence maintenant et recevez une réduction avec le code promo{" "}
              <span className="font-extrabold text-amber-300 font-mono bg-amber-500/15 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                BMAE100 
              </span>
              Valide uniquement pour les 100 premiers utilisateurs
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Code copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copier le code</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToLicence}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                J'en profite
              </button>
            </div>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="shrink-0 p-1 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/60"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

