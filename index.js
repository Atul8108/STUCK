const express = require('express');
const app = express();

const port = 8000;


app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(port, function (err) {
    if (err) {
        console.log(`Facing issue to run the server at port = ${port}: ${err}`);   //interpolation
    }
    else {
        console.log(`Server running at http://localhost: ${port}`);
    }
})