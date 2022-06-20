import { createAction, handleActions } from "redux-actions";
import { api } from "../../shared/api";
import { setCookie, deleteCookie } from "../../shared/Cookie";
// initialState
const initialState = {
  userId: null,
  username: null,
  checkEmail: false,
  signup: false,
  isLogin: false,
  loading: false,
  error: null,
};
//action
const SIGNUP = "user/CREATE_SIGNUP";
const LOGIN = "user/LOAD_LOGIN";
const CHECKLOGIN = "user/CHECK_LOGIN";
const LOGOUT = "user/DELETE_LOGOUT";
const OVERLAPEMAIL = "user/CHECK_OVERLAPEMAIL";
//state action
const LOADING = "user/LOADING_STATE";
const ERROR = "user/ERROR_STATE";

// action creator

const signUp = createAction(SIGNUP, (payload) => payload);
const logIn = createAction(LOGIN, (payload) => ({ payload }));
const checkLogin = createAction(CHECKLOGIN, (payload) => ({ payload }));
const logOut = createAction(LOGOUT, (payload) => payload);
const overlapEmail = createAction(OVERLAPEMAIL, (payload) => ({ payload }));

//loadinng / error action creator
export const requestLoading = createAction(LOADING, (payload) => ({ payload }));
export const requestError = createAction(ERROR, (payload) => ({ payload }));

// thunk

//로그인 체크
export const __checkLogin = () => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get("/test");
    if (response.status === 200) {
      dispatch(checkLogin(true));
    }
  } catch (error) {
    console.log(error);
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};
//로그인
export const __logIn = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.post("/login", {
      username: payload.email,
      password: payload.password,
    });
    console.log(response);
    setCookie("token", response.headers.authorization, 7);
    localStorage.setItem("id", payload.email);
    if ((response.status = 200)) {
      dispatch(logIn(payload.email));
      console.log("로그인");
    }
  } catch (error) {
    console.log(error);
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};
//로그 아웃
export const __logOut = () => (dispatch, getState) => {
  deleteCookie("token");
  localStorage.removeItem("id");
  alert("정상 로그아웃 됐습니다.");
  dispatch(logOut());
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
    dispatch(signUp(true));
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
    console.log(payload);
    const response = await api.post("/dupCheck", { username: payload });
    dispatch(overlapEmail(response.data.result));
  } catch (error) {
    console.log(error);
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};

//reducer
export default function userReudcer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case SIGNUP:
      return { ...state, signup: true };
    case OVERLAPEMAIL:
      return { ...state, checkEmail: action.payload };
    case LOGIN:
      return { ...state, isLogin: true, userId: action.payload.payload };
    case LOGOUT:
      return { ...state, isLogin: false, userId: "" };
    case CHECKLOGIN:
      return { ...state, isLogin: true };
    default:
      return state;
  }
}
