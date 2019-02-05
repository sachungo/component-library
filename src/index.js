import React from 'react';
import { render } from 'react-dom';
import App from './App';

const element = document.getElementById('app');
if (element) {
  render(<App />, document.getElementById('app'));
}
