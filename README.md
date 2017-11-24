# Light web server
[![dependencies](https://david-dm.org/ivan-rozhon/light-web-server.svg?style=flat-square)](https://david-dm.org/ivan-rozhon/light-web-server)
[![devDependencies](https://david-dm.org/ivan-rozhon/light-web-server/dev-status.svg?style=flat-square)](https://david-dm.org/ivan-rozhon/light-web-server#info=devDependencies)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

Simple web server using PHP built-in web server.

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