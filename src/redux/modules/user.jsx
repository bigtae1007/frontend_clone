import { createAction, handleActions } from "redux-actions";
import { api } from "../../shared/api";
import { setCookie } from "../../shared/Cookie";
// initialState
const initialState = {
  userId: null,
  username: null,
  checkEmail: true,
  isLogin: false,
  loading: false,
  error: null,
};
//action
const SIGNUP = "user/CREATE_SIGNUP";
const LOGIN = "user/LOAD_LOGIN";
const OVERLAPEMAIL = "user/CHECK_OVERLAPEMAIL";
//state action
const LOADING = "user/LOADING_STATE";
const ERROR = "user/ERROR_STATE";

// action creator

const signUp = createAction(SIGNUP, (payload) => ({ payload }));
const logIn = createAction(LOGIN, (payload) => ({ payload }));
const overlapEmail = createAction(OVERLAPEMAIL, (payload) => ({ payload }));

//loadinng / error action creator
const requestLoading = createAction(LOADING, (payload) => ({ payload }));
const requestError = createAction(ERROR, (payload) => ({ payload }));

// thunk
//로그인
export const __logIn = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.post("/login", {
      username: payload.email,
      password: payload.password,
    });
    setCookie("token", response.headers.authorization, 7);
    if ((response.status = 200)) {
      dispatch(logIn(payload.email));
    }
  } catch (error) {
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};
// 회원가입
export const __signUp = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.post("/signup", {
      username: payload.email,
      nickname: payload.nick,
      password: payload.pw,
    });
    // dispatch(signUp(response.data));
  } catch (error) {
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};
// 이메일 중복확인
export const __overlapEmail = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    //payload 1234@1234 로 들어옴
    const response = await api.post("/dupCheck", { username: payload });
    dispatch(overlapEmail(response.data.result));
  } catch (error) {
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};

//reducer
export default function userReudcer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING:
    // return { ...state, loading: action.payload };
    case ERROR:
    // return { ...state, error: action.payload };
    case OVERLAPEMAIL:
      return { ...state, checkEmail: action.payload };
    case LOGIN:
      return { ...state, isLogin: true, userId: action.payload.payload };
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
