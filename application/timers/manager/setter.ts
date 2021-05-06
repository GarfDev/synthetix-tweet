import timerManageObject from "./storage";
import { RunnerType } from "../constants";

const setter = (key: RunnerType, timer: () => Promise<void>) => {
  if (timerManageObject[key]) clearTimeout(timerManageObject[key]);
  timerManageObject[key] = setTimeout(timer);
};

export default setter;
