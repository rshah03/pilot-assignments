var console = require('./lib/consolelog.js');

module.exports = function fizzBuzz() {
  for (var x = 1; x <= 100; x++) {
    if (((x % 3) == 0) && ((x % 5) == 0))
      console.log('FizzBuzz')
    else if ((x % 5) == 0)
      console.log('Buzz')
    else if ((x % 3) == 0)
      console.log('Fizz')
    else
      console.log(x.toString())
  }
}
