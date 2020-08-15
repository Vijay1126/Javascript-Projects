var mongoose = require("mongoose");
var Campground = require("./models/campground");
// const campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    { 
      name: "Cloud's Rest",
      image: "https://images.unsplash.com/photo-1597390520443-2c135143c665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1041&q=80",
      description: "Love the hue, dontya?" 
    },
    { 
        name: "Golden, Canada",
        image: "https://images.unsplash.com/photo-1481973964012-59a7f3225eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        description: "Yooooooooo!?" 
    },
    { 
        name: "Moena, Italy",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        description: "That Sky tho" 
    }
]

function seedDB(){
    //Remove all campgrounds!
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("All users have been deleted")
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log("There was a problem")
                }
                else{
                    console.log("The seeds have been added")
                    Comment.create(
                        {
                            text: "This place is mad, I love it!",
                            author: "Aria"
                        }, function(err, comment){
                            if(err){
                                console.log("There was an error while creating comment")
                            }
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Comment added to the campground!")
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;