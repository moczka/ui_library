import React from 'react';
import ReactDOM from 'react-dom';
import App from '_components/App';
import '_styles/main.scss';

ReactDOM.hydrate(
  <App />, 
document.getElementById('app')
);

