import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


export type SidebarType = {
    id: number
    name: string
    ava: string
}