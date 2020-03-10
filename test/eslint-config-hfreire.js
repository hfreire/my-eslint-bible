/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import subject from '../src/eslint-config-hfreire'

describe('ESlint configuration', () => {
  describe('when exporting', () => {
    it('should export configuration extending airbnb-base', () => {
      expect(subject.extends).toBeDefined()
      expect(subject.extends).toContain('airbnb-base')
    })

    it('should export configuration extending jest/recommended', () => {
      expect(subject.extends).toBeDefined()
      expect(subject.extends).toContain('plugin:jest/recommended')
    })
  })
})
