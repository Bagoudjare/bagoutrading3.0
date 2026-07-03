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
