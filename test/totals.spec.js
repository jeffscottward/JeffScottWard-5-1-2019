/* global describe, it */
import expect from 'expect.js'
import SampleStateJSON from '../SampleState.json'
import { totalSize, totalDocs } from '../utils/totals'

describe('Totals calculations', () => {
  it('should calculate the total amount files', () => {
    expect(totalDocs(SampleStateJSON.docs)).to.be(6)
  })

  it('should calculate the total size of the files', () => {
    expect(totalSize(SampleStateJSON.docs)).to.be(2900)
  })
})
