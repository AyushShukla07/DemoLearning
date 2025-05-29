var express = require('express');
var path = require('path'); // ✅ Require the 'path' module
var app = express();
var port = 3000;
var host = '127.0.0.1';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ✅ Use lowercase 'path'

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to EJS page' });
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/`);
});
