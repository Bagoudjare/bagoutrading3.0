import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PartnerCTA = () => {
  return (
    <div className="px-4 py-16"  style={
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                width: '40%',
                height: '100%',
                animation: 'light-sweep 8s ease-in-out infinite',
                transform: 'skewX(-15deg)',
                }>
      <article className="max-w-6xl mx-auto bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
        <header className="mb-6">
          <p className="text-sm text-blue-300 uppercase tracking-widest">Programme partenaire</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Deviens Partenaire de Notre Système
          </h2>
          <p className="text-slate-300 mt-3">
            Rejoins notre programme partenaire et gagne avec nous grâce à l'algorithme SEI.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/partenaire" className="inline-flex">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
              Je deviens partenaire
            </Button>
          </Link>
          <Link to="#apropos" className="inline-flex">
            <Button variant="outline">En savoir plus</Button>
          </Link>
        </div>
      </article>
    </div>
  );
};
