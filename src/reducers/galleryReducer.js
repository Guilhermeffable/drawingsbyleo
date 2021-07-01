import {
    ADD_IMAGE,
    CLEAR_ALL,
    DELETE_IMAGE,
    GET_IMAGES,
    HIDE_HOME,
    SET_LOADING,
    SHOW_HOME
} from '../actions/types';

const initialState = {
    isHome: false,
    currentURL: null,
    urls: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HIDE_HOME:
            return {
                ...state,
                isHome: false
            };

        case SHOW_HOME:
            return {
                ...state,
                isHome: true
            };

        case GET_IMAGES:
            return {
                ...state,
                urls: action.payload,
                loading: false
            };

        case ADD_IMAGE:
            return {
                ...state,
                //currentURL: action.payload,
                loading: false
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case DELETE_IMAGE:
            return {
                ...state,
                urls: state.urls.filter((url) => url.image !== action.payload),
                loading: false
            };

        case CLEAR_ALL:
            return {
                ...state,
                urls: null
            };

        default:
            return state;
    }
};
