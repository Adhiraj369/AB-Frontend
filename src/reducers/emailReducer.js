import {
    EMAIL_REQUEST,
    EMAIL_FAIL,
    EMAIL_SUCCESS,
    ADMIN_EMAIL_REQUEST,
    ADMIN_EMAIL_SUCCESS,
    ADMIN_EMAIL_FAIL,
    CLEAR_ERRORS
} from "../constants/emailConstants.js";

export const emailReducer = (state = { emails: [] }, action) => {
    switch (action.type) {
        case ADMIN_EMAIL_REQUEST:
            return {
                loading: true,
                emails: [],
            };
        case ADMIN_EMAIL_SUCCESS:
            console.log("Received email data:", action.payload.emails);
            return {
                loading: false,
                emails: action.payload.emails
            };

        // case ADMIN_EMAIL_SUCCESS:
        //     return {
        //         loading: false,
        //         emails: action.payload,
        //     };
        // case EMAIL_FAIL:
        case ADMIN_EMAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const userReducer = (state = { emails: {} }, action) => {
    switch (action.type) {
        case EMAIL_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };


        case EMAIL_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};