import { createAction, handleActions } from "redux-actions";

import { api } from "../../shared/api";
// initialState
const initialState = {
  loading: false,
  error: null,
  fund: [
    {
      postId: 1,
      title: "여행필수품[주머니에 쏙~ 초소형]",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozAycP73OFy5n7Dl15ZPuxZWN49K6HYWcow&usqp=CAU",
      category: "음식",
      fundingGoal: "10000",
      currentFund: "1000000",
      supporters: "회사",
      expDate: "11d일",
    },
  ],
  fundDetail: {
    title: "완벽한 겉 방수, 속 쾌적! 비오는 날엔 항상 [포시즌 레인코트&스커트]",
    subTitle:
      "방수 되는데 안 꿉꿉한 레인코트는 처음일 거에요. 심지어 입고 출근해도 우비인지 모를 완벽한 디자인까지. 사계절 내내 우산, 장화보다 더 확실하게 비를 피하는 필수템을 소개합니다.",
    imageURL:
      "https://www.fashionbiz.co.kr/images/AT/AR/%EC%95%8C%ED%8C%8C%EC%84%AC%EC%9C%A0600.JPG",
    category: "패션·잡화",
    fundingGoal: "10000000",
    currentFund: "111000",
    likeCount: 115,
    likeCheck: false,
    supporters: "222",
    expDate: "2022.07.5-2022.07.11",
    content:
      "https://btaeredux.s3.ap-northeast-2.amazonaws.com/%EB%B9%84%EC%98%B7-cutout.png",
  },
};
//action
const LOAD = "funding/READ_LOAD";
const LOADDETAIL = "funding/READ_LOADDETAIL";

const LOADING = "funding/LOADING_STATE";
const ERROR = "funding/ERROR_STATE";
// action creator

const getLoad = createAction(LOAD, (payload) => ({ payload }));
const getLoadDetail = createAction(LOADDETAIL, (payload) => payload);
// const getLoadDetail = createAction();

//loadinng / error action creator
export const requestLoading = createAction(LOADING, (payload) => payload);
export const requestError = createAction(ERROR, (payload) => payload);
// thunk
// 펀드 리스트 받기
export const __getLoadFundList = () => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get("/api/home");
    if ((response.status = 200)) {
      dispatch(getLoad(response.data));
    }
  } catch (error) {
    dispatch(requestError(error.message));
  } finally {
    dispatch(requestLoading(false));
  }
};
// 세부정보 받기
export const __getLoadDetailFund = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get(`/api/fund/${payload}`);
    dispatch(getLoadDetail(response.data));
  } catch (error) {
    dispatch(requestError(error.message));
  } finally {
    dispatch(requestLoading(false));
  }
};

//reducer
export default function fundingReudcer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, fund: action.payload.payload };
    case LOADDETAIL:
      return { ...state, fundDetail: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
