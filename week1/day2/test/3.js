var chai = require('chai');
var expect = chai.expect;
var mocha = require('mocha');

var prime = require('../3')

describe ('Returns whether a number is prime (recursion)', function() {
  it('0 should return false', function(){
    var solution = false;

    var result = prime(0,2);
    expect(result).to.equal(solution);
  })
  it('1 should return false', function(){
    var solution = false;

    var result = prime(1,2);
    expect(result).to.equal(solution);
  })
  it('-5 should return false', function(){
    var solution = false;

    var result = prime(-5,2);
    expect(result).to.equal(solution);
  })
  it('3 should return true', function(){
    var solution = true;

    var result = prime(3,2);
    expect(result).to.equal(solution);
  })
  it('5 should return true', function(){
    var solution = true;

    var result = prime(5,2);
    expect(result).to.equal(solution);
  })
  it('2 should return false', function(){
    var solution = false;

    var result = prime(2,2);
    expect(result).to.equal(solution);
  })
  it('509 should return true', function(){
    var solution = true;

    var result = prime(509,2);
    expect(result).to.equal(solution);
  })
})
