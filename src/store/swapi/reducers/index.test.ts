import { swapiReducer } from './index';
import peopleTestData from '../test-data/people.json';
import starshipsTestData from '../test-data/starships.json';

import { actionTypes } from '../actions';

describe('swapi reducers', () => {
  it('initializes in empty state', () => {
    expect(swapiReducer(undefined, { type: 'SOME_TYPE', payload: [] })).toEqual(
      {
        data: {
          people: [],
          starships: []
        },
        meta: { isFetching: false }
      }
    );
  });

  it('saves people to state', () => {
    expect(
      swapiReducer(undefined, {
        type: actionTypes.SAVE_PEOPLE,
        payload: peopleTestData['results']
      })
    ).toEqual({
      data: {
        people: peopleTestData['results'],
        starships: []
      },
      meta: { isFetching: false }
    });
  });

  it('saves starships to state', () => {
    expect(
      swapiReducer(undefined, {
        type: actionTypes.SAVE_STARSHIPS,
        payload: starshipsTestData['results']
      })
    ).toEqual({
      data: {
        people: [],
        starships: starshipsTestData['results']
      },
      meta: { isFetching: false }
    });
  });
});
