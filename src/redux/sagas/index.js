import { takeEvery, put, call } from "redux-saga/effects";
import { commentsAction, postsAction, userAction, userDetailsAction } from "../actions";
import { fetchApi } from "../api";

const fetchUser = (action) => {
  const params = {
    route: "users",
    id: action?.payload?.id ? action.payload.id : "",
  };
  const user = fetchApi(params);
  return user;
};

const fetchPosts = (action) => {
  const params = {
    route: "posts",
    limit: action?.payload?.limit,
    page: action?.payload?.page,
    id: "",
    sortType: action?.payload?.sortType,
    order: action?.payload?.order,
  };
  const posts = fetchApi(params);
  return posts;
};

const fetchComments = (action) => {
  const params = {
    route: "comments",
    id: "",
  };
  const comments = fetchApi(params);
  return comments;
};

export function* workerSaga(action) {
  const posts = yield call(fetchPosts, action);
  const user = yield call(fetchUser, action);
  const comments = yield call(fetchComments, action);

  yield put(userAction(user));
  yield put(postsAction(posts));
  yield put(commentsAction(comments));
}
export function* watchClickSaga() {
  yield takeEvery("LOAD_DATA", workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
