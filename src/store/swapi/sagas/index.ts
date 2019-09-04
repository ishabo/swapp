import { takeLatest, call, put } from 'redux-saga/effects';
import * as swapi from 'swapi-node';
import { actionTypes, saveStarshipsAction, savePeopleAction } from '../actions';

const URL = 'https://swapi.co/api/ENDPOINT/?page=1&format=json';
const buildUrl = (endpoint: string) => URL.replace(/ENDPOINT/, endpoint);
export function* fetchPeopleSaga() {
  const response = yield call(swapi.get, buildUrl('people'));
  yield put(savePeopleAction(response['results']));
}

export function* fetchStarshipsSaga() {
  const response = yield call(swapi.get, buildUrl('starships'));
  yield put(saveStarshipsAction(response['results']));
}

export function* watchFetchPeopleSaga() {
  yield takeLatest(actionTypes.FETCH_PEOPLE, fetchPeopleSaga);
}

export function* watchFetchStarshipsSaga() {
  yield takeLatest(actionTypes.FETCH_STARSHIPS, fetchStarshipsSaga);
}
