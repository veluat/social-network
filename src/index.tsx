import React, {StrictMode} from 'react';
import './index.css';
import store from './app/redux-store'
import {AppContainer} from "./app/App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </StrictMode>
)




