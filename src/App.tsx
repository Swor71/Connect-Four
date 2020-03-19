import React from 'react';
import styled from 'styled-components';
import { Board } from './components/Board/BoardComponent';
import { BoardControl } from './components/Board/BoardControl';

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

const BoardWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <BoardWrapper>
        <Board />
        <BoardControl />
      </BoardWrapper>
    </AppContainer>
  )
}

export default App;
