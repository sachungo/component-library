import "@storybook/addon-console";
import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";

addDecorator(checkA11y);

/**
 * Dynamically load the stories using 'require.context` of webpack
 * Read more:
 *   https://webpack.js.org/guides/dependency-management/#require-context
 *   https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 */
const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
