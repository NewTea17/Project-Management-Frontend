import {
    GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT,
    SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS
} from "./ActionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    currentUser: null,
    jwt: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, loading: true, error: null };

        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            return { ...state, loading: false, error: null, jwt: action.payload.jwt, user: action.payload };

        case GET_USER_SUCCESS:
            return { ...state, loading: false, error: null, currentUser: action.payload , user: action.payload };

        case LOGOUT:
            return { ...state, loading: false, error: null, currentUser: null, user: null };

        default:
            return state;
    }
}