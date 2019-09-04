import React from 'react';
import ReactDOM from 'react-dom';
import Games from './Games';
import { createMemoryHistory, createLocation } from 'history';

const history = createMemoryHistory();
const path = `/route/:id`;

const match: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: '1' }
};

const location = createLocation(match.url);
const props = {
  fetchCompetitors: jest.fn(),
  competitors: [
    {
      id: 'id',
      name: 'some name',
      competition: { subject: 'mass' as 'mass', value: 1 }
    }
  ],
  location,
  history,
  match
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Games {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
