

var express         = require('express'),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");
    Campground      = require("./models/campground")
    seedDB          = require("./seeds")

seedDB();
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("landing")
})
// var campgrounds = [
//     {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
//     {name: "Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
//     {name: "Mountain Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name: "Mountain Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
//     {name: "Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
//     {name: "Mountain Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name: "Mountain Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
// ]
app.get("/campgrounds",function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err)
        }
        else{
            res.render("index", {campgrounds: allCampgrounds})
        }
    });
});

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    Campground.create(
        {
            name: name,
            image: image,
            description: desc

        }, function(error, campground){
            if (error){
                console.log("Something went wrong");
            }
            else{
                console.log("All good!");
                console.log(campground);
                res.redirect("/campgrounds");
            }
        });
    
    
})

app.get("/campgrounds/new", function(req,res){
    res.render("new")
})

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, found){
        if(err){
            console.log(err);
        }
        else{
            res.render("show", {campground: found})
        }
    })
})

app.listen(3002, function(){
    console.log("The Yelp camp server has started")
});