import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

import './styles/reset.scss'
import './styles/global.scss'
import { ThemeProvider } from './providers/auth';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
