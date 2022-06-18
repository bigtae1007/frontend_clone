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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozAycP73OFy5n7Dl15ZPuxZWN49K6HYWcow&usqp=CAU",
      category: "음식",
      fundingGoal: "10000",
      currentFund: "1000000",
      supporters: "회사",
      expDate: "11d일",
    },
  ],
  fundDetail: {
    title: "여행필수품[주머니에 쏙~ 초소형]",
    imageURL:
      "https://cdn.wadiz.kr/wwwwadiz/green001/2022/0527/20220527124158967_145740.jpg/wadiz/format/jpg/quality/80/optimize",
    category: "음식",
    fundingGoal: "10000",
    currentFund: "1000000",
    likeCount: 100,
    likeCheck: true,
    supporters: "회사",
    supportersCount: "100",
    expDate: "11d일",
    content: [
      "https://cdn.wadiz.kr/ft/images/green001/2022/0526/20220526011156282_91.jpg/wadiz/format/jpg/quality/80/optimize",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0525/20220525202435306_40.jpg/wadiz/format/jpg/quality/80/optimize",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0526/20220526011210636_97.gif",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0614/20220614121548986_46.gif",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0525/20220525182844737_63.jpeg/wadiz/format/jpg/quality/80/optimize",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0526/20220526192156417_26.jpeg/wadiz/format/jpg/quality/80/optimize",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0526/20220526011901857_69.jpeg/wadiz/format/jpg/quality/80/optimize",
      "https://cdn.wadiz.kr/ft/images/green001/2022/0525/20220525215111392_25.jpeg/wadiz/format/jpg/quality/80/optimize",
    ],
  },
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
