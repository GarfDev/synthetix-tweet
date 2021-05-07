import { ExchangeUSDTallyState, ExchangeUSDTallyAction } from "./types";
import ActionTypes from "./actionTypes";

const initialState: ExchangeUSDTallyState = {
  exchangeUSDTally: 0,
  exchangers: 0,
  totalFeesGeneratedInUSD: 0,
  trades: 0,
};

const reducer = (state = initialState, action: ExchangeUSDTallyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USDT_DAILY: {
      return action.payload.data;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
