import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./stores/reducer"

import './css/index.css';
import "./fonts/fonts.css"

import Store from "./stores/Store"

var root = $("div#root")[0]

var store = createStore(reducer)

ReactDOM.render(
    <Provider store = {store}>
        <Store />
    </Provider>,
    root
)

