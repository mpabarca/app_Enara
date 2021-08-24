import React from 'react';
import ReactDOM from 'react-dom';
import App from './game/App';
import './game/styles/App.scss';
import { Provider } from 'react-redux';
import { store } from './game/state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

