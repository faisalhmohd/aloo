import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Test() {
  return (
    <div>Hi!</div>
  );
}

function App () {
  return (
    <React.Fragment>
      <Header/>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Body} />
          <Route path="/test" component={Test} />
        </React.Fragment>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
