# BUILDER TEST
### karma test not yet working because of versioning

Install
=======

Installing this boilerplate is extremely simple!

git clone https://github.com/caninojories/NG2Webpack.git

cd NG2Webpack

yarn or yarn instal (First install yarn - npm install -g yarn)

Pre-requirements
=======

Add a mongodb as a DB

Change the db connection here `back/services/mongo`;

Add an api connection here `config/env.js` for the HOSTNAME

Building
=======

To build your application in dev mode, you can simply run `ts-node back/config/env.ts && sudo PORT=--port=8113 LOGS=--logs=true npm run start:dev`. This will copy the files to the dist directory.

You can run your application in build mode `npm run node:build:webpack`
