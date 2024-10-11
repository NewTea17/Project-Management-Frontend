import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./authenticationApi/Reducer.js";
import { projectReducer } from "./projectApi/Reducer.js";
import { chatReducer } from "./chatApi/Reducer.js";
import { commentReducer } from "./commentApi/Reducer.js";
import { taskReducer } from "./taskApi/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: chatReducer,
    comment: commentReducer,
    task: taskReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));