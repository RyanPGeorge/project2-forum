var mongoose = require('mongoose');



var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  googleId: String
}, {
  timestamps: true
});


module.exports = {
  User: mongoose.model('User', userSchema),
  userSchema
}

