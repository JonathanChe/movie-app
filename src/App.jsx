import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Search from './Search';

const GlobalStyles = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    background-color: #eee;
    font-size: 16px;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <h1>Movie App</h1>
      <Search />
    </Container>
  )
}

export default App;
