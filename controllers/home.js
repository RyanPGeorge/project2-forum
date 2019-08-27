var Post = require('../models/post');

module.exports = {
  index
};

function index(req, res) {
  Post.find({}, function(err, posts) {
    res.render('index', { user: req.user, title: 'The Conversation', posts});
  });
}