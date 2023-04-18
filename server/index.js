const express = require('express');
const bodyParser = require('body-parser');
//

const userRoutes = require('./routes/user');
//
const stripeRoutes = require('./routes/stripe');

dotenv.config();

const app = express();

// Parse the body text
app.use(bodyParser.json());
//cores
// Routes
app.use('/api/users', userRoutes);
//
app.use('/api/checkout', stripeRoutes);

//

//

