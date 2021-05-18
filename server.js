const express = require('express');
let path = require('path');

let app = express();

let routes = require('./routes')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

let port = 3000;

app.use(express.static(path.join(__dirname, './static')))

app.use('/', routes());

app.listen(port, function () {
    console.log(`Express server listening on port ${port}!`);
})