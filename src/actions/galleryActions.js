import { getImageUrl } from '../firebase/images.js';
import {
    SHOW_HOME,
    HIDE_HOME,
    IMAGE_ERROR,
    ADD_IMAGE,
    SET_LOADING,
    GET_IMAGES,
    DELETE_IMAGE,
    CLEAR_ALL
} from './types.js';

export const showHome = () => {
    return {
        type: SHOW_HOME
    };
};

export const hideHome = () => {
    return {
        type: HIDE_HOME
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    };
};

export const addImage = (file) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_IMAGE
        });
    } catch (error) {
        console.error(error);
    }
};

export const getImages = () => async (dispatch) => {
    try {
        setLoading();
        const urls = await getImageUrl();

        dispatch({
            type: GET_IMAGES,
            payload: urls
        });
    } catch (error) {
        console.error(error);

        dispatch({
            type: IMAGE_ERROR,
            payload: error.message
        });
    }
};

export const deleteImage = (id) => async (dispatch) => {
    try {
        setLoading();

        dispatch({
            type: DELETE_IMAGE,
            payload: id
        });
    } catch (error) {
        console.error(error);

        dispatch({
            type: IMAGE_ERROR,
            payload: error.message
        });
    }
};
