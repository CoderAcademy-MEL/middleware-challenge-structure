// requires
const express = require('express');
const app = new express();

// create router
app.use(require('./routes'));

// listen to port
app.listen(3000, () => console.log('listening on port 3000'));