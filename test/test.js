var test = require('tap').test

var run = require('../index').run
var getCommand = require('../index').getCommand
var execCommand = require('../index').execCommand

test('empty flags - default host and port', function (t) {
  var testCommand = getCommand('php-dir', 'localhost', '8000')

  t.is(typeof testCommand, 'string')
  t.is(testCommand, 'php-dir/php.exe -S localhost:8000')
  t.end()
})

test('host, port and dist flags defined', function (t) {
  var testCommand = getCommand('php-dir', '192.168.1.252', '9000', 'dist/')

  t.is(typeof testCommand, 'string')
  t.is(testCommand, 'php-dir/php.exe -S 192.168.1.252:9000 -t dist/')
  t.end()
})

test('execute command and "kill()" it', function (t) {
  var testCommand = getCommand('php-dir', '9000', 'dist/')

  execCommand(testCommand).kill()
  t.end()
})

test('run main method and terminate it with "kill()" ', function (t) {
  run().kill()
  t.end()
})
