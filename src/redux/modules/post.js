// npx json-server ./db.json --port 5001

import { api } from "../../shared/api";
import { getCookie } from "../../shared/Cookie";

const LOAD_POST = "post/LOAD_POST";
const ADD_POST = "post/ADD_POST";
const UPDATE_POST = "post/UPDATE_POST";
const DELETE_POST = "post/DELETE_POST";

const GET_POST_REQUEST = "post/GET_POST_REQUEST";
const GET_POST_ERROR = "post/GET_POST_ERROR";

const loadPost = (payload) => ({ type: LOAD_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const updatePost = (payload) => ({ type: UPDATE_POST, payload });
const deletePost = (payload) => ({ type: DELETE_POST, payload });

const initialState = {
  list: [],
  post: {},
  loading: false,
  error: null,
};

export const __loadPosts = (fundId) => async (dispatch) => {
  const myToken = getCookie("Authorization");

  const response = await api.get(`/api/fund/${fundId}/comments`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  dispatch(loadPost(response.data));
};

export const __addPost = (fundId, payload) => async (dispatch) => {
  const myToken = getCookie("Authorization");

  const data = await api.post(
    `/api/fund/${fundId}/comment`,
    {
      content: payload.content,
      categori: payload.categori,
    },
    {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    }
  );
  dispatch(addPost(data.data));
  alert("추가가 완료되었습니다.");
};

export const __updatePost = (payload, fundId) => async (dispatch) => {
  const myToken = getCookie("Authorization");

  const request = await api.put(`/api/fund/${fundId}/comment`, payload, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  dispatch(updatePost(request.data));
  alert("수정된 완료되었습니다.");
};

export const __deletePost = (payload, commentId) => async (dispatch) => {
  const myToken = getCookie("Authorization");

  const msg = await api.delete(`/api/fund/comment/${commentId}`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  alert(msg.data);
  dispatch(deletePost(payload));
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POST:
      return { ...state, list: payload };
    case ADD_POST:
      return { ...state, list: [...state.list, payload] };
    case UPDATE_POST:
      const newChangePost = state.list.map((value) => {
        // console.log(value.articleId, payload.articleId)
        return value.articleId === Number(payload.articleId) ? payload : value;
      });
      return { ...state, list: newChangePost };
    case DELETE_POST:
      const newDeletedPost = state.list.filter((value) => {
        return value.articleId !== Number(payload);
      });
      return { ...state, list: [...newDeletedPost] };
    case GET_POST_REQUEST:
      return { ...state, loading: payload };
    case GET_POST_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default postReducer;
