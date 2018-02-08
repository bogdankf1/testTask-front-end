import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test.js';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <Test></Test>
      </div>
    );
  }
}

export default HelloMessage
