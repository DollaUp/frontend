import { number } from 'prop-types';

namespace IEXQuoteResponse {
  export interface SingleQuote {
    quote?: IEXQuoteInterface;
    news?: IEXNewsInterface[];
    chart?: IEXChartInterface[];
    company?: IEXCompanyInterface[];
    dividend?: IEXDividendInterface[];
    'delayed-quote'?: IEXDelayedQuoteInterface;
    earnings?: IEXEarningsInterface;
    'today-earnings'?: IEXTodayEarningsInterface;
    'effective-spread'?: IEXEffectiveSpreadInterface[];
    stats?: IEXStatsInterface;
    // TODO: largest trades
    logo?: IEXLogoInterface;
    ohlc?: IEXOHLCInterface;
    peers?: string[];
    previous?: IEXPreviousInterface;
    price?: number;
    relevant?: IEXRelevantInterface;
    // TODO: splits
  }

  export interface MultipleQuotes {
    [ticker: string]: SingleQuote;
  }
}

export interface IEXQuoteInterface {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  sector: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  iexRealtimePrice: null;
  iexRealtimeSize: null;
  iexLastUpdated: null;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedPrice: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPriceTime: number;
  previousClose: number;
  change: number;
  changePercent: number;
  iexMarketPercent: null;
  iexVolume: null;
  avgTotalVolume: number;
  iexBidPrice: null;
  iexBidSize: null;
  iexAskPrice: null;
  iexAskSize: null;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}

interface IEXNewsInterface {
  datetime: string;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
  image: string;
}

interface IEXChartInterface {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  vwap: number;
  label: string;
  changeOverTime: number;
}

interface IEXCompanyInterface {
  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  issueType: string;
  sector: string;
  tags: string[];
}

interface IEXDividendInterface {
  exDate: string;
  paymentDate: string;
  recordDate: string;
  declaredDate: string;
  amount: number;
  flag: string;
  type: string;
  qualified: string;
  indicated: string;
}

interface IEXDelayedQuoteInterface {
  symbol: string;
  delayedPrice: number;
  high: number;
  low: number;
  delayedSize: number;
  delayedPriceTime: number;
  processedTime: number;
}

interface IEXEarningsInterface {
  symbol: string;
  earnings: {
    actualEPS: number;
    consensusEPS: number;
    estimatedEPS: number;
    announceTime: string;
    numberOfEstimates: number;
    EPSSurpriseDollar: number;
    EPSReportDate: string;
    fiscalPeriod: string;
    fiscalEndDate: string;
    yearAgo: number;
    yearAgoChangePercent: number;
    estimatedChangePercent: number;
    symbolId: number;
  };
}

interface IEXTodayEarningsInterface {
  [name: string]: {
    quote: {
      symbol: string;
      companyName: string;
      primaryExchange: string;
      sector: string;
      calculationPrice: string;
      open: number;
      openTime: number;
      close: number;
      closeTime: number;
      high: number;
      low: number;
      latestPrice: number;
      latestSource: string;
      latestTime: string;
      latestUpdate: number;
      latestVolume: number;
      iexRealtimePrice: number;
      iexRealtimeSize: number;
      iexLastUpdated: number;
      delayedPrice: number;
      delayedPriceTime: number;
      extendedPrice: number;
      extendedPriceTime: number;
      extendedChange: number;
      extendedChangePercent: number;
      previousClose: number;
      change: number;
      changePercent: number;
      iexMarketPercent: number;
      iexVolume: number;
      avgTotalVolume: number;
      iexBidPrice: number;
      iexBidSize: number;
      iexAskPrice: number;
      iexAskSize: number;
      marketCap: number;
      peRatio: number;
      week52High: number;
      week52Low: number;
      ytdChange: number;
    };
  };
}

interface IEXEffectiveSpreadInterface {
  volume: number;
  venue: string;
  venueName: string;
  effectiveSpread: number;
  effectiveQuoted: number;
  priceImprovement: number;
}

interface IEXFinancialsInterface {
  symbol: string;
  financials: {
    reportDate: string;
    grossProfit: number;
    costOfRevenue: number;
    operatingRevenue: number;
    totalRevenue: number;
    operatingIncome: number;
    netIncome: number;
    researchAndDevelopment: number;
    operatingExpense: number;
    currentAssets: number;
    totalAssets: number;
    totalLiabilities: number;
    currentCash: number;
    currentDebt: number;
    totalCash: number;
    totalDebt: number;
    shareholderEquity: number;
    cashChange: number;
    cashFlow: number;
    operatingGainsLosses: number;
  }[];
}

interface IEXStatsInterface {
  companyName: string;
  marketcap: number;
  beta: number;
  week52high: number;
  week52low: number;
  week52change: number;
  shortInterest: number;
  shortDate: number;
  dividendRate: number;
  dividendYield: number;
  exDividendDate: string;
  latestEPS: number;
  latestEPSDate: string;
  sharesOutstanding: number;
  float: number;
  returnOnEquity: number;
  consensusEPS: number;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSSurprisePercent: number;
  symbol: string;
  EBITDA: number;
  revenue: number;
  grossProfit: number;
  cash: number;
  debt: number;
  ttmEPS: number;
  revenuePerShare: number;
  revenuePerEmployee: number;
  peRatioHigh: number;
  peRatioLow: number;
  returnOnAssets: number;
  returnOnCapital: number;
  profitMargin: number;
  priceToSales: number;
  priceToBook: number;
  day200MovingAvg: number;
  day50MovingAvg: number;
  institutionPercent: number;
  insiderPercent: number;
  shortRatio: number;
  year5ChangePercent: number;
  year2ChangePercent: number;
  year1ChangePercent: number;
  ytdChangePercent: number;
  ytdChangePercent: number;
  month6ChangePercent: number;
  month3ChangePercent: number;
  month1ChangePercent: number;
  day5ChangePercent: number;
  day30ChangePercent: number;
}

interface IEXLogoInterface {
  url: string;
}

interface IEXOHLCInterface {
  high: number;
  low: number;
  open: {
    price: number;
    time: number;
  };
  close: {
    price: number;
    time: number;
  };
}

interface IEXPreviousInterface {
  symbol: string;
  date: string;
  open: number;
  high: number;
  close: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  vwap: number;
}

interface IEXRelevantInterface {
  peers: boolean;
  symbols: string[];
}
