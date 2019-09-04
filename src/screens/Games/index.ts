import Games from './Games';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectors, actions } from '../../store/swapi';
import { Dispatch } from 'redux';
import { IProps, IStateProps, IDispatchProps } from './types';
import { getIsFetching, ICompetitor } from '../../store/swapi/selectors';

const getCompetitorType = (ownProps: IProps) => {
  if (ownProps.location && ownProps.location.pathname) {
    return ownProps.location.pathname.replace('/', '');
  }
  return null;
};

const mapStateToProps = (state: any, ownProps: IProps): IStateProps => {
  const competitorType = getCompetitorType(ownProps);
  const newProps = { isFetching: getIsFetching(state) };
  let competitors: ICompetitor[] = [];
  switch (competitorType) {
    case 'people':
      competitors = selectors.getPeopleCompetitors(state);
      break;
    case 'starships':
      competitors = selectors.getStarshipCompetitors(state);
      break;
    default:
  }
  return {
    ...newProps,
    competitors
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IProps
): IDispatchProps => {
  const competitorType = getCompetitorType(ownProps);

  switch (competitorType) {
    case 'people':
      return { fetchCompetitors: () => dispatch(actions.fetchPeopleAction()) };
    case 'starships':
      return {
        fetchCompetitors: () => dispatch(actions.fetchStarshipsAction())
      };
    default:
      return { fetchCompetitors: () => {} };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Games));
