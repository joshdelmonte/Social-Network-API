const express = require('express');
const db = require('./config/connection');
const path = require('path');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(cwd, 'client/build')));
    }

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });

