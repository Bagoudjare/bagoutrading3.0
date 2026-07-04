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
    title: "Analyse des Zones",
    description: "Détection automatique des Order Blocks (OB) et Fair Value Gaps (FVG).",
    iconName: "BarChart3",
    detailedExplanation: "Le moteur d'analyse identifie automatiquement les Order Blocks représentant les zones d'intervention potentielles des acteurs institutionnels, ainsi que les Fair Value Gaps (FVG), révélant les déséquilibres créés par une forte impulsion du marché. Ces zones sont mises à jour dynamiquement afin de fournir des niveaux de réaction potentiels en temps réel."
  },
  {
    id: "robo-risk",
    title: "Risk Management",
    description: "Calcul automatique des paramètres de gestion du capital pour chaque opportunité.",
    iconName: "ShieldCheck",
    detailedExplanation: "L'outil évalue automatiquement le Risk/Reward de chaque configuration et calcule les paramètres essentiels de gestion du risque, notamment la taille de position, le Stop Loss (SL) et le Take Profit (TP). Cette approche permet d'appliquer des règles de gestion du capital de manière cohérente sur chaque opération."
  },
  {
    id: "robo-asset",
    title: "Détection des Opportunités",
    description: "Identification des configurations de trading à forte probabilité grâce à des filtres intelligents.",
    iconName: "Layers",
    detailedExplanation: "Le système recherche automatiquement les setups Sniper répondant à une combinaison de critères techniques avancés. Les signaux Buy Signal (BS) et Sell Signal (SS) sont générés uniquement lorsque les conditions principales sont réunies, tandis que les signaux Filter Buy (FB) et Filter Sell (FS) apportent une validation supplémentaire pour réduire les faux signaux. Un guide d'interprétation accompagne ces signaux afin de faciliter leur utilisation."
  },
  {
    id: "robo-247",
    title: "Visualisation Intelligente",
    description: "Une représentation graphique claire des informations essentielles pour une lecture rapide du marché.",
    iconName: "Activity",
    detailedExplanation: "Les informations détectées par l'algorithme sont affichées à l'aide d'objets graphiques organisés et actualisés automatiquement. Les zones clés, les structures et les signaux sont représentés directement sur le graphique afin d'améliorer la lisibilité et de faciliter l'analyse sans surcharger l'écran."
  },
  {
    id: "robo-ai",
    title: "Structure du Marché",
    description: "Compréhension avancée de la dynamique des prix grâce à l'analyse de structure et au Multi-Timeframe (MTF).",
    iconName: "BrainCircuit",
    detailedExplanation: "L'algorithme analyse en permanence la structure du marché afin d'identifier les cassures, les changements de caractère, la direction dominante et les phases de consolidation. L'analyse Multi-Timeframe (MTF) combine plusieurs unités de temps pour confirmer les tendances et améliorer la précision des décisions de trading."
  },
  {
    id: "robo-notif",
    title: "Alertes et Surveillance",
    description: "Restez informé instantanément dès qu'une opportunité répond aux critères définis.",
    iconName: "Send",
    detailedExplanation: "Le système surveille le marché en continu et envoie des notifications Push sur smartphone dès qu'une configuration correspondant aux paramètres de l'algorithme est détectée. Les alertes permettent de suivre plusieurs actifs sans rester constamment devant les graphiques."
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
