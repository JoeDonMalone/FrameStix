const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Visitors collection and inserts the visitors below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/framestix"
);

const visitorSeed = [
  {
    name: "Joe Malone",
    email: "joe.d.malone@gmail.com",
    phone: "830-220-0942",
    date: new Date(Date.now())
  },
];

db.Visitor
  .remove({})
  .then(() => db.Visitor.collection.insertMany(VisitorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
