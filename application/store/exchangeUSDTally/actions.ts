import { action } from "typesafe-actions";
import { USDTDaily } from "utils/mutations/exchangeUSDTally";
import ActionTypes from "./actionTypes";

export const updateUSDTDaily = (data: USDTDaily) =>
  action(ActionTypes.UPDATE_USDT_DAILY, { data });
