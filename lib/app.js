const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/shirts', require('./controllers/shirts'));
app.use('/api/v1/shoes', require('./controllers/shoes'));
app.use('/api/v1/socks', require('./controllers/socks'));
app.use('/api/v1/hats', require('./controllers/hats'));
app.use('/api/v1/pants', require('./controllers/pants'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
