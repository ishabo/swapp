import React from 'react';
import { SApp, SAppHeader, SMain, SStar, STwinkling } from './styles';

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <SApp>
      <SAppHeader />
      <SMain>{children}</SMain>
      <SStar />
      <STwinkling />
    </SApp>
  </>
);

export default Layout;
