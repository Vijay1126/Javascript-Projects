var express = require('express');
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.get("/", function(req,res){
    res.render("landing")
})
var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Mountain Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
]
app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    res.redirect("/campgrounds")
})

app.get("/campgrounds/new", function(req,res){
    res.render("new")
})

app.listen(3001, function(){
    console.log("The Yelp camp server has started")
});