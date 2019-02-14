import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '..';

// NOTE: each story is a single state of the component, e.g. `with text` story
storiesOf('Button', module)
  .add('with text', () => (
    <Button
      onClick={action('hello-button-clicked')}
      text="Hello button! Weekend..."
    />
  ))
  .add('with some emoji', () => (
    <Button
      onClick={action('emoji-button-clicked')}
      text="Hello hmm... 😀 😎 👍 💯"
    />
  ));
