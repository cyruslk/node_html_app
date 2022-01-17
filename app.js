const express = require('express');
const port = 3000;
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/', urlencodedParser, (req, res) => {
    console.log("From the server:", req.body.data);
    res.sendStatus(200);
});
    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})