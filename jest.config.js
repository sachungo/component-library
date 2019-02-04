/* eslint-disable */
module.exports = {
  collectCoverageFrom: [
    "**/*.{js|jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  setupFilesAfterEnv: ["<rootDir>/node_modules/jest-enzyme/lib/index.js"]
};
