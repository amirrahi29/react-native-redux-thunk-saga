import * as types from './actionTypes';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';

import { loadPostsSuccess, loadPostsFailed } from './action';
import { loadPostsApi } from './api';

export function* onLoadPostsAsync() {
    try {
        const response = yield call(loadPostsApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadPostsSuccess(response.data));
        }
    } catch (error) {
        yield put(loadPostsFailed(error.response.data));
    }
}

export function* onLoadPosts() {
    yield takeEvery(types.LOAD_POSTS, onLoadPostsAsync)
}

const postSagas = [
    fork(onLoadPosts)
];

export default function* rootSaga() {
    yield all([...postSagas]);
}