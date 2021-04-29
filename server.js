const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.static("express"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
  });
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

