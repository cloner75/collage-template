import { GET_USERS, GET_USER, UPDATE_USER, USERS_ERROR, SIGN_UP, SIGN_IN } from '../types';
import { user, auth } from '../../helper/config';
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
            payload: res.data.total ? res.data : { docs: [{ isUser: 'Not Found', username: 'Not Found', email: 'Not Found', status: 'Not Found', score: { sum: 'Not Found' } }] },
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

export const AuthSignIn = (data) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'post',
            url: auth.url.concat('signin/'),
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        });
        dispatch({
            type: SIGN_IN,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const AuthSignUp = (data) => async (dispatch) => {
    try {
        const res = await axios.post(auth.url.concat('signup/'), { data });
        dispatch({
            type: SIGN_UP,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};
