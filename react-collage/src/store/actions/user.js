import { GET_USERS, GET_USER, UPDATE_USER, USERS_ERROR } from '../types';
import { user } from '../../helper/config';
import axios from 'axios';

export const GetUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(user.url);
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const GetUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(user.url.concat(id));
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const UpdateUser = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(user.url.concat(id), { data });
        dispatch({
            type: UPDATE_USER,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};
