const path = require('path');
const cmd = require('node-cmd');
const flags = require('flags');

// get the path of PHP source folder
const phpDir = path.resolve(__dirname, 'php-7.1.11-Win32-VC14-x64');

// define posible flags (port, dir)
flags.defineString('port');
flags.defineString('dir');

// get (parse) flags
flags.parse();
// default port is :8000
const port = flags.get('port') ? flags.get('port') : '8000';
var dir = flags.get('dir'),
    dirCommand = dir ? ` -t ${dir}` : '';

// run command to start PHP built-in server with specific port
cmd.get(
    `${phpDir}/php.exe -S localhost:${port}${dirCommand}`,
    function (err, data, stderr) {
        console.log(arguments);
    }
);

// log information about successful start
console.log(`
    PHP 7.1.11 Development Server started.
    Listening on http://localhost:${port}
    Press Ctrl-C to quit.
`);