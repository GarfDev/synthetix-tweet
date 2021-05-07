import { gql } from "graphql-request";

const synthExchanges = (timestamp: number) => {
  console.log(timestamp);
  return gql`
  {
    synthExchanges(
      orderBy: timestamp
      orderDirection: desc
      where: { network: "mainnet", timestamp_gte: ${timestamp} }
      first: 1000
      skip: 0
    ) {
      id
      from
      gasPrice
      from
      fromAmount
      fromAmountInUSD
      fromCurrencyKey
      toCurrencyKey
      toAddress
      toAmount
      toAmountInUSD
      feesInUSD
      block
      timestamp
    }
  }
`;
};

export default synthExchanges;

/**
 * Types
 */

export interface SynthExchange {
  block: string;
  feesInUSD: string;
  from: string;
  fromAmount: string;
  fromAmountInUSD: string;
  fromCurrencyKey: string;
  gasPrice: string;
  id: string;
  timestamp: string;
  toAddress: string;
  toAmount: string;
  toAmountInUSD: string;
  toCurrencyKey: string;
}

export interface SynthExchangesResponse {
  synthExchanges: SynthExchange[];
}

/**
 * Utils
 */

export const getSeccondEpouch = (timestamp: number) =>
  Math.round(timestamp / 1000);

export const getPreviousDays = (days: number) => 60 * 60 * 24 * 1000 * days;
