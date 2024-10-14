import { CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS } from "./ActionTypes";


const initialState = {
    comments: [],
    loading: false,
    error: null
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT_REQUEST:
        case DELETE_COMMENT_REQUEST:
        case GET_COMMENTS_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_COMMENT_SUCCESS:
            return { ...state, loading: false, comments: [...state.comments, action.comment] }

        case DELETE_COMMENT_SUCCESS:
            return { ...state, loading: false, comments: state.comments.filter(comment => comment.id !== action.id) };

        case GET_COMMENTS_SUCCESS:
            return { ...state, loading: false, comments: action.comments };

        default:
            return state;
    }
}