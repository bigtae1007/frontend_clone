//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//리듀서
// redux-thunk
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
