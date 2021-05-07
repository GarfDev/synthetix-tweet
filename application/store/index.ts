import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

// store.subscribe(() => {
//   const state = useSelector(rootSelector);
//   console.log(state);
// });

export default store;
