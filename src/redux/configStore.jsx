//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//리듀서
import user from "./modules/user";
import funding from "./modules/funding";
import reward from "./modules/reward";
// redux-thunk
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ user, funding, reward });
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
