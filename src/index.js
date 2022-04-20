import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk';

import reducers from "./store/reducers";
import AppRouter from "./AppRouter";

//import Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import main sass file to apply global styles
import './static/sass/style.scss'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
  </React.StrictMode>
);
