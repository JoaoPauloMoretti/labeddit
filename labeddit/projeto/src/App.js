import React from 'react'
import Router from './Route/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

/* Outros estilos globais */
`;

const App = () => {


  return (
    <div>
       <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
