# Light web server

[![npm version](https://img.shields.io/npm/v/light-web-server.svg)](https://www.npmjs.com/package/light-web-server)
[![npm module downloads](https://img.shields.io/npm/dt/light-web-server.svg)](https://www.npmjs.com/package/light-web-server)
[![dependencies](https://david-dm.org/ivan-rozhon/light-web-server.svg)](https://david-dm.org/ivan-rozhon/light-web-server)
[![devDependencies](https://david-dm.org/ivan-rozhon/light-web-server/dev-status.svg)](https://david-dm.org/ivan-rozhon/light-web-server?type=dev)
[![Build Status](https://travis-ci.org/ivan-rozhon/light-web-server.svg?branch=master)](https://travis-ci.org/ivan-rozhon/light-web-server)
[![Coverage Status](https://coveralls.io/repos/github/ivan-rozhon/light-web-server/badge.svg?branch=master)](https://coveralls.io/github/ivan-rozhon/light-web-server?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/npm/l/light-web-server.svg)](https://github.com/ivan-rozhon/light-web-server/blob/master/LICENSE)

Simple web server using [PHP built-in web server](http://php.net/manual/en/features.commandline.webserver.php). Windows only. If you are on macOS, locally installed PHP will be run (with given params).

## Prerequisites

[Node.js and npm](https://nodejs.org/en/download/) already installed on your machine.

## Instalation

Install package via `npm` in your project as a dependency:

```
npm install light-web-server --save-dev
```

## Usage

In your project directory:

```
lws --hostname=192.168.1.252 --port=9000 --dir=test/
```

It will start the web server available at `http://192.168.1.252:9000/` (default hostname is `localhost`, default port is `:8000`).

URI requests are served from the current working directory, unless the `--dir=` flag (parameter) is used to specify an explicit document root.

## CLI parameters

| Parameter  | Description                |
| ---------- | -------------------------- |
| `hostname` | port (default `localhost`) |
| `port`     | port (default `8000`)      |
| `dir`      | document root directory    |

## PHP version

7.1.11

## License

[MIT](LICENSE)
