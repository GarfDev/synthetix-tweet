import ActionTypes from "./actionTypes";
import { CoinmarketcapState, CoinmarketcapActions } from "./types";

const initialState: CoinmarketcapState = {
  id: 0,
  name: "",
  symbol: "",
  slug: "",
  num_market_pairs: 0,
  date_added: new Date(),
  tags: [],
  max_supply: 0,
  circulating_supply: 0,
  total_supply: 0,
  platform: {
    id: 0,
    name: "",
    symbol: "",
    slug: "",
    token_address: "",
  },
  is_active: 0,
  cmc_rank: 0,
  is_fiat: 0,
  last_updated: new Date(),
  quote: {},
};

const reducer = (state = initialState, action: CoinmarketcapActions) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COINMARKETCAP_DATA: {
      return action.payload.data;
    }
    default:
      return state;
  }
};

export default reducer;
