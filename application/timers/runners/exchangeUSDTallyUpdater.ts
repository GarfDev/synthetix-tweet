import _ from "lodash";
import { GRAPHQL_ENDPOINT } from "@constants";
import { request } from "graphql-request";
import { useDispatch } from "utils/hooks";
import { getLogger } from "utils/logger";
import timerManager from "../manager";
import { RunnerType } from "timers/constants";
import exchangeUSDTally, {
  ExchangeUSDTallyResponse,
} from "utils/mutations/exchangeUSDTally";
import { updateUSDTDaily } from "store/exchangeUSDTally/actions";
import { formatUSD } from "utils";

async function exchangeUSDTallyUpdater() {
  const logger = getLogger();
  const dispatch = useDispatch();

  const response: ExchangeUSDTallyResponse = await request(
    GRAPHQL_ENDPOINT.EXCHANGES,
    exchangeUSDTally
  );

  const data = response.totals[0];

  dispatch(
    updateUSDTDaily({
      exchangeUSDTally: formatUSD(data.exchangeUSDTally),
      exchangers: _.toNumber(data.exchangers),
      totalFeesGeneratedInUSD: formatUSD(data.totalFeesGeneratedInUSD),
      trades: _.toNumber(data.trades),
    })
  );
  logger.info("Updated USDT Daily info.");
  timerManager.setter(
    RunnerType.USDT_DAILY_UPDATER,
    exchangeUSDTallyUpdater,
    30000
  );
}

export default exchangeUSDTallyUpdater;
