import api from "@/config/constants";
import { ASSIGNEE_TASK_TO_USER_REQUEST, CREATE_TASK_REQUEST, DELETE_TASK_BY_ID_REQUEST, DELETE_TASK_BY_ID_SUCCESS, TASK_BY_ID_REQUEST, TASK_BY_ID_SUCCESS, 
    TASKS_REQUEST, TASKS_SUCCESS, UPDATE_TASK_STATUS_REQUEST, UPDATE_TASK_STATUS_SUCCESS } from "./ActionTypes"

export const getAllTasksByProjectId = (id) => async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });

    try {
        const { data } = await api.get(`/api/tasks/project/${id}`);
        dispatch({ type: TASKS_SUCCESS, tasks: data });
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

export const getTaskById = (id) => async (dispatch) => {
    dispatch({ type: TASK_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/tasks/${id}`);
        dispatch({ type: TASK_BY_ID_SUCCESS, task: data });
    } catch (e) {
        console.log(e);
    }
}

export const createTask = (taskData) => async (dispatch) => {
    dispatch({ type: CREATE_TASK_REQUEST });

    try {
        const { data } = await api.post(`/api/tasks`, taskData);
        dispatch({ type: TASK_BY_ID_SUCCESS, task: data });
    } catch (e) {
        console.log(e);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    dispatch({ type: DELETE_TASK_BY_ID_REQUEST });

    try {
        await api.delete(`/api/tasks/${id}`);
        dispatch({ type: DELETE_TASK_BY_ID_SUCCESS, id });
    } catch (e) {
        console.log(e);
    }
}

export const updateTaskStatus = ({id, status}) => async (dispatch) => {
    dispatch({ type: UPDATE_TASK_STATUS_REQUEST });

    try {
        const { data } = await api.put(`/api/tasks/${id}/status/${status}`);
        dispatch({ type: UPDATE_TASK_STATUS_SUCCESS, task: data });
    } catch (e) {
        console.log(e);
    }
}

export const assigneeUserToTask = ({taskId, userId}) => async (dispatch) => {
    dispatch({ type: ASSIGNEE_TASK_TO_USER_REQUEST });

    try {
        const { data } = await api.put(`/api/tasks/${taskId}/assignee/${userId}`);
        dispatch({ type: TASK_BY_ID_SUCCESS, task: data });
    } catch (e) {
        console.log(e);
    }
}