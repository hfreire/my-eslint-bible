/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import subject from '../src/eslint-config-hfreire'

describe('ESlint configuration', () => {
  describe('when exporting', () => {
    it('should export configuration extending airbnb', () => {
      expect(subject.extends).toBeDefined()
      expect(subject.extends).toContain('standard')
    })

    it('should export configuration extending jest recommended', () => {
      expect(subject.plugins).toBeDefined()
      expect(subject.plugins).toContain('plugin:jest/recommended')
    })
  })
})
