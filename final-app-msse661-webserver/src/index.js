const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const middleware = require('./middleware/errors.middleware');

const app = express();
const port = process.env.PORT || 3000;
const logLevel = process.env.LOG_LEVEL || 'dev';
const env = process.env.NODE_ENV;

// Middleware - logs server requests to console
if (env !== 'test'){
  app.use(logger(logLevel));
}

// Middleware - parses incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow websites to talk to our API service
app.use(cors());

// ************************************
// ROUTE-HANDLING MIDDLEWARE FUNCTIONS
// ************************************

// Handle routes for tasks.
app.use('/api/auth', authRoutes); // http://localhost:3000/api/auth
app.use('/api/user', userRoutes); // http://localhost:3000/api/user
app.use('/api/tasks', tasksRoutes); // http://localhost:3000/api/tasks

// Handle 404 requests
app.use(middleware.error404); // http://loaclhost:3000/users

// Handle 500 requests - applies mostly to live services
app.use(middleware.error500);

// listen on server port
app.listen(port, function() {
  console.log(`Running on port: ${port}...`);
});
