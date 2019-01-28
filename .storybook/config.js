import '@storybook/addon-console';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(checkA11y);

/**
 * TODO: Dynamically load the stories using 'require.context` of webpack
 * Read more:
 *   https://webpack.js.org/guides/dependency-management/#require-context
 *   https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 */

// const required = require.context('../src', true, '/\.stories\.js$/');
// const loadStories = () => {
//   required.key().foreach(filename => required(filename));
// }

const loadStories = () => {
  require('../src/Example/button.stories.js');
};

configure(loadStories, module);
