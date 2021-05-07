import { CoinmarketcapState } from "./coinmarketcap";
import { ExchangeUSDTallyState } from "./exchangeUSDTally/types";
import { SynthExchangesState } from "./synthExchanges/types";

export interface ApplicationState {
  coinmarketcap: CoinmarketcapState;
  synthExchanges: SynthExchangesState;
  exchangeUSDTally: ExchangeUSDTallyState;
}
