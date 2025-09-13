import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PartnerCTA = () => {
  return (
    <div className="px-4 py-16">
      <article className="relative max-w-6xl mx-auto bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Effet de balayage lumineux principal - plus visible */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, transparent 35%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 65%, transparent 100%)',
            width: '300%',
            height: '120%',
            left: '-150%',
            top: '-10%',
            animation: 'light-sweep-smooth 1s ease-in-out infinite alternate',
            transform: 'skewX(-15deg)',
          }}
        />
        <header className="mb-6">
          <p className="text-sm text-blue-300 uppercase tracking-widest">Programme partenaire</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Deviens Partenaire de Notre Système
          </h2>
          <p className="text-slate-300 mt-3">
            Rejoins notre programme partenaire et gagne avec nous grâce au Système BT3.0.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/partenaire" className="inline-flex">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
              Je deviens partenaire
            </Button>
          </Link>
          <Link to="/partenaire" className="inline-flex">
            <Button variant="outline">En savoir plus</Button>
          </Link>
        </div>
      </article>
    </div>
  );
};
