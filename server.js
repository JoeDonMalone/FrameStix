
require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//Connect Nodemailer email setup
const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPW,
  },
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } || "mongodb://localhost/framestix");

// Start the API server
app.listen(PORT, function() {
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("ready to Send")
    }
  })
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
