//Arquivo app.tsx modificado para executar o exemplo;

import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledDiv isBlue={count > 5}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} type="primary">
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </StyledDiv>
  );
}

interface ButtonStyledConfig {
  isBlue?: boolean;
}

const StyledDiv = styled.div<ButtonStyledConfig>`
  color: ${(props) => (props.isBlue ? 'blue' : 'red')};
`;

export default App;
