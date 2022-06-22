import { api } from "../../shared/api";

// actiontype
const LOAD_POST = "post/LOAD_POST";
const ADD_POST = "post/ADD_POST";
const UPDATE_POST = "post/UPDATE_POST";
const DELETE_POST = "post/DELETE_POST";
const GET_POST_REQUEST = "post/GET_POST_REQUEST";
const GET_POST_ERROR = "post/GET_POST_ERROR";
// 코멘트
const ADD_COMMENT = "comment/ADD_COMMENT";

//action함수
const loadPost = (payload) => ({ type: LOAD_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const updatePost = (payload) => ({ type: UPDATE_POST, payload });
const deletePost = (payload) => ({ type: DELETE_POST, payload });
//코멘트
const addComment = (payload) => ({ type: ADD_COMMENT, payload });

//초기값
const initialState = {
  list: [],
  loading: false,
  error: null,
};

//코멘트 thunk
export const __addComment = (payload) => async (dispatch) => {
  try {
    console.log("이건페이로드", payload.id);
    const data = await api.post(`/api/fund/comments/${payload.id}/reply`, {
      replyContent: payload.replyContent,
    });
    dispatch(addComment(data.data));
    console.log("이건데이터", data);
  } catch (error) {
    console.log(error);
  }
};

//thunk
export const __loadPosts = (payload) => async (dispatch) => {
  console.log(payload);
  const data = await api.get(`/api/fund/${Number(payload)}/comments`);
  dispatch(loadPost(data.data.reverse()));
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
  console.log(request);
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
        return value.commentId === Number(action.payload.commentId)
          ? action.payload
          : value;
      });
      return { ...state, list: newChangePost };
    case DELETE_POST:
      console.log(action.payload);
      const newDeletedPost = state.list.filter((value) => {
        return value.commentId !== Number(action.payload.id);
      });
      return { ...state, list: [...newDeletedPost] };
    case GET_POST_REQUEST:
      return { ...state, loading: action.payload };
    case GET_POST_ERROR:
      return { ...state, error: action.payload };
    //코멘트
    case ADD_COMMENT:
      console.log(action.payload);
      const newCommentList = state.list.map((value) => {
        if (value.commendId === action.payload.commendId) {
          value.replyResponseDto = [action.payload, ...value.replyResponseDto];
          return value;
        } else {
          return value;
        }
      });
      return { ...state, list: newCommentList };
    // case update :
    // console.log(action.payload);
    // const newComment1List = state.list.map((value) => {
    //   if (value.commendId === action.payload.commendId) {
    //         const newReply = value.replyResponseDto
    //  const newReply1 = newReply.map(v=>{
    //           if(v.replyId === action.payload.replyId){
    //             return action.payload
    //           }else{
    //             return v
    //           }
    //         })
    //         value.replyResponseDto = newReply1
    //         return value
    //     }else{
    //       return value
    //     }
    // });

    // return { ...state, list: newComment1List };
    default:
      return state;
  }
};

export default postReducer;
