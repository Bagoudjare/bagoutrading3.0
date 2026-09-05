export interface StrategyResponse {
  strategyName: string;
  description: string;
  timeframe: string;
  indicatorsUsed: string[];
  buyConditions: string[];
  sellConditions: string[];
  riskManagementRules: string[];
  simulatedWinRate: number;
  simulatedProfitFactor: number;
  backtestResultSummary: string;
  backtestPerformanceCurve: {
    period: string;
    performance: number;
  }[];
}

export interface TickerData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedExplanation?: string;
}

export interface LicenseOption {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  isPopular: boolean;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface BmaeLicense {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  badge?: string;
  description?: string;
}

export const BMAE_LICENSES: BmaeLicense[] = [
  {
    id: "1m",
    name: "Licence 1 mois",
    price: "70 $",
    period: "1 mois",
    badge: "Version Restreinte",
    description: "Utilisation limitée à 1 seul actif"
  },
  {
    id: "6m",
    name: "Licence Standard – 6 mois",
    price: "399,99 $",
    originalPrice: "699,99 $",
    period: "6 mois",
    badge: "6 Mois d'accès",
    description: "Accès complet pendant 6 mois"
  },
  {
    id: "life",
    name: "Licence à Vie",
    price: "699,99 $",
    originalPrice: "1 999,99 $",
    period: "À Vie",
    badge: "Recommandée • À Vie",
    description: "Accès illimité à vie"
  }
];
