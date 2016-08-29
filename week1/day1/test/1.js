var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var mocha = require('mocha');
var triangle = require('../1');
var console = {log: args => args}

chai.use(sinonChai);

describe('Create a triangle 7 rows deep', function() {

  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should be a 7-row deep triangle', function() {
    var solutionTriangle = '#\n##\n###\n####\n#####\n######\n#######'

    triangle();
    expect(console.log).to.be.calledWithExactly(solutionTriangle);
  });

  it('should only call console.log once', function() {
    triangle();
    expect(console.log).to.be.calledOnce;
  });
});
