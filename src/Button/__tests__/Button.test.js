import Button from '..';

describe('Dummy button test', () => {
  let props;
  beforeEach(() => {
    props = {
      text: 'testing',
      onClick: jest.fn()
    };
  });

  it('renders without throwing an error', () => {
    expect(() => shallow(<Button {...props} />)).not.toThrow();
  });

  it('renders the button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toHaveProp('onClick', props.onClick);
  });

  it('renders the button with the default type', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toHaveProp('type', 'button');
  });
});
