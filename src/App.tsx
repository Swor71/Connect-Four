import React from 'react';
import { Board } from './components/Board/BoardComponent';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  )
}

export default App;
