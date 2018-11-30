import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

// This is a temporary hack. Will add a better way to handle this.
let ReactAppDomNode = document.createElement('div');
ReactAppDomNode.className = 'app';
const bodyDomNode = document.getElementsByTagName('body')[0];
bodyDomNode.appendChild(ReactAppDomNode);

ReactDOM.render(<Index />, ReactAppDomNode);
