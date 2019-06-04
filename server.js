require('dotenv').config();
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors     = require('cors');
const session        = require('express-session');
require('./db/db')

const authController = require('./controllers/authController')


// before our controllers
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false 
}))

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



const corsOptions = {
  origin: process.env.URL, 
  credentials: true, 
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));


// controllers
app.use('/api/v1/auth', authController);



app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
