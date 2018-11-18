/*
 * Copyright (c) 2018, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

describe('ESlint configuration', () => {
  let subject

  describe('when exporting', () => {
    beforeEach(() => {
      subject = require('../src/eslint-config-hfreire')
    })

    it('should export configuration extending standard', () => {
      expect(subject.extends).toBeDefined()
      expect(subject.extends).toContain('standard')
    })

    it('should export configuration using jest plugin', () => {
      expect(subject.plugins).toBeDefined()
      expect(subject.plugins).toContain('jest')
    })
  })
})
