import { CoinmarketcapState } from "./coinmarketcap";
import { SynthExchangesState } from "./synthExchanges/types";

export interface ApplicationState {
  coinmarketcap: CoinmarketcapState;
  synthExchanges: SynthExchangesState;
}
