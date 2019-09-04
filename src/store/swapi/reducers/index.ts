import { Action } from 'redux';
import { actionTypes } from '../actions';

export interface ISwapiPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ISwapiStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ISwapiState {
  data: {
    people: ISwapiPerson[];
    starships: ISwapiStarship[];
  };
  meta: {
    isFetching: boolean;
  };
}

const initialState: ISwapiState = {
  data: {
    people: [],
    starships: []
  },
  meta: {
    isFetching: false
  }
};

interface ISwapiAction extends Action {
  payload: ISwapiPerson[] | ISwapiStarship[];
}
export const swapiReducer = (state = initialState, action: ISwapiAction) => {
  switch (action.type) {
    case actionTypes.SAVE_PEOPLE:
      return {
        ...state,
        data: { ...state.data, people: action.payload as ISwapiPerson[] },
        meta: { isFetching: false }
      };
    case actionTypes.SAVE_STARSHIPS:
      return {
        ...state,
        data: { ...state.data, starships: action.payload as ISwapiStarship[] },
        meta: { isFetching: false }
      };
    case actionTypes.FETCH_PEOPLE:
    case actionTypes.FETCH_STARSHIPS:
      return { ...state, data: state.data, meta: { isFetching: true } };
    default:
      return state;
  }
};
