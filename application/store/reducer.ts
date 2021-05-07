import { combineReducers } from "redux";
// Child reducers
import coinmarketcapReducer from "./coinmarketcap";
import synthExchangesReducer from "./synthExchanges";

const rootReducer = combineReducers({
  coinmarketcap: coinmarketcapReducer,
  synthExchanges: synthExchangesReducer,
});

export default rootReducer;
