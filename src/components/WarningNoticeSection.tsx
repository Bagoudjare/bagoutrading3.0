import { AlertTriangle } from "lucide-react";
export const WarningNoticeSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex gap-4">
          <div className="shrink-0 mt-0.5">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-sm text-amber-100/90 leading-relaxed">
            <span className="font-semibold text-amber-300">Important :</span> les signaux générés par Best Market Analyser Edge constituent une aide à l'analyse et à la prise de décision. Ils doivent être confirmés par la méthodologie enseignée dans la formation, et ne garantissent pas un résultat sur chaque opération.
          </p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex gap-4">
          <div className="shrink-0 mt-0.5">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-sm text-amber-100/90 leading-relaxed">
            <span className="font-semibold text-amber-300">Testeur de stratégie :</span> Best Market Analyser Edge repose en grande partie sur une interface interactive (boutons d'analyse, filtres et boutons d'exécution manuelle des ordres) qui nécessite une interaction en temps réel. Ces boutons ne sont pas opérationnels dans le Testeur de Stratégie de MetaTrader, qui ne permet pas de clics interactifs pendant la simulation. Pour évaluer pleinement l'outil et l'ensemble de ses fonctionnalités, il est recommandé de l'utiliser sur un compte démo ou réel, en conditions de marché réelles.
          </p>
        </div>
      </div>
    </div>
  );
};
