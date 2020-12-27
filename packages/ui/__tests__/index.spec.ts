import ui from '../src'

describe('ui', () => {
  it('package label is ui', () => {
    expect(ui.package.label).toBe('ui')
  })
})

describe('packages', () => {
  it('utils is included', () => {
    expect(ui.packages.utils.package.label).toBe('utils')
  })
})
