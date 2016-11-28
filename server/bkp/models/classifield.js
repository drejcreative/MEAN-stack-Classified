var mongoose = require('mongoose');

var ClassifieldsSchema = new mongoose.Schema({
  id: String,
  description: String,
  image: String,
  posted: String,
  price: Number,
  title: String,
  views: Number,
  categories: Array,
  contact: { email: String, name: String, phone: String },
});

module.exports = mongoose.model('classifield1', ClassifieldsSchema);
