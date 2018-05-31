import React from "react";
import ReactDOM from "react-dom";
import Es6Promise from "es6-promise";
import ROOT from "./router";
import "./static/normalize.scss";
import 'element-theme-default';
import store from "./store";
// public styles go here
Es6Promise.polyfill()
// this is required when you want react hmr
// if you don't need hmr,you can remove this


const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('app')
  );
};
fetch('../postMsg/example', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}).then((res)=>{
  if(res.ok){
    res.text().then((data)=>{
      window.example = JSON.parse(data)
      console.log(window.example)
      store.init();
      render(ROOT);
    })
  }else{
    window.example = {}
    store.init();
    render(ROOT);
  }
})
