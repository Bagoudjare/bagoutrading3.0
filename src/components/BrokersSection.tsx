import { ExternalLink } from "lucide-react";

const brokers = [
  {
    name: "Deriv",
    description: "Plateforme polyvalente avec trading sur synthétiques, forex, crypto et plus.",
    url: "https://track.deriv.com/_uLzSi0hVVMZBMfcXPt5VjGNd7ZgqdRLk/1/",
    gradient: "from-red-500 to-orange-500",
    logo: (
      <svg viewBox="0 0 140 36" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Official Deriv Stylized Coral-Red "d" Icon */}
        <text x="0" y="28" fill="#FF444F" fontSize="34" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-1px">d</text>
        <text x="24" y="25" fill="white" fontSize="21" fontWeight="800" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.6px">deriv</text>
      </svg>
    ),
  },
  {
    name: "Exness",
    description: "Broker reconnu mondialement avec spreads compétitifs et exécution rapide.",
    url: "https://one.exnessonelink.com/a/42rvf9itx1",
    gradient: "from-yellow-500 to-amber-500",
    logo: (
      <svg viewBox="0 0 140 36" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Official Exness Rebrand - Yellow squircle with black geometric "ex" */}
        <rect x="0" y="3" width="30" height="30" rx="7" fill="#FFE600" />
        <text x="15" y="24" fill="#000000" fontSize="17" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" textAnchor="middle" letterSpacing="-1px">ex</text>
        <text x="38" y="25" fill="white" fontSize="21" fontWeight="800" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.6px">exness</text>
      </svg>
    ),
  },
  {
    name: "Weltrade",
    description: "Broker international fiable avec conditions de trading attractives.",
    url: "https://track.gowt.me/visit/?bta=64900&brand=weltrade",
    gradient: "from-blue-500 to-cyan-500",
    logo: (
      <svg viewBox="0 0 140 36" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Official Weltrade Rebrand - Royal Blue squircle with White Stylized Thumb/Trend hand line */}
        <rect x="0" y="3" width="30" height="30" rx="8" fill="#3B63FF" />
        <path
          d="M7 23 C7 17.5, 9 17.5, 16 17.5 C19 17.5, 20 14, 18 10 C17.5 8.5, 19.5 8.5, 20.5 10 C21.5 12, 24 16.5, 26.5 20.5"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="38" y="25" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="21" letterSpacing="-0.6px">
          <tspan fill="#3B63FF">wel</tspan>
          <tspan fill="white">trade</tspan>
        </text>
      </svg>
    ),
  },
];

export const BrokersSection = () => {
  return (
    <div className="py-20 px-4 bg-transparent">
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
              className="group relative bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/5"
            >
              <div className="h-16 flex items-center justify-start mb-4 group-hover:scale-105 transition-transform duration-300">
                {broker.logo}
              </div>
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
