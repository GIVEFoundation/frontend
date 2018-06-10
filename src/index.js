import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store= configureStore();
const rootEl= document.getElementById('root');

const startApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  rootEl
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
