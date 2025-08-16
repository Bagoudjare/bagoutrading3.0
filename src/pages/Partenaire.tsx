import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PartenaireAvantages() {
  const canonicalUrl = useMemo(() => `${window.location.origin}/partenaire`, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"> 

      {/* Navigation */}
      <nav className="absolute top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-blue-300 border-blue-300/50 animate-pulse">
            Programme Partenaire Exclusif
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Devenez Partenaire de 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BT3.0</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez l'aventure et profitez d'avantages exclusifs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/partenaire-inscription">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Rejoindre maintenant
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Voir la démo
            </Button>
          </div>
        </header>

        {/* Avantages principaux */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-600/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl mb-4">💸</div>
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <p className="text-green-300 text-lg font-semibold mb-2">Réduction exclusive</p>
                <p className="text-slate-300">Seulement 349,99 $ au lieu de 699,99 $</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-600/50 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-4xl font-bold text-white mb-2">29%</div>
                <p className="text-blue-300 text-lg font-semibold mb-2">Commission par vente</p>
                <p className="text-slate-300">100 $ par client que vous apportez</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Présentation du Système BT3.0 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Le Système BT3.0</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Un système de trading révolutionnaire avec des indicateurs avancés et une automatisation intelligente pour maximiser vos profits sur les marchés financiers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Indicateurs */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  6 Indicateurs Exclusifs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Smart Trend", icon: "📈" },
                  { name: "Volume Analyzer", icon: "📊" },
                  { name: "Support/Resistance Pro", icon: "🎯" },
                  { name: "Momentum Scanner", icon: "⚡" },
                  { name: "Risk Manager", icon: "🛡️" },
                  { name: "Entry/Exit Signals", icon: "🔔" }
                ].map((indicator, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <span className="text-2xl">{indicator.icon}</span>
                    <span className="text-slate-300 font-medium">{indicator.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Assistant */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <span className="text-3xl">🤖</span>
                  Assistant Intelligent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-blue-900/20 border border-blue-600/40 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <span>⚡</span> Mode Semi-Auto
                  </h4>
                  <p className="text-slate-300 text-sm">
                    L'assistant analyse le marché et vous propose des signaux de trading. Vous validez chaque transaction pour garder le contrôle.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-600/40 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <span>🚀</span> Mode Auto
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Trading entièrement automatisé selon vos paramètres de risque. L'assistant trade pour vous 24h/24.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pourquoi devenir partenaire */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pourquoi devenir partenaire ?</h2>
            <p className="text-slate-300 text-lg">Des arguments clairs pour rejoindre notre communauté</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-600/50 text-center">
              <CardHeader>
                <div className="text-5xl mb-4">💰</div>
                <CardTitle className="text-white text-xl">Tarif Exclusif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Profitez de 50% de réduction sur BT3.0. Un investissement qui se rentabilise rapidement.
                </p>
                <Badge className="bg-green-600">349,99 $ seulement</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-600/50 text-center">
              <CardHeader>
                <div className="text-5xl mb-4">📈</div>
                <CardTitle className="text-white text-xl">Commission Attractive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Gagnez 100$ par vente avec 29% de commission. Revenus récurrents assurés.
                </p>
                <Badge className="bg-blue-600">100$/vente</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-600/50 text-center">
              <CardHeader>
                <div className="text-5xl mb-4">👥</div>
                <CardTitle className="text-white text-xl">Communauté VIP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Rejoignez une communauté exclusive de partenaires avec support dédié.
                </p>
                <Badge className="bg-purple-600">Support 24/7</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Public cible */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Qui peut devenir partenaire ?</h2>
            <p className="text-slate-300 text-lg">Tous les profils avec une audience intéressée par la finance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎥",
                title: "Créateurs de contenu",
                description: "YouTubers, TikTokers, Influenceurs",
                audience: "10K+ abonnés"
              },
              {
                icon: "📊",
                title: "Experts finance",
                description: "Traders, Analystes, Conseillers",
                audience: "Communauté engagée"
              },
              {
                icon: "💻",
                title: "Entrepreneurs web",
                description: "Bloggers, Marketeurs, Affiliés",
                audience: "Traffic qualifié"
              },
              {
                icon: "🎓",
                title: "Formateurs",
                description: "Coachs, Mentors, Éducateurs",
                audience: "Élèves actifs"
              },
              {
                icon: "📱",
                title: "Community managers",
                description: "Gestionnaires réseaux sociaux",
                audience: "Engagement élevé"
              },
              {
                icon: "🤝",
                title: "Réseauteurs",
                description: "Vendeurs, Commerciaux",
                audience: "Réseau personnel"
              }
            ].map((profile, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {profile.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{profile.title}</CardTitle>
                  <Badge variant="outline" className="text-blue-300 border-blue-300/50">
                    {profile.audience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center">
                    {profile.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Questions Fréquentes</h2>
            <p className="text-slate-300 text-lg">Tout ce que vous devez savoir</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Dois-je acheter BT3.0 pour devenir partenaire ?",
                answer: "Non, ce n'est pas obligatoire. Cependant, vous bénéficiez de 50% de réduction en tant que partenaire, ce qui peut vous aider à mieux comprendre le produit."
              },
              {
                question: "Comment sont calculées les commissions ?",
                answer: "Vous recevez 29% de commission soit 100$ par vente générée via votre lien d'affiliation. Les paiements sont effectués mensuellement."
              },
              {
                question: "Y a-t-il des engagements ou contrats ?",
                answer: "Aucun engagement requis. Le programme est gratuit et vous pouvez vous désinscrire à tout moment."
              },
              {
                question: "Quand puis-je commencer à promouvoir ?",
                answer: "Immédiatement après inscription ! Vous recevez votre lien d'affiliation et vos outils marketing instantanément."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-start gap-3">
                    <span className="text-blue-400 text-xl">Q:</span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 flex items-start gap-3">
                    <span className="text-green-400 text-xl">R:</span>
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 border-slate-700/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-4">
                Prêt à transformer votre influence en revenus ?
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Rejoignez les centaines de partenaires qui génèrent déjà des revenus avec SEI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/partenaire-inscription">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                    Rejoindre maintenant
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Télécharger la brochure
                </Button>
              </div>
              
              <Separator className="my-6 bg-slate-700" />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-400">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  Inscription gratuite
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  Pas d'engagement
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  Support 24/7
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}