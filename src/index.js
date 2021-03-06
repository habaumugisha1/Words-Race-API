import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import cors from "cors"
import "dotenv/config";

//importing routes
import router from "./route";

const port = process.env.PORT || 5500;

const app = express()
const url = process.env.URI

// initialising middleware for parsing application/json
app.use(bodyParser.json())

app.use(cors())

// routes middleware
app.use('/api/v1', router);

// catch all 404 errors
app.all('*', (req, res, next) => {
    const err = res.status(404).json({status:404, error:'Url Requested not found'});
    next(err);
  });
  
// connecting mangoose for storing our scores
Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongoose connected successful!")
})

app.listen(port, () => console.log(`App is started on port: ${port}...`))