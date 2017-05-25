import { take, put, call, fork, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions/async';
import { selectedRedditSelector, postsByRedditSelector } from '../reducers/selectors';

export function fetchPostsApi(reddit) {
  return fetch(`http://www.reddit.com/r/${reddit}.json` )
            .then(response => response.json() )
            .then(json => json.data.children.map(child => child.data));
}

export function* fetchPosts(reddit) {
  yield put( actions.requestPosts(reddit) );
  const posts = yield call(fetchPostsApi, reddit);
  yield put( actions.receivePosts(reddit, posts) );
}

export function* invalidateReddit() {
  const {reddit} = yield take(actions.INVALIDATE_REDDIT);
  yield call( fetchPosts, reddit );
}

export function* nextRedditChange() {
  const prevReddit = yield select(selectedRedditSelector);
  yield take(actions.SELECT_REDDIT);

  const newReddit = yield select(selectedRedditSelector);
  const postsByReddit = yield select(postsByRedditSelector);
  if(prevReddit !== newReddit && !postsByReddit[newReddit])
    yield fork(fetchPosts, newReddit);

}

export function* startup() {
  const selectedReddit = yield select(selectedRedditSelector);
  yield fork(fetchPosts, selectedReddit);
}

export default function* root() {
  yield fork(startup);
  yield fork(nextRedditChange);
  yield fork(invalidateReddit);
}

// select: Stateから必要なデータを取り出す
// put: Actionをdispatchする
// take: Actionを待つ、イベントの発生を待つ
// call: Promiseの完了を待つ
// fork: 別のタスクを開始する
// join: 別のタスクの終了を待つ