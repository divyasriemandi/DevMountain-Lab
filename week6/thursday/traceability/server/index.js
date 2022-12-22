require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {PORT, ROLLBAR_KEY} = process.env;
 const app = express();
 app.use(cors());


 var Rollbar = require('rollbar')
 var rollbar = new Rollbar({
   accessToken: ROLLBAR_KEY,
   captureUncaught: true,
   captureUnhandledRejections: true,
 })
 
 // record a generic message and send it to Rollbar
 rollbar.log('Hello world!')



 app.get('/',(req,res) => res.send("you have reached the exercise lab demo"));

 app.listen(PORT, () => console.log((`Server listening on port ${PORT}`)));



