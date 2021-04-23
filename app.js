let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/My-History", function (req, res) {
  res.sendFile(__dirname + "/My-History.html");
});

app.get("/My-Training", function (req, res) {
  res.sendFile(__dirname + "/My-Training.html");
});

app.get("/About-Me", function (req, res) {
  res.sendFile(__dirname + "/About-Me.html");
});



app.get("/index.html", function (req, res) {
  res.redirect("/");
});

app.get("/My-History.html", function (req, res) {
  res.redirect("/My-History");
});

app.get("/My-Training.html", function (req, res) {
  res.redirect("/My-Training");
});

app.get("/About-Me.html", function (req, res) {
  res.redirect("/About-Me");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});















app.listen(3000, function (req, res) {
  console.log("Our server is on and listening");
});
