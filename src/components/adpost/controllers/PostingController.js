//grab the Employee model
var Posting = require('../models/Posting');

//define crud operation

module.exports = {
  getAllPost: function(params, callback){
    console.log('PostingCotroller: getAllPost()');
    Posting.find(params, function(err, posts){
      if(err){
        console.log("PostingCotroller: getAllPost(-): ERROR while getting posts");
        callback(err, null);
        return;
      }
      callback(null, posts);
      console.log("PostingCotroller: getAllPost(-): posts retrieved successfuly!!");
    });
  },
}
