import { createAction, handleActions } from "redux-actions";
import { api } from "../../shared/api";

// initialState
const initialState = {
  user: null,
  username: null,
  isLogin: false,
  loading: false,
  error: null,
};
//action
const LOADING = "user/LOADING_STATE";
const ERROR = "user/ERROR_STATE";

//loadinng / error action creator
const requestLoading = createAction(LOADING, (payload) => ({ payload }));
const requestError = createAction(ERROR, (payload) => ({ payload }));

//reducer
export default function userReudcer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING:
    // return { ...state, loading: action.payload };
    case ERROR:
    // return { ...state, error: action.payload };
    default:
      return state;
  }
}

const stateAction = {
  requestLoading,
  requestError,
};
const userActions = {};
export { stateAction, userActions };
