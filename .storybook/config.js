import { configure } from '@storybook/react';

/**
 * TODO: Dynamically load the stories using 'require.context` of webpack
 * Read more:
 *   https://webpack.js.org/guides/dependency-management/#require-context
 *   https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 * E.g.
 * const requires = require.context('../src', true, '/\.stories\.js$/');
 * const loadStories = () => {
 *   requires.key().foreach(filename => requires(filename));
 * }
 *
 * Note that the components will be in their own folders as:
 *
 * /Component folder
 *   /myfile.js
 *   __stories__
 *     /myfile.stories.js
 *   __tests__
 *     /myfile.test.js
 */
const loadStories = () => {
  require('../src/Example/button.stories.js');
};

configure(loadStories, module);