import { useState, useEffect, FormEvent } from "react";
import { TrendingUp, BarChart3, Target, Shield, LineChart, Calculator, History, Zap, Download, Play, Lock, CheckCircle, Users, Star, MessageSquarePlus, Copy, Check, X, MonitorPlay, Phone, Mail, User, PhoneCall, FileSpreadsheet, Sparkles, ShieldCheck, GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import supabase from "@/utils/supabase";
import { useToast } from "@/hooks/use-toast";

// ID YouTube de la vidéo "tutoriel téléchargement et installation démo"
const DEMO_TUTORIAL_VIDEO_ID = "6AK6WmPqm8U";

interface LeadItem {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  experience?: string;
  downloadedAt: string;
  fileName: string;
}

const COUNTRY_CODES = [
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+228", label: "🇹🇬 Togo (+228)" },
  { code: "+225", label: "🇨🇮 Côte d'Ivoire (+225)" },
  { code: "+221", label: "🇸🇳 Sénégal (+221)" },
  { code: "+237", label: "🇨🇲 Cameroun (+237)" },
  { code: "+229", label: "🇧🇯 Bénin (+229)" },
  { code: "+226", label: "🇧🇫 Burkina Faso (+226)" },
  { code: "+223", label: "🇲🇱 Mali (+223)" },
  { code: "+243", label: "🇨🇩 RDC (+243)" },
  { code: "+242", label: "🇨🇬 Congo (+242)" },
  { code: "+241", label: "🇬🇦 Gabon (+241)" },
  { code: "+212", label: "🇲🇦 Maroc (+212)" },
  { code: "+213", label: "🇩🇿 Algérie (+213)" },
  { code: "+216", label: "🇹🇳 Tunisie (+216)" },
  { code: "+32", label: "🇧🇪 Belgique (+32)" },
  { code: "+41", label: "🇨🇭 Suisse (+41)" },
  { code: "+1", label: "🇨🇦 Canada/USA (+1)" },
  { code: "autre", label: "🌐 Autre indicatif" },
];

export const TradingAlgoSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // États Modal Capture WhatsApp & Lead
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showAdminLeadsModal, setShowAdminLeadsModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("+33");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [experience, setExperience] = useState("Intermédiaire");
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadsList, setLeadsList] = useState<LeadItem[]>([]);

  // Charger les leads enregistrés au montage
  useEffect(() => {
    try {
      const savedLeads = localStorage.getItem("bmae_demo_leads");
      if (savedLeads) {
        setLeadsList(JSON.parse(savedLeads));
      }

      const savedUserInfo = localStorage.getItem("bmae_user_lead_info");
      if (savedUserInfo) {
        const parsed = JSON.parse(savedUserInfo);
        if (parsed.fullName) setFullName(parsed.fullName);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.whatsappNumber) setWhatsappNumber(parsed.whatsappNumber);
        if (parsed.whatsappCode) setWhatsappCode(parsed.whatsappCode);
      }
    } catch (e) {
      console.error("Erreur lecture localStorage leads:", e);
    }
  }, []);

  // Fetch download count on mount
  useEffect(() => {
    const fetchDownloadCount = async () => {
      const { count, error } = await supabase
        .from('demo_downloads')
        .select('*', { count: 'exact', head: true });
      
      if (!error && count !== null) {
        setDownloadCount(count);
      }
    };
    
    fetchDownloadCount();
  }, []);

  // Charger les ressources Chariow pour le widget d'achat
  useEffect(() => {
    const linkId = "chariow-widget-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://js.chariowcdn.com/v1/widget.min.css";
      document.head.appendChild(link);
    }

    const scriptId = "chariow-widget-js";
    const runScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js.chariowcdn.com/v1/widget.min.js";
      script.async = true;
      document.head.appendChild(script);
    };

    const timer = setTimeout(runScript, 100);
    return () => clearTimeout(timer);
  }, []);

  // Déclencher l'ouverture de la modale
  const handleOpenDownloadModal = () => {
    setFormError(null);
    setShowLeadModal(true);
  };

  // Soumission du formulaire et déclenchement du téléchargement
  const handleSubmitLeadForm = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation des champs
    if (!fullName.trim() || fullName.trim().length < 2) {
      setFormError("Veuillez saisir votre nom complet.");
      return;
    }

    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setFormError("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    const cleanNum = whatsappNumber.replace(/\s+/g, "");
    if (!cleanNum || cleanNum.length < 6) {
      setFormError("Veuillez saisir un numéro WhatsApp valide (ex: 612345678).");
      return;
    }

    setIsSubmitting(true);

    const fullWhatsapp = whatsappCode === "autre" ? cleanNum : `${whatsappCode} ${cleanNum}`;
    const formattedDate = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newLead: LeadItem = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: fullWhatsapp,
      experience,
      downloadedAt: formattedDate,
      fileName: "BMAE_Demo.ex5"
    };

    // 1. Sauvegarde locale dans localStorage
    try {
      const updatedLeads = [newLead, ...leadsList];
      setLeadsList(updatedLeads);
      localStorage.setItem("bmae_demo_leads", JSON.stringify(updatedLeads));
      localStorage.setItem(
        "bmae_user_lead_info",
        JSON.stringify({ fullName: fullName.trim(), email: email.trim(), whatsappCode, whatsappNumber: cleanNum })
      );
    } catch (err) {
      console.error("Erreur enregistrement lead local:", err);
    }

    // 2. Envoi vers Supabase demo_downloads
    try {
      await supabase.from("demo_downloads").insert([
        {
          full_name: newLead.fullName,
          email: newLead.email,
          whatsapp: newLead.whatsapp,
          file_name: newLead.fileName,
          downloaded_at: new Date().toISOString()
        }
      ]);
      
      // Tentative aussi dans initiation_signups si disponible
      await supabase.from("initiation_signups").insert([
        {
          first_name: newLead.fullName,
          last_name: `WhatsApp: ${newLead.whatsapp}`,
          email: newLead.email
        }
      ]);
    } catch (err) {
      console.warn("Supabase lead save fallback:", err);
    }

    // 3. Appel de l'API backend
    try {
      await fetch('/api/track-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: newLead.fullName,
          email: newLead.email,
          whatsapp: newLead.whatsapp,
          file_name: newLead.fileName
        })
      });
    } catch (error) {
      console.error('Erreur API track-download', error);
    }

    // Mettre à jour le compteur
    setDownloadCount(prev => prev + 1);
    setIsSubmitting(false);
    setShowLeadModal(false);

    // Exécuter le téléchargement du fichier démo
    executeFileDownload("BMAE_Demo.ex5", "/demo/BMAE_Demo.ex5");
  };

  const executeFileDownload = (fileName: string, filePath: string) => {
    setIsDownloading(true);

    toast({
      title: "Accès Démo Accordé !",
      description: `Merci ${fullName || "cher trader"} ! Le fichier ${fileName} est en cours de téléchargement.`,
    });

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsDownloading(false), 3000);
  };

  // Exporter la liste des leads en CSV
  const handleExportCSV = () => {
    if (leadsList.length === 0) {
      toast({ title: "Aucun lead", description: "Aucun téléchargement enregistré pour l'instant." });
      return;
    }

    const headers = "Nom complet;Email;WhatsApp;Expérience;Date téléchargement;Fichier\n";
    const rows = leadsList.map(l => 
      `"${l.fullName}";"${l.email}";"${l.whatsapp}";"${l.experience || ''}";"${l.downloadedAt}";"${l.fileName}"`
    ).join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_bmae_demo_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({ title: "Exportation réussie", description: `${leadsList.length} leads exportés en CSV.` });
  };

  const features = [
    {
      icon: LineChart,
      title: "Auto-analyse de la structure du marché",
      description: "Analyse automatique SMC (Smart Money Concepts)",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Gestion automatique des trades",
      description: "Automatisation complète de vos positions",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Calculator,
      title: "Outils de calcul du risque",
      description: "Calcul précis de votre exposition au risque",
      gradient: "from-orange-500 to-red-500"
    },
    // {
    //   icon: Shield,
    //   title: "Mesure du risque et du reward",
    //   description: "Analyse complète du ratio risk/reward",
    //   gradient: "from-indigo-500 to-purple-500"
    // },
    {
      icon: History,
      title: "Outils de backtesting",
      description: "Testez vos stratégies sur données historiques",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const handleCopyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    toast({ title: "Adresse copiée !", description: address });
    setTimeout(() => {
      setCopied(false);
      setSelectedPayment(null);
    }, 800);
  };

  return (
    <div className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Demo Tutorial Video */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
              <MonitorPlay className="h-4 w-4" />
              Tutoriel vidéo
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment télécharger et installer la version démo
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Suivez ce tutoriel rapide pour obtenir et installer la démo du système BT3.0 sur MetaTrader 5 en quelques minutes.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-slate-600/40 bg-slate-900 aspect-video group">
            <iframe
              src={`https://www.youtube.com/embed/${DEMO_TUTORIAL_VIDEO_ID}`}
              title="Tutoriel téléchargement et installation démo BT3.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Une fois la démo installée, retrouvez les fichiers .ex5 à télécharger juste en dessous.
          </p>
        </div>

        {/* Demo Download Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-slate-900/40 rounded-2xl p-8 border border-slate-800/80 backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Essayez la Version Démo Gratuite
                </h3>
              </div>
              
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
                    Testez l'outil BMAE avant d'acheter. Toutes les fonctionnalités ne seront pas disponibles dans le testeur de stratégie 
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={handleOpenDownloadModal}
                  disabled={isDownloading}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    isDownloading 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90 transform hover:scale-105 shadow-green-500/25 cursor-pointer'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Téléchargement lancé...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      Télécharger la Démo de BMAE (.ex5)
                    </>
                  )}
                </button>
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-400" />
                    <span><strong className="text-green-400">{downloadCount}</strong> téléchargements</span>
                  </div>

                  {leadsList.length > 0 && (
                    <button
                      onClick={() => setShowAdminLeadsModal(true)}
                      className="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-blue-300 hover:text-white rounded-full border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Voir les coordonnées des prospects ayant téléchargé la démo"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5 text-green-400" />
                      Leads Démo ({leadsList.length})
                    </button>
                  )}
                </div>
              </div>
              
              <p className="text-gray-500 text-sm text-center mt-4">
                Compatible uniquement MT5 • Support WhatsApp direct • Téléchargement immédiat
              </p>
            </div>

            <div className="pt-5 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://fr.trustpilot.com/evaluate/bagoudjaretrading3-0.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageSquarePlus className="h-5 w-5" />
                Donner son avis
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MODALE CAPTURE DE COORDONNÉES + NUMÉRO WHATSAPP */}
      <AnimatePresence>
        {showLeadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLeadModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f172a] border border-slate-800 rounded-3xl shadow-2xl z-10 text-left overflow-hidden flex flex-col font-sans max-h-[90vh]"
            >
              {/* Header de la modale */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border-b border-slate-800 p-6 relative">
                <button
                  type="button"
                  onClick={() => setShowLeadModal(false)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      Télécharger la Démo BMAE
                    </h3>
                    <p className="text-xs text-green-400 font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Accès immédiat au fichier .ex5
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Veuillez renseigner vos coordonnées et numéro WhatsApp afin d'obtenir le fichier de démo et de bénéficier de notre support gratuit pour l'installation.
                </p>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmitLeadForm} className="p-6 space-y-4 overflow-y-auto">
                {formError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-2">
                    <X className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Nom complet */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nom Complet <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Adresse Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Adresse E-mail <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean.dupont@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Numéro WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Numéro WhatsApp <span className="text-red-400">*</span></span>
                    <span className="text-[10px] text-green-400 font-normal">Pour le suivi & tutoriels</span>
                  </label>
                  
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-5 sm:col-span-4">
                      <select
                        value={whatsappCode}
                        onChange={(e) => setWhatsappCode(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-3 text-xs text-white focus:outline-none focus:border-green-500 transition-all appearance-none cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-7 sm:col-span-8 relative">
                      <PhoneCall className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-green-500" />
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 6 12 34 56 78"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Niveau en Trading */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Votre Niveau en Trading
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="Débutant">Débutant (moins d'1 an)</option>
                    <option value="Intermédiaire">Intermédiaire (1 à 3 ans)</option>
                    <option value="Avancé">Avancé / Pro (plus de 3 ans)</option>
                  </select>
                </div>

                {/* Bouton Valider */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:opacity-90 text-white font-bold rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Validation en cours...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Valider & Télécharger la Démo (.ex5)
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  Vos données restent confidentielles et ne seront jamais revendues.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODALE ADMIN — ESPACE DE GESTION DES LEADS TELECHARGEMENT */}
      <AnimatePresence>
        {showAdminLeadsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdminLeadsModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-800 rounded-3xl shadow-2xl z-10 text-left overflow-hidden flex flex-col font-sans max-h-[85vh]"
            >
              {/* Header admin */}
              <div className="bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-green-400" />
                    Leads Téléchargements Démo BMAE ({leadsList.length})
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Liste des utilisateurs ayant soumis leurs coordonnées et numéro WhatsApp pour la démo.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl border border-emerald-500 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Exporter CSV
                  </button>

                  <button
                    onClick={() => setShowAdminLeadsModal(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Table des leads */}
              <div className="p-6 overflow-y-auto">
                {leadsList.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-40" />
                    <p>Aucun lead enregistré pour le moment.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300 border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-900/50">
                          <th className="p-3">Nom</th>
                          <th className="p-3">Email</th>
                          <th className="p-3">WhatsApp</th>
                          <th className="p-3">Expérience</th>
                          <th className="p-3">Date</th>
                          <th className="p-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {leadsList.map((lead) => {
                          const cleanNum = lead.whatsapp.replace(/[^\d+]/g, "");
                          return (
                            <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                              <td className="p-3 font-semibold text-white">{lead.fullName}</td>
                              <td className="p-3 text-slate-300 font-mono text-xs">{lead.email}</td>
                              <td className="p-3 font-mono text-green-400 text-xs font-semibold">
                                {lead.whatsapp}
                              </td>
                              <td className="p-3 text-xs text-slate-400">{lead.experience || "Non précisé"}</td>
                              <td className="p-3 text-xs text-slate-500 whitespace-nowrap">{lead.downloadedAt}</td>
                              <td className="p-3 text-right">
                                <a
                                  href={`https://wa.me/${cleanNum.replace("+", "")}?text=Bonjour%20${encodeURIComponent(lead.fullName)},%20j'ai%20vu%20que%20vous%20avez%20t%C3%A9l%C3%A9charg%C3%A9%20la%20d%C3%A9mo%20BMAE.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white rounded-lg border border-green-500/30 text-xs font-semibold transition-all"
                                >
                                  <PhoneCall className="w-3.5 h-3.5" />
                                  WhatsApp
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .payment-scroll::-webkit-scrollbar { height: 8px; }
        .payment-scroll::-webkit-scrollbar-track { background: rgba(15,23,42,0.4); border-radius: 4px; }
        .payment-scroll::-webkit-scrollbar-thumb { background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 4px; }
      `}</style>
    </div>
  );
};