import { ActionType } from "typesafe-actions";
import { SynthExchange } from "utils/mutations/synthExchanges";
import * as actions from "./actions";

export type SynthExchangesState = SynthExchange[];

export type SynthExchangeAction = ActionType<typeof actions>;
