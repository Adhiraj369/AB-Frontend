import axios from "axios";

import {
    EMAIL_FAIL,
    EMAIL_REQUEST,
    EMAIL_SUCCESS,
    ADMIN_EMAIL_REQUEST,
    ADMIN_EMAIL_SUCCESS,
    ADMIN_EMAIL_FAIL,
} from "../constants/emailConstants";
import { CLEAR_ERRORS } from "../constants/productConstants";

export const getEmail = () =>
    async (dispatch) => {
        try {
            dispatch({ type: ADMIN_EMAIL_REQUEST });

            const { data } = await axios.get("/api/v1/admin/emails");

            dispatch({
                type: ADMIN_EMAIL_SUCCESS,
                payload: data,
            });

        } catch (error) {
            dispatch({
                type: ADMIN_EMAIL_FAIL,
                payload: error.response.data.message,
            })
        }
    }

export const newEmail = (userData) => async (dispatch) => {
    try {
        dispatch({ type: EMAIL_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`/api/v1/emails`, userData, config);

        dispatch({ type: EMAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: EMAIL_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () =>
    async (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS
        });
    };