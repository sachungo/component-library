import React from 'react';
import App from './App';

describe('App test', () => {
  it('renders without exceptions', () => {
    expect(() => shallow(<App />)).not.toThrow();
  });

  it('renders the text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toIncludeText('Testing test setup');
  });
});
