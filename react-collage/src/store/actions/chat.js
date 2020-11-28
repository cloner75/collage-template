import { GET_CHATS, GET_CHAT, SET_CHAT, UPDATE_CHAT, CHATS_ERROR } from '../types';
import { chat } from '../../helper/config';
import axios from 'axios';

export const GetChats = () => async (dispatch) => {
    try {
        const res = await axios.get(chat.url);
        dispatch({
            type: GET_CHATS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CHATS_ERROR,
            payload: console.log(e),
        });
    }
};

export const GetChat = (id) => async (dispatch) => {
    try {
        const res = await axios.get(chat.url.concat(id));
        dispatch({
            type: GET_CHAT,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CHATS_ERROR,
            payload: console.log(e),
        });
    }
};

export const UpdateChat = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(chat.url.concat(id), { data });
        dispatch({
            type: UPDATE_CHAT,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CHATS_ERROR,
            payload: console.log(e),
        });
    }
};

export const SetChat = (data) => async (dispatch) => {
    try {
        const res = await axios.post(chat.url, { data });
        dispatch({
            type: SET_CHAT,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CHATS_ERROR,
            payload: console.log(e),
        });
    }
};
