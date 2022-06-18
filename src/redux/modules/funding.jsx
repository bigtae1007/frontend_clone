import { createAction, handleActions } from "redux-actions";

import { api } from "../../shared/api";
import { setCookie } from "../../shared/Cookie";
import { requestLoading, requestError } from "./user";
// initialState
const initialState = {
  fund: [
    {
      postId: 1,
      title: "여행필수품[주머니에 쏙~ 초소형]",
      imageURL:
        "https://cdn.wadiz.kr/wwwwadiz/green001/2022/0527/20220527124158967_145740.jpg/wadiz/format/jpg/quality/80/optimize",
      category: "음식",
      fundingGoal: "10000",
      currentFund: "1000000",
      supporters: "100명",
      expDate: "11d일",
    },
  ],
};
//action
const LOAD = "funding/READ_LOAD";

// action creator

const getLoad = createAction(LOAD, (payload) => ({ payload }));

//loadinng / error action creator

// thunk
// 펀드 리스트 받기
export const __getLoadFundList = () => async (dispatch, getState) => {
  dispatch(requestLoading(true));
  try {
    const response = await api.get("/api/home");
    if ((response.status = 200)) {
      // dispatch(getLoad(response.data));
    }
  } catch (error) {
    dispatch(requestError(error));
  } finally {
    dispatch(requestLoading(false));
  }
};

//reducer
export default function fundingReudcer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, fund: action.payload };
    default:
      return state;
  }
}
