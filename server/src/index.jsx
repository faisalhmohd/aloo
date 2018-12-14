import React from "react";
import ReactDOM from "react-dom";
import App from './App';

const AppDomNode = document.getElementById('app');

ReactDOM.hydrate(<App/>, AppDomNode);
