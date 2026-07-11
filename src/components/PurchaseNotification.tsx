import { useEffect, useState } from "react";
import { CheckCircle2, X, ShieldCheck } from "lucide-react";

// Fake but realistic-looking purchase notifications
const FIRST_NAMES = [
  "Kouassi", "Amadou", "Fatou", "Marc", "Julien", "Aïcha", "Sophie", "Ibrahim",
  "Léa", "David", "Moussa", "Camille", "Sébastien", "Awa", "Nicolas", "Yasmine",
  "Thomas", "Adama", "Chloé", "Mamadou", "Élodie", "Rachid", "Sarah", "Mehdi",
];
const CITIES = [
  "Paris", "Abidjan", "Dakar", "Bruxelles", "Montréal", "Lyon", "Casablanca",
  "Marseille", "Bamako", "Cotonou", "Genève", "Douala", "Toulouse", "Lomé",
];
const LICENSES = ["Licence 6 mois", "Licence à vie"];

interface Notif {
  id: number;
  name: string;
  city: string;
  license: string;
}

const randomNotif = (): Notif => ({
  id: Date.now() + Math.random(),
  name: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
  city: CITIES[Math.floor(Math.random() * CITIES.length)],
  license: LICENSES[Math.floor(Math.random() * LICENSES.length)],
});

export const PurchaseNotification = () => {
  const [notif, setNotif] = useState<Notif | null>(null);

  useEffect(() => {
    const show = () => {
      setNotif(randomNotif());
      setTimeout(() => setNotif(null), 8000);
    };
    // First notif after 1 min, then every 1 min
    const first = setTimeout(show, 1 * 60 * 1000);
    const interval = setInterval(show, 1 * 60 * 1000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!notif) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-[60] max-w-xs sm:max-w-sm animate-in slide-in-from-left-5 fade-in duration-500"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 bg-white border border-slate-200 shadow-2xl rounded-xl p-3 sm:p-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            <span>Achat vérifié</span>
          </div>
          <p className="text-sm text-slate-900 leading-snug">
            <span className="font-semibold">{notif.name}</span>{" "}
            <span className="text-slate-600">de {notif.city}</span> vient d'acheter la{" "}
            <span className="font-semibold text-primary">{notif.license}</span>.
          </p>
          <p className="text-[10px] text-slate-400 mt-1">à l'instant</p>
        </div>
        <button
          onClick={() => setNotif(null)}
          className="shrink-0 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
