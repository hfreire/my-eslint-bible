/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    'standard'
  ],
  env: {
    node: true
  },
  plugins: [
    'json',
    'mocha',
    'promise',
    'standard',
    'unicorn'
  ],
  rules: {
    'standard/computed-property-even-spacing': ['error', 'always'],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'space-before-function-paren': 'error',
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'error',
    'promise/no-callback-in-promise': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'unicorn/filename-case': [ 'error', { 'case': 'kebabCase' } ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-new-buffer': 'error'
  },
  globals: {
    describe: true,
    fit: true,
    it: true,
    before: true,
    beforeAll: true,
    beforeEach: true,
    after: true,
    afterAll: true,
    afterEach: true,
    td: true,
    _: true,
    expect: true,
    should: true,
    jest: false,
    pending: false,
    pit: false,
    require: false,
    test: false,
    xdescribe: false,
    xit: false,
    xtest: false
  }
}
