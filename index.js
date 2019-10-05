const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose  = require('mongoose');

// Import Routes
const authRoute = require('./src/routes/auth');
const postsRoute = require('./src/routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> console.log('Connected to DB')
)

// Middleware
app.use(express.json());


// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () =>  console.log('Server up and running'));