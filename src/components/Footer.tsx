
import { TrendingUp, Heart, Phone, ChartAreaIcon, PhoneCallIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Bagoudjare Trading 3.0</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Expert en trading automatisé, je vous accompagne dans votre réussite sur les marchés financiers avec des stratégies éprouvées et des outils sur mesure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="#formations" className="text-gray-400 hover:text-blue-400 transition-colors">Formations</a></li>
              <li><a href="#videos" className="text-gray-400 hover:text-blue-400 transition-colors">Videos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#formations" className="text-gray-400 hover:text-blue-400 transition-colors">Formations</a></li>
              <li><a href="#automatisation" className="text-gray-400 hover:text-blue-400 transition-colors">Automatisation</a></li>
              <li><a href="#algo" className="text-gray-400 hover:text-blue-400 transition-colors">Indicateurs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bagoudjare Trading 3.0. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span className="text-xl font-bold">Fait par </span>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">FineCode</span>
            <PhoneCallIcon className="h-6 w-6 text-blue-400" />
            <span><a className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent" href="https://wa.me/+22896938284">+228 96938284</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
