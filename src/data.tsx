import { FeatureItem, LicenseOption, FAQItem, TestimonialItem } from "./types";

export const whyChooseFeatures: FeatureItem[] = [
  {
    id: "exec-speed",
    title: "Vitesse d'Exécution Ultra-Faible",
    description: "Algorithmes hébergés à proximité directe des serveurs des principaux brokers avec un temps de latence inférieur à 3ms.",
    iconName: "Zap"
  },
  {
    id: "risk-control",
    title: "Gestion Intelligente du Risque",
    description: "Protection contre le slippage, stop-loss glissants automatiques et calcul de taille de position dynamique.",
    iconName: "ShieldAlert"
  },
  {
    id: "multi-asset",
    title: "Architecture Multi-Actifs",
    description: "Négociez simultanément les cryptomonnaies, les indices majeurs et le Forex depuis une seule et unique plateforme.",
    iconName: "TrendingUp"
  },
  {
    id: "backtest-engine",
    title: "Moteur de Backtesting IA",
    description: "Évaluez la viabilité de vos configurations sur plus de 10 ans de données historiques réelles avec notre intégration Gemini.",
    iconName: "Cpu"
  },
  {
    id: "trading-continuous",
    title: "Opérations Non-Stop 24/7",
    description: "Le système tourne de manière autonome sur nos VPS sécurisés sans interruption, analysant les marchés en continu.",
    iconName: "Clock"
  },
  {
    id: "realtime-telemetry",
    title: "Notifications Discord & Telegram",
    description: "Recevez des alertes instantanées avec le détail technique complet lors de chaque prise de position ou ajustement.",
    iconName: "BellRing"
  }
];

export const timelineSteps = [
  {
    number: "①",
    title: "Analyse Constante",
    description: "Le robot scanne en temps réel les flux d'order book, le carnet d'ordres et les indicateurs mathématiques pour repérer les anomalies structurelles de marché.",
    badge: "Flux d'entrée"
  },
  {
    number: "②",
    title: "Détection Prédictive",
    description: "Par calculs statistiques de volatilité et de momentum, l'algorithme repère le point de rupture exact avant le mouvement de prix.",
    badge: "Filtrage IA"
  },
  {
    number: "③",
    title: "Exécution Instantanée",
    description: "L'ordre est acheminé instantanément via API chiffrée avec une exécution fractionnée intelligente pour réduire le coût d'impact.",
    badge: "Passage d'ordres"
  },
  {
    number: "④",
    title: "Gestion de Risque Dynamique",
    description: "Le stop-loss est calculé au tick près et sécurisé au seuil de rentabilité (breakeven) dès que l'actif franchit le premier objectif de profit.",
    badge: "Sécurisation"
  }
];

export const robotFeatures: FeatureItem[] = [
  {
    id: "robo-anal",
    title: "Analyse Quantitative",
    description: "Interprétation simultanée de plusieurs unités de temps (de 1m à 1d) pour dégager des confluences parfaites de probabilité.",
    iconName: "BarChart3",
    detailedExplanation: "Notre module d'analyse combine l'étude de l'order flow, du volume profile et d'indicateurs personnalisés d'impulsion pour filtrer les faux signaux avec un taux de précision exceptionnel."
  },
  {
    id: "robo-risk",
    title: "Risk Management",
    description: "Régulation stricte des risques. Jamais plus de 1% du capital global n'est risqué sur une seule transaction.",
    iconName: "ShieldCheck",
    detailedExplanation: "Le module de risk management intègre une coupure automatique globale quotidienne (daily max drawdown) et une répartition de risque asymétrique qui sécurise vos gains à chaque étape."
  },
  {
    id: "robo-asset",
    title: "Multi Asset Portfolio",
    description: "Hedging et diversification instantanée entre Crypto, Forex et Indices pour amortir la volatilité globale.",
    iconName: "Layers",
    detailedExplanation: "Le robot ajuste dynamiquement son exposition selon la corrélation des marchés en temps réel, évitant ainsi le surexposition sectorielle lors des phases de haute volatilité macro-économique."
  },
  {
    id: "robo-247",
    title: "Trading Actif 24/7",
    description: "Surveillance algorithmique des marchés mondiaux sans interruption de fatigue ni biais émotionnel.",
    iconName: "Activity",
    detailedExplanation: "Grâce à notre infrastructure de serveurs cloud redondants à Francfort et New York, le robot maintient une disponibilité absolue, exécutant des opportunités nocturnes pendant que vous vous reposez."
  },
  {
    id: "robo-ai",
    title: "Intelligence Synthétique",
    description: "Ajustement automatique des stratégies selon le régime de marché (tendance forte, range horizontal, expansion).",
    iconName: "BrainCircuit",
    detailedExplanation: "La technologie d'IA adaptative de nos modèles analyse continuellement la structure générale pour basculer automatiquement entre des algorithmes de suivi de tendance ou d'arbitrage de range."
  },
  {
    id: "robo-notif",
    title: "Alertes Instantanées",
    description: "Rapports d'activité riches et graphiques en temps réel envoyés directement sur votre canal privé.",
    iconName: "Send",
    detailedExplanation: "Chaque action entreprise par le robot est expliquée de façon transparente : prix d'entrée, objectifs de sortie, niveau de stop-loss et raison technique de la prise de position."
  }
];

