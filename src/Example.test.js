import Example from './App';

describe('Example test', () => {
  it('renders without exceptions', () => {
    expect(() => shallow(<Example />)).not.toThrow();
  });
})
