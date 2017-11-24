#! /usr/bin/env node
'use strict'

// required dependencies
var path = require('path')
var cmd = require('node-cmd')
var flags = require('flags')

// main 'run' function
function run () {
    // get the path of PHP source folder
  var phpDir = path.resolve(__dirname, 'php-7.1.11-Win32-VC14-x64')

    // define possible flags (port, dir)
  flags.defineString('port')
  flags.defineString('dir')

    // get (parse) flags
  flags.parse()
    // default port is :8000
  var port = flags.get('port') || '8000'
  var dir = flags.get('dir')

    // run command to start PHP built-in server with specific port
  cmd.get(
        runCommand(phpDir, port, dir),
        function (err, data, stderr) {
          if (!err) {
            console.log(arguments)
          } else {
            console.log('error', err)
          }
        }
    )

    // log information about successful start
  console.log('PHP 7.1.11 Development Server started.')
  console.log('Listening on http://localhost:' + port)
  console.log('Press Ctrl-C to quit.')
}

// compound terminal command for starting web server
function runCommand (phpDir, port, dir) {
    // prepare flag for document root directory
  var dirCommand = dir ? ' -t ' + dir : ''

    // compound all together
  return phpDir + '/php.exe -S localhost:' + port + dirCommand
}

// export run method as node module
module.exports = {
  runCommand: runCommand,
  run: run
}
