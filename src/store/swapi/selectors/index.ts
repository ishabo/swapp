import { ISwapiState, ISwapiPerson, ISwapiStarship } from '../reducers';
import shortid from 'shortid';

type TState = { swapi: ISwapiState };
export const getSwapiState = (state: TState): ISwapiState => state.swapi;

export const getSwapiStateMeta = (state: TState): ISwapiState['meta'] =>
  state.swapi.meta;

export const getSwapiStateData = (state: TState): ISwapiState['data'] =>
  state.swapi.data;

export const getIsFetching = (state: TState): boolean =>
  getSwapiStateMeta(state).isFetching;

export const getPeople = (state: TState): ISwapiPerson[] =>
  getSwapiStateData(state).people;

export const getStarships = (state: TState): ISwapiStarship[] =>
  getSwapiStateData(state).starships;

export interface ICompetitor {
  id: string;
  name: string;
  competition: { subject: 'mass' | 'crew'; value: number };
}

export const getPeopleCompetitors = (state: TState): ICompetitor[] =>
  getPeople(state).map(item => ({
    id: shortid.generate(),
    name: item.name,
    competition: { subject: 'mass', value: Number(item.mass) }
  }));

export const getStarshipCompetitors = (state: TState): ICompetitor[] =>
  getStarships(state).map(item => ({
    id: shortid.generate(),
    name: item.name,
    competition: { subject: 'crew', value: Number(item.crew) }
  }));
