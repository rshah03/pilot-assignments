var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var mocha = require('mocha');
var fizzbuzz = require('../2');
var solution = require('./FizzBuzz');
var console = {log: args => args}

chai.use(sinonChai);

describe('Create FizzBuzz', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should match the solution', function() {
    fizzbuzz();
    solution.forEach((value, index) => (
      expect(console.log.getCall(index).args[0]).to.equal(value)
    ))
  });

  it('should call console.log 100 times', function() {
    fizzbuzz();
    expect(console.log).to.be.callCount(100);
  });
});
