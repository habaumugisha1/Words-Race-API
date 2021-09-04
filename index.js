import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express()

// initialising middleware for parsing application/json
app.use(bodyParser.json())

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`App is started on port: ${port}`))