import React from 'react';
import { render } from 'react-dom';

const element = document.getElementById('app');
if (element) {
  render(
    <div>Testing React setup...really?</div>,
    document.getElementById('app')
  );
}
