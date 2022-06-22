import { api } from "../../shared/api";

// actiontype
const LOAD_POST = "post/LOAD_POST";
const ADD_POST = "post/ADD_POST";
const UPDATE_POST = "post/UPDATE_POST";
const DELETE_POST = "post/DELETE_POST";
const GET_POST_REQUEST = "post/GET_POST_REQUEST";
const GET_POST_ERROR = "post/GET_POST_ERROR";

//action함수
const loadPost = (payload) => ({ type: LOAD_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const updatePost = (payload) => ({ type: UPDATE_POST, payload });
const deletePost = (payload) => ({ type: DELETE_POST, payload });

//초기값
const initialState = {
  list: [],
  loading: false,
  error: null,
};

//thunk
export const __loadPosts = (payload) => async (dispatch) => {
  console.log(payload);
  const data = await api.get(`/api/fund/${Number(payload)}/comments`);
  console.log(data);
  dispatch(loadPost(data.data));
};

export const __addPost = (payload) => async (dispatch) => {
  console.log("이건 페이로드", payload);
  const data = await api.post(`/api/fund/${payload.id}/comments`, {
    category: payload.category,
    content: payload.content,
  });
  dispatch(addPost(data.data));
  alert("추가 완료되었습니다.");
};

export const __updatePost = (payload) => async (dispatch, getState) => {
  const request = await api.put(`/api/fund/comments/${payload.id}`, {
    category: payload.category,
    content: payload.content,
  });
  dispatch(updatePost(request.data));
  alert("수정 완료되었습니다.");
};

export const __deletePost = (payload) => async (dispatch, getState) => {
  const msg = await api.delete(`/api/fund/comments/${payload.id}`);
  dispatch(deletePost(payload));
  alert("삭제 완료되었습니다.");
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...state, list: action.payload };
    case ADD_POST:
      return { ...state, list: [action.payload, ...state.list] };
    case UPDATE_POST:
      const newChangePost = state.list.map((value) => {
        return value.commentId === Number(action.payload.id)
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
    default:
      return state;
  }
};

export default postReducer;
