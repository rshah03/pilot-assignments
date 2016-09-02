var chai = require('chai');
var expect = chai.expect;
var mocha = require('mocha');

var toStringArray = require('../4')

describe ('Returns array in string form', function() {
  it('Should return [1,2,3,4,5] as an array of strings', function(){
    var solution = ['1','2','3','4','5'];

    var result = toStringArray([1,2,3,4,5]);
    expect(result).to.deep.equal(solution);
  })

  it('Should return array of mixed types as array of strings', function(){
    var solution = ['yoloswag','3333','55.2','true'];

    var result = toStringArray(['yoloswag',3333,55.2,true]);
    expect(result).to.deep.equal(solution);
  })
})
