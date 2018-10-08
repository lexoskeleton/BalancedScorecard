const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
