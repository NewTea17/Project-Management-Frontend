import {
    ACCEPT_INVITATION_REQUEST, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_BY_ID_REQUEST, DELETE_PROJECT_BY_ID_SUCCESS, INVITE_TO_PROJECT_REQUEST,
    PROJECT_BY_ID_REQUEST, PROJECT_BY_ID_SUCCESS, PROJECTS_REQUEST, PROJECTS_SUCCESS,
    SEARCH_PROJECTS_SUCCESS
} from "./ActionTypes";


const initialState = {
    projects: [],
    loading: false,
    error: null,
    projectDetails: null,
    searchProjects: []
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECTS_REQUEST:
        case PROJECT_BY_ID_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case ACCEPT_INVITATION_REQUEST:
        case INVITE_TO_PROJECT_REQUEST:
        case DELETE_PROJECT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case PROJECTS_SUCCESS:
            return { ...state, loading: false, projects: action.payload, error: null };

        case PROJECT_BY_ID_SUCCESS:
            return { ...state, loading: false, projectDetails: action.project, error: null };

        case CREATE_PROJECT_SUCCESS:
            return { ...state, loading: false, projects: [...state.projects, action.project], error: null };

        case DELETE_PROJECT_BY_ID_SUCCESS:
            return { ...state, loading: false, projects: state.projects.filter(project => project.id === action.id), error: null }

        case SEARCH_PROJECTS_SUCCESS:
            return { ...state, loading: false, searchProjects: action.payload, error: null };


        default:
            return state;
    }
}