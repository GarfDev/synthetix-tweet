import { action } from "typesafe-actions";
import { CoinmarketcapState } from "./types";
import ActionTypes from "./actionTypes";

export const updateCoinmarketcapData = (data: CoinmarketcapState) =>
  action(ActionTypes.UPDATE_COINMARKETCAP_DATA, { data });
