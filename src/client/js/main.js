import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '_store/client/store.js';
import {createState} from '_utilities/createState';
import App from '_components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '_styles/main.scss';

createState().then(state => {
  const store = configureStore(state);
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, 
    document.getElementById('app')
  );
});

