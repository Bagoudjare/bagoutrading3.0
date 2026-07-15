import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce que Best Market Analyser Edge (BMAE) ?",
    a: "BMAE est un outil d'analyse et d'aide à la décision pour MetaTrader 5. Il combine détection d'Order Blocks, FVG, structure de marché, filtres BUY/SELL et signaux Sniper pour appliquer notre méthodologie de manière semi-automatique.",
  },
  {
    q: "Puis-je tester l'outil avant de l'acheter ?",
    a: "Oui. Nous mettons à disposition une version démo (.ex5) que vous pouvez charger dans MetaTrader 5 pour évaluer la logique d'analyse. Note : les boutons interactifs ne fonctionnent pas dans le Testeur de Stratégie — utilisez un compte démo ou réel pour tester toutes les fonctionnalités.",
  },
  {
    q: "L'outil garantit-il des profits ?",
    a: "Non. Aucun outil sérieux ne peut garantir de résultats. BMAE est une aide à l'analyse : les signaux doivent être confirmés par la méthodologie enseignée. Les performances passées ne préjugent pas des performances futures.",
  },
  {
    q: "Quelle est la différence entre la licence 6 mois et la licence à vie ?",
    a: "La licence 6 mois donne un accès complet avec toutes les mises à jour pendant la période. La licence à vie offre un accès illimité et toutes les mises à jour futures — idéale pour une utilisation à long terme.",
  },
  {
    q: "Sur quels brokers et quels comptes puis-je l'utiliser ?",
    a: "BMAE fonctionne sur MetaTrader 5 avec les brokers que nous recommandons (voir section brokers). Il est compatible avec les comptes démo et réels.",
  },
  {
    q: "Faut-il déjà être trader pour utiliser BMAE ?",
    a: "Non, mais une base est fortement recommandée. Notre formation d'initiation au trading vous donne les fondamentaux pour tirer le meilleur parti de l'outil.",
  },
  {
    q: "Comment se passe le support ?",
    a: "Chaque licence inclut le support et l'accompagnement. Nous répondons par WhatsApp, Telegram et email — voir la section Contact.",
  },
  {
    q: "Les tarifs vont-ils augmenter ?",
    a: "Oui. Le prix augmente de +50 $ après chaque vente jusqu'aux tarifs finaux (699,99 $ pour 6 mois, 1 999,99 $ à vie). Le tarif de lancement actuel est le plus avantageux.",
  },
];

const FaqItem = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition"
    >
      <span className="font-semibold text-slate-900">{q}</span>
      <ChevronDown className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
      <div className="overflow-hidden">
        <p className="px-6 pb-5 text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  </div>
);

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div id="faq" className="py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Questions fréquentes
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            On répond à vos questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
