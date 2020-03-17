import React from 'react';
import { Board } from './components/Board/BoardComponent';
import styled from 'styled-components';
import { Rules } from './components/UI/Rules';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

function App() {
  return (
    <AppContainer>
      <Rules />
      <BoardWrapper>
        <h1>Connect Four</h1>
        <Board />
      </BoardWrapper>
    </AppContainer>
  )
}

export default App;
