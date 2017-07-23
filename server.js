/**Include Packages**/
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/**Declare Routes
 * Inside the project folder we are going to create a folder named server
 * inside it routes folder and inside it a file called api.js**/
const api = require('./server/routes/api');

/**
 * Specifing a port for the server
 */
const port = 3000;


/** Creating instance of the express**/
const app = express();


/**Specifing the folder where all angular code is placed.
 joining the path of the current directory with dist folder**/
app.use(express.static(path.join(__dirname,'dist')));


/** Specifying some code for body-parser middleware
 * This parses the text as url encoded data**/
app.use(bodyParser.urlencoded({extended: true}));

/**Specifying body parser json. This parses the text as json. JSON like experience towards web**/
app.use(bodyParser.json());

/**Telling express when to use the routes specified in line 9**/
app.use('/api', api);


/**For any other routes,than '/api' the server has to render the index.html page in the dist folder**/
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/***
 * Last work is to listen to port 3000*/
app.listen(port, function () {
  console.log("Sever is running on localhost: " + port)
});






