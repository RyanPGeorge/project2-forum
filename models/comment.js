var mongoose = require('mongoose');



var commentSchema = new mongoose.Schema({
  name: String, // user.name?
  Subject: String,
  Body: String,
}, {
  timestamps: true
});


module.exports = mongoose.model('Comment', commentSchema);