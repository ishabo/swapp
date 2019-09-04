import { all } from 'redux-saga/effects';
import { watchFetchPeopleSaga, watchFetchStarshipsSaga } from './swapi/sagas';

export default function* rootSagas(): IterableIterator<any> {
  yield all([watchFetchPeopleSaga(), watchFetchStarshipsSaga()]);
}
