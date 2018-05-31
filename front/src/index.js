import React from "react";
import ReactDOM from "react-dom";
import Es6Promise from "es6-promise";
import 'element-theme-default';
import App from './App';
// public styles go here
Es6Promise.polyfill()
// this is required when you want react hmr
// if you don't need hmr,you can remove this

ReactDOM.render(<App />, document.getElementById('root'));
