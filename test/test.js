var test = require('tap').test

// var run = require('../index').run
var runCommand = require('../index').runCommand

test('empty flags - default port', function (t) {
  var testCommand = runCommand('php-dir', '8000')

  t.is(typeof testCommand, 'string')
  t.is(testCommand, 'php-dir/php.exe -S localhost:8000')
  t.end()
})

test('port and dist flags defined', function (t) {
  var testCommand = runCommand('php-dir', '9000', 'dist/')

  t.is(typeof testCommand, 'string')
  t.is(testCommand, 'php-dir/php.exe -S localhost:9000 -t dist/')
  t.end()
})

// test('just run "run()" method/function', function (t) {
//   run()
//   t.end()
// })
