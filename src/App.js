import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  handleClick = () => 'clicking button';

  render() {
    return (
      <div>
        Testing test setup
        <Button text="testing click" onClick={this.handleClick} />
      </div>
    );
  }
}
