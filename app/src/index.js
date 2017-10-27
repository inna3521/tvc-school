import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './bootstrap/css/bootstrap.css'
import './style.css';
import Home from './components/Home';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
