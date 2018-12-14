import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Router>
        <Routes />
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
