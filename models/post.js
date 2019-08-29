var mongoose = require('mongoose');
var userSchema = require('./user').userSchema;


var commentSchema = new mongoose.Schema({
  user: userSchema,
  body: String
}, {
  timestamps: true
});

var postSchema = new mongoose.Schema({
  user: userSchema, 
  subject: String,
  body: String,
  comments: [commentSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', postSchema);