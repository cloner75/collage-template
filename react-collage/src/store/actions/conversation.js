import { GET_CONVERSATIONS, GET_CONVERSATION, SET_CONVERSATION, UPDATE_CONVERSATION, CONVERSATIONS_ERROR } from '../types';
import { conversation } from '../../helper/config';
import axios from 'axios';

export const GetConversations = () => async (dispatch) => {
    try {
        const res = await axios.get(conversation.url);
        dispatch({
            type: GET_CONVERSATIONS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CONVERSATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const GetConversation = (id) => async (dispatch) => {
    try {
        const res = await axios.get(conversation.url.concat(id));
        dispatch({
            type: GET_CONVERSATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CONVERSATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const UpdateConversation = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(conversation.url.concat(id), { data });
        dispatch({
            type: UPDATE_CONVERSATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CONVERSATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const SetConversation = (data) => async (dispatch) => {
    try {
        const res = await axios.post(conversation.url, { data });
        dispatch({
            type: SET_CONVERSATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CONVERSATIONS_ERROR,
            payload: console.log(e),
        });
    }
};
