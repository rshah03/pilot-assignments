var chai = require('chai');
var expect = chai.expect;
var mocha = require('mocha');

var max = require('../1')

describe ('Returns the larger of two numbers', function() {
  it('Should return 5 when given 3 and 5', function(){
    var solution = 5;

    var result = max(3,5);
    expect(result).to.equal(solution);
  })

})
