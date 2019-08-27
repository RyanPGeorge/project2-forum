var Post = require('../models/post');

module.exports = {
  index,
  create,
  delete: deleteOne,
  new: newPost
};

function index(req, res) {
  Post.find({}, function(err, posts) {
    res.render('posts/index', {user: req.user, title: 'All Posts', posts });
  });
}

function newPost(req, res) {
  res.render('posts/new', {user: req.user, title: 'New Post'})
}

function create(req, res) {
  var post = {
    user: req.user,
    subject: req.body.subject,
    body: req.body.body
  }
  Post.create(post, function(err, p) {
    res.redirect('/posts');
  })
}

function deleteOne(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(post => res.status(200).json(post))
}
