import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers/index';
import App from './components/App';

const persistedState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : {};
const store = createStore(reducers, persistedState);
store.subscribe(()=>{
  localStorage.setItem('appState', JSON.stringify(store.getState()))
});

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
