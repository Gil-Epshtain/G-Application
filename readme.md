# G-Application

G-Application is a example project for Hybrid mobile application. App build with **WebPack**, developed with **AngularJS**, and compiled in Native code with **Cordova**.

###### You can use this example application to learn any of these frameworks or as a base project for your own application - just change the texts in the local json and you have your own working application.

### Version
0.0.1

### Tech

G-Application uses a number of open source projects to work properly:

* [AngularJS] - is a structural framework for dynamic web apps.
* [WebPack] - is a module bundler. WebPack takes modules with dependencies and generates static assets representing those modules. WebPack provide development server and compile your code for production (minify, uglify etc).
* [Cordova] - Apache Cordova is an open-source mobile development framework. It allows you to develope in standard web technologies such as HTML5, CSS3, and JavaScript for deploying mobile app for any platform.

### Installation

##### 1. Ajust the envirement for your OS - Windows/ Linux (OSX users folow the Linux instructions).
This application support both Window and Linux OS, however due to changes in the file-system and in the terminal command, we need to make a few changes in the 'package.json' and in the 'webpack.config.js' files. 
Alter these filese according the instructions in the 'OS Changes (Window vs Linux).txt' file.

##### 2. Install node_modules
Run npm install to setup the node_modules:
```sh
$ npm i
```

##### 3. Run dev-server
Run npm start script to load webpack-dev-server:
```sh
$ npm start
```

##### 4. See dev-server output
Open your web-browser at:
```
http://localhost:8080
```

### Deploy to Production
Ones development is done, deploy the app to production, run:
```sh
npm run production
```

### Deploy to Mobile (Android/iOS)
ToDo: Write instructions...

### Valid Scripts
##### 1. Run webpack dev-server - for development and debugging
use **one** of these commands:
```sh
npm start
```
```sh
npm run srv
```
```sh
npm run server
```

##### 2. Run webpack - release development version (without minified/uglify)
use **one** of these commands:
```sh
npm run dev
```
```sh
npm run development
```

##### 3. Run webpack production - release production version (with minified/uglify and preparation for mobile version)
use **one** of these commands:
```sh
npm run prd
```
```sh
npm run production
```

##### 4. Clean - delete to dist folder ('www' directory) - may be necessary before deploying to production
use **one** of these commands:
```sh
npm run cln
```
```sh
npm run clean
```

### Development

Want to contribute? Great!

License
----

MIT (c) Gil Epshtain


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [AngularJS]: <http://angularjs.org>
   [WebPack]: <https://webpack.github.io/>
   [Cordova]: <https://cordova.apache.org/>