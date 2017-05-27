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
`PORT=--port=8113` you can change port of the server.

You can run your application in build mode `NODE_ENV=production npm run start:prod"`  
This one will make a build folder for the server.

You can build the application by running `NODE_ENV=production npm run build:prod"`  
This one will make a build folder for the server. Therefore you can use this in the production.   
`nodemon build/app.server.js` or  
`pm2 start build/app.server.js --name ServerProd`  
