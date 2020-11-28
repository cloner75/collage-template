import { GET_NOTIFICATIONS, GET_NOTIFICATION, SET_NOTIFICATION, UPDATE_NOTIFICATION, NOTIFICATIONS_ERROR } from '../types';
import { notification } from '../../helper/config';
import axios from 'axios';

export const GetNotifications = () => async (dispatch) => {
    try {
        const res = await axios.get(notification.url);
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: NOTIFICATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const GetNotification = (id) => async (dispatch) => {
    try {
        const res = await axios.get(notification.url.concat(id));
        dispatch({
            type: GET_NOTIFICATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: NOTIFICATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const UpdateNotification = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(notification.url.concat(id), { data });
        dispatch({
            type: UPDATE_NOTIFICATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: NOTIFICATIONS_ERROR,
            payload: console.log(e),
        });
    }
};

export const SetNotification = (data) => async (dispatch) => {
    try {
        const res = await axios.post(notification.url, { data });
        dispatch({
            type: SET_NOTIFICATION,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: NOTIFICATIONS_ERROR,
            payload: console.log(e),
        });
    }
};
