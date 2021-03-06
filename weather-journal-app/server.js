// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require('express');

// --Require body-parser
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
// connects server side code to client side code
app.use(express.static('website'));

const port = 8000;

// Setup Server

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`App listening at http://localhost: ${port}`);
};

// Setup Get Route that returns projectData

app.get('/getData', function (req, res) {
    res.send(projectData);
    console.log(projectData);
    console.log('Data sent to client')
});

// Setup Post Route that returns projectData
app.post('/addData', addEntry);

function addEntry (req, res) {
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse
    }
    projectData.push(newEntry);
    console.log(projectData);
    console.log('Data posted');
};

