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
export default handleActions(
  {
    [LOADING]: (state, action) => {
      // return { ...state, loading: action.payload };
    },
    [ERROR]: (state, action) => {
      // return { ...state, error: action.payload };
    },
  },
  initialState
);

const stateAction = {
  requestLoading,
  requestError,
};
const userActions = {};
export { stateAction, userActions };
