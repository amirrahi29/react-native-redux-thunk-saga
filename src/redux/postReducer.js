import * as types from './actionTypes';

const initialState = {
    posts: [],
    loading: false,
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_POSTS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case types.LOAD_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;