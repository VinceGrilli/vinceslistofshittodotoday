var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var path = require("path");
var app = express();

//mongoose.connect("mongodb://localhost/todo", { useNewUrlParser: true });
mongoose.connect("mongodb://vgrilli1:fuckflorida1@ds135704.mlab.com:35704/todolist", { useNewUrlParser: true });

app.use("/public", express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//mongoose schema
var todoSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean
});

var Todo = mongoose.model("Todo", todoSchema);

app.get('/', function (req, res) {
    Todo.find({}, function(err, todoList){
        if(err){
            console.log(err);
        }else{
            res.render('index.ejs', {todoList: todoList});    
        }
    });
});

//submit route
app.post("/newtodo", function(req, res){
    var newItem = new Todo({
        name: req.body.item,
        isDone: false
    }); 

    if(newItem.name === ""){
        console.log("Nothing Entered!");
    } else{
        Todo.create(newItem, function(err, Todo){
            if(err){
                console.log(err);
            }else{
                console.log("Inserted Item: " +newItem);
            }            
        });
    }
    res.redirect("/");      
});

//delete route

app.delete("/:id", function(req, res){
    Todo.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/");
        }
    });
});

app.put(":/id", function(req, res){
    Todo.findByIdAndUpdate(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect("/");
        }
        res.redirect("/");
    });
});

//catch all route
app.get("*", function(req, res){
    res.redirect("/");
});

app.listen(3000, function () {
  console.log('Server Started on Port 3000');
});