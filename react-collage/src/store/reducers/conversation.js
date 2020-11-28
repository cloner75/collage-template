import { GET_CONVERSATIONS, GET_CONVERSATION, UPDATE_CONVERSATION, SET_CONVERSATION } from '../types';

const initialState = {
    conversations: [],
    loading: true,
};

export const GetConversations = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const GetConversation = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONVERSATION:
            return {
                ...state,
                conversation: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const UpdateConversation = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONVERSATION:
            return {
                ...state,
                conversations: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const SetConversation = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONVERSATION:
            return {
                ...state,
                conversations: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
