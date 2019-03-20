var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

//Body parser Middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//DataBase Collection
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Anand_Kumar:thalathalapathy@vidyamandir-vzvtf.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

//Home View
app.get("/", function(req, res) {
  res.send("Node file test sucess!!");
});

//Student Searching View
app.get("/studentRecord", function(req, res) {
  client.connect(err => {
    const collection = client.db("VidyaMandir").collection("studentRecords");
    collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.render("studentRecord", { docs: result });
    });
  });
});

//Server Start
app.listen(3000, function() {
  console.log("Server stared at " + Date());
});
