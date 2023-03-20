const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));
app.use(require('./router/index'));
app.use(require('./router/todo'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});