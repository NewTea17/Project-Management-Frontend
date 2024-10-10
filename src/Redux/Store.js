import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./authenticationApi/Reducer.js";
import { projectReducer } from "./projectApi/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));