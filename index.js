#! /usr/bin/env node
'use strict'

// required dependencies
var path = require('path')
var flags = require('flags')
var shell = require('shelljs')

// main 'run' function
function run () {
  // check whether platform is macOS
  var isMacOS = process.platform === 'darwin'

  // define possible flags (hostname, port, dir)
  flags.defineString('hostname')
  flags.defineString('port')
  flags.defineString('dir')

  // get (parse) flags
  flags.parse()
  // default port is :8000
  var hostname = flags.get('hostname') || 'localhost'
  var port = flags.get('port') || '8000'
  var dir = flags.get('dir')

  var job

  if (isMacOS) {
    job = execCommand(getCommand('', hostname, port, dir, true))
  } else {
    // get the path of PHP source folder
    var phpDir = path.resolve(__dirname, 'php-7.1.11-Win32-VC14-x64')

    // create command
    var command = getCommand(phpDir, hostname, port, dir)

    // run command to start PHP built-in server with specific port
    job = execCommand(command)
  }

  if (job) {
    // log information about successful start
    console.log(isMacOS ? 'PHP Development Server started.' : 'PHP 7.1.11 Development Server started.')
    console.log('Listening on http://' + hostname + ':' + port)
    console.log('Press Ctrl-C to quit.')
  }

  // return whole job
  return job
}

// Execute command
function execCommand (command) {
  return shell.exec(command, { async: true })
}

// compound terminal command for starting web server
function getCommand (phpDir, hostname, port, dir, isMacOS) {
  // prepare flag for document root directory
  var dirCommand = dir ? ' -t ' + dir : ''

  // compound all together
  return isMacOS ? 'php -S ' + hostname + ':' + port + dirCommand : phpDir + '/php.exe -S ' + hostname + ':' + port + dirCommand
}

// export run method as node module
module.exports = {
  getCommand: getCommand,
  execCommand: execCommand,
  run: run
}
