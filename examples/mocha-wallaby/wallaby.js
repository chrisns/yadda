module.exports = function (w) {

  return {
    files: [
      'features/**/*.feature',
      'bin/example.js',
      'bottles-library.js'
    ],
    tests: [
      'test.js'
    ],
    env: {
      type: 'node',
      runner: process.env.STABLE_NODE
    }
  }
};
