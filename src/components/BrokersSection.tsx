import { ExternalLink, TrendingUp } from "lucide-react";

const brokers = [
  {
    name: "Deriv",
    description: "Plateforme polyvalente avec trading sur synthétiques, forex, crypto et plus.",
    url: "https://track.deriv.com/_uLzSi0hVVMZBMfcXPt5VjGNd7ZgqdRLk/1/",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Exness",
    description: "Broker reconnu mondialement avec spreads compétitifs et exécution rapide.",
    url: "https://one.exnessonelink.com/a/42rvf9itx1",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    name: "Weltrade",
    description: "Broker international fiable avec conditions de trading attractives.",
    url: "https://track.gowt.me/visit/?bta=64900&brand=weltrade",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const BrokersSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ouvrez votre Compte Trading
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Créez un compte chez l'un de mes brokers partenaires et commencez à trader avec le système BT3.0
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {brokers.map((broker, idx) => (
            <a
              key={idx}
              href={broker.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/30 hover:border-slate-500/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${broker.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{broker.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{broker.description}</p>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm">
                Créer un compte
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
