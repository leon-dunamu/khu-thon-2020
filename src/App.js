import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'Router';
import GlobalStyle from 'assets/global/global.styled';

const App = () => {
  return (
    <>
      {/* router ... */}
      <BrowserRouter>
        <AppRouter />
        {/* global style ... */}
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
