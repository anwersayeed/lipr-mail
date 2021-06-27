const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const mails = require('./routes/api/mails');
const SendMail = require('./controller/sendMail');

const app = express();

// Connect Database
connectDB();

SendMail();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use routes
app.use('/api/mails', mails);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
