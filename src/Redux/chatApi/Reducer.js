import { CHAT_BY_PROJECT_ID_SUCCESS, CHAT_MESSAGES_REQUEST, CHAT_MESSAGES_SUCCESS, 
    MESSAGES_SUCCESS, SEND_MESSAGES_REQUEST, SEND_MESSAGES_SUCCESS } from "./ActionTypes";

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGES_REQUEST:
        case CHAT_MESSAGES_REQUEST:
            return { ...state, loading: true, error: null };
        
        case CHAT_MESSAGES_SUCCESS:
        case MESSAGES_SUCCESS:
            return { ...state, loading: false, messages: action.messages };

        case SEND_MESSAGES_SUCCESS:
            return { ...state, loading: false, messages: [...state.messages, action.message] };

        case CHAT_BY_PROJECT_ID_SUCCESS:
            return { ...state, loading: false, chat: action.chat };

        default:
            return state;
    }
}