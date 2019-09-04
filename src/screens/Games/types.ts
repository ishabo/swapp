import { RouteComponentProps } from 'react-router';
import { ICompetitor } from '../../store/swapi/selectors';

export interface IDispatchProps {
  fetchCompetitors: () => void;
}

export interface IStateProps {
  competitors: ICompetitor[];
  isFetching: boolean;
}
export interface IProps
  extends IDispatchProps,
    IStateProps,
    RouteComponentProps {}
