import { ActionType } from "typesafe-actions";
import { USDTDaily } from "utils/mutations/exchangeUSDTally";
import * as actions from "./actions";

export type ExchangeUSDTallyState = USDTDaily;

export type ExchangeUSDTallyAction = ActionType<typeof actions>;
