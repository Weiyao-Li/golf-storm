import {StrictMode} from 'react';
import {render} from 'react-dom';
import './bootstrap.min.css';
import store from './store';
import {Provider} from "react-redux";

import App from './App';

const rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App/>
    </Provider>,

    rootElement
);
