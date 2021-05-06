import timerManageObject from "./storage";
import { RunnerType } from "../constants";

const getter = (key: RunnerType) => timerManageObject[key];

export default getter;
