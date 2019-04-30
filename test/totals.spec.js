const should = require('chai').should();
const SampleStateJSON = require('../SampleState.json')
const {totalSize, totalDocs} = require('../utils/totals')

it('should calculate the total amount files', function () {
  totalDocs(SampleStateJSON).should.be(6)
});

it('should calculate the total size of the files', function () {
  totalSize(SampleStateJSON).should.be(2900)
});