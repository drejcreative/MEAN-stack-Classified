# MEAN-stack-Classified
MEAN stack Classified with complete backend and frontend

* Angular JS for the Front End
* With Complete Gulp Workflow
* Express + Node + mongoDB for the backend
* Git for version control

## What we need to have before start
[NodeJS](https://nodejs.org/en/)<br />
[MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)<br />
`npm install -g express`<br />
`npm install -g express-generator`<br />
`npm install -g bower`<br />
`npm install -g nodemon`<br />

### On Frontend Client side 
open `cmd` and type `npm-install` and `bower-install`
and after that you can start our server with comand `gulp`

### On Backend Server side
we first need to open `~your path to~MongoDB\Server\3.2\bin` and start`mongod.exe`
Then start `cmd` in server dir and type `npm test`

After that you can open a link `http://localhost:3000/#/` and because our Gulp and Express is creeated in this way,  
you can visit a site that way and work on it. 

##So Why 2 Servers?
+ The Grunt Server handles keeping SASS live for you, compiling SASS into css, adding in Angular and Bower components, and building out your optimized production version.
+ When you need to update either the server specific code, or client specific code, it doesn't wind up in a "Oh shit, now I have to update everything and pull apart this mess I've made."
+ Current generators that package all of these things into 1 command line tool aren't officially supported by the teams that make Angular or Express. I personally find these hard to use in production since many of them often turn into abandonware.
+ The pieces are far more decoupled, and it forces you to keep your REST service available for future possiblities.
+ Because it is just so worth it. You'll see.
