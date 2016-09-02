var chai = require('chai');
var expect = chai.expect;
var mocha = require('mocha');

var prime = require('../2')

describe ('Returns whether a number is prime (loops)', function() {
  it('0 should return false', function(){
    var solution = false;

    var result = prime(0);
    expect(result).to.equal(solution);
  })
  it('1 should return false', function(){
    var solution = false;

    var result = prime(1);
    expect(result).to.equal(solution);
  })
  it('-5 should return false', function(){
    var solution = false;

    var result = prime(-5);
    expect(result).to.equal(solution);
  })
  it('3 should return true', function(){
    var solution = true;

    var result = prime(3);
    expect(result).to.equal(solution);
  })
  it('5 should return true', function(){
    var solution = true;

    var result = prime(5);
    expect(result).to.equal(solution);
  })
  it('2 should return true', function(){
    var solution = true;

    var result = prime(2);
    expect(result).to.equal(solution);
  })
  it('509 should return true', function(){
    var solution = true;

    var result = prime(509);
    expect(result).to.equal(solution);
  })
})
