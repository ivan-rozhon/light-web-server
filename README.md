# Light web server
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