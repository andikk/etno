import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
// import {reducer} from './reducer';
// import createAPI from './api';
// import {Operation} from './reducer.js';
import thunk from 'redux-thunk';

// const api = createAPI();
//
// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument(api)),
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
//   )
// );
//
// store.dispatch(Operation.loadOffers());
// store.dispatch(Operation.checkAuth());

// ReactDOM.render(
// <Provider store={store}>
//   <App/>
//   </Provider>,
// document.getElementById(`root`)
// );

ReactDOM.render(
  <App/>,
  document.getElementById(`root`)
);
