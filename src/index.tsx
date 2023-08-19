import React from 'react';
import './index.css';
import store from './app/redux-store'
import ReactDOM from "react-dom";
import {AppContainer} from "./app/App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>,
    document.getElementById('root'))




