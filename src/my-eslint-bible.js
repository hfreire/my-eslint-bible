module.exports = {
  extends: [
    'standard'
  ],
  env: {
    node: true
  },
  parser: 'babel-eslint',
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
