import React from 'react';
import { Board } from './components/Board/BoardComponent';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ivory;
  display: flex;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`

function App() {
  return (
    <AppContainer>
      <h1>Connect Four</h1>
      <Board />
    </AppContainer>
  )
}

export default App;
