# Light web server
Simple web server using PHP built-in web server.

## Instalation
```
npm install light-web-server --save-dev
```

## Usage
In your project `package.json` file define script like:

```
"scripts": {
    "serve": "light-web-server --port=8000 --dir=test/"
}
```

then, run command in terminal:

```
npm run serve
```

It will start web server on `http://localhost:8000/` with a specific document root directory (`/test`).

Default port is `8000` (it is optional flag).

## PHP version
7.1.11

## License
[MIT](LICENSE)