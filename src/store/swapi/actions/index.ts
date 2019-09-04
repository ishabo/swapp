import { ISwapiPerson, ISwapiStarship } from '../reducers';

export const actionTypes = {
  FETCH_PEOPLE: 'swapi/FETCH_PEOPLE',
  SAVE_PEOPLE: 'swapi/SAVE_PEOPLE',
  FETCH_STARSHIPS: 'swapi/FETCH_STARSHIPS',
  SAVE_STARSHIPS: 'swapi/SAVE_STARSHIPS'
};

export const fetchPeopleAction = () => ({
  type: actionTypes.FETCH_PEOPLE
});

export const fetchStarshipsAction = () => ({
  type: actionTypes.FETCH_STARSHIPS
});

export const savePeopleAction = (payload: ISwapiPerson[]) => ({
  payload,
  type: actionTypes.SAVE_PEOPLE
});

export const saveStarshipsAction = (payload: ISwapiStarship[]) => ({
  payload,
  type: actionTypes.SAVE_STARSHIPS
});
