import React from 'react';
import Example from './App';

describe('Example test', () => {
  it('renders without exceptions', () => {
    expect(() => shallow(<Example />)).not.toThrow();
  });

  it('renders the text', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper).toIncludeText('Testing test setup');
  });
});
