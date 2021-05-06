import { ActionType } from "typesafe-actions";
import { SymbolData } from "utils/requests/coinmarketcap";
import * as actions from "./actions";

export interface CoinmarketcapState extends SymbolData {}

export type CoinmarketcapActions = ActionType<typeof actions>;
