/* global describe, it */
import expect from 'expect.js'
import SampleStateJSON from '../SampleState.json'
import fuzzySearch from '../utils/fuzzy'

describe('Fuzzy search functionality', () => {
  it('should filter out only the file name with XXX.jpg', () => {
    const fuzzyResult = fuzzySearch(SampleStateJSON.docs.uploads, 'XXX')
    expect(fuzzyResult[0].name).to.be('XXX.jpg')
  })
})
