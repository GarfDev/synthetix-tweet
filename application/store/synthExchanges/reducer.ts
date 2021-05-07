import { SynthExchangeAction, SynthExchangesState } from "./types";
import ActionTypes from "./actionTypes";

const initialState: SynthExchangesState = [];

const reducer = (state = initialState, action: SynthExchangeAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SYNTH_EXCHANGES: {
      return action.payload.data;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
