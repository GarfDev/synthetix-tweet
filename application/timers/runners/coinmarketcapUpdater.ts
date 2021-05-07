import { useDispatch } from "utils/hooks";
import coinmarketcap from "utils/requests/coinmarketcap";
import { updateCoinmarketcapData } from "store/coinmarketcap/actions";
import { getLogger } from "utils/logger";
import timerManager from "../manager";
import { RunnerType } from "timers/constants";

async function coinmarketcapUpdater() {
  const logger = getLogger();
  const dispatch = useDispatch();
  const data = await coinmarketcap.update();
  dispatch(updateCoinmarketcapData(data.data["SNX"]));
  logger.info("Updated Coinmarket Data.");
  timerManager.setter(
    RunnerType.UPDATE_COINMARKETCAP_DATA,
    coinmarketcapUpdater,
    30000
  );
}

export default coinmarketcapUpdater;
