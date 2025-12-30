import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> BT3.0</span>
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
          </div>
        </header>

        {/* Pourquoi nous cherchons des partenaires */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Pourquoi nous recherchons des partenaires ?</h2>
            <p className="text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
              Forte de plusieurs années d'expérience dans le développement de systèmes de trading automatisés et de stratégies d'investissement performantes, notre équipe a décidé d'élargir son impact en s'associant avec des partenaires partageant notre vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-900/60 border-blue-600/40 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Partage d'expertise</h3>
                  <p className="text-slate-300 text-sm">
                    Notre expérience de plus de 5 ans en trading algorithmique nous a permis de développer des stratégies uniques que nous souhaitons partager.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-purple-600/40 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Expansion mondiale</h3>
                  <p className="text-slate-300 text-sm">
                    Nous voulons démocratiser l'accès au trading automatisé et toucher une audience internationale grâce à des partenaires locaux.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-green-600/40 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Innovation continue</h3>
                  <p className="text-slate-300 text-sm">
                    Nous améliorons constamment nos algorithmes et leurs nos performances. 
                  </p>
                </div>
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
                  3 Indicateurs Exclusifs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "BT3.0 SMART TREND", icon: "📈" },
                  { name: "BT3.0 CCT", icon: "⚡" },
                  { name: "BT3.0 MSS", icon: "🎯" }
                  // { name: "Momentum Scanner", icon: "⚡" },
                  // { name: "Risk Manager", icon: "🛡️" },
                  // { name: "Entry/Exit Signals", icon: "🔔" }
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Pourquoi devenir partenaire ?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Découvrez tous les avantages qui font de notre programme partenaire une opportunité unique
            </p>
          </div>

          <div className="space-y-12">
            {/* Row 1 - Tarif & Commission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-slate-900/80 border-green-600/40 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-green-600/20 rounded-xl">
                        <div className="text-4xl">💰</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Tarif Exclusif</h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          Profitez de 50% de réduction sur BT3.0. Un investissement qui se rentabilise rapidement grâce à notre système performant.
                        </p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-green-600 text-white px-4 py-2 text-lg">349,99 $ seulement</Badge>
                          <span className="text-slate-400 line-through text-sm">699,99 $</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-slate-900/80 border-blue-600/40 backdrop-blur-sm hover:border-blue-500/60 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-blue-600/20 rounded-xl">
                        <div className="text-4xl">📈</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Commission Attractive</h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          Gagnez 100$ par vente avec 29% de commission. Créez une source de revenus récurrents et évolutive.
                        </p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-blue-600 text-white px-4 py-2 text-lg">100$/vente</Badge>
                          <span className="text-blue-300 text-sm font-medium">29% de commission</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Row 2 - Communauté & Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-slate-900/80 border-purple-600/40 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-purple-600/20 rounded-xl">
                        <div className="text-4xl">👥</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Communauté VIP</h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          Rejoignez une communauté exclusive de partenaires performants avec accès à des ressources privilégiées.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-purple-600 text-white">Support dédié</Badge>
                          <Badge variant="outline" className="border-purple-600/50 text-purple-300">Événements privés</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Public cible */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Qui peut devenir partenaire ?</h2>
            <p className="text-slate-300 text-lg">Tous les profils avec une audience intéressée par la finance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎥",
                title: "Créateurs de contenu",
                description: "YouTubers, TikTokers, Influenceurs partageant du contenu finance",
                minAudience: "++ abonnés",
                engagement: "Taux d'engagement élevé"
              },
              {
                icon: "📊",
                title: "Tradeurs",
                description: "Traders expérimentés, analystes financiers, conseillers",
                minAudience: "Communauté active",
                engagement: "Expertise reconnue"
              },
              {
                icon: "💻",
                title: "Entrepreneurs web",
                description: "Bloggers finance, marketeurs digitaux, affiliés",
                minAudience: "Traffic qualifié",
                engagement: "Conversion optimisée"
              },
              {
                icon: "🎓",
                title: "Formateurs & Coachs",
                description: "Mentors trading, éducateurs financiers, coachs",
                minAudience: "Élèves engagés",
                engagement: "Relation de confiance"
              }
              // {
              //   icon: "📱",
              //   title: "Community managers",
              //   description: "Gestionnaires de communautés finance et crypto",
              //   minAudience: "Groupes actifs",
              //   engagement: "Modération qualité"
              // },
              // {
              //   icon: "🤝",
              //   title: "Professionnels réseau",
              //   description: "Commerciaux finance, vendeurs B2B, networkers",
              //   minAudience: "Réseau qualifié",
              //   engagement: "Relations établies"
              // }
            ].map((profile, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {profile.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-2">{profile.title}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {profile.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 text-sm font-medium">{profile.minAudience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-sm font-medium">{profile.engagement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4 bg-slate-900/50 border-slate-700/50 rounded-xl">
            <AccordionItem value="q1" className="border-slate-700/50">
              <AccordionTrigger className="text-white hover:text-blue-300 px-6">
                Est-ce que je dois avoir déjà acheté l'algorithme pour devenir partenaire ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-6 pb-6">
                Non, ce n'est pas obligatoire, mais tu bénéficies d'une réduction spéciale en tant que partenaire. 
                Cela peut t'aider à mieux comprendre le produit pour le recommander efficacement.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="q2" className="border-slate-700/50">
              <AccordionTrigger className="text-white hover:text-blue-300 px-6">
                Combien puis-je gagner ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-6 pb-6">
                Vous recevez 29% de commission soit 100$ par vente générée via votre lien d'affiliation. Les paiements sont effectués mensuellement.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="q3" className="border-slate-700/50">
              <AccordionTrigger className="text-white hover:text-blue-300 px-6">
                Y a-t-il un contrat ou un engagement ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-6 pb-6">
                Aucun engagement. Tu peux rejoindre, tester, et arrêter quand tu veux. 
                Le programme est totalement gratuit et sans contrainte.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border-slate-700/50">
              <AccordionTrigger className="text-white hover:text-blue-300 px-6">
                Quand puis-je commencer à promouvoir ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-6 pb-6">
                Immédiatement après inscription ! Vous recevez votre lien d'affiliation et vos outils marketing instantanément.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <section className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
          
          <Card className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-blue-600/40 backdrop-blur-xl max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
            
            <CardContent className="relative p-12">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Prêt à transformer votre 
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> influence</span>
                  <br />en revenus ?
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Rejoignez une communauté exclusive de partenaires qui génèrent déjà des revenus significatifs avec BT3.0
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">100€/vente</div>
                  <p className="text-slate-400 text-sm">Commission garantie</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">24h</div>
                  <p className="text-slate-400 text-sm">Activation rapide</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">500+</div>
                  <p className="text-slate-400 text-sm">Partenaires actifs</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link to="/partenaire-inscription">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300">
                    Rejoindre maintenant
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-800/50 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300">
                  Me contacter sur whatsapp
                </Button>
              </div>
              
              <Separator className="my-8 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-lg">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">Inscription gratuite</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-lg">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">Aucun engagement</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-lg">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">Acces aux avantages</span>
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