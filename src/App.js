import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'Router';

import GlobalStyle from 'assets/global/global.styled';
import 'assets/font/fontello-0ddf5234/css/fontello-embedded.css';
import AiScript from 'assets/scripts/AiScript';

const App = () => {
  useEffect(() => {
    AiScript();
  }, []);

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
