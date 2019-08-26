var mongoose = require('mongoose');



var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  // posts: [postSchema],
  googleId: String
}, {
  timestamps: true
});

var postSchema = new mongoose.Schema({
  name: String, //user.name?
  Subject: String,
  Body: String,
  // comments: [commentSchema],
}, {
  timestamps: true
});

var commentSchema = new mongoose.Schema({
  name: String, // user.name?
  Subject: String,
  Body: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Post', postSchema);
module.exports = mongoose.model('Comment', commentSchema);