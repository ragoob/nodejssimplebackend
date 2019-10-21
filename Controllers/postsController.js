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
            var post = posts.find(p=> p.id == id);
            res.send(post);

        })

        app.get('/api/posts/userPosts/:id',cors(),function(req,res){
            var id = req.params.id;
            var posts = require('../Data/Posts.json');
            var userPosts = posts.filter(p=> p.userId == id);
            res.send(userPosts);
        })
    }   
})(module.exports)