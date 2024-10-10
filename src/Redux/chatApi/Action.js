import { CHAT_BY_PROJECT_ID_REQUEST, CHAT_BY_PROJECT_ID_SUCCESS, CHAT_MESSAGES_REQUEST, 
    CHAT_MESSAGES_SUCCESS, SEND_MESSAGES_REQUEST, SEND_MESSAGES_SUCCESS } from "./ActionTypes"


export const sendMessage = (messageData) => async (dispatch) => {
    dispatch({ type: SEND_MESSAGES_REQUEST });

    try {
        const { data } = await api.post("/api/messages/send", messageData);
        dispatch({ type: SEND_MESSAGES_SUCCESS, message: data });
    } catch (e) {
        console.log(e);
    }
}

export const getChatByProjectId = (id) => async (dispatch) => {
    dispatch({ type: CHAT_BY_PROJECT_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/projects/${id}/chat`);
        dispatch({ type: CHAT_BY_PROJECT_ID_SUCCESS, chat: data });
    } catch (e) {
        console.log(e);
    }
}

export const getChatMessages = (id) => async (dispatch) => {
    dispatch({ type: CHAT_MESSAGES_REQUEST });

    try {
        const { data } = await api.get(`/api/messages/chat/${id}`);
        dispatch({ type: CHAT_MESSAGES_SUCCESS, id, chat: data });
    } catch (e) {
        console.log(e);
    }
}