import { GET_USERS, GET_USER, UPDATE_USER, } from '../types';

const initialState = {
    users: [],
    loading: true,
};

export const GetUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const GetUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const UpdateUser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
