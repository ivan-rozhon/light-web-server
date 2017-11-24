# Light web server
[![dependencies](https://david-dm.org/ivan-rozhon/light-web-server.svg)](https://david-dm.org/ivan-rozhon/light-web-server)
[![devDependencies](https://david-dm.org/ivan-rozhon/light-web-server/dev-status.svg)](https://david-dm.org/ivan-rozhon/light-web-server#info=devDependencies)
[![Build Status](https://travis-ci.org/ivan-rozhon/light-web-server.svg?branch=master)](https://travis-ci.org/ivan-rozhon/light-web-server)
[![Coverage Status](https://coveralls.io/repos/github/ivan-rozhon/light-web-server/badge.svg?branch=master)](https://coveralls.io/github/ivan-rozhon/light-web-server?branch=master)
[![npm version](https://badge.fury.io/js/light-web-server.svg)](https://badge.fury.io/js/light-web-server)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple web server using [PHP built-in web server](http://php.net/manual/en/features.commandline.webserver.php).

## Instalation
```
npm install light-web-server --save-dev
```

## Usage
```
lws --port=9000 --dir=test/
```

It will start web server available at `http://localhost:9000/` (default port is `8000`).

URI requests are served from the current working directory, unless the `--dir=` flag is used to specify an explicit document root.

## PHP version
7.1.11

## License
[MIT](LICENSE)