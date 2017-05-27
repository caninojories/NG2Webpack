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

Change the db connection here `in env.ts or in defaults.ts`;  

Add an api connection here `config/env.js` for the HOSTNAME

Add an `env.ts` also in config
These data's include the connection in the rest api (for url, port and version)

Building
=======

To build your application in dev mode, you can simply run `PORT=--port=8113 LOGS=--logs=true npm run start:dev`.   
This will copy the files to the dist and build directory.

You can run your application in build mode `NODE_ENV=production npm run start:prod"`
