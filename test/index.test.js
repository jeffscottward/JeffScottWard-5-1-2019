/* global describe, it */
// import { shallow } from 'enzyme'
// import React from 'react'
// import expect from 'expect.js'

// import App from '../pages/index.js'

import { totalSize, totalDocs } from '../utils/totals'

describe('With Enzyme', () => {
  // it('App shows "Hello world!"', () => {
    // const app = shallow(<App />)
    // expect(app.find('p').text()).to.equal('Hello World!')
  // })
  it('should calculate the total amount files', function () {
    totalDocs(SampleStateJSON).should.be(6)
  });
})