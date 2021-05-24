const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
