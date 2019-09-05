import React from 'react';
import { SApp, SAppHeader, SMain, SStar, STwinkling } from './styles';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <SApp>
      <SAppHeader>
        <Link to="/">
          <img src="images/starwars-logo.png" alt="Star wars" />
        </Link>
      </SAppHeader>
      <SMain>{children}</SMain>
      <SStar />
      <STwinkling />
    </SApp>
  </>
);

export default Layout;
