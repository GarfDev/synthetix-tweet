import { action } from "typesafe-actions";
import { SynthExchange } from "utils/mutations/synthExchanges";
import ActionTypes from "./actionTypes";

export const updateSynthExchanges = (data: SynthExchange[]) =>
  action(ActionTypes.UPDATE_SYNTH_EXCHANGES, { data });
