import twitter from "utils/twitter";
import timerManager from "timers/manager";
import { getLogger } from "utils/logger";
import { RunnerType } from "timers/constants";
import coinmarketcapUpdater from "timers/runners/coinmarketcapUpdater";

const application = () => {
  const logger = getLogger();
  logger.info("Initializing application..");
  logger.info("Created Twitter Client..");
  timerManager.setter(
    RunnerType.UPDATE_COINMARKETCAP_DATA,
    coinmarketcapUpdater,
    30000
  );
  logger.info("Registed Runners..");
  twitter.getClient();
};

export default application;
