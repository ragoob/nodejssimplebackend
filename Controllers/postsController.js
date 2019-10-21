(function(postsController){
    postsController.init = function(app){
        var cors = require('cors')      
          app.use(cors())

        app.get('/api/posts',cors(),function(req,res){
            var posts = require('../Data/Posts')
            res.set('Content_Type','application/json');
            res.send(posts);
        })

        app.get('/api/posts/:id',cors(),function(req,res){
            var id = req.params.id;
            var posts = require('../Data/Posts');
            var comments = require('../Data/comments')
            var post = posts.find(p=> p.id == id);
            post.comments =  comments.filter(c=> c.postId == id);
            res.send(post);

        })

        app.get('/api/posts/userPosts/:id',cors(),function(req,res){
            var id = req.params.id;
            var posts = require('../Data/Posts.json');
            var userPosts = posts.filter(p=> p.userId == id);
            res.send(userPosts);
        })

        app.get('/api/comments/:id',cors(),function(req,res){
            var id = req.params.id;
            var comments = require('../Data/comments')
            var postcomments = comments.filter(c=> c.postId == id);
            res.set('Content_Type','application/json');
            res.send(postcomments);
        })
    }   
})(module.exports)