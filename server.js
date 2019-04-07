var express = require("express");
var morgan = require("morgan");
var compression = require("compression");
var helmet = require("helmet");

const APP_PORT = 8080;

var app = express();
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));

// Serve the static files from the build folder
app.use(express.static(__dirname + "/build"));

//app.use('/material-dashboard-react', express.static(__dirname + "/build"));
// Redirect all traffic to the index
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

// Listen to port 3000
app.listen(APP_PORT,'http://127.0.0.1');
