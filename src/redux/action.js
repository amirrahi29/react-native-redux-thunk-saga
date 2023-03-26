import * as types from './actionTypes';

export const loadPosts = ()=>({
    type: types.LOAD_POSTS
});

export const loadPostsSuccess = (posts)=>({
    type: types.LOAD_POSTS_SUCCESS,
    payload:posts
});

export const loadPostsFailed = (error)=>({
    type: types.LOAD_POSTS_FAILED,
    payload:error
});