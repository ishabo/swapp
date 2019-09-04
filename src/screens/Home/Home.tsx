import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { STitle, SGames, SMain } from './Home.styles';

const Home: React.FC = () => {
  return (
    <Layout>
      <SMain>
        <STitle>Choose a game!</STitle>
        <SGames>
          <Link to={'/people'}>
            <img src="images/people.jpg" />
          </Link>
          <Link to={'/starships'}>
            <img src="images/starships.jpg" />
          </Link>
        </SGames>
      </SMain>
    </Layout>
  );
};

export default Home;
