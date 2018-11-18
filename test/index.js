/*
 * Copyright (c) 2018, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

describe('Module', () => {
  let subject
  let config

  beforeAll(() => {
    config = require('../src/eslint-config-hfreire')
    jest.mock('../src/eslint-config-hfreire')
  })

  describe('when exporting', () => {
    beforeEach(() => {
      subject = require('../src')
    })

    it('should be equal to config', () => {
      expect(subject).toEqual(config)
    })
  })
})
