import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
      Hello Wassup
      <p>{this.props.header.hello}</p>
      {this.props.children}
      </div>
    );
  }
}

function mapStateToProps({ header }) {
  return {
    header
  }
}

export default connect(mapStateToProps, null)(App)
