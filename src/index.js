import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import '@babel/polyfill'

import reducers from "./store/reducers";
import AppRouter from "./AppRouter";

//import Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import main sass file to apply global styles
import './static/sass/style.scss'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

const app = (
  <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('app'))
