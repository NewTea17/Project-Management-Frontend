import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./ActionTypes"
import { url } from "@/config/constants";

export const signUp = (userData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try {
        const { data } = await axios.post(`${url}/auth/sign-up`, userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
            dispatch({ type: SIGNUP_SUCCESS, payload: data });
        }

        console.log("Sign up success .... " + data);

    } catch (e) {
        console.log("Sign up error: ", e.response ? e.response.data : e.message);
    }
}

export const signIn = (userData) => async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST });

    try {
        const { data } = await axios.post(`${url}/auth/sign-in`, userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
            dispatch({ type: SIGNIN_SUCCESS, payload: data });
        }

    } catch (e) {
        console.log(e);
    }
}

export const getUserProfile = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });

    try {
        const { data } = await axios.get(`${url}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
            dispatch({ type: GET_USER_SUCCESS, payload: data });
        }

    } catch (e) {
        console.log(e);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}