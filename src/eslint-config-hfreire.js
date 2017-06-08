/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    'standard'
  ],
  env: {
    node: true
  },
  plugins: [
    'mocha'
  ],
  globals: {
    describe: true,
    it: true,
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    td: true,
    should: true
  }
}
