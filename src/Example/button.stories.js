import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

// NOTE: each story is a single state of the component, e.g. `with text` story
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('hello-button-clicked')}>
      Hello button! Weekend...
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('emoji-button-clicked')}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ));
