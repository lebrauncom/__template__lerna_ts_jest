import utils from '../src'

describe('ui', () => {
  it('package label is utils', () => {
    expect(utils.package.label).toBe('utils')
  })
})
