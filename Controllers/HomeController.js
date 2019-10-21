(function(homeController){
    homeController.init = function(app){
         app.get('/api/Home',function(req,res){           
             res.send('weclome');            
         })

    
    }
})(module.exports)