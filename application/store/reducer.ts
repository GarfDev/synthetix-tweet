import { combineReducers } from "redux";
// Child reducers
import coinmarketcapReducer from "./coinmarketcap";

const rootReducer = combineReducers({
  coinmarketcap: coinmarketcapReducer,
});

export default rootReducer;
