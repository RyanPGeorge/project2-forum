var mongoose = require('mongoose');
var userSchema = require('./user').userSchema;


var postSchema = new mongoose.Schema({
  user: userSchema, 
  subject: String,
  body: String,
  //comments: [{type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', postSchema);