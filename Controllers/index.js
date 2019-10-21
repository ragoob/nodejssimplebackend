(function(index){
    var home = require('./HomeController')
    var posts = require('./postsController')
    index.init = function(app){        
      home.init(app)
      posts.init(app);
    }
})(module.exports)