export const licensingPlans: LicenseOption[] = [
  {
    id: "starter",
    name: "Starter License",
    price: 49,
    period: "mois",
    description: "Idéal pour s'initier au trading automatisé avec un capital maîtrisé.",
    isPopular: false,
    features: [
      "Capital maximum alloué : 5 000 €",
      "Accès aux marchés Cryptos uniquement",
      "Mise à jour des algorithmes : Hebdomadaire",
      "Support standard par e-mail",
      "Accès aux alertes Discord en différé (15 min)"
    ]
  },
  {
    id: "pro",
    name: "Pro License",
    price: 149,
    period: "mois",
    description: "La formule phare choisie par 80% des investisseurs actifs.",
    isPopular: true,
    features: [
      "Capital alloué illimité",
      "Cryptomonnaies, Forex & Indices",
      "Moteur de risk management avancé",
      "Mises à jour algorithmiques instantanées",
      "Alertes temps réel Telegram / Discord",
      "Support prioritaire 24/7",
      "Générateur de Stratégies IA (Gemini API)"
    ]
  },
  {
    id: "ultimate",
    name: "Ultimate Lifetime",
    price: 1999,
    period: "une fois",
    description: "La liberté absolue pour les traders professionnels d'élite.",
    isPopular: false,
    features: [
      "Accès à vie sans abonnement récurrent",
      "Tout le contenu de la licence PRO inclus",
      "Serveur VPS dédié ultra-rapide (Francfort)",
      "Sessions individuelles de personnalisation (1h/mois)",
      "Accès bêta privé aux futurs algorithmes",
      "Clé d'API chiffrée dédiée et isolation complète"
    ]
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Mawuna KITCHO",
    role: "Trader Indépendant",
    company: "",
    avatar: "",
    comment: "Mon expérience avec ce coach m'a permis de vite maîtriser les analyses des graphiques, comment faire le money management, comment faire pour être un trader rentable sur le long terme grâce à ses algorithmes semi automatiques.... En bref il maîtrise son travail....",
    rating: 5
  },
  {
    id: "test-2",
    name: "Vinifient",
    role: "Trader Indépendant",
    company: "",
    avatar: "",
    comment: "La stratégie BT3.0 est très efficace, j’utilise depuis 3 mois et je suis satisfait des signaux. Je viens de me procurer le nouveau robot basé sur cette stratégie totalement automatisée . C’est super ",
    rating: 5
  },
  {
    id: "test-3",
    name: "Samdine Kondo",
    role: "Trader Indépendant",
    company: "",
    avatar: "",
    comment: "Très bon outil. Je recommande 👏💪.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Dieudonné SANWOGOU",
    role: "Trader Indépendant",
    company: "",
    avatar: "",
    comment: "Excellent ,service rapide .La stratégie bt3.0 basée sur de la connaissance pure et des années d’expérience de mon coach m’a permis d’apprendre énormément avec des signaux précis. Je recommande vivement.",
    rating: 5
  },
  {
    id: "test-5",
    name: "Zie Issouf Soro",
    role: "Trader Indépendant",
    company: "",
    avatar: "",
    comment: "Très bon outil,des signaux précis, bonne stratégie. Je vous le recommande.",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Comment fonctionne l'installation du robot de trading ?",
    answer: "L'installation est entièrement assistée et s'effectue en moins de 10 minutes. Il vous suffit de connecter votre compte de trading existant à l'aide d'une clé d'API sécurisée avec permissions exclusives de 'Lecture' et 'Trading' (les retraits de fonds restent impossibles et verrouillés pour votre sécurité). Nous fournissons également un hébergement VPS clé en main."
  },
  {
    id: "faq-2",
    question: "Mes fonds sont-ils en sécurité et où sont-ils stockés ?",
    answer: "Vos fonds ne transitent jamais par notre plateforme. Ils restent hébergés chez votre courtier régulé de choix (comme Binance, Interactive Brokers, Pepperstone, Bybit, etc.). Le robot transmet uniquement les instructions d'achat ou de vente au millième de seconde via protocole API chiffré de bout en bout."
  },
  {
    id: "faq-3",
    question: "Quelle est la performance mensuelle moyenne attendue ?",
    answer: "Les performances varient selon les conditions du marché et vos réglages de risque. Historiquement, sur nos backtests de 10 ans et nos comptes réels de trading, nos stratégies ont enregistré des gains de l'ordre de 4% à 12% par mois avec un drawdown maximal historique maîtrisé sous les 8%. Veuillez noter que les performances passées ne préjugent pas des performances futures."
  },
  {
    id: "faq-4",
    question: "Puis-je modifier les paramètres de la stratégie ou l'arrêter à tout moment ?",
    answer: "Oui, absolument. Vous gardez le contrôle total en temps réel. Grâce à notre panneau de contrôle premium (ou via de simples commandes Telegram/Discord), vous pouvez mettre en pause le robot d'un simple clic, modifier le niveau de risque, changer les actifs suivis ou forcer la fermeture immédiate de toutes les positions actives."
  },
  {
    id: "faq-5",
    question: "La clé d'accès à l'IA Gemini est-elle intégrée ?",
    answer: "Oui ! Sur notre version Pro et Ultimate, l'assistant quantitatif est directement propulsé par Gemini, vous permettant de générer, tester et raffiner des stratégies quantitatives personnalisées à la volée. Aucun abonnement supplémentaire ou clé d'API personnelle n'est requis de votre part."
  }
];
