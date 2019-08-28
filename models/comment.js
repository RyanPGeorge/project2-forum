var mongoose = require('mongoose');
var userSchema = require('./user').userSchema;


var commentSchema = new mongoose.Schema({
  user: userSchema,
  body: String
}, {
  timestamps: true
});


module.exports = {
  Comment: mongoose.model('Comment', commentSchema),
  commentSchema
}
