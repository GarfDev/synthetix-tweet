import { GRAPHQL_ENDPOINT } from "@constants";
import { request } from "graphql-request";
import { updateSynthExchanges } from "store/synthExchanges/actions";
import { useDispatch } from "utils/hooks";
import { getLogger } from "utils/logger";
import timerManager from "../manager";
import synthExchanges, {
  getPreviousDays,
  getSeccondEpouch,
  SynthExchangesResponse,
} from "utils/mutations/synthExchanges";
import { RunnerType } from "timers/constants";
import { formatUSD } from "utils";

async function synthExchangesUpdater() {
  const logger = getLogger();
  const dispatch = useDispatch();
  const yesterday = getSeccondEpouch(new Date().getTime() - getPreviousDays(1));
  const response: SynthExchangesResponse = await request(
    GRAPHQL_ENDPOINT.EXCHANGES,
    synthExchanges(yesterday)
  );
  dispatch(
    updateSynthExchanges(
      response.synthExchanges.map((item) => ({
        ...item,
        feesInUSD: formatUSD(item.feesInUSD),
        fromAmountInUSD: formatUSD(item.fromAmountInUSD),
        toAmountInUSD: formatUSD(item.toAmountInUSD),
      }))
    )
  );
  logger.info("Updated Synth Exchanges.");
  timerManager.setter(
    RunnerType.UPDATE_SYNTH_EXCHANGES,
    synthExchangesUpdater,
    30000
  );
}

export default synthExchangesUpdater;
