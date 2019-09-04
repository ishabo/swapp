import sagaHelper from 'redux-saga-testing';
import { fetchPeopleSaga, fetchStarshipsSaga } from './index';
import { call, put } from 'redux-saga/effects';
import * as swapi from 'swapi-node';
import peopleTestData from '../test-data/people.json';
import starshipTestData from '../test-data/starships.json';

import { actionTypes } from '../actions';

describe('swapi saga', () => {
  describe('fetchPeople saga', () => {
    const it = sagaHelper(fetchPeopleSaga());
    it('calls get people with swapi wrapper api', (result: any) => {
      expect(result).toEqual(
        call(swapi.get, 'https://swapi.co/api/people/?page=1&format=json')
      );
      return peopleTestData;
    });

    it('saves result in swapi api reducer under people', (result: any) => {
      expect(result).toEqual(
        put({
          type: actionTypes.SAVE_PEOPLE,
          payload: peopleTestData['results']
        })
      );
    });
  });

  describe('fetchStarship saga', () => {
    const it = sagaHelper(fetchStarshipsSaga());
    it('calls get starships with swapi wrapper api', (result: any) => {
      expect(result).toEqual(
        call(swapi.get, 'https://swapi.co/api/starships/?page=1&format=json')
      );
      return starshipTestData;
    });

    it('saves result in swapi api reducer under starships', (result: any) => {
      expect(result).toEqual(
        put({
          type: actionTypes.SAVE_STARSHIPS,
          payload: starshipTestData['results']
        })
      );
    });
  });
});
