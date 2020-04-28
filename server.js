require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Mongo Server Running'))


// set up server to accept json data
app.use(express.json())

// routes

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)








app.listen(port, () => console.log(`everything is still running at http://localhost:${port}`))