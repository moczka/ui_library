import React from 'react';
import ReactDOM from 'react-dom';
import App from '_components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '_styles/main.scss';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>, 
  document.getElementById('app')
);

