import timerManageObject from "./storage";
import { RunnerType } from "../constants";

const setter = (
  key: RunnerType,
  timer: () => Promise<void>,
  timeout: number
) => {
  if (timerManageObject[key]) clearTimeout(timerManageObject[key]);
  timerManageObject[key] = setTimeout(timer, timeout);
};

export default setter;
