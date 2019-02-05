import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text = '', onClick, type = 'button' }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
