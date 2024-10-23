import api, { url } from "@/config/constants";
import {
    ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS, DELETE_PROJECT_BY_ID_REQUEST, DELETE_PROJECT_BY_ID_SUCCESS,
    INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, PROJECT_BY_ID_REQUEST,
    PROJECT_BY_ID_SUCCESS, PROJECTS_REQUEST, PROJECTS_SUCCESS, SEARCH_PROJECTS_REQUEST,
    SEARCH_PROJECTS_SUCCESS,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS
} from "./ActionTypes";

export const getAllProjects = ({ category, tag }) => async (dispatch) => {
    dispatch({ type: PROJECTS_REQUEST });

    try {
        const { data } = await api.get(`/api/projects`, {
            params: { category, tag }
        });

        dispatch({ type: PROJECTS_SUCCESS, projects: data });
    } catch (e) {
        console.log(e);
    }
}

export const getProjectById = (id) => async (dispatch) => {
    dispatch({ type: PROJECT_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/projects/${id}`);
        dispatch({ type: PROJECT_BY_ID_SUCCESS, project: data });
    } catch (e) {
        console.log(e);
    }
}

export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_PROJECTS_REQUEST });

    try {
        const { data } = await api.get(`/api/projects/search?keyword=` + keyword);
        dispatch({ type: SEARCH_PROJECTS_SUCCESS, projects: data });
    } catch (e) {
        console.log(e);
    }
}

export const createProject = (projectData) => async (dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST });
    
    try {
        const { data } = await api.post(`/api/projects`, projectData);
        dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
    } catch (e) {
        console.log(e);
    }
}

export const updateProject = (projectData, id) => async (dispatch) => {
    dispatch({ type: UPDATE_PROJECT_REQUEST });
    
    console.log("Project Data to Update:", projectData);

    try {
        const { data } = await api.patch(`/api/projects/${id}`, projectData);
        dispatch({ type: UPDATE_PROJECT_SUCCESS, project: data });
    } catch (e) {
        console.log(e);
    }
}

export const deleteProject = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PROJECT_BY_ID_REQUEST });

    try {
        await api.delete(`/api/projects/${id}`);
        dispatch({ type: DELETE_PROJECT_BY_ID_SUCCESS, id });
    } catch (e) {
        console.log(e);
    }
}

export const inviteToProject = ({ email, projectId }) => async (dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });

    try {
        const { data } = await api.post(`/api/projects/invite`, {
            email, projectId: projectId
        });

        dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
    }
}

export const acceptInvitation = ({ token, navigate }) => async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST });

    try {
        const { data } = await api.get("/api/projects/accept_invitation", {
            params: { token }
        });

        navigate("/projects/" + data.projectId);

        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
    }
}