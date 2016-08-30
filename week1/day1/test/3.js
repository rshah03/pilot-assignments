var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var mocha = require('mocha');
var chessboard = require('../3');
var console = require('../lib/consolelog.js');

chai.use(sinonChai);

describe('Create a chessboard', function() {

  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should create a 8x8 chess board', function() {
    var solutionBoard = '# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #'

    chessboard();
    expect(console.log).to.be.calledWithExactly(solutionBoard);
  });

  it('should create a 4x4 chess board', function() {
    var solutionBoard = '# # \n # #\n# # \n # #'

    chessboard();
    expect(console.log).to.be.calledWithExactly(solutionBoard);
  });

  it('should create a 2x2 chess board', function() {
    var solutionBoard = '# \n #'

    chessboard();
    expect(console.log).to.be.calledWithExactly(solutionBoard);
  });

  it('should only call console.log once', function() {
    chessboard();
    expect(console.log).to.be.calledOnce;
  });
});
