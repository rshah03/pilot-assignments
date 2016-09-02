var console = require('./lib/consolelog.js');

module.exports = function triangle() {
  var x = '#'
  for (var i = 0; i < 7; i++) {
    console.log(x)
    x += '#'
  }
}
