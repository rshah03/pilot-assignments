var console = require('./lib/consolelog.js');

module.exports = function triangle() {
  for (var i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
  }
}
