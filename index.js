const express = require('express'); // Requires express
const bodyParser = require('body-parser'); // Requires bodyParser
const path = require('path'); // Requires path
const app = express(); // Creates the app
const port = 7000; // Define port
if (isNaN(port)) process.exit(1); // Checks if port is invalid. If the port is invalid, it will terminate execution.

app.use(express.urlencoded({ extended: false })); // Configures the app for requests
app.use(express.json()); // Also configures the app for requests
app.use(bodyParser.text()); // Optional

app.get('/', (req, res) => { // Will run when app receives GET requests
    res.sendFile(path.join(__dirname + '/index.html')); // Will send the index.html file
});

app.listen(port, () => { // Tells the app to start listening on the specified port (defined on line 5).
    console.log(`App listening! Address: http://localhost:${port}/`); // Logs into the console with the link.
});