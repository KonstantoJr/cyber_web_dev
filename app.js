const express = require('express');

const app = express();

app.use(require('./router/index'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});