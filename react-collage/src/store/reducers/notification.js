import { GET_NOTIFICATIONS, GET_NOTIFICATION, UPDATE_NOTIFICATION, SET_NOTIFICATION } from '../types';

const initialState = {
    notifications: [],
    loading: true,
};

export const GetNotifications = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const GetNotification = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const UpdateNotification = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NOTIFICATION:
            return {
                ...state,
                notifications: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const SetNotification = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                notifications: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
