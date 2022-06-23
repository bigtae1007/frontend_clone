import { api } from "../../shared/api";

// actiontype
const ADD_COMMENT = "comment/ADD_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";
const GET_COMMENT_REQUEST = "comment/GET_COMMENT_REQUEST";
const GET_COMMENT_ERROR = "comment/GET_COMMENT_ERROR";

//action함수
const addComment = (payload) => ({ type: ADD_COMMENT, payload });
const updateComment = (payload) => ({ type: UPDATE_COMMENT, payload });
const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload });

//초기값
const initialState = {
  list: [],
  loading: false,
  error: null,
};

//thunk
export const __addComment = (payload) => async (dispatch) => {
  const data = await api.post(`/api/fund/comments/${payload.fundId}/reply`, {
    replyContent: payload.replyContent,
  });
  dispatch(addComment(data.data));
};

export const __updateComment = (payload) => async (dispatch, getState) => {
  const data = await api.put(`/api/fund/comments/reply/${payload.id}`, {
    replyContent: payload.replyContent,
  });
  dispatch(updateComment(data.data));
};

export const __deleteComment = (payload) => async (dispatch, getState) => {
  const msg = await api.delete(`/api/fund/comments/reply/${payload}`);
  dispatch(deleteComment(payload));
  alert("댓글삭제 완료되었습니다.");
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, list: [action.payload, ...state.list] };
    case UPDATE_COMMENT:
      const newChangeComment = state.list.map((value) => {
        console.log(value.replyId, action.payload);

        return value.replyId === Number(action.payload.replyId)
          ? action.payload
          : value;
      });
      return { ...state, list: newChangeComment };
    case DELETE_COMMENT:
      const newDeletedComment = state.list.filter((value) => {
        return value.replyId !== Number(action.payload.replyId);
      });
      return { ...state, list: [...newDeletedComment] };
    case GET_COMMENT_REQUEST:
      return { ...state, loading: action.payload };
    case GET_COMMENT_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
