/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import subject from '../src/index'
import config from '../src/eslint-config-hfreire'

jest.mock('../src/eslint-config-hfreire')

describe('Module', () => {
  describe('when exporting', () => {
    it('should be equal to config', () => {
      expect(subject).toEqual(config)
    })
  })
})
