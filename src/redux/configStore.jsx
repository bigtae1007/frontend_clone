//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// redux-thunk
import thunk from "redux-thunk";

const middlewares = [thunk];
// const rootReducer = combineReducers({ memos });
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
