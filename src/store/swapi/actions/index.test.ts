import {
  actionTypes,
  fetchPeopleAction,
  fetchStarshipsAction,
  savePeopleAction,
  saveStarshipsAction,
  setIsFetchingAction
} from './index';
import peopleTestData from '../test-data/people.json';
import starshipsTestData from '../test-data/starships.json';

describe('Swapp actions', () => {
  describe('fetchPeople', () => {
    it('returns a  object with a reducer dispatch action with type', () => {
      expect(fetchPeopleAction()).toEqual({ type: actionTypes.FETCH_PEOPLE });
    });
  });

  describe('fetchStarships', () => {
    it('returns a  object with a reducer dispatch action with type', () => {
      expect(fetchStarshipsAction()).toEqual({
        type: actionTypes.FETCH_STARSHIPS
      });
    });
  });

  describe('savePeople', () => {
    it('returns an object with a reducer dispatch action with type and payload', () => {
      expect(savePeopleAction(peopleTestData['results'])).toEqual({
        type: actionTypes.SAVE_PEOPLE,
        payload: peopleTestData['results']
      });
    });
  });

  describe('saveStarships', () => {
    it('returns an object with a reducer dispatch action with type and payload', () => {
      expect(saveStarshipsAction(starshipsTestData['results'])).toEqual({
        type: actionTypes.SAVE_STARSHIPS,
        payload: starshipsTestData['results']
      });
    });
  });
});
