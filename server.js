var express = require('express');
var app = express();
var path = require('path');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Anand_Kumar:thalathalapathy@vidyamandir-vzvtf.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });




app.get('/',function(req,res){
    res.send("Node file test sucess!!");
})

app.listen(3000,function(){
    console.log("Server stared at " + Date() );
})

app.get("/studentRecord",function(req,res){
  client.connect(err => {
    const collection = client.db("VidyaMandir").collection("studentRecords");
    collection.find({}).toArray(function(err,result){
      if (err) throw err;
      res.send(result);
      console.log(result);
       client.close();
    }  )
   
  });
})