var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var usersRoute = require("./routes/usersRoute");
var questionRoute = require("./routes/questionRoute");

var PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/api/login", usersRoute);
app.use("/api/question", questionRoute);

app.listen(PORT, (err)=>{
    if(!err){
        console.log("Server Listening on port "+PORT);
    }
});