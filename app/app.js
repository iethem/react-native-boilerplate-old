/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import { Provider } from 'react-redux';

// Import root app
import App from './containers/App';

import configureStore from './configureStore';

// Import Language Provider
// import LanguageProvider from './containers/LanguageProvider';

// Import i18n messages
// import { translationMessages } from './i18n';

// Create redux store
const initialState = {};
const store = configureStore(initialState);

const render = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default render;
