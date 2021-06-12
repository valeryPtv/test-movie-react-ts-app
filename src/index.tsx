// Core
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Styles
import './view/styles/index.sass';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
