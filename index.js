const express = require('express');
const app = express();

const port = 8000;
//use express router 

const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routes'));

//setting up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

//rendering the index page
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