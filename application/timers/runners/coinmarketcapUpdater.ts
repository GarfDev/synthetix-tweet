import { useDispatch } from "utils/hooks";
import coinmarketcap from "utils/requests/coinmarketcap";
import { updateCoinmarketcapData } from "store/coinmarketcap/actions";

async function coinmarketcapUpdater() {
  const dispatch = useDispatch();
  const data = await coinmarketcap.update();
  dispatch(updateCoinmarketcapData(data.data["SNX"]));
}

export default coinmarketcapUpdater;
