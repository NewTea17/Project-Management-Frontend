import { ASSIGNEE_TASK_TO_USER_REQUEST, ASSIGNEE_TASK_TO_USER_SUCCESS, CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, DELETE_TASK_BY_ID_REQUEST, DELETE_TASK_BY_ID_SUCCESS, TASK_BY_ID_REQUEST, TASK_BY_ID_SUCCESS, TASKS_REQUEST, TASKS_SUCCESS, UPDATE_TASK_STATUS_REQUEST, UPDATE_TASK_STATUS_SUCCESS } from "./ActionTypes";


const initialState = {
    tasks: [],
    loading: false,
    error: null,
    taskDetails: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_REQUEST:
        case TASK_BY_ID_REQUEST:
        case CREATE_TASK_REQUEST:
        case DELETE_TASK_BY_ID_REQUEST:
        case ASSIGNEE_TASK_TO_USER_REQUEST:
            return { ...state, loading: true, error: null };

        case TASKS_SUCCESS:
            return { ...state, loading: false, tasks: action.tasks }

        case TASK_BY_ID_SUCCESS:
        case UPDATE_TASK_STATUS_SUCCESS:
            return { ...state, loading: false, taskDetails: action.task };

        case CREATE_TASK_SUCCESS:
            return { ...state, loading: false, tasks: [...state.tasks, action.task] };

        case ASSIGNEE_TASK_TO_USER_SUCCESS:
            return { ...state, loading: false, tasks: state.tasks.map((task) => task.id === action.task.id ? action.task : task) };

        case DELETE_TASK_BY_ID_SUCCESS:
            return { ...state, loading: false, tasks: state.tasks.filter((task) => task.id !== action.id) };

        default:
            return state;
    }
}