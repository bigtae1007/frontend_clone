import axios from "axios";
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
  loginError: null,
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
const LOGINERROR = "user/ERROR_LOGINERROR";

// action creator

const signUp = createAction(SIGNUP, (payload) => payload);
const logIn = createAction(LOGIN, (payload) => ({ payload }));
const checkLogin = createAction(CHECKLOGIN, (payload) => ({ payload }));
const logOut = createAction(LOGOUT, (payload) => payload);
const overlapEmail = createAction(OVERLAPEMAIL, (payload) => ({ payload }));
const loginError = createAction(LOGINERROR, (payload) => payload);

//loadinng / error action creator
export const requestLoading = createAction(LOADING, (payload) => ({ payload }));
export const requestError = createAction(ERROR, (payload) => ({ payload }));

// thunk

// Kakao 로그인
export const __kakaoLogin = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get(`/user/kakao/callback?code=${payload}`);

    const accessToken = response.headers.authorization;
    setCookie("token", accessToken);
    localStorage.setItem("id", response.headers.authorization);
    if ((response.status = 200)) {
      dispatch(logIn(payload.email));
    }
  } catch (error) {
    dispatch(loginError());
  } finally {
    dispatch(requestLoading(false));
  }
};

//로그인 체크
export const __checkLogin = () => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get("/test");

    if (response.status === 200) {
      dispatch(checkLogin(true));
    }
  } catch (error) {
    alert("로그인 기간이 만료됐습니다. 다시 로그인 해주세요");
    deleteCookie("token");
    localStorage.removeItem("id");
    dispatch(logOut());
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

    setCookie("token", response.headers.authorization, 7);
    localStorage.setItem("id", payload.email);
    if ((response.status = 200)) {
      dispatch(logIn(payload.email));
    }
  } catch (error) {
    alert("존재하지 않은 아이디 이거나 비밀번호가 틀렸습니다.");
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
    alert("예상치 못한 에러가 발생했습니다. 다시 한번 시도해 주세요");
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};
// 이메일 중복확인
export const __overlapEmail = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
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
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case SIGNUP:
      return { ...state, signup: true };
    case OVERLAPEMAIL:
      return { ...state, checkEmail: action.payload };
    case LOGIN:
      return { ...state, isLogin: true, userId: action };
    case LOGOUT:
      return { ...state, isLogin: false, userId: "" };
    case CHECKLOGIN:
      return { ...state, isLogin: true };
    case LOGINERROR:
      return { ...state, loginError: true };
    default:
      return state;
  }
}
