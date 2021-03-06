import { createAction, handleActions } from "redux-actions";

import { api } from "../../shared/api";
// initialState
const initialState = {
  reward: [
    {
      rewardId: 1,
      fundId: 2,
      rewardTitle: "[슈퍼얼리버드] 나디아 체리자두 2kg",
      rewardContent: `체리와 자두의 만남,
새콤 달콤 18brix 고당도 체리자두를 지금 만나보세요 - !
    
새콤달콤 신품종 체리자두
* 한과 당 70~80g 내외
* 26 - 29과 내외로 배송됩니다.`,
      price: "36000",
      deliveryFee: "4000",
      quantityLimit: "500",
      quantity: "200",
    },
    {
      rewardId: 2,
      fundId: 3,
      rewardTitle: "[슈퍼얼리버드] 나디아 체리자두 2kg",
      rewardContent: `체리와 자두의 만남,
새콤 달콤 18brix 고당도 체리자두를 지금 만나보세요 - !
    
새콤달콤 신품종 체리자두
* 한과 당 70~80g 내외
* 26 - 29과 내외로 배송됩니다.`,
      price: "36000",
      deliveryFee: "4000",
      quantityLimit: "500",
      quantity: "500",
    },
  ],
  loading: false,
  error: null,
};
//action
const LOAD = "funding/READ_LOAD";
const FUNDING = "funding/UPDATE_FUNDING";

const LOADING = "user/LOADING_STATE";
const ERROR = "user/ERROR_STATE";
// action creator

const getLoad = createAction(LOAD, (payload) => ({ payload }));
const funding = createAction(FUNDING, (payload) => payload);
//loadinng / error action creator
export const requestLoading = createAction(LOADING, (payload) => payload);
export const requestError = createAction(ERROR, (payload) => payload);

// thunk
// reward 리스트 받기
export const __getLoadRewardList = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get(`/api/fund/${payload}/rewards`);
    dispatch(getLoad(response.data));
  } catch (error) {
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};

// 펀딩하기
export const __funding = (payload) => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.post(`/api/fund/${payload.id}`, payload.payload);
    if ((response.status = 200)) {
      dispatch(funding(response.data));
      return true;
    }
  } catch (error) {
    if (error.response.status === 400) {
      alert("후원금액이 너무 많습니다." + "낮춰서 다시 작성해주시기 바랍니다.");
    } else {
      dispatch(requestError(error));
    }
  } finally {
    dispatch(requestLoading(false));
  }
};

//reducer
export default function rewardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, reward: action.payload.payload };
    case FUNDING:
      return { ...state, fund: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
