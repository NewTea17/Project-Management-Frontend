import api from "@/config/constants";
import { CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_REQUEST, 
    DELETE_COMMENT_SUCCESS, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS } from "./ActionTypes"


export const createComment = (commentData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    try {
        const { data } = await api.post("/api/comments", commentData);
        dispatch({ type: CREATE_COMMENT_SUCCESS, comment: data });
    } catch (e) {
        console.log(e);
    }
}

export const deleteComment = (id) => async (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    try {
        await api.delete(`/api/comments/${id}`);
        dispatch({ type: DELETE_COMMENT_SUCCESS, id });
    } catch (e) {
        console.log(e);
    }
}

export const getAllCommentsByTaskId = (id) => async (dispatch) => {
    dispatch({ type: GET_COMMENTS_REQUEST });

    try {
        const { data } = await api.get(`/api/comments/${id}`);
        dispatch({ type: GET_COMMENTS_SUCCESS, comments: data });
    } catch (e) {
        console.log(e);
    }
}