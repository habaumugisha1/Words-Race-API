import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import "dotenv/config";

//importing routes
import router from "./src/route";

const port = process.env.PORT || 5500;

const app = express()
const url = process.env.URI

// initialising middleware for parsing application/json
app.use(bodyParser.json())

// routes middleware
app.use('/api/v1', router);
// connecting mangoose for storing our scores
Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongoose connected successful!")
})

app.listen(port, () => console.log(`App is started on port: ${port}...`))