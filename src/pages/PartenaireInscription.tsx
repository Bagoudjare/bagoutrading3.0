import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function PartenaireInscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState("");
  const [partnerId, setPartnerId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const affiliateLink = useMemo(() => {
    if (!partnerId) return "";
    return `${window.location.origin}/?ref=${partnerId}`;
  }, [partnerId]);

  const whatsappLink = useMemo(() => {
    if (!partnerId || !name) return "";
    const message = encodeURIComponent(`Je viens de la part de ${name}`);
    const phoneNumber = "33123456789"; // Remplace par ton vrai numéro
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }, [partnerId, name]);

  const clicks = useMemo(() => {
    if (!partnerId) return 0;
    const key = `affiliate:clicks:${partnerId}`;
    const raw = localStorage.getItem(key);
    return raw ? parseInt(raw, 10) || 0 : 0;
  }, [partnerId]);

  const canonicalUrl = useMemo(() => `${window.location.origin}/partenaire-inscription`, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi vers Formspree
      const response = await fetch("https://formspree.io/f/mzzgrwrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          channel,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Génération de l'ID partenaire
        const base = slugify(name || email.split("@")[0] || "partner");
        const rnd = Math.random().toString(36).slice(2, 7);
        const id = `${base}-${rnd}`;
        setPartnerId(id);
        
        // Sauvegarde locale
        localStorage.setItem("affiliate:partnerId", id);
        localStorage.setItem("affiliate:partnerName", name);
        localStorage.setItem("affiliate:partnerEmail", email);

        toast({
          title: "Inscription réussie !",
          description: "Ton lien affilié a été généré avec succès.",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription. Réessaie plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyLink = async () => {
    if (!affiliateLink) return;
    try {
      await navigator.clipboard.writeText(affiliateLink);
      toast({
        title: "Lien copié !",
        description: "Ton lien affilié a été copié dans le presse-papiers.",
      });
    } catch {
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien. Sélectionne-le manuellement.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Pré-remplir si déjà inscrit
    const savedId = localStorage.getItem("affiliate:partnerId");
    if (savedId) setPartnerId(savedId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">

      <main className="max-w-4xl mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <Link to="/partenaire" className="text-blue-300 hover:text-blue-200 text-sm uppercase tracking-widest mb-4 inline-block transition-colors">
            ← Voir les avantages
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rejoindre le Programme Partenaire
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Obtenez votre lien d'affiliation et commencez à partager la solution au autres.
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-slate-600/50 rounded-2xl p-10 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Inscription Gratuite</h2>
              <p className="text-slate-300">Créez votre compte partenaire en moins de 2 minutes</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-3 text-lg font-semibold flex items-center gap-2" htmlFor="name">
                    <span className="text-blue-400">👤</span>
                    Nom complet *
                  </label>
                  <input 
                    id="name" 
                    className="w-full px-6 py-4 bg-slate-800/60 border border-slate-600/60 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 text-lg transition-all duration-300 focus:bg-slate-800/80" 
                    placeholder="Votre nom complet" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-3 text-lg font-semibold flex items-center gap-2" htmlFor="email">
                    <span className="text-purple-400">📧</span>
                    Adresse email *
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    className="w-full px-6 py-4 bg-slate-800/60 border border-slate-600/60 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 text-lg transition-all duration-300 focus:bg-slate-800/80" 
                    placeholder="votre@email.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-3 text-lg font-semibold flex items-center gap-2" htmlFor="channel">
                  <span className="text-green-400">📱</span>
                  Votre plateforme principale (optionnel)
                </label>
                <input 
                  id="channel" 
                  className="w-full px-6 py-4 bg-slate-800/60 border border-slate-600/60 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 text-lg transition-all duration-300 focus:bg-slate-800/80" 
                  placeholder="YouTube, Instagram, TikTok, Site web, Discord..." 
                  value={channel} 
                  onChange={(e) => setChannel(e.target.value)} 
                  disabled={isSubmitting}
                />
                <p className="text-slate-400 text-sm mt-3 bg-slate-800/30 rounded-lg p-3">
                  💡 Cette information nous aide à vous fournir les meilleurs outils marketing adaptés à votre audience
                </p>
              </div>
              
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 text-xl px-8 py-5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Génération en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <span>🚀</span>
                      Créer mon compte partenaire
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {partnerId && (
              <aside className="mt-10 bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-600/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Félicitations ! Vous êtes maintenant partenaire
                  </h3>
                  <p className="text-green-300">Votre lien d'affiliation est prêt à être utilisé</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/60 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-blue-400">🔗</span>
                      Votre lien d'affiliation
                    </h4>
                    <div className="bg-slate-900/60 rounded-lg p-4 mb-4">
                      <p className="text-slate-300 break-all font-mono text-sm">{affiliateLink}</p>
                    </div>
                    <Button 
                      onClick={copyLink}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      📋 Copier le lien
                    </Button>
                  </div>
                  
                  <div className="bg-slate-800/60 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-purple-400">💬</span>
                      Lien WhatsApp personnalisé
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Lien direct vers WhatsApp avec votre nom pré-rempli pour les clients
                    </p>
                    <div className="bg-slate-900/60 rounded-lg p-4 mb-4">
                      <p className="text-slate-300 break-all font-mono text-xs">{whatsappLink}</p>
                    </div>
                    <Button 
                      onClick={() => navigator.clipboard.writeText(whatsappLink)}
                      variant="outline"
                      className="w-full border-purple-600 text-purple-400 hover:bg-purple-600/20"
                    >
                      📱 Copier le lien WhatsApp
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-slate-800/60 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white">{clicks}</div>
                      <p className="text-slate-300 text-sm">Clics enregistrés</p>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-4 text-center">
                      <div className="text-green-400 font-bold text-lg">● ACTIF</div>
                      <p className="text-slate-300 text-sm">Statut du compte</p>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </section>


        <footer className="text-center">
          <div className="bg-slate-900/40 border border-slate-600/40 rounded-xl p-6">
            <p className="text-slate-300 mb-4">
              Des questions ? Notre équipe partenaire est là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partenaire">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  ← Retour aux avantages
                </Button>
              </Link>
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/20">
                💬 Contacter le support
              </Button>
            </div>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
