import peopleTestData from '../test-data/people.json';
import starshipsTestData from '../test-data/starships.json';
import {
  getSwapiState,
  getPeople,
  getStarships,
  getPeopleCompetitors,
  getStarshipCompetitors,
  getSwapiStateData,
  getIsFetching
} from './index';
import { ISwapiState } from '../reducers/index.js';

jest.mock('shortid', () => ({
  generate: () => 'some-id'
}));

describe('swapi selectors', () => {
  const state: { swapi: ISwapiState } = {
    swapi: {
      data: {
        people: peopleTestData['results'],
        starships: starshipsTestData['results']
      },
      meta: { isFetching: false }
    }
  };

  describe('getSwapiState', () => {
    it('returns swapi state', () => {
      expect(getSwapiState(state)).toEqual(state.swapi);
    });
  });

  describe('getSwapiStateData', () => {
    it('returns swapi state data', () => {
      expect(getSwapiStateData(state)).toEqual(state.swapi.data);
    });
  });

  describe('getIsFetching', () => {
    it('returns the boolean value of isFetching from swapi meta', () => {
      expect(getIsFetching(state)).toEqual(false);
    });
  });

  describe('getPeople', () => {
    it('returns people from swapi state', () => {
      expect(getPeople(state)).toEqual(state.swapi.data.people);
    });
  });

  describe('getStarships', () => {
    it('returns starships from swapi state', () => {
      expect(getStarships(state)).toEqual(state.swapi.data.starships);
    });
  });

  describe('getPeopleCompetitors', () => {
    it('returns an array of objects with people competitors', () => {
      expect(getPeopleCompetitors(state)).toEqual([
        {
          id: 'some-id',
          name: 'Luke Skywalker',
          competition: { subject: 'mass', value: 77 }
        },
        {
          id: 'some-id',
          name: 'C-3PO',
          competition: { subject: 'mass', value: 75 }
        },
        {
          id: 'some-id',
          name: 'R2-D2',
          competition: { subject: 'mass', value: 32 }
        }
      ]);
    });
  });

  describe('getStarshipCompetitors', () => {
    it('returns an array of objects with starship competitors', () => {
      expect(getStarshipCompetitors(state)).toEqual([
        {
          id: 'some-id',
          name: 'Executor',
          competition: { subject: 'crew', value: 279144 }
        },
        {
          id: 'some-id',
          name: 'Sentinel-class landing craft',
          competition: { subject: 'crew', value: 5 }
        },
        {
          id: 'some-id',
          name: 'Death Star',
          competition: { subject: 'crew', value: 342953 }
        }
      ]);
    });
  });
});
