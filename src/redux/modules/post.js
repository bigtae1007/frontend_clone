// npx json-server ./db.json --port 5001
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
  list: [
    {
      fundId: 1,
      commentId: 1,
      content: "콘텐츠내용",
      nickname: "손유정",
      category: "응원",
      createAt: "오늘",
      reply: [],
    },
  ],
  loading: false,
  error: null,
};

//thunk
export const __loadPosts = (payload) => async (dispatch) => {
  // const data = await api.get(`/api/fund/${fundId}/comments`);
  const data = await api.get(`/api/fund/${payload.id}/comments`);
  console.log(data);
  dispatch(loadPost(data.data));
};

export const __addPost = (payload) => async (dispatch) => {
  console.log("이건 페이로드", payload);

  const data = await api.post(`/api/fund/${payload.id}/comment`, {
    category: payload.category,
    content: payload.content,
  });
  // const response = {
  //   fundId: 2,
  //   commentId: 2,
  //   content: "콘텐츠내용2",
  //   nickname: "손유정2",
  //   category: "응원2",
  //   createAt: "오늘2",
  //   reply: [],
  // };
  console.log("이건 데이터", data);
  dispatch(addPost(data.data));
  // dispatch(addPost(response));
  alert("추가가 완료되었습니다.");
};

export const __updatePost = (payload) => async (dispatch, getState) => {
  const request = await api.put(`/api/fund/${payload.id}/comment`, {
    category: payload.category,
    content: payload.content,
  });
  dispatch(updatePost(request.data));
  alert("수정된 완료되었습니다.");
};

export const __deletePost = (payload) => async (dispatch, getState) => {
  const msg = await api.delete(`/api/fund/comment/${payload.id}`);
  alert(msg.data);
  dispatch(deletePost(payload));
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POST:
      return { ...state, list: payload };
    case ADD_POST:
      return { ...state, list: [payload, ...state.list] };
    case UPDATE_POST:
      const newChangePost = state.list.map((value) => {
        // console.log(value.articleId, payload.articleId)
        return value.commentId === Number(payload.commentId) ? payload : value;
      });
      return { ...state, list: newChangePost };
    case DELETE_POST:
      const newDeletedPost = state.list.filter((value) => {
        return value.commentId !== Number(payload);
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
