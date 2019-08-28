var Post = require('../models/post');

module.exports = {
  index,
  show,
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
  res.render('posts/new', { title: 'New Post'})
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
    .then(post => {
      res.render('/posts');
    })
}

function update(req, res) {
  Post.findByIdAndUpdate(req.params.id)
    .then(post => {
      res.render('/posts/show');
    })
}

function show(req, res) {
  Post.findById(req.params.id)
    .then(post => {
      res.render('posts/show', { 
        title: 'The Converstaion | Post Details',
        user: req.user,
        post
      })
      console.log('post data: ', post);
    })
}