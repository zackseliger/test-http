const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/ping', function(req, res) {
    res.send('pong');
});
app.get('/random', function(req, res) {
    res.send(5);
});

app.listen(process.env.PORT || 80, function(err) {
    if (err) return console.log(err);

    console.log("listening on port "+(process.env.PORT || 80));
});