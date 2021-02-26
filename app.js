require('dotenv').config();

const express = require('express');
const user = require('./Routes/UserProfile');
const app = express();

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
 
const mongoose = require('mongoose');
 
const MongoURI = `mongodb+srv://example:${process.env.MONGODB_PWD}@cluster0.azna4.mongodb.net/users?retryWrites=true&w=majority`;

mongoose.connect(MongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(res => console.log('Database Connected'))
  .catch(err => console.log(`Error while connecting to database: ${err}`))
 
const store = new MongoDBSession({
  uri: MongoURI,
  collection: 'users',
})

app.use('/User',user);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{console.log('Sever is running::');
})