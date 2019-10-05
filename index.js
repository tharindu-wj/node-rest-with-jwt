const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const helmet = require('helmet')

const app = express();

// Import Routes
const authRoute = require('./src/routes/auth');
const postsRoute = require('./src/routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

// Middleware
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log('Server up and running'));