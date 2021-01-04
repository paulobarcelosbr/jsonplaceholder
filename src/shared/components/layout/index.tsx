import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from '../../../router';

import Header from '../Header';
import GlobalStyle from './global';

const LayoutPage: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default LayoutPage;
