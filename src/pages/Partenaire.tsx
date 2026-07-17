import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  Percent, 
  MessageCircle, 
  Coins, 
  HelpCircle, 
  ArrowDown, 
  Sparkles, 
  Users, 
  Flame, 
  ChevronRight, 
  Layers 
} from "lucide-react";

export default function Partenaire() {
  const canonicalUrl = useMemo(() => `${window.location.origin}/partenaire`, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative max-w-7xl mx-auto px-6 pt-6 flex justify-between items-center z-50">
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Retour à l'accueil
        </Link>
        <Link to="/partenaire-inscription">
          <Button variant="outline" className="border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900">
            S'inscrire
          </Button>
        </Link>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* HERO SECTION */}
        <header className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-blue-400 border-blue-500/30 bg-blue-500/5 backdrop-blur-md rounded-full font-medium tracking-wide">
            ✨ PROGRAMME PARTENAIRE BMAE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Devenez partenaire <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">BMAE</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-300 mb-6">
            Recommandez BMAE et soyez récompensé
          </h2>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">
            Transformez votre réseau en une source de revenus tout en faisant découvrir un outil de trading conçu pour simplifier l'analyse des marchés.
          </p>
          <p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed border-l-2 border-blue-500/40 pl-4 text-left italic">
            En tant que partenaire BMAE, vous bénéficiez d'une remise exclusive sur votre licence, d'un accès à une communauté privée et d'une commission sur chaque vente réalisée grâce à votre code de parrainage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/partenaire-inscription" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.01] transition-all duration-300">
                👉 Devenir partenaire
              </Button>
            </Link>
          </div>
        </header>

        {/* POURQUOI PROMOUVOIR BMAE */}
        <section className="mb-28">
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/10 mb-4 rounded-full font-medium">
                  NOTRE MISSION
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Pourquoi promouvoir BMAE ?
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
              </div>
              
              <div className="lg:col-span-7 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-white">
                  BMAE n'est pas un simple indicateur.
                </p>
                <p>
                  C'est un outil développé après plus de <span className="text-blue-400 font-semibold">6 années de recherche</span>, d'expérience et d'optimisation, avec un objectif clair : permettre aux traders d'obtenir une lecture du marché simple, rapide et efficace.
                </p>
                <p>
                  Une fois installé sur votre graphique, BMAE vous offre immédiatement la même vision du marché que celle utilisée quotidiennement par plusieurs traders professionnels.
                </p>
                <p className="text-slate-400 text-sm italic">
                  En devenant partenaire, vous recommandez un outil auquel vous croyez tout en étant rémunéré pour chaque nouveau client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LES AVANTAGES DU PROGRAMME PARTENAIRE */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/10 mb-3 rounded-full font-medium">
              LES BÉNÉFICES
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Les avantages du programme partenaire
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nous récompensons votre engagement avec des conditions ultra-avantageuses pour vous et vos recommandations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Reduction */}
            <Card className="bg-slate-900/40 border-slate-800/80 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Percent className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  30 % de réduction sur votre licence
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Dès la création de votre compte partenaire, vous recevez un code promotionnel personnel qui vous permet d'obtenir 30 % de réduction sur :
                </p>
                <ul className="space-y-2.5 mb-6 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    la licence à vie ;
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    la licence de 6 mois.
                  </li>
                </ul>
                <p className="text-blue-400 font-medium text-sm mt-auto pt-2 border-t border-slate-800/60">
                  Vous profitez ainsi de BMAE à un tarif préférentiel.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: WhatsApp */}
            <Card className="bg-slate-900/40 border-slate-800/80 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Un groupe WhatsApp réservé aux partenaires
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Tous les partenaires sont intégrés à un groupe WhatsApp privé. Cet espace privilégié vous permet de :
                </p>
                <ul className="space-y-2.5 mb-6 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>recevoir les dernières actualités ;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>échanger avec les autres partenaires ;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>poser vos questions ;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                    <span>obtenir des conseils pour promouvoir BMAE.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3: Commissions */}
            <Card className="bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coins className="h-6 w-6 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Gagnez une commission sur chaque vente
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Votre code promotionnel est unique. Chaque personne qui achète une licence en utilisant votre code est automatiquement rattachée à votre compte partenaire.
                </p>
                <div className="p-3.5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl mb-4">
                  <p className="text-emerald-400 font-bold text-base flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    20 % de commission
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Sur le montant de la licence vendue.
                  </p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-800/60 pt-3">
                  Il n'y a aucune limite au nombre de ventes que vous pouvez réaliser. Plus vous recommandez BMAE, plus vos revenus augmentent.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMENT FONCTIONNE LE PARTENARIAT ? */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/10 mb-3 rounded-full font-medium">
              FONCTIONNEMENT
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment fonctionne le partenariat ?
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Un processus transparent et automatisé en 5 étapes simples.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline connection line for desktop */}
            <div className="absolute left-[33px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="z-10 w-[68px] h-[68px] bg-slate-900 border-2 border-blue-500/50 group-hover:border-blue-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transition-colors shrink-0">
                  01
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl md:flex-1 w-full hover:bg-slate-900/60 transition-colors duration-200">
                  <h4 className="text-lg font-bold text-white mb-2">Création de votre compte</h4>
                  <p className="text-slate-400 text-sm">Vous créez votre compte partenaire rapidement et gratuitement.</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center md:hidden text-blue-500/50">
                <ArrowDown className="h-5 w-5" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="z-10 w-[68px] h-[68px] bg-slate-900 border-2 border-blue-500/50 group-hover:border-blue-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transition-colors shrink-0">
                  02
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl md:flex-1 w-full hover:bg-slate-900/60 transition-colors duration-200">
                  <h4 className="text-lg font-bold text-white mb-2">Réception de vos accès</h4>
                  <p className="text-slate-400 text-sm mb-3">Vous recevez instantanément :</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-800 text-slate-300 font-normal">votre espace partenaire</Badge>
                    <Badge className="bg-slate-800 text-slate-300 font-normal">votre code promotionnel personnel</Badge>
                    <Badge className="bg-slate-800 text-slate-300 font-normal">votre accès au groupe WhatsApp</Badge>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center md:hidden text-indigo-500/50">
                <ArrowDown className="h-5 w-5" />
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="z-10 w-[68px] h-[68px] bg-slate-900 border-2 border-indigo-500/50 group-hover:border-indigo-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transition-colors shrink-0">
                  03
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl md:flex-1 w-full hover:bg-slate-900/60 transition-colors duration-200">
                  <h4 className="text-lg font-bold text-white mb-2">Partage du code</h4>
                  <p className="text-slate-400 text-sm mb-3">Vous partagez votre code autour de vous sur vos canaux favoris :</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <span className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
                      📱 Réseaux sociaux
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
                      🎥 YouTube
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
                      ✈️ Telegram
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
                      💬 WhatsApp / Discord
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/60">
                      🤝 Amis & connaissances
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center md:hidden text-purple-500/50">
                <ArrowDown className="h-5 w-5" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="z-10 w-[68px] h-[68px] bg-slate-900 border-2 border-purple-500/50 group-hover:border-purple-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transition-colors shrink-0">
                  04
                </div>
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl md:flex-1 w-full hover:bg-slate-900/60 transition-colors duration-200">
                  <h4 className="text-lg font-bold text-white mb-2">Achat d'une licence</h4>
                  <p className="text-slate-400 text-sm">Une personne achète une licence en utilisant votre code.</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center md:hidden text-pink-500/50">
                <ArrowDown className="h-5 w-5" />
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="z-10 w-[68px] h-[68px] bg-slate-900 border-2 border-emerald-500/50 group-hover:border-emerald-400 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transition-colors shrink-0">
                  05
                </div>
                <div className="bg-gradient-to-r from-emerald-950/20 to-slate-900/40 border border-emerald-500/30 p-6 rounded-2xl md:flex-1 w-full hover:from-emerald-950/30 transition-all duration-200">
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">Réception de la commission</h4>
                  <p className="text-slate-300 text-sm">Vous recevez automatiquement <span className="font-semibold text-emerald-400">20 % de commission</span> sur cette vente.</p>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-12 bg-slate-900/30 border border-slate-800/80 px-6 py-4 rounded-xl max-w-lg mx-auto">
              ℹ️ Le processus est simple, transparent et peut être répété autant de fois que vous le souhaitez.
            </p>
          </div>
        </section>

        {/* QUI PEUT DEVENIR PARTENAIRE */}
        <section className="mb-28">
          <div className="bg-gradient-to-b from-slate-900/40 to-slate-900/10 border border-slate-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="text-center mb-10">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/10 mb-3 rounded-full font-medium">
                CANDIDATURE
              </Badge>
              <h3 className="text-3xl font-bold text-white mb-4">
                Qui peut devenir partenaire ?
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Le programme est ouvert à toute personne souhaitant promouvoir BMAE.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
              {[
                { title: "Trader", desc: "Expert ou en cours d'apprentissage" },
                { title: "Créateur de contenu", desc: "Chaîne YouTube, blog ou réseaux" },
                { title: "Formateur", desc: "Partageant ses méthodes et outils" },
                { title: "Influenceur", desc: "Suivi par une communauté active" },
                { title: "Gestionnaire de communauté", desc: "Groupes Telegram, Discord, etc." },
                { title: "Affilié marketing", desc: "À la recherche d'outils performants" },
                { title: "Ou simplement convaincu", desc: "Désireux de recommander BMAE" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/40 border border-slate-800/60 p-5 rounded-2xl hover:border-slate-700/60 transition-colors">
                  <h4 className="font-semibold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-indigo-400 text-base font-medium">
              ✨ Aucune expérience en affiliation n'est requise.
            </p>
          </div>
        </section>

        {/* LES LICENCES CONCERNÉES */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/10 mb-3 rounded-full font-medium">
              PRODUITS ÉLIGIBLES
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">
              Les licences concernées
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Le programme partenaire s'applique aux deux licences actuellement proposées :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-10">
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl text-center hover:border-blue-500/30 transition-all duration-300">
              <Layers className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Licence BMAE 6 mois</h4>
              <p className="text-slate-400 text-sm">Idéal pour les traders qui souhaitent s'initier sur une période de test.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl text-center hover:border-purple-500/30 transition-all duration-300">
              <Flame className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Licence BMAE À vie</h4>
              <p className="text-slate-400 text-sm">Pour un accès sans limites avec des mises à jour gratuites à vie.</p>
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm max-w-lg mx-auto bg-slate-900/20 px-6 py-4 rounded-xl border border-slate-800/80">
            💡 Votre remise de 30 % est valable sur ces deux licences, et les commissions sont calculées sur chaque vente réalisée avec votre code.
          </p>
        </section>

        {/* POURQUOI REJOINDRE LE PROGRAMME (CHECKLIST) */}
        <section className="mb-28">
          <div className="bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-purple-950/20 border border-slate-800 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Pourquoi rejoindre le programme ?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                "30 % de réduction sur votre propre licence.",
                "20 % de commission sur chaque vente.",
                "Un code promotionnel personnel.",
                "Un groupe WhatsApp privé réservé aux partenaires.",
                "Aucun plafond de revenus.",
                "Une plateforme simple pour suivre votre activité."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUESTIONS FRÉQUENTES */}
        <section className="mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-slate-850 text-slate-300 border-slate-800 mb-3 rounded-full font-medium">
              FAQ
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">
              Questions fréquentes
            </h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-1">
              <AccordionTrigger className="text-white hover:text-blue-400 text-base font-semibold text-left py-4 hover:no-underline">
                Dois-je déjà posséder une licence BMAE ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                Non. Une fois votre compte partenaire créé, vous pourrez utiliser votre code promotionnel afin d'obtenir votre licence avec 30 % de réduction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-1">
              <AccordionTrigger className="text-white hover:text-blue-400 text-base font-semibold text-left py-4 hover:no-underline">
                Combien puis-je gagner ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                Vous percevez 20 % de commission sur chaque licence vendue grâce à votre code. Vos revenus dépendent uniquement du nombre de ventes que vous réalisez.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-1">
              <AccordionTrigger className="text-white hover:text-blue-400 text-base font-semibold text-left py-4 hover:no-underline">
                Comment les ventes sont-elles attribuées ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                Chaque partenaire dispose d'un code promotionnel unique. Toute commande effectuée avec ce code est automatiquement associée à votre compte.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-1">
              <AccordionTrigger className="text-white hover:text-blue-400 text-base font-semibold text-left py-4 hover:no-underline">
                Y a-t-il une limite au nombre de commissions ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                Non. Vous pouvez recommander BMAE autant de fois que vous le souhaitez.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-1">
              <AccordionTrigger className="text-white hover:text-blue-400 text-base font-semibold text-left py-4 hover:no-underline">
                Puis-je partager mon code partout ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                Oui. Vous êtes libre de partager votre code sur les réseaux sociaux, votre site web, votre chaîne YouTube, vos groupes ou directement auprès de votre communauté.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* FINAL CTA - PRÊT À REJOINDRE L'AVENTURE ? */}
        <section className="text-center relative py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl pointer-events-none"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à rejoindre l'aventure ?
            </h3>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Rejoignez le programme partenaire BMAE, profitez de votre remise exclusive de 30 % et commencez à générer des revenus en recommandant un outil de trading conçu pour aider les traders à gagner un temps précieux dans leur analyse.
            </p>

            <Link to="/partenaire-inscription">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-lg px-10 py-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
                👉 Devenir partenaire
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
