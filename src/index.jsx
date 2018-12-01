import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// This is a temporary hack. Will add a better way to handle this.
const AppDomNode = document.createElement('div');
AppDomNode.className = 'app';
const bodyDomNode = document.getElementsByTagName('body')[0];
bodyDomNode.appendChild(AppDomNode);

ReactDOM.render(<App/>, AppDomNode);
