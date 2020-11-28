import { GET_CHATS, GET_CHAT, UPDATE_CHAT, SET_CHAT } from '../types';

const initialState = {
    chats: [],
    loading: true,
};

export const GetChats = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS:
            return {
                ...state,
                chats: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const GetChat = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHAT:
            return {
                ...state,
                chat: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const UpdateChat = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHAT:
            return {
                ...state,
                chats: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const SetChat = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAT:
            return {
                ...state,
                chats: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
