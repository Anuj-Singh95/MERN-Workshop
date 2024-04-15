const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(4000, (err)=>{
    if(err) console.log(err.message);
    else console.log("server is running on port 4000");
})