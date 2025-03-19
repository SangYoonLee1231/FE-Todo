import { Store } from "./store.js";

export const Dispatcher = {
  dispatch(action) {
    // Dispatcher가 Store로 액션을 전달
    //
    console.log(action);
    //
    Store.handleAction(action);
  },
};
