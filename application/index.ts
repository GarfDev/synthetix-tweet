import twitter from "utils/twitter";
import timerManager from "timers/manager";
import { getLogger } from "utils/logger";
import { RunnerType } from "timers/constants";
// Runners
import coinmarketcapUpdater from "timers/runners/coinmarketcapUpdater";
import synthExchangesUpdater from "timers/runners/synthExchangesUpdater";

const application = () => {
  const logger = getLogger();
  logger.info("Initializing application..");
  logger.info("Created Twitter Client..");
  timerManager.setter(
    RunnerType.UPDATE_COINMARKETCAP_DATA,
    coinmarketcapUpdater,
    30000
  );
  timerManager.setter(
    RunnerType.UPDATE_SYNTH_EXCHANGES,
    synthExchangesUpdater,
    30000
  );
  logger.info("Registed Runners..");
  twitter.getClient();
};

export default application;
