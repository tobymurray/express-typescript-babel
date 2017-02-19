[![Build Status](https://travis-ci.org/tobymurray/express-typescript-babel.svg?branch=master)](https://travis-ci.org/tobymurray/express-typescript-babel)

# ExpressJS, TypeScript 2 and Babel
ExpressJS is one of the go-to technologies for Node JS servers. If you're looking for something to support an Angular client, it's a great choice. Unfortunately the associated generator project produces vanilla JavaScript, and coming from the TypeScript world of Angular, who wants vanilla ES5-ish JavaScript?

## Build

Start with `yarn run build`

```
$ yarn run build
yarn run v0.20.3
$ yarn run clean && yarn run tsc && yarn run babel && yarn run copy-files 
yarn run v0.20.3
$ rm -rf build && rm -rf dist 
Done in 0.31s.
yarn run v0.20.3
$ node ./node_modules/.bin/tsc 
Done in 1.74s.
yarn run v0.20.3
$ node ./node_modules/.bin/babel --presets es2015 build --out-dir dist --source-maps 
build/app.js -> dist/app.js
build/bin/www.js -> dist/bin/www.js
build/models/http_error.js -> dist/models/http_error.js
build/routes/index.js -> dist/routes/index.js
build/routes/users.js -> dist/routes/users.js
Done in 0.80s.
yarn run v0.20.3
$ cp package.json dist/ && cp -r public dist/ && cp -r node_modules dist/ 
Done in 0.28s.
Done in 4.11s.
```

## Run

Run with `cd dist && yarn run start`

```
$ cd dist && yarn run start
yarn run v0.20.3
$ node ./bin/www 
```