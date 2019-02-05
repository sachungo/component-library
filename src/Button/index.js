import React from 'react';

export default ({ text = '', onClick, type = 'button' }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
);
