import { useEffect, useMemo, useState } from "react";
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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [channel, setChannel] = useState("");
  const [partnerId, setPartnerId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappLink = useMemo(() => {
    if (!partnerId || !name) return "";
    const message = encodeURIComponent(`Je viens de la part de ${name}`);
    const phoneNumber = "+22898740835"; // Remplace par ton vrai numéro
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }, [partnerId, name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = customCode.trim() 
      ? slugify(customCode) 
      : `${slugify(name || email.split("@")[0] || "partner")}-${Math.random().toString(36).slice(2, 7)}`;

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
          phone,
          customCode: generatedId,
          channel,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setPartnerId(generatedId);
        
        // Sauvegarde locale
        localStorage.setItem("affiliate:partnerId", generatedId);
        localStorage.setItem("affiliate:partnerName", name);
        localStorage.setItem("affiliate:partnerEmail", email);
        localStorage.setItem("affiliate:partnerPhone", phone);

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
    if (!whatsappLink) return;
    try {
      await navigator.clipboard.writeText(whatsappLink);
      toast({
        title: "Lien copié !",
        description: "Ton lien a été copié dans le presse-papiers.",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <Link 
            to="/partenaire" 
            className="inline-flex items-center text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors group mb-4"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Retour aux avantages
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Rejoindre le Programme <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Partenaire BMAE</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Obtenez votre code d'affiliation et commencez à partager notre solution avec votre communauté.
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="text-center mb-10 relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Inscription Gratuite</h2>
              <p className="text-slate-400">Créez votre compte partenaire en moins de 2 minutes</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2 font-medium flex items-center gap-2" htmlFor="name">
                    <span>👤</span>
                    Nom complet *
                  </label>
                  <input 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50" 
                    placeholder="Votre nom complet" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2 font-medium flex items-center gap-2" htmlFor="email">
                    <span>📧</span>
                    Adresse email *
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50" 
                    placeholder="votre@email.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2 font-medium flex items-center gap-2" htmlFor="phone">
                    <span>📞</span>
                    Numéro de téléphone *
                  </label>
                  <input 
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50" 
                    placeholder="+228 00 00 00 00" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2 font-medium flex items-center gap-2" htmlFor="customCode">
                    <span>🔑</span>
                    Identifiant / Code d'affiliation souhaité *
                  </label>
                  <input 
                    id="customCode" 
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50 font-mono" 
                    placeholder="ex: jean-dupont, mon-entreprise, promo10" 
                    value={customCode} 
                    onChange={(e) => setCustomCode(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                  <p className="text-slate-400 text-xs mt-2">
                    {customCode.trim() ? (
                      <>
                        Votre code d'affiliation personnel sera : <span className="text-blue-400 font-mono font-semibold bg-blue-500/10 px-2 py-0.5 rounded">{slugify(customCode)}</span>
                      </>
                    ) : (
                      "Saisissez l'identifiant de votre choix (lettres, chiffres, tirets). Il servira à identifier vos recommandations."
                    )}
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium flex items-center gap-2" htmlFor="channel">
                  <span>📱</span>
                  Votre plateforme principale (optionnel)
                </label>
                <input 
                  id="channel" 
                  className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-50" 
                  placeholder="YouTube, Instagram, TikTok, Site web, Discord..." 
                  value={channel} 
                  onChange={(e) => setChannel(e.target.value)} 
                  disabled={isSubmitting}
                />
                <p className="text-slate-400 text-sm mt-3 bg-slate-950/40 border border-slate-800/60 rounded-lg p-3">
                  💡 Ces informations nous aident à assurer le suivi de vos parrainages.
                </p>
              </div>
              
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-[1.01] transition-all duration-300 text-lg px-8 py-6 rounded-xl font-medium shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3 justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Génération en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3 justify-center">
                      <span>🚀</span>
                      Créer mon compte partenaire
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {partnerId && (
              <aside className="mt-10 bg-gradient-to-br from-emerald-950/20 via-slate-900/90 to-green-950/20 border border-emerald-500/30 rounded-2xl p-8 shadow-2xl relative z-10 animate-fade-in">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Félicitations ! Vous êtes maintenant partenaire
                  </h3>
                  <div className="my-6 p-4 bg-slate-950/80 border border-emerald-800 rounded-xl inline-block">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Votre code d'affiliation personnel</p>
                    <span className="text-2xl font-mono font-bold text-blue-400 tracking-wider">{partnerId}</span>
                  </div>
                  <p className="text-emerald-400/90 max-w-md mx-auto text-sm">
                    Votre compte a été enregistré. Ce code d'affiliation personnel vous sera communiqué par e-mail très rapidement pour vous aider à suivre vos parrainages.
                  </p>
                </div>
              </aside>
            )}
          </div>
        </section>


        <footer className="text-center">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md">
            <p className="text-slate-300 mb-4 font-medium">
              Des questions ? Notre équipe partenaire est là pour vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partenaire" className="w-full sm:w-auto">
                <Button variant="outline" className="border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 w-full">
                  ← Retour aux avantages
                </Button>
              </Link>
              <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/5 hover:text-blue-300 w-full sm:w-auto">
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
