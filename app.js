var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

//MONGOOSE CONNECTION
mongoose.connect("mongodb+srv://hgaskell:C1ty0142.@cluster0-nmbe7.mongodb.net/bambinophysio?retryWrites=true", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("ERROR:", err.message);
});

//SCHEMA SETUP
var commentSchema = new mongoose.Schema({
	author: String,
	text: String,
});
var blogSchema = new mongoose.Schema({
	author: String,
	text: String,
});

var Comment = mongoose.model("comments", commentSchema);
var Blog = mongoose.model("blog", blogSchema);

		// Blog.create(
		// {
		// 	post: "",
		// }, function(err, blog){
		// 	if(err){
		// 		console.log(err);
		// 	} else {
		// 		console.log(blog);
		// 	}
		// });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/index", function(req, res){
	Blog.find({}, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.render("index", {comments:comments});
		}
	});
});

app.post("/index", function(req, res){
	Blog.create(req.body.comment, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.redirect("/index");
		}
	});
});

app.get("/index/comment", function(req, res){
	res.render("indexNew");
});






app.get("/blogpost", function(req, res){
	Comment.find({}, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.render("blogpost", {comments:comments});
		}
	});
});

app.post("/blogpost", function(req, res){
	Comment.create(req.body.comment, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.redirect("/blogpost");
		}
	});
});

app.get("/blogpost/comment", function(req, res){
	res.render("new");
});



app.listen(3000, function(){
	console.log("SEVER HAS STARTED");
});