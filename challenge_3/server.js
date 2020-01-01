const express = require("express");
const app = express();

const port = 1000;

app.use(express.static('client/dist'))



app.listen(port, function(){
 console.log('Server is listening......')
})