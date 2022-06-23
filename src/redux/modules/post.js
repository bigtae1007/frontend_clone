import { api } from "../../shared/api";

// actiontype - POST
const LOAD_POST = "post/LOAD_POST";
const ADD_POST = "post/ADD_POST";
const UPDATE_POST = "post/UPDATE_POST";
const DELETE_POST = "post/DELETE_POST";
const GET_POST_REQUEST = "post/GET_POST_REQUEST";
const GET_POST_ERROR = "post/GET_POST_ERROR";

// actiontype - COMMENT
const ADD_COMMENT = "comment/ADD_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

// action함수 - POST
const loadPost = (payload) => ({ type: LOAD_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const updatePost = (payload) => ({ type: UPDATE_POST, payload });
const deletePost = (payload) => ({ type: DELETE_POST, payload });

// action함수 - COMMENT
const addComment = (payload) => ({ type: ADD_COMMENT, payload });
const updateComment = (payload) => ({ type: UPDATE_COMMENT, payload });
const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload });

// 초기값
const initialState = {
  list: [],
  loading: false,
  error: null,
};

// Thunk - POST
export const __loadPosts = (payload) => async (dispatch) => {
  try {
    const data = await api.get(`/api/fund/${Number(payload)}/comments`);
    dispatch(loadPost(data.data.reverse()));
  } catch (error) {
    console.log(error);
  }
};

export const __addPost = (payload) => async (dispatch) => {
  try {
    const data = await api.post(`/api/fund/${payload.id}/comments`, {
      category: payload.category,
      content: payload.content,
    });
    data.data.replyResponseDto = [];
    dispatch(addPost(data.data));
    alert("추가 완료되었습니다.");
  } catch (error) {
    console.log(error);
  }
};

export const __updatePost = (payload) => async (dispatch) => {
  try {
    const request = await api.put(`/api/fund/comments/${payload.id}`, {
      category: payload.category,
      content: payload.content,
    });
    console.log(request);
    dispatch(updatePost(request.data));
    alert("수정 완료되었습니다.");
  } catch (error) {
    console.log(error);
  }
};

export const __deletePost = (payload) => async (dispatch) => {
  const msg = await api.delete(`/api/fund/comments/${payload.id}`);
  dispatch(deletePost(payload));
  alert("삭제 완료되었습니다.");
};

// Thunk - COMMENT
export const __addComment = (payload) => async (dispatch) => {
  try {
    const data = await api.post(`/api/fund/comments/${payload.id}/reply`, {
      replyContent: payload.replyContent,
    });
    dispatch(addComment(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const __updateComment = (payload) => async (dispatch) => {
  try {
    const data = await api.put(`/api/fund/comments/reply/${payload.id}`, {
      replyContent: payload.replyContent,
    });
    dispatch(updateComment(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const __deleteComment = (payload) => async (dispatch) => {
  try {
    const msg = await api.delete(`/api/fund/comments/reply/${payload.id}`);
    dispatch(deleteComment(payload));
    alert("댓글삭제 완료되었습니다.");
  } catch (error) {
    console.log(error);
  }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // Reducer - POST
    case LOAD_POST:
      return { ...state, list: action.payload };
    case ADD_POST:
      return { ...state, list: [action.payload, ...state.list] };
    case UPDATE_POST:
      const newChangePost = state.list.map((value) => {
        return value.commentId === Number(action.payload.commentId)
          ? action.payload
          : value;
      });
      return { ...state, list: newChangePost };
    case DELETE_POST:
      const newDeletedPost = state.list.filter((value) => {
        return value.commentId !== Number(action.payload.id);
      });
      return { ...state, list: [...newDeletedPost] };

    case GET_POST_REQUEST:
      return { ...state, loading: action.payload };
    case GET_POST_ERROR:
      return { ...state, error: action.payload };

    // Reducer - POST
    case ADD_COMMENT:
      const newAddComment = state.list.map((value) => {
        if (value.commendId === action.payload.commendId) {
          value.replyResponseDto = [action.payload, ...value.replyResponseDto];
          return value;
        } else {
          return value;
        }
      });
      return { ...state, list: newAddComment };
    case UPDATE_COMMENT:
      const newUpdateComment = state.list.map((value) => {
        if (value.commendId === action.payload.commendId) {
          const newReply = value.replyResponseDto;
          const newReplyList = newReply.map((result) => {
            if (result.replyId === action.payload.replyId) {
              return action.payload;
            } else {
              return result;
            }
          });
          value.replyResponseDto = newReplyList;
          return value;
        } else {
          return value;
        }
      });
      return { ...state, list: newUpdateComment };
    case DELETE_COMMENT:
      const newDeletedComment = state.list.map((value) => {
        if (value.commendId === action.payload.commendId) {
          const newReply = value.replyResponseDto;
          const newReplyList = newReply.filter((value) => {
            return value.id !== Number(action.payload.id);
          });
          value.replyResponseDto = newReplyList;
          return value;
        } else {
          return value;
        }
      });
      return { ...state, list: [...newDeletedComment] };
    default:
      return state;
  }
};

export default postReducer;
