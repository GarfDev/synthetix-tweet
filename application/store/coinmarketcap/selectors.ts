import { createSelector } from "reselect";
import { rootSelector } from "store/selector";

export const coinmarketcapStateSelector = createSelector(
  rootSelector,
  (state) => state.coinmarketcap
);